import {
  AlpineSVG,
  DockerSVG,
  ExpressSVG,
  FigmaSVG,
  FramerSVG,
  GatsbySVG,
  GraphQLSVG,
  GsapSVG,
  JavascriptSVG,
  LaravelSVG,
  NextSVG,
  OpenAISVG,
  PrismaSVG,
  ReactSVG,
  ReduxSVG,
  SanitySVG,
  // NestSVG,
  SupabaseSVG,
  TailwindSVG,
  TypescriptSVG,
  VueSVG,
} from "@/components/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const techIconList: { name: string; icon: React.ReactNode }[] = [
  {
    name: "JavaScript",
    icon: <JavascriptSVG width={42} />,
  },
  {
    name: "TypeScript",
    icon: <TypescriptSVG width={42} />,
  },
  {
    name: "React",
    icon: <ReactSVG width={42} />,
  },
  {
    name: "Redux",
    icon: <ReduxSVG width={42} />,
  },
  {
    name: "Next.js",
    icon: <NextSVG width={42} />,
  },
  {
    name: "GraphQL",
    icon: <GraphQLSVG width={42} className="p-1" />,
  },
  {
    name: "Gatsby",
    icon: <GatsbySVG width={42} className="p-1" />,
  },
  {
    name: "Vue",
    icon: <VueSVG width={42} />,
  },
  {
    name: "Tailwind",
    icon: <TailwindSVG width={42} />,
  },
  {
    name: "Alpine.js",
    icon: <AlpineSVG width={42} />,
  },
  {
    name: "Figma",
    icon: <FigmaSVG width={42} />,
  },
  {
    name: "GSAP",
    icon: <GsapSVG width={42} className="p-1" />,
  },
  {
    name: "Framer Motion",
    icon: <FramerSVG width={42} />,
  },
  {
    name: "Sanity",
    icon: <SanitySVG width={42} className="p-1" />,
  },
  {
    name: "OpenAI",
    icon: <OpenAISVG width={42} />,
  },
  {
    name: "Prisma",
    icon: <PrismaSVG width={42} className="p-1" />,
  },
  {
    name: "Supabase",
    icon: <SupabaseSVG width={42} />,
  },
  {
    name: "Express",
    icon: <ExpressSVG width={42} />,
  },
  // {
  //   name: "NestJS",
  //   icon: <NestSVG width={42} />,
  // },
  {
    name: "Docker",
    icon: <DockerSVG width={42} />,
  },
  {
    name: "Laravel",
    icon: <LaravelSVG width={42} />,
  },
];

export function SkillList() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 p-3 sm:p-6 lg:justify-around">
      {techIconList.map(({ name, icon }: { name: string; icon: React.ReactNode }) => (
        <li key={`technology-item-${name}`}>
          <Tooltip>
            <TooltipTrigger asChild className="hover:text-primary transition hover:scale-110">
              {icon}
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
