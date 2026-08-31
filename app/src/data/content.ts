export const profile = {
  name: "Yash Shah",
  role: "Software Engineer II",
  company: "Apple",
  location: "Cupertino, CA",
  email: "ynshah97@gmail.com",
  altEmail: "yashnshah1997@gmail.com",
  phone: "+1 (972) 561-8401",
  linkedin: "https://www.linkedin.com/in/shahyash97",
  github: "https://github.com/Yashshah97",
  resume: "/assets/Yash_Shah_Resume.pdf",
  photo: "/assets/img/yash-portrait.jpg",
  headline: "I build the pipelines that ship other people's work.",
  thesis:
    "Release engineering at Apple: the build automation and validation tooling that turns thousands of commits into a shipped OS. Before that, OTLP telemetry pipelines for Microsoft Sentinel and the ingestion, identity and notification layers under Claris Studio. Seven years on infrastructure with no tolerance for dropped messages.",
} as const;

export type Stat = { value: string; label: string; note: string };

export const stats: Stat[] = [
  { value: "7", label: "Years in production", note: "Shipping since 2019, across four platforms" },
  { value: "20–40%", label: "Release cycle reduction", note: "Build and validation tooling, Apple OS" },
  { value: "$90K", label: "Annual infrastructure saving", note: "Container runtime migration at Claris" },
  { value: "5", label: "IEEE publications", note: "Two published, one accepted, two under review" },
];

