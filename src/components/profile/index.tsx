import Link from "next/link";

type Job = {
  title: string;
  organization: string;
  organizationLink: string;
  from: Date;
  to: Date | string;
};

import { MONTH } from "@/utils/constants";

function renderYearMonth(date: Date | string): string {
  if (typeof date === "string") return date;
  return `${date.getFullYear()} ${date.toLocaleString("default", {
    month: "long",
  })}`;
}

export default function Profile() {
  const jobs: Job[] = [
    {
      title: "Software engineer",
      organization: "Studist",
      organizationLink: "https://studist.jp/",
      from: new Date(2023, MONTH.AUGUST),
      to: "present",
    },
    {
      title: "Geophysicist",
      organization: "PTTEP",
      organizationLink: "https://www.pttep.com",
      from: new Date(2018, MONTH.JULY),
      to: new Date(2023, MONTH.JULY),
    },
  ];
  return (
    <section>
      <h1>About me</h1>
      <div className="mb-6">
        <p>
          Hi, I'm Stock Sawasdee from Bangkok, Thailand. Currently I'm working
          as a full-stack software engineer in Tokyo. Before that I had been
          working as a research geophysicist at a national petroleum company for
          5 years. During my career as a geophysicist, I implemented many
          digital solutions mostly to help tge company find petroleum, and
          because of that I became facinated by the art and science of software
          development.
        </p>
        <p>
          In 2023, I got married to a Japanese wife, and we decided to move to
          Japan and live in Yokohama, my wife's hometown. At the same time, I
          decided to switch my career to become a professional software
          engineer. Though I'm working as a full-stack engineer implementing
          both, my interest lies in large-scale system designs and scientific
          computing.
        </p>
        <p>
          Outside of work, I enjoy outdoor activities like running, cycling, and
          skiing (Fun fact: Japan is the{" "}
          <Link href="https://www.groovyjapan.com/en/japan-snow/">
            world's snowiest country
          </Link>
          ).
        </p>
      </div>
      <div className="mb-6">
        <h2>Career history</h2>
        {jobs.map((job) => (
          <div className="mb-2" key={job.title}>
            <h3>
              <span>{job.title}</span>・
              <Link className="font-bold" href={job.organizationLink}>
                {job.organization}
              </Link>
            </h3>
            <p className="mb-2 italic">{`${renderYearMonth(
              job.from
            )} - ${renderYearMonth(job.to)}`}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
