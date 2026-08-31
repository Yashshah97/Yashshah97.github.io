import { skills } from "../data/content";
import { Chip, Reveal, Section } from "./primitives";

export default function Skills() {
  return (
    <Section
      id="toolkit"
      label="Toolkit"
      title="The working stack"
      deck="Organised by the role each tool plays in a system. Weighted toward backend, delivery and data, which is where most of the work has been."
    >
      <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
        {skills.map((group, i) => (
          <div key={group.group} className="bg-void">
            <Reveal delay={Math.min(i, 3) * 0.05}>
              <div className="group h-full p-6 transition-colors duration-300 hover:bg-panel sm:p-7">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {group.group}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-faint">{group.note}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Chip name={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