export type Role = {
  id: string;
  company: string;
  org?: string;
  title: string;
  location: string;
  period: string;
  start: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    id: "apple-swe2",
    company: "Apple",
    org: "Release Engineering",
    title: "Software Engineer II",
    location: "Cupertino, CA",
    period: "Dec 2025 — Present",
    start: "2025",
    current: true,
    summary:
      "Automating how Apple operating systems get built, validated and released.",
    points: [
      "Engineered release tools that automate build pipelines and quality validation across Apple OS, cutting release cycle time by 20–40%.",
      "Rebuilt the release dashboard around real-time build status and metrics, so teams can see where a release actually stands.",
    ],
    stack: ["Python", "React", "AWS", "CI/CD", "Bash"],
  },
  {
    id: "microsoft",
    company: "Microsoft",
    org: "Sentinel · Performance & Benchmarking",
    title: "Software Engineer II",
    location: "Redmond, WA",
    period: "Oct 2025 — Nov 2025",
    start: "2025",
    summary:
      "Telemetry ingestion and benchmarking for Microsoft Sentinel at cloud scale.",
    points: [
      "Built OTLP-based telemetry pipelines for logs, metrics and traces to benchmark Sentinel ingestion and query performance.",
      "Landed performance telemetry in Azure Data Lake for regression analysis and long-horizon trend tracking.",
      "Tuned ingestion throughput, schema layout and partitioning strategy to bring down both latency and cost.",
    ],
    stack: ["C++", "Python", "Azure", "OTLP", "Kusto", "Kafka", "Spark"],
  },
  {
    id: "claris-swe",
    company: "Apple",
    org: "Claris · Studio",
    title: "Software Engineer",
    location: "Sunnyvale, CA",
    period: "Feb 2024 — Sep 2025",
    start: "2024",
    summary:
      "The ingestion, identity and notification layers underneath Claris Studio.",
    points: [
      "Implemented real-time data sync from FileMaker into Studio using push notifications, so imported data stopped going stale.",
      "Integrated FileMaker Cloud as a first-class data source, opening Studio ingestion to 100+ customers.",
      "Migrated permission metadata across two collections with zero downtime, collapsing two permission models into one.",
      "Integrated OIDC and SAML across Google, Azure and Okta, and authored the design docs and test plans behind them.",
      "Built the notification system that delivers real-time email alerts, designed for throughput rather than best effort.",
      "Shipped the most-requested Studio features: batch import metadata and rich user information.",
    ],
    stack: ["Go", "Python", "MongoDB", "Kafka", "RabbitMQ", "Kubernetes", "AWS", "Podman"],
  },
  {
    id: "claris-intern",
    company: "Apple",
    org: "Claris · Studio",
    title: "Software Engineer Intern",
    location: "Sunnyvale, CA",
    period: "May 2023 — Aug 2023",
    start: "2023",
    summary: "Developer experience and real-time notifications for Claris Studio.",
    points: [
      "Migrated 10+ Studio services off Docker Desktop onto Colima, saving the org $90K a year with no change to how developers work.",
      "Designed real-time change notifications for the Studio web app using webhooks and the notification service.",
      "Shipped a Kubernetes version-fallback feature that shortened config from full service names to version numbers.",
    ],
    stack: ["Go", "Kubernetes", "Colima", "MongoDB", "RabbitMQ", "Jenkins"],
  },
  {
    id: "tesla",
    company: "Tesla",
    title: "Software Engineer Intern",
    location: "Palo Alto, CA",
    period: "Sep 2022 — Jan 2023",
    start: "2022",
    summary: "Inventory microservices and the retail sales UI migration.",
    points: [
      "Developed product inventory microservices in Go and Python, and set the data models for Tesla's retail ecosystem.",
      "Built the inventory flow architecture on MySQL inside Tesla's internal tooling infrastructure.",
      "Migrated the legacy retail sales UI onto Tesla's proprietary Angular component library at full feature parity.",
      "Led frontend integration testing after the migration to confirm rendering held across browsers.",
    ],
    stack: ["Go", "Angular", "Python", "MySQL", "Jenkins"],
  },
  {
    id: "apple-aiml",
    company: "Apple",
    title: "AI/ML Software Engineer Intern",
    location: "Seattle, WA",
    period: "May 2022 — Aug 2022",
    start: "2022",
    summary: "Object browsing for Apple's internal S3-style storage.",
    points: [
      "Built the frontend and backend for infinite scrolling, download, preview and sharing over Apple's S3 object storage.",
      "Configured the end-to-end CI/CD pipeline with automated AWS deployments and a CloudWatch dashboard behind it.",
    ],
    stack: ["Python", "Flask", "React", "AWS S3", "Kubernetes", "CloudWatch"],
  },
  {
    id: "utd",
    company: "UT Dallas",
    org: "Office of Information Technology",
    title: "Security Analyst · Student Assistant",
    location: "Dallas, TX",
    period: "Sep 2021 — Dec 2023",
    start: "2021",
    summary: "Security automation, phishing simulation and incident analysis.",
    points: [
      "Built a Duo push-phishing simulator on the Universal Prompt SDK to test campus security awareness, with response-rate metrics feeding back into training.",
      "Automated Palo Alto firewall rule extraction into CSV reports for ISO management review.",
      "Ran root-cause analysis on security incidents in Splunk and maintained the dashboards the team queried.",
      "Automated SSL certificate generation and renewal, cutting that manual effort by 83%.",
      "Taught computer science to 1,000 children aged 8–15 through the CS Outreach program, and served as GCS Vice President.",
    ],
    stack: ["Python", "Splunk", "Duo SDK", "Palo Alto API"],
  },
  {
    id: "hsbc",
    company: "HSBC",
    title: "Software Engineer",
    location: "Pune, India",
    period: "Jul 2019 — Aug 2021",
    start: "2019",
    summary: "Invoice microservices, cloud delivery and the security posture around them.",
    points: [
      "Developed Java microservices that extract data from ORMB, transform it into invoices and deliver it to clients.",
      "Configured the full CI/CD pipeline with automated GCP deployments, automated tests and alert monitoring.",
      "Closed cloud service vulnerabilities surfaced by Netsparker and Checkmarx scans.",
      "Implemented certificate reconciliation for the Digital Ledger System, verifying document fields against the on-prem database.",
      "Built a Rasa chatbot on Symphony and an Android prototype for online banking with biometric access.",
    ],
    stack: ["Java", "Spring Boot", "Python", "Flask", "GCP", "Jenkins", "Rasa"],
  },
];

export type PubStatus = "published" | "accepted" | "review";

