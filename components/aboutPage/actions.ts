"use server";

import { Resend } from "resend";
import * as z from "zod";

import ContactThankYouEmail from "@/components/email-temp";
import { siteConfig } from "@/config/site";
import { getGeoLocation } from "@/lib/geolocation";

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function submitContactForm(_prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const formSchema = z.object({
      name: z.string().min(3, "Name must be at least 3 characters long"),
      email: z.email({ message: "Please enter a valid email address" }),
      message: z.string().min(3, "Message must be at least 3 characters long"),
    });

    const result = formSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    // Honeypot check
    const website = formData.get("website");
    if (website) {
      return {
        success: false,
        error: "Spam detected",
      };
    }

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
    // Get geo location
    const geoLocation = await getGeoLocation();

    const { error } = await resend.emails.send({
      from: "No-Reply <onboarding@resend.dev>",
      to: [siteConfig.links.email],
      subject: "Portfolio Contact Form Submission",
      // html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p><p>Location: ${geoLocation}</p>`,
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

    return {
      success: true,
      message: "Message sent successfully!",
    };
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
}
