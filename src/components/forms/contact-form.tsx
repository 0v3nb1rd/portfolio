"use client";

import { Fragment, useActionState, ViewTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type FormState, submitContactForm } from "@/lib/actions/contact";
import { cn } from "@/lib/utils";

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mb-1 flex w-full flex-col space-y-2 md:mb-4", className)}>{children}</div>;
};

export const ContactForm = () => {
  const [currentState, formAction, isPending] = useActionState<FormState, FormData>(submitContactForm, {});

  // Reset fields only on success: re-keying remounts the inputs. The key sits on the fields,
  // not the <form>, so the status messages below keep a persistent parent and can animate in.
  const fieldsKey = currentState.success ? "success" : "form";

  return (
    <form action={formAction} className="mt-8 mb-8 h-auto w-full max-w-2xl" aria-label="Contact form">
      <Fragment key={fieldsKey}>
        <LabelInputContainer>
          <Input
            className={cn("bg-background border-input border", currentState.errors?.name && "border-destructive")}
            name="name"
            type="text"
            placeholder="Name"
            required
            aria-label="Your name"
            autoComplete="name"
            disabled={isPending}
            defaultValue={currentState.values?.name || ""}
            aria-invalid={!!currentState.errors?.name}
            aria-describedby={currentState.errors?.name ? "name-error" : undefined}
          />
          {currentState.errors?.name && (
            <p id="name-error" className="text-destructive text-sm" role="alert">
              {currentState.errors.name}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer>
          <Input
            className={cn("bg-background border-input border", currentState.errors?.email && "border-destructive")}
            name="email"
            placeholder="Email"
            type="email"
            required
            aria-label="Your email"
            autoComplete="email"
            disabled={isPending}
            defaultValue={currentState.values?.email || ""}
            aria-invalid={!!currentState.errors?.email}
            aria-describedby={currentState.errors?.email ? "email-error" : undefined}
          />
          {currentState.errors?.email && (
            <p id="email-error" className="text-destructive text-sm" role="alert">
              {currentState.errors.email}
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer>
          <Textarea
            className={cn(
              "bg-background border-input resize-none border",
              currentState.errors?.message && "border-destructive"
            )}
            rows={6}
            name="message"
            placeholder="Message"
            required
            aria-label="Your message"
            autoComplete="message"
            disabled={isPending}
            defaultValue={currentState.values?.message || ""}
            aria-invalid={!!currentState.errors?.message}
            aria-describedby={currentState.errors?.message ? "message-error" : undefined}
          />
          {currentState.errors?.message && (
            <p id="message-error" className="text-destructive text-sm" role="alert">
              {currentState.errors.message}
            </p>
          )}
        </LabelInputContainer>
        <Input type="hidden" name="website" className="honeypot" tabIndex={-1} aria-hidden="true" autoComplete="off" />
      </Fragment>

      {/* Live regions stay mounted so screen readers announce text inserted into them */}
      <div role="status" aria-live="polite">
        {currentState.success && currentState.message && (
          <ViewTransition enter="status-enter" exit="status-exit" default="none">
            <p className="mb-4 rounded-md border border-green-500 bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
              {currentState.message}
            </p>
          </ViewTransition>
        )}
      </div>
      <div role="alert">
        {currentState.error && (
          <ViewTransition enter="status-enter" exit="status-exit" default="none">
            <p className="border-destructive bg-destructive/10 text-destructive dark:text-destructive mb-4 rounded-md border p-3 text-sm">
              {currentState.error}
            </p>
          </ViewTransition>
        )}
      </div>

      {/* Glides when a status message pushes it down, instead of jumping */}
      <ViewTransition update="auto" default="none">
        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="bg-background! hover:bg-accent! border-input w-full cursor-pointer font-bold shadow disabled:opacity-50"
          aria-label="Send message"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Send Message"}
        </Button>
      </ViewTransition>
    </form>
  );
};
