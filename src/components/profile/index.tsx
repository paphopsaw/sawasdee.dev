type Experience = {
  organization: string;
  title: string;
  from: Date;
  to: Date | string;
  description: string;
};

import { MONTH } from "@/utils/constants";

function renderYearMonth(date: Date | string): string {
  if (typeof date === "string") return date;
  return `${date.getFullYear()} / ${date.getMonth()}`;
}

export default function Profile() {
  const experiences = [
    {
      organization: "Studist",
      title: "Software engineer",
      from: new Date(2024, MONTH.AUGUST),
      to: "now",
      description: "dadada",
    },
    {
      organization: "PTTEP",
      title: "Geophysicist",
      from: new Date(2018, MONTH.JULY),
      to: new Date(2023, MONTH.JULY),
      description: "dadada",
    },
  ];
  const skills = [
    {
      title: "Programming languages",
      items: ["Python", "Javascript", "TypeScript", "Ruby"],
    },
    {
      title: "Technology",
      items: ["Numpy", "OpenCV", "React", "Vue"],
    },
  ];
  return (
    <section>
      <div>
        <h2>Experience</h2>
        <ul>
          {experiences.map((item) => {
            return (
              <li key={item.organization}>
                <h3>{item.organization}</h3>
                <h4>{item.title}</h4>
                <h4>{`
                ${renderYearMonth(item.from)} - ${renderYearMonth(
                  item.from
                )}`}</h4>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Skills</h2>
      </div>
      <div>
        <h2>Activity</h2>
      </div>
    </section>
  );
}
