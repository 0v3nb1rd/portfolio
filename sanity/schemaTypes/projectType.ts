import { PackageIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

import { StackOptionsInput } from "@/sanity/components/stackOptionsInput";

const STACK_OPTIONS: { title: string; value: string }[] = [
  { title: "HTML", value: "html" },
  { title: "CSS", value: "css" },
  { title: "LESS", value: "less" },
  { title: "SCSS", value: "scss" },
  { title: "Bootstrap", value: "bootstrap" },
  { title: "jQuery", value: "jquery" },
  { title: "Tailwind", value: "tailwind" },
  { title: "React", value: "react" },
  { title: "JavaScript", value: "javascript" },
  { title: "TypeScript", value: "typescript" },
  { title: "Vue", value: "vue" },
  { title: "Next.js", value: "nextjs" },
  { title: "NestJS", value: "nestjs" },
  { title: "Node.js", value: "nodejs" },
  { title: "Docker", value: "docker" },
  { title: "Gulp", value: "gulp" },
  { title: "PHP", value: "php" },
  { title: "Laravel", value: "laravel" },
  { title: "Figma", value: "figma" },
  { title: "Stripe", value: "stripe" },
  { title: "API", value: "api" },
  { title: "RestAPI", value: "restapi" },
  { title: "GraphQL", value: "graphql" },
  { title: "GSAP", value: "gsap" },
  // { title: "From Scratch", value: "from-scratch" },
  // { title: "Support", value: "support" },
  // { title: "Update", value: "update" },
  // { title: "Refactor", value: "refactor" },
];

export const projectType = defineType({
  name: "project",
  title: "Project",
  icon: PackageIcon,
  description: "A project is a software development project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, "-"),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "favicon",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      // validation: (rule) => rule.required(),
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
        defineArrayMember({
          type: "string",
        }),
      ],
      options: {
        list: STACK_OPTIONS,
        sortable: false,
      },
      components: {
        input: StackOptionsInput,
      },
      validation: (rule) => rule.required().min(1),
    }),
    // defineField({
    //   name: "languages",
    //   title: "Languages",
    //   type: "array",
    //   of: [
    //     {
    //       type: "string",
    //     },
    //   ],
    //   options: {
    //     list: [
    //       { title: "English", value: "en" },
    //       { title: "German", value: "de" },
    //       { title: "French", value: "fr" },
    //       { title: "Spanish", value: "es" },
    //       { title: "Italian", value: "it" },
    //     ],
    //     layout: "grid",
    //   },
    // }),
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
      media: "favicon",
      subtitle: "date",
    },
  },
});
