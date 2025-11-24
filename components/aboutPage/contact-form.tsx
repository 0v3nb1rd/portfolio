import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mb-1 flex w-full flex-col space-y-2 md:mb-4", className)}>{children}</div>;
};

export function ContactForm() {
  return (
    <form
      action="https://getform.io/f/c3ab79b8-6485-4f71-be1d-7e3cb28dcfb1"
      method="POST"
      className="mt-8 mb-8 h-auto w-full max-w-2xl"
      aria-label="Contact form"
    >
      <LabelInputContainer>
        <Input
          className="bg-background border-input border"
          name="name"
          type="text"
          placeholder="Name"
          required
          aria-label="Your name"
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Input
          className="bg-background border-input border"
          name="email"
          placeholder="Email"
          type="email"
          required
          aria-label="Your email"
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Textarea
          className="bg-background border-input resize-none border"
          rows={6}
          name="message"
          placeholder="Message"
          required
          aria-label="Your message"
        />
      </LabelInputContainer>
      <Input type="hidden" name="website" className="honeypot" tabIndex={-1} aria-hidden="true" autoComplete="off" />
      <Button
        type="submit"
        variant="outline"
        size="lg"
        className="bg-background! hover:bg-accent! border-input w-full cursor-pointer font-bold shadow disabled:opacity-50"
        aria-label="Send message"
      >
        Send
      </Button>
    </form>
  );
}
