"use client";

import { useActionState, ViewTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import { type FormState, submitContactForm } from "./actions";

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mb-1 flex w-full flex-col space-y-2 md:mb-4", className)}>{children}</div>;
};

export const ContactForm = () => {
  const [currentState, formAction, isPending] = useActionState<FormState, FormData>(submitContactForm, {});

  // Reset form only on success - use key to force remount when success
  const formKey = currentState.success ? "success" : "form";

  return (
    <form key={formKey} action={formAction} className="mt-8 mb-8 h-auto w-full max-w-2xl" aria-label="Contact form">
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

      {currentState.success && currentState.message && (
        <ViewTransition>
          <p className="mb-4 rounded-md border border-green-500 bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
            {currentState.message}
          </p>
        </ViewTransition>
      )}
      {currentState.error && (
        <ViewTransition>
          <p className="border-destructive bg-destructive/10 text-destructive dark:text-destructive mb-4 rounded-md border p-3 text-sm">
            {currentState.error}
          </p>
        </ViewTransition>
      )}

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
    </form>
  );
};
