enum Stack {
  HTML = "html",
  CSS = "css",
  LESS = "less",
  SCSS = "scss",
  BOOTSTRAP = "bootstrap",
  JQUERY = "jquery",
  TAILWIND = "tailwind",
  REACT = "react",
  TYPESCRIPT = "typescript",
  VUE = "vue",
  NEXTJS = "nextjs",
  NESTJS = "nestjs",
  NODEJS = "nodejs",
  DOCKER = "docker",
  GULP = "gulp",
  PHP = "php",
  LARAVEL = "laravel",
  FROM_SCRATCH = "from-scratch",
  SUPPORT = "support",
  UPDATE = "update",
  REFACTOR = "refactor",
  FIGMA = "figma",
}

export type NewsType = {
  id: string;
  title: string;
  url: string;
  source: "devto" | "hackernews";
  author?: string;
  publishedAt?: string;
  score?: number;
  tags?: string[];
  image?: string;
  description?: string;
};

export type ProjectType = {
  id: number;
  logo: string;
  title: string;
  description: string;
  image: string;
  figmaImage: string;
  stack: Stack[];
  url: string;
  github: string;
  date: string;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    logo: "https://res.cloudinary.com/dcey6ej58/image/upload/v1762271622/logo_hy6swy.png",
    title: "ZUSDMC Lviv",
    description: "Website for the Western Ukrainian Specialized Children's Medical Center",
    image: "https://res.cloudinary.com/dcey6ej58/image/upload/g_auto,q_auto,f_auto/thumbnail_qpibnh.png",
    figmaImage: "",
    stack: [Stack.HTML, Stack.LESS, Stack.BOOTSTRAP, Stack.JQUERY, Stack.PHP, Stack.FIGMA],
    url: "https://www.zusdmc.lviv.ua/",
    github: "",
    date: "2020-07-12",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/dcey6ej58/image/upload/v1762271620/logo_hkay9j.png",
    title: "Zmista",
    description: "Website for the Zmista travel agency",
    image: "https://res.cloudinary.com/dcey6ej58/image/upload/g_auto,q_auto,f_auto/thumbnail_e1yxjr.png",
    figmaImage: "https://res.cloudinary.com/dcey6ej58/image/upload/v1762271623/figma_hwu3gm.png",
    stack: [Stack.HTML, Stack.SCSS, Stack.BOOTSTRAP, Stack.JQUERY, Stack.GULP, Stack.FIGMA],
    url: "https://shatsk.com/add-property/",
    github: "https://github.com/0v3nb1rd/zmista.com/",
    date: "2021-04-12",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/dcey6ej58/image/upload/v1762271616/logo_yk91oi.svg",
    title: "ReinTech",
    description: "Website for the ReinTech company",
    image: "https://res.cloudinary.com/dcey6ej58/image/upload/g_auto,q_auto,f_auto/thumbnail_xmjswv.png",
    figmaImage: "https://res.cloudinary.com/dcey6ej58/image/upload/v1762271621/figma_mgmxlx.png",
    stack: [Stack.HTML, Stack.SCSS, Stack.BOOTSTRAP, Stack.JQUERY, Stack.GULP, Stack.FIGMA],
    url: "https://reintech.io/",
    github: "",
    date: "2021-10-08",
  },
];