export type Publication = {
  title: string;
  venue: string;
  detail: string;
  year: string;
  status: PubStatus;
  findings?: string[];
};

export const publications: Publication[] = [
  {
    title:
      "Structure-Preserving Frequency-Aware Generative Network for Robust Image Super-Resolution",
    venue: "ICCBI 2026 · IEEE Communications Society",
    detail: "Dubai, June 2026 · IEEE Xplore ISBN 979-8-3315-6380-6 · indexed on Google Scholar",
    year: "2026",
    status: "published",
  },
  {
    title:
      "Performance Analysis of Hybrid Parallel Programming Models for Deep Learning in Heterogeneous HPC Environments",
    venue: "ICESAIA 2026 · IEEE Hyderabad Section",
    detail: "Technically sponsored by IEEE, July 2026",
    year: "2026",
    status: "published",
  },
  {
    title:
      "An Explainable Ensemble Learning Framework for Student Performance Prediction Using Big Data Analytics",
    venue: "CICON 2026 · Karnavati University",
    detail: "Accepted — presenting October 8–10, 2026",
    year: "2026",
    status: "accepted",
  },
  {
    title: "Explainable Reinforcement Learning for Cloud Load Balancing via Exact Shapley Decomposition",
    venue: "Conference submission",
    detail:
      "XRL, an intrinsically explainable RL framework that produces closed-form Shapley attributions for every dispatch decision.",
    year: "2026",
    status: "review",
    findings: [
      "Up to 550× lower cross-seed reward variance than a black-box DQN on the Google 2019 Borg trace",
      "~600× faster per-decision explanation than post-hoc KernelSHAP",
    ],
  },
  {
    title: "Decentralized Age of Information Minimization in VANETs via Game-Theoretic Reinforcement Learning",
    venue: "Conference submission",
    detail:
      "A closed-form Nash equilibrium paired with a scalable mean-field best-response agent for vehicular networks.",
    year: "2026",
    status: "review",
    findings: ["O(1) memory per vehicle, so the agent scales with fleet size rather than against it"],
  },
];

export type AgentWork = {
  title: string;
  kind: string;
  body: string;
  points: string[];
};

/** Agent and LLM infrastructure — the current focus outside core systems work. */
export const agentWork: AgentWork[] = [
  {
    title: "MCP servers",
    kind: "Protocol",
    body: "Model Context Protocol servers that expose internal tools and data sources to coding agents as typed, scoped capabilities rather than ad-hoc shell access.",
    points: [
      "Typed tool schemas so the model knows the contract before it calls anything",
      "Scoped permissions and auditable calls, because an agent with production access is a production dependency",
    ],
  },
  {
    title: "Connectors",
    kind: "Integration",
    body: "Bridges between agents and the systems engineers already work in, so context arrives without a human pasting it.",
    points: [
      "Read paths into issue trackers, build systems and documentation",
      "Normalised payloads that keep prompt budgets predictable under load",
    ],
  },
  {
    title: "Skills",
    kind: "Capability",
    body: "Packaged procedures that give an agent a repeatable, reviewable way to perform a task instead of improvising each time.",
    points: [
      "Deterministic entry points for workflows that must run the same way twice",
      "Versioned and testable, so a change in agent behaviour is a diff rather than a surprise",
    ],
  },
  {
    title: "Memory",
    kind: "State",
    body: "Persistent context for Claude and Codex so a session starts knowing what the last one established, and preferences survive across conversations.",
    points: [
      "Durable, retrievable state with explicit write and recall paths",
      "Relevance-ranked retrieval so recall stays useful as the store grows",
    ],
  },
];

export const aiResearchAreas = [
  "Explainable reinforcement learning",
  "Generative super-resolution",
  "Distributed and heterogeneous training",
  "Game-theoretic multi-agent systems",
  "Ensemble methods on big data",
];

export type Project = {
  name: string;
  year: string;
  blurb: string;
  points: string[];
  stack: string[];
  context?: string;
  repo?: string;
  active?: boolean;
};

