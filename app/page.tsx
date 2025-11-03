import { Metadata } from "next";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function Home() {
  return (
    <main>
      <section className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center">
        <div className="container">
          <div className="py-12">
            <ul className="mx-auto grid max-w-6xl grid-cols-4 gap-5 lg:grid-cols-3">
              <li className="height-auto col-span-full lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2">
                <div className="bg-card text-foreground relative col-span-full flex h-full items-center justify-center overflow-hidden rounded-md border shadow">
                  <div className="flex flex-col items-center justify-center">
                    <Avatar className="mb-2 size-24 text-2xl" role="img" aria-label={`Photo of ${siteConfig.name}`}>
                      <AvatarImage
                        alt={`Photo of ${siteConfig.name}`}
                        src="https://res.cloudinary.com/dcey6ej58/image/upload/w_400,h_400,c_fill,g_auto,q_auto,f_auto/linkedin_1_gvhlsr.png"
                      />
                      <AvatarFallback>{siteConfig.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <h1 className="h1">{siteConfig.name}</h1>
                    <p className="text-muted-foreground text-center text-lg">Find more of my repositories</p>
                  </div>
                </div>
              </li>

              <li className="height-auto relative col-span-full flex flex-col lg:col-span-2 lg:row-span-1 lg:row-start-1">
                <div className="bg-card text-foreground relative col-span-full flex h-full items-center justify-center overflow-hidden rounded-md border p-4 shadow">
                  <div className="flex flex-col gap-2">
                    <h1 className="h1">Who am I?</h1>
                    <i className="text-muted-foreground text-lg">
                      Hello! I’m a full-stack developer passionate about building clear, fast and purposeful software. I
                      love clean design, structured code and learning from smart people. For me, development isn’t just
                      a job — it’s how I express creativity and logic together. Currently I focus on building scalable
                      frontends with React and robust APIs with Node.
                    </i>
                  </div>
                </div>
              </li>

              <li className="height-auto relative col-span-full row-start-2 row-end-3 flex flex-col lg:col-span-1 lg:col-start-1 lg:row-start-2">
                <div className="bg-accent text-foreground relative col-span-full flex h-full items-center justify-center overflow-hidden rounded-md border p-4 shadow">
                  <h1 className="h1">Frontend Developer</h1>
                </div>
              </li>

              <li className="height-auto relative col-span-2 hidden flex-col lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-3 lg:flex">
                <div className="bg-accent text-foreground relative col-span-full flex h-full items-center justify-center overflow-hidden rounded-md border p-4 shadow">
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="h1">“I really like creating software solutions”</h1>
                  </div>
                </div>
              </li>

              <li className="height-auto relative col-span-full flex flex-col lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-3">
                <div className="bg-card text-foreground relative col-span-full flex h-full items-center justify-center overflow-hidden rounded-md border p-4 shadow">
                  {/* <h1 className="h1">Stack of technologies</h1> */}
                  <div className="flex flex-col gap-2">
                    <h1 className="h1">Tools I use</h1>
                    <i className="text-muted-foreground text-lg">
                      I specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. My
                      toolkit extends to TailwindCSS for styling, and I'm experienced with building scalable frontends
                      and robust APIs. I focus on writing clean, maintainable code and creating intuitive user
                      experiences.
                    </i>
                  </div>
                </div>
              </li>

              <li className="relative hidden lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:block lg:h-[350px]">
                <div className="bg-card text-foreground relative h-full w-full overflow-hidden rounded-md border shadow">
                  <Image
                    fill
                    className="object-cover"
                    src="https://res.cloudinary.com/dcey6ej58/image/upload/v1762178905/5-bg_rmuywa.jpg"
                    alt="relaxing image"
                  />
                </div>
              </li>

              <li className="height-auto relative col-span-full flex flex-col lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-4">
                <div className="bg-card text-foreground relative col-span-full flex h-full items-center justify-center overflow-hidden rounded-md border p-4 shadow">
                  <div className="flex flex-1 flex-col gap-2">
                    <h1 className="h1">Experience</h1>
                    <ul className="flex flex-col gap-1">
                      <li className="flex flex-col">
                        <b className="text-lg">- Freelance Developer (2023–now)</b>
                        <i className="text-muted-foreground">
                          Building modern web apps for small businesses and creative teams.
                        </i>
                      </li>
                      <li className="flex flex-col">
                        <b className="text-lg">- Student (2022–2024)</b>
                        <i className="text-muted-foreground">
                          Faculty of Computer Science and Cybernetics, National University of Kyiv, Bachelor's degree in
                          Computer Science.
                        </i>
                      </li>
                      <li className="flex flex-col">
                        <b className="text-lg">- Full-stack Developer (2020–2022)</b>
                        <i className="text-muted-foreground">
                          Developed and maintained web applications, working on both frontend and backend technologies.
                        </i>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
