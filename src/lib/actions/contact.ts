"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import * as z from "zod";

import ContactThankYouEmail from "@/components/forms/email-temp";
import { siteConfig } from "@/config/site";
import { getGeoLocation } from "@/lib/geolocation";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

// Resend only delivers from verified domains; the resend.dev fallback works in sandbox mode
const FROM_ADDRESS = process.env.RESEND_FROM || "No-Reply <onboarding@resend.dev>";

const RATE_LIMIT = { limit: 3, windowMs: 10 * 60 * 1000 };

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long").max(100, "Name is too long"),
  email: z.email("Please enter a valid email address").max(254, "Email is too long"),
  message: z.string().min(3, "Message must be at least 3 characters long").max(5000, "Message is too long"),
});

export type FormState = {
  success?: boolean;
  error?: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
  message?: string;
  values?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

const SUCCESS_STATE: FormState = {
  success: true,
  message: "Message sent successfully!",
};

async function getClientIp(): Promise<string> {
  const headersList = await headers();
  return (
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    headersList.get("cf-connecting-ip") ||
    "unknown"
  );
}

export const submitContactForm = async (_prevState: FormState, formData: FormData): Promise<FormState> => {
  try {
    // Honeypot: pretend success so bots don't learn which field tripped them up
    if (formData.get("website")) {
      return SUCCESS_STATE;
    }

    const ip = await getClientIp();
    if (!rateLimit(`contact:${ip}`, RATE_LIMIT)) {
      return {
        success: false,
        error: "Too many messages. Please try again later.",
        values: {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          message: formData.get("message") as string,
        },
      };
    }

    const result = formSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!result.success) {
      const fieldErrors: FormState["errors"] = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof typeof fieldErrors;
        if (field === "name" || field === "email" || field === "message") {
          fieldErrors[field] = issue.message;
        }
      });

      return {
        success: false,
        errors: fieldErrors,
        values: {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          message: formData.get("message") as string,
        },
      };
    }

    const { data } = result;
    const geoLocation = await getGeoLocation();

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [siteConfig.links.email],
      subject: "Portfolio Contact Form Submission",
      react: ContactThankYouEmail({
        name: data.name,
        email: data.email,
        message: data.message,
        geoLocation: geoLocation,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Failed to send message. Please try again.",
        values: {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      };
    }

    return SUCCESS_STATE;
  } catch (error) {
    console.error("Server action error:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
      values: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      },
    };
  }
};
