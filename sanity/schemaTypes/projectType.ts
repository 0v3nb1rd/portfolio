import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "figmaImage",
      title: "Figma Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Optional Figma design image",
    }),
    defineField({
      name: "stack",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "LESS", value: "less" },
              { title: "SCSS", value: "scss" },
              { title: "Bootstrap", value: "bootstrap" },
              { title: "jQuery", value: "jquery" },
              { title: "Tailwind CSS", value: "tailwind" },
              { title: "React", value: "react" },
              { title: "TypeScript", value: "typescript" },
              { title: "Vue", value: "vue" },
              { title: "Next.js", value: "nextjs" },
              { title: "NestJS", value: "nestjs" },
              { title: "Node.js", value: "nodejs" },
              { title: "Docker", value: "docker" },
              { title: "Gulp", value: "gulp" },
              { title: "PHP", value: "php" },
              { title: "Laravel", value: "laravel" },
              { title: "From Scratch", value: "from-scratch" },
              { title: "Support", value: "support" },
              { title: "Update", value: "update" },
              { title: "Refactor", value: "refactor" },
              { title: "Figma", value: "figma" },
            ],
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "url",
      title: "Project URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
      description: "Optional GitHub repository URL",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
      subtitle: "date",
    },
  },
});