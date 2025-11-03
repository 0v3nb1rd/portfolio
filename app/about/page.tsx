import { GithubSVG, LetterSVG, LinkedInSVG, LinkSVG } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("mb-1 flex w-full flex-col space-y-2 md:mb-4", className)}>{children}</div>;
};

export default function About() {
  return (
    <main className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center">
      <section className="py-12">
        <div className="container">
          <ul className="mx-auto grid max-w-3xl grid-cols-2 grid-rows-2 gap-5">
            <li className="col-span-full lg:col-span-1 lg:row-span-2 lg:row-start-1">
              <a
                href="https://github.com/0v3nb1rd"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-foreground bg-card hover:bg-accent relative flex h-full flex-col rounded-md border shadow transition-all motion-reduce:transition-none"
              >
                <div className="flex h-full flex-col items-center justify-center gap-1 p-4">
                  <div className="decoration-muted-foreground flex flex-col items-center gap-2 underline-offset-0 transition-all group-hover:underline group-hover:underline-offset-4">
                    <GithubSVG className="mb-1" />
                    <span className="text-3xl font-bold">Github Profile</span>
                  </div>
                  <p className="text-muted-foreground text-center text-xl">Find more of my repositories</p>
                </div>
              </a>
            </li>

            <li className="col-span-full lg:col-span-1 lg:row-span-1 lg:row-start-2">
              <a
                href="https://www.linkedin.com/in/0v3nb1rd/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card text-foreground hover:bg-accent relative flex h-full flex-col overflow-hidden rounded-md border shadow transition-all motion-reduce:transition-none"
              >
                <div className="flex h-full items-center justify-center gap-2 p-4">
                  <div className="decoration-muted-foreground flex items-center gap-2 underline-offset-0 transition-all group-hover:underline group-hover:underline-offset-4">
                    <LinkedInSVG />
                    <span className="text-center text-xl font-bold">LinkedIn</span>
                  </div>
                </div>
              </a>
            </li>

            <li className="col-span-full lg:col-span-1 lg:row-span-1">
              <a
                href="mailto:0v3nb1rd@gmail.com"
                className="group bg-card text-foreground hover:bg-accent relative flex h-full flex-col overflow-hidden rounded-md border shadow transition-all motion-reduce:transition-none"
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
            </li>

            <li className="col-span-full h-full">
              <div className="bg-card flex h-full flex-col items-center justify-center gap-1 rounded-md border p-4 shadow">
                <h1 className="text-center text-3xl font-bold">Contact with me</h1>

                <p className="text-muted-foreground text-center text-xl">
                  You can also get in touch with me through this form below.
                </p>

                <form className="mt-8 mb-4 h-auto w-full max-w-lg">
                  <LabelInputContainer>
                    <Input
                      className="bg-background border-input border"
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Input
                      className="bg-background border-input border"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Textarea
                      className="bg-background border-input resize-none border"
                      rows={5}
                      name="message"
                      placeholder="Message"
                      required
                    />
                  </LabelInputContainer>
                  <Input type="hidden" name="website" className="honeypot" />
                  <Button
                    type="submit"
                    variant="outline"
                    size="lg"
                    className="bg-background! hover:bg-accent! border-input w-full cursor-pointer font-bold shadow"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