export const projects: Project[] = [
  {
    name: "genomics-queue",
    year: "2026",
    context: "Open source · active",
    active: true,
    repo: "https://github.com/Yashshah97/genomics-queue",
    blurb:
      "A persistent priority queue with consumer groups, built for sequence-analysis pipelines that cannot afford to lose work on restart.",
    points: [
      "Durable priority queue with consumer-group semantics, so competing workers claim disjoint work and unacknowledged jobs survive a crash.",
      "Sequence analysis and service API layered over the queue core, keeping the storage engine independent of the domain.",
      "Zero external dependencies — standard library only, which makes the durability and ordering guarantees auditable rather than inherited.",
    ],
    stack: ["Python", "Queueing", "Persistence", "Consumer groups"],
  },
  {
    name: "robotics-ledger",
    year: "2026",
    context: "Open source · active",
    active: true,
    repo: "https://github.com/Yashshah97/robotics-ledger",
    blurb:
      "A tamper-evident, append-only event log for kinematics and path-planning decisions, where after-the-fact edits have to be detectable.",
    points: [
      "Hash-chained events: altering any record breaks the chain from that point forward, so tampering is provable rather than suspected.",
      "Append-only write path with the kinematics model kept separate from the ledger core.",
      "Standard library only, no network calls — the integrity property does not depend on a service being reachable.",
    ],
    stack: ["Python", "Hash chains", "Append-only log", "Integrity"],
  },
  {
    name: "statistics-randomizer",
    year: "2026",
    context: "Open source · active",
    active: true,
    repo: "https://github.com/Yashshah97/statistics-randomizer",
    blurb:
      "A Monte Carlo experiment runner for distribution fitting and hypothesis testing, with confidence intervals computed from first principles.",
    points: [
      "Experiment engine separates the sampling loop from the statistics, so new tests plug in without touching the runner.",
      "Distribution fitting, hypothesis tests and interval estimation implemented from scratch rather than delegated to SciPy.",
      "Written to be read: the numerical method is visible in the source instead of buried in a dependency.",
    ],
    stack: ["Python", "Monte Carlo", "Statistics", "Numerical methods"],
  },
  {
    name: "MicroPlan",
    year: "2023",
    context: "UT Dallas",
    blurb:
      "A Spring Boot microservice with REST semantics most tutorials skip: merge support, cascaded delete, and conditional updates.",
    points: [
      "Full CRUD REST API with merge support, cascaded delete, validation and update-if-not-changed semantics.",
      "Key/value storage with ElasticSearch parent-child indexing for search, and a message queue for durable processing.",
      "Secured with JWT authorization and ETag verification, containerized with Docker and monitored through Kibana.",
    ],
    stack: ["Spring Boot", "ElasticSearch", "Redis", "RabbitMQ", "Docker", "Kibana", "JWT"],
  },
  {
    name: "Booth Surveillance System",
    year: "2019",
    context: "Final year thesis · 4th in department",
    blurb:
      "Polling-booth monitoring for rural elections, where the failure mode is an unauthorized person standing where they should not be.",
    points: [
      "Detects unauthorized people inside a polling booth with OpenCV and alerts the supervisor.",
      "Machine learning model counts occupants and flags anomalies against the authorized roster.",
      "Admin console for registering booths, authorized personnel and reviewing incidents.",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "Python", "OpenCV", "React", "MySQL"],
  },
  {
    name: "Certificate Reconciliation",
    year: "2019",
    context: "HSBC",
    blurb:
      "Untrusted documents in a digital ledger, reconciled against the system of record instead of trusted on sight.",
    points: [
      "Verified certificate fields against on-prem database values to isolate untrustworthy or orphaned documents.",
      "Built on Flask with an AI-assisted field extraction and comparison step.",
    ],
    stack: ["Python", "Flask", "AI/ML", "Oracle"],
  },
  {
    name: "Color Schema Authentication",
    year: "2017",
    blurb:
      "A second authentication factor built from color, where the prompt order reshuffles on every page load.",
    points: [
      "RGBY color-code login layer with OTP-based reset.",
      "Requested input order shuffles on each refresh, so a shoulder-surfed sequence does not replay.",
    ],
    stack: ["Java", "JSP", "Servlets", "MySQL", "JavaScript"],
  },
  {
    name: "Twitter Sentiment Analysis",
    year: "2018",
    blurb: "Sentiment scoring across a user's recent timeline, reported rather than just printed.",
    points: [
      "Classifies the top N tweets for a given account as positive, negative or neutral and generates a report.",
      "NLP model served behind a Flask application.",
    ],
    stack: ["Python", "NLP", "Flask", "SQLAlchemy"],
  },
  {
    name: "University Finder",
    year: "2018",
    context: "iCreative Technologies",
    blurb:
      "Admission probability prediction from academic credentials, at 90% accuracy on held-out students.",
    points: [
      "Random Forest classifier over GRE, TOEFL/IELTS, CGPA and experience features.",
      "Django web application with MySQL persistence and an OpenCV face-login experiment alongside it.",
    ],
    stack: ["Python", "Django", "scikit-learn", "MySQL", "OpenCV"],
  },
];

