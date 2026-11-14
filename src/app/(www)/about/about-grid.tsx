import { ContactForm } from "@/components/forms/contact-form";
import { GithubSVG, LetterSVG, LinkedInSVG } from "@/components/icons";
import { PageTransition } from "@/components/page-transition";
import { siteConfig } from "@/config/site";

export const AboutPage = () => {
  return (
    <PageTransition>
      <ul className="grid grid-cols-2 grid-rows-2 gap-5">
        <li className="col-span-full lg:col-span-1 lg:row-span-2 lg:row-start-1">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-foreground bg-card hover:bg-accent focus-visible:ring-ring relative flex h-full flex-col rounded-md border shadow transition-all focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none"
          >
            <div className="flex h-full flex-col items-center justify-center gap-1 p-4">
              <div className="flex flex-col items-center gap-2">
                <GithubSVG className="mb-1" />
                <h2 className="h2 font-balance">Github Profile</h2>
              </div>
              <p className="text-muted-foreground hidden text-center text-lg tracking-tight sm:block">
                Find more of my repositories
              </p>
            </div>
          </a>
        </li>

        <li className="col-span-full lg:col-span-1 lg:row-span-1 lg:row-start-2">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card text-foreground hover:bg-accent focus-visible:ring-ring relative flex h-full flex-col overflow-hidden rounded-md border shadow transition-all focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none"
          >
            <div className="flex h-full items-center justify-center gap-2 p-4">
              <div className="flex items-center gap-3">
                <LinkedInSVG />
                <span className="text-center text-xl font-bold">LinkedIn</span>
              </div>
            </div>
          </a>
        </li>

        <li className="col-span-full lg:col-span-1 lg:row-span-1">
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="group bg-card text-foreground hover:bg-accent focus-visible:ring-ring relative flex h-full flex-col overflow-hidden rounded-md border shadow transition-all focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex h-full items-center justify-center gap-2 p-4">
              <div className="flex items-center gap-3">
                <LetterSVG />
                <span className="text-center text-xl font-bold text-balance">{siteConfig.links.email}</span>
              </div>
            </div>
          </a>
        </li>

        <li id="contact" className="col-span-full h-full scroll-mt-24">
          <div className="bg-card flex h-full flex-col items-center justify-center gap-1 rounded-md border p-4 shadow">
            <h1 className="h2 font-balance text-center">
              <span>Contact </span>
              <i className="text-muted-foreground">with me</i>
            </h1>

            <p className="text-muted-foreground text-center text-lg leading-tight tracking-tight">
              You can also get in touch with me through this form below.
            </p>

            <ContactForm />
          </div>
        </li>
      </ul>
    </PageTransition>
  );
};
