import { agentWork, aiResearchAreas } from "../data/content";
import { Reveal, Section } from "./primitives";

export default function AgentWorkSection() {
  return (
    <Section
      id="ai"
      label="AI Systems"
      title="Giving coding agents something solid to stand on"
      deck="Models are capable; what they lack is grounded access to real systems and continuity between sessions. I build the layer that supplies both — Model Context Protocol servers, connectors, skills and memory for agents like Claude and Codex."
    >
      <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
        {agentWork.map((item, i) => (
          <li key={item.title} className="bg-void">
            <Reveal delay={Math.min(i, 3) * 0.05}>
              <article className="group relative h-full overflow-hidden p-6 transition-colors duration-300 hover:bg-panel sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-signal transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <span className="label shrink-0 text-trace">{item.kind}</span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-dim">{item.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-faint">
                      <span className="mt-2 h-px w-3.5 shrink-0 bg-signal/60" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-10 border border-line p-6 sm:p-8">
          <h3 className="label text-trace">Active research directions</h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-dim">
            The published work runs alongside this. Both come back to the same question: how do you
            make a learned system's behaviour something you can inspect and account for, rather than
            something you observe and hope holds.
          </p>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {aiResearchAreas.map((area) => (
              <li key={area} className="label border border-line px-2.5 py-1 text-dim">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
