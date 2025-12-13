import type { JobExperienceType } from "@/types";

export const siteConfig = {
  name: "Nazar Khaylo",
  title: `Full Stack Developer`,
  description:
    "Full-stack developer passionate about building clear, fast and purposeful software. Specialized in React, Next.js, and Node.js.",
  keywords: [
    "Nazar Khaylo",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Portfolio",
  ],
  aboutText:
    "Hello! I’m a full-stack developer passionate about building clear, fast and purposeful software. I love clean design, structured code and learning from smart people. For me, development isn’t just a job — it’s how I express creativity and logic together. Currently I focus on building scalable frontend with React and robust APIs with Node.",
  url: "https://ovbi.dev",
  locale: "en_US",
  navItems: [
    {
      label: "Home",
      href: "/",
      target: "_self",
    },
    {
      label: "Projects",
      href: "/projects",
      target: "_self",
    },
    {
      label: "News",
      href: "/news",
      target: "_self",
    },
    {
      label: "About",
      href: "/about",
      target: "_self",
    },
    // {
    //   label: "Studio",
    //   href: "/studio",
    //   target: "_blank",
    // },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/0v3nb1rd/",
    github: "https://github.com/0v3nb1rd/",
    instagram: "https://www.instagram.com/0v3nb1rd/",
    telegram: "https://t.me/0v3nb1rd",
    email: "0v3nb1rd@gmail.com",
    sponsor: "https://www.buymeacoffee.com/0v3nb1rd",
  },

  experience: [
    {
      position: "Frontend Developer",
      description: "Building modern web apps from scratch. Developing CMS.",
      dateFrom: "2020",
      dateTo: "",
      company: "Asign",
    },
    {
      position: "Freelance Developer",
      description: "Building, supporting and adding new features to websites and web apps.",
      dateFrom: "2016",
      dateTo: "2021",
      company: "Company 2",
    },
    {
      position: "Link-builder",
      description: "Building links and posts in forums.",
      dateFrom: "2014",
      dateTo: "2015",
      company: "Company 3",
    },
  ] as JobExperienceType[],

  // Default theme: "system" | "light" | "dark"
  defaultTheme: (process.env.NEXT_PUBLIC_DEFAULT_THEME as "light" | "dark" | "system") || "system",
};