export const skills: { group: string; note: string; items: string[] }[] = [
  {
    group: "Languages",
    note: "Go and Python day to day; Java and C++ where the existing system dictates it",
    items: ["Go", "Python", "Java", "C++", "C", "TypeScript", "C#", "Scala", "Bash"],
  },
  {
    group: "Backend & Distributed",
    note: "Service design that degrades predictably when a dependency does not",
    items: [
      "Kubernetes",
      "Docker",
      "Kafka",
      "RabbitMQ",
      "Spring Boot",
      "gRPC",
      "REST",
      "GraphQL",
      "WebSockets",
      "OIDC / SAML",
    ],
  },
  {
    group: "Cloud & Delivery",
    note: "Deployment, observability, and the feedback loop between them",
    items: ["AWS", "GCP", "Azure", "Jenkins", "CI/CD", "Terraform", "OpenTelemetry", "Grafana", "Splunk"],
  },
  {
    group: "Data",
    note: "Selected by access pattern and consistency requirement",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Cassandra", "Redis", "ElasticSearch", "Kusto", "Spark", "Hadoop"],
  },
  {
    group: "Frontend",
    note: "Enough depth to own a feature from schema to screen",
    items: ["React", "Angular", "Vue", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    group: "Agents & LLM Infrastructure",
    note: "Extending coding agents with tools, context and durable state",
    items: ["MCP", "Tool schemas", "Retrieval", "Prompt engineering", "Evals", "Claude", "Codex", "OpenAI API"],
  },
  {
    group: "Machine Learning",
    note: "The model work behind the publications and the agent tooling",
    items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "Hugging Face", "spaCy", "NLTK"],
  },
];

export const education = [
  {
    school: "The University of Texas at Dallas",
    degree: "M.S. Computer Science",
    place: "Richardson, Texas",
    period: "Aug 2021 — Dec 2023",
    grade: "3.72 / 4.0",
    courses: ["Distributed Database Systems", "Big Data", "Foundations of Algorithms", "Machine Learning & AI"],
  },
  {
    school: "L. D. College of Engineering",
    degree: "B.E. Information Technology",
    place: "Ahmedabad, India · Gujarat Technological University",
    period: "Aug 2015 — Jun 2019",
    grade: "8.67 / 10",
    courses: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Data Mining", "Cyber Security"],
  },
];

export const certifications = [
  { name: "Associate Cloud Engineer", issuer: "Google Cloud", image: "/assets/img/GCPACE.png" },
  { name: "PCAP — Certified Associate in Python", issuer: "Python Institute", image: "/assets/img/PCAP.jpeg" },
  { name: "Microsoft Technology Associate", issuer: "Microsoft", image: "/assets/img/MTA.png" },
];

export const honors = [
  { title: "Employee of the Year", detail: "HSBC, 2021" },
  { title: "Top 1% of employees", detail: "Selected for HSBC's exclusive UK training program" },
  { title: "Hackathon lead", detail: "Organized the HSBC hackathon for 200+ participants" },
  { title: "Lakshya 2019", detail: "Directed a technical event for 100+ participants" },
];
