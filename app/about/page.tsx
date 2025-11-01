import { GithubSVG, LetterSVG, LinkedInSVG, LinkSVG } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mb-1 flex w-full flex-col space-y-2 md:mb-4", className)}>{children}</div>;
};

export default function About() {
  return (
    <main className="m-auto max-w-6xl overflow-hidden p-4 pb-12 2xl:overflow-visible">
      <section className="py-12">
        <div className="container">
          <div className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center">
            <div className="mx-auto grid max-w-2xl grid-cols-2 grid-rows-2 gap-5">
              <a
                href="https://github.com/0v3nb1rd"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:bg-muted text-foreground bg-muted/50 relative col-span-full flex h-auto flex-col rounded-md transition-all motion-reduce:transition-none lg:col-span-1 lg:row-span-2 lg:aspect-video"
              >
                <div className="flex h-full flex-col items-center justify-center gap-1 p-4">
                  <div className="decoration-muted-foreground flex flex-col items-center gap-2 underline-offset-0 transition-all group-hover:underline group-hover:underline-offset-4">
                    <GithubSVG className="mb-1" />
                    <span className="text-3xl font-bold">Github Profile</span>
                  </div>
                  <p className="text-muted-foreground text-center text-xl">Find more of my repositories</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/0v3nb1rd/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:bg-muted bg-muted/50 text-foreground relative col-span-full flex h-auto flex-col overflow-hidden rounded-md transition-all motion-reduce:transition-none lg:col-span-1 lg:row-span-1"
              >
                <div className="flex h-full items-center justify-center gap-2 p-4">
                  <div className="decoration-muted-foreground flex items-center gap-2 underline-offset-0 transition-all group-hover:underline group-hover:underline-offset-4">
                    <LinkedInSVG />
                    <span className="text-center text-xl font-bold">LinkedIn</span>
                  </div>
                </div>
              </a>

              <a
                href="mailto:0v3nb1rd@gmail.com"
                className="group hover:bg-muted bg-muted/50 text-foreground relative col-span-full flex h-auto flex-col overflow-hidden rounded-md transition-all motion-reduce:transition-none lg:col-span-1 lg:row-span-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex h-full items-center justify-center gap-2 p-4">
                  <div className="decoration-muted-foreground flex items-center gap-2 underline-offset-0 transition-all group-hover:underline group-hover:underline-offset-4">
                    <LetterSVG />
                    <span className="text-center text-xl font-bold text-balance">0v3nb1rd@gmail.com</span>
                  </div>
                </div>
              </a>

              <div className="bg-muted/50 col-span-full h-full rounded-md">
                <div className="flex h-full flex-col items-center justify-center gap-1 p-4">
                  <h1 className="text-center text-3xl font-bold">Contact with me</h1>

                  <p className="text-muted-foreground text-center text-xl">
                    You can also get in touch with me through this form below.
                  </p>

                  <form className="mt-8 mb-4 h-auto w-full max-w-xl">
                    <LabelInputContainer>
                      <Input name="name" placeholder="Name" type="text" required />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Input name="email" placeholder="Email" type="email" required />
                    </LabelInputContainer>
                    <LabelInputContainer>
                      <Textarea name="message" placeholder="Message" className="resize-none" rows={5} required />
                    </LabelInputContainer>
                    <Input type="hidden" name="website" className="honeypot" />
                    <Button type="submit" variant="outline" size="lg" className="w-full font-bold">
                      Send
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
