import { Reveal } from "./primitives";

const FACTS = [
  { key: "Role", value: "Software Engineer II, Apple" },
  { key: "Based in", value: "Cupertino, California" },
  { key: "Working on", value: "Release tooling and build automation" },
  { key: "Building", value: "MCP servers, skills and agent memory" },
  { key: "Researching", value: "Explainable RL and exact attribution" },
  { key: "Open to", value: "Infrastructure work and research collaboration" },
];

export default function About() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <span className="h-2 w-2 bg-signal" aria-hidden="true" />
                <span className="label text-signal">Approach</span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-dim sm:text-xl">
                <p>
                  My work sits a layer beneath the product. At Apple I build the release tooling that
                  turns thousands of commits into a validated OS. At Microsoft I built the OTLP
                  pipelines that told Sentinel what its ingestion actually cost. At Claris I owned the
                  sync, identity and notification layers Studio depended on and users never saw.
                </p>
                <p>
                  The constraint repeats: move data between systems, at volume, with delivery
                  guarantees that hold under partial failure &mdash; and make the outcome{" "}
                  <span className="text-ink">attributable</span> when it doesn&rsquo;t. That second
                  half is why both the research and the agent work keep landing on the same problem:
                  systems whose behaviour you can account for, not just observe.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <dl className="border border-line">
                {FACTS.map((fact, i) => (
                  <div
                    key={fact.key}
                    className={`flex flex-col gap-1 p-5 transition-colors duration-300 hover:bg-panel sm:flex-row sm:items-baseline sm:gap-6 ${
                      i === 0 ? "" : "border-t border-line"
                    }`}
                  >
                    <dt className="label w-32 shrink-0 text-faint">{fact.key}</dt>
                    <dd className="text-[15px] leading-snug text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
