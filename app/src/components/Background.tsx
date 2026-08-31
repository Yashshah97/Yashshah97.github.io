import { Award } from "lucide-react";
import { certifications, education, honors } from "../data/content";
import { Reveal, Section } from "./primitives";

export default function Background() {
  return (
    <Section
      id="background"
      label="Background"
      title="Education, credentials and recognition"
    >
      <div className="grid gap-px border border-line bg-line lg:grid-cols-2">
        {education.map((school, i) => (
          <div key={school.school} className="bg-void">
            <Reveal delay={i * 0.05}>
              <div className="h-full p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {school.school}
                  </h3>
                  <span className="label shrink-0 border border-line px-2.5 py-1 text-signal">
                    {school.grade}
                  </span>
                </div>
                <p className="mt-3 text-base text-ink/90">{school.degree}</p>
                <p className="label mt-2 text-faint">
                  {school.period} &nbsp;/&nbsp; {school.place}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {school.courses.map((course) => (
                    <li key={course} className="label border border-line px-2.5 py-1 text-dim">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <h3 className="label mb-6 text-trace">Certifications</h3>
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-3">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="group flex flex-col items-center bg-void p-6 text-center transition-colors duration-300 hover:bg-panel"
                >
                  <img
                    src={cert.image}
                    alt=""
                    width={72}
                    height={72}
                    loading="lazy"
                    className="h-16 w-16 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="mt-4 text-sm leading-snug text-ink">{cert.name}</span>
                  <span className="label mt-2 text-faint">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.08}>
            <h3 className="label mb-6 text-trace">Honors</h3>
            <ul className="space-y-px border border-line bg-line">
              {honors.map((honor) => (
                <li
                  key={honor.title}
                  className="flex items-start gap-4 bg-void p-5 transition-colors duration-300 hover:bg-panel"
                >
                  <Award size={16} className="mt-0.5 shrink-0 text-signal" aria-hidden="true" />
                  <div>
                    <p className="text-[15px] text-ink">{honor.title}</p>
                    <p className="mt-1 text-sm text-faint">{honor.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
