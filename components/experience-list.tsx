import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { JobExperienceType } from "@/types";

const experienceItems = siteConfig.experience.map((experience: JobExperienceType) => {
  const dateFrom = experience.dateFrom ? experience.dateFrom : "";
  const dateTo = experience.dateTo ? experience.dateTo : "";
  const date = dateFrom && dateTo ? `${dateFrom}-${dateTo}` : `${dateFrom}-now`;

  return (
    <li className="flex flex-col" key={experience.company}>
      <b className="text-lg">
        - {experience.position} <span className="text-muted-foreground text-base font-medium">({date})</span>
      </b>
      {/* <i className="text-muted-foreground">{experience.description}</i> */}
    </li>
  );
});

export function ExperienceList({ className }: { className?: string }) {
  return <ul className={cn("flex flex-col gap-1", className)}>{experienceItems}</ul>;
}
