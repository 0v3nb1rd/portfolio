type ExperienceType = {
  position: string;
  description: string;
  company: string;
  dateFrom?: string;
  dateTo?: string;
};

const experienceData: ExperienceType[] = [
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
];

const experienceItems = experienceData.map((experience) => {
  const dateFrom = experience.dateFrom ? experience.dateFrom : "";
  const dateTo = experience.dateTo ? experience.dateTo : "";
  const date = dateFrom && dateTo ? `${dateFrom}-${dateTo}` : `${dateFrom}-now`;

  return (
    <li className="flex flex-col" key={experience.company}>
      <b className="text-lg">
        - {experience.position} <span className="text-base font-medium text-muted-foreground">({date})</span>
      </b>
      {/* <i className="text-muted-foreground">{experience.description}</i> */}
    </li>
  );
});

export function ExperienceList() {
  return <ul className="flex flex-col gap-1">{experienceItems}</ul>;
}
