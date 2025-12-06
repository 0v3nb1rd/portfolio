import {
  AlpineSVG,
  DockerSVG,
  ExpressSVG,
  FigmaSVG,
  FramerSVG,
  GraphQLSVG,
  JavascriptSVG,
  LaravelSVG,
  NextSVG,
  PrismaSVG,
  ReactSVG,
  ReduxSVG,
  SanitySVG,
  TailwindSVG,
  TypescriptSVG,
  VueSVG,
} from "@/components/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const techIconList: { name: string; icon: React.ReactNode }[] = [
  {
    name: "JavaScript",
    icon: <JavascriptSVG width={44} />,
  },
  {
    name: "TypeScript",
    icon: <TypescriptSVG width={44} />,
  },
  {
    name: "React",
    icon: <ReactSVG width={44} />,
  },
  {
    name: "Redux",
    icon: <ReduxSVG width={44} />,
  },
  {
    name: "Next.js",
    icon: <NextSVG width={44} />,
  },
  {
    name: "GraphQL",
    icon: <GraphQLSVG width={44} />,
  },
  {
    name: "Vue",
    icon: <VueSVG width={44} />,
  },
  {
    name: "Tailwind",
    icon: <TailwindSVG width={44} />,
  },
  {
    name: "Alpine.js",
    icon: <AlpineSVG width={44} />,
  },
  {
    name: "Figma",
    icon: <FigmaSVG width={44} />,
  },
  {
    name: "Framer Motion",
    icon: <FramerSVG width={44} />,
  },
  {
    name: "Express",
    icon: <ExpressSVG width={44} />,
  },
  {
    name: "Prisma",
    icon: <PrismaSVG width={44} />,
  },
  {
    name: "Sanity",
    icon: <SanitySVG width={44} />,
  },
  {
    name: "Docker",
    icon: <DockerSVG width={44} />,
  },
  {
    name: "Laravel",
    icon: <LaravelSVG width={44} />,
  },
];

export function SkillList() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-6 p-4 px-8 lg:justify-around">
      {techIconList.map(({ name, icon }: { name: string; icon: React.ReactNode }) => (
        <li key={`technology-item-${name}`}>
          <Tooltip>
            <TooltipTrigger asChild>{icon}</TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
