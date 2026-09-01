import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';

export const metadata = { title: 'AI & Emerging Technology', description: 'Applied AI practice spanning model adaptation, distillation, developer agents, autonomous systems and responsible financial decision models.' };

const practices = [
  [
    '01',
    'Domain models & distillation',
    'Built and evaluated domain-focused workflows spanning model adaptation, fine-tuning, distillation and orchestration—turning general-purpose models into focused capabilities for coding, retrieval, automation and enterprise work.',
  ],
  [
    '02',
    'Developer agents & engineering tools',
    'Built AI-assisted coding and developer-support workflows using agentic patterns, MCP-style tool integrations, retrieval and LLM APIs for code generation, debugging, documentation and technical analysis.',
  ],
  [
    '03',
    'Autonomous guidance concepts',
    'Designed autonomous-system concepts for drone piloting and mission support, combining sensor inputs, inference, path planning and decision logic with reliability, edge deployment and human oversight in view.',
  ],
  [
    '04',
    'Financial decision models',
    'Developed and explored data-driven models for credit, risk, forecasting, anomaly detection and decision support, with explainability, monitoring and responsible controls treated as system requirements.',
  ],
];

export default function AI() {
  return (
    <main id="main">
      <PageHero
        index="04"
        kicker="AI & emerging technology"
        title="I build AI systems that belong inside real products and workflows."
        copy="Hands-on model work, engineering agents and automation—connected to architecture, delivery, safeguards and business outcomes."
      />
      <section className="ai-feature">
        <Reveal>
          <figure>
            <Image
              src="/assets/projects/capability-ai-engineering-agents-concept-v1.png"
              alt="Conceptual workflow showing an AI agent using context, models and engineering tools"
              width={1536}
              height={1024}
            />
            <figcaption>
              Conceptual visual created for portfolio presentation
            </figcaption>
          </figure>
        </Reveal>
        <Reveal>
          <p className="eyebrow">Applied AI / engineering practice</p>
          <h2>
            From model detail to product strategy and executive accountability.
          </h2>
          <p>
            I work across the AI delivery chain: framing the business problem,
            designing model and tool architecture, writing and integrating
            software, evaluating behaviour, deploying workflows and leading the
            team responsible for reliability and adoption.
          </p>
          <div className="flow">
            <span>Context</span>
            <i />
            <span>Model</span>
            <i />
            <span>Tool use</span>
            <i />
            <span>Evaluation</span>
            <i />
            <span>Operation</span>
          </div>
        </Reveal>
      </section>
      <section className="ai-practice-grid">
        {practices.map(([number, title, copy]) => (
          <article key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <section className="principles">
        <article>
          <span>01</span>
          <h3>Human oversight</h3>
          <p>Keep judgment, review and accountability explicit.</p>
        </article>
        <article>
          <span>02</span>
          <h3>System fit</h3>
          <p>
            Apply AI where it materially improves productivity, decision
            quality, customer experience or operational efficiency.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Measured adoption</h3>
          <p>
            Separate concepts and exploration from implemented work; build for
            security, monitoring and maintainability.
          </p>
        </article>
      </section>
    </main>
  );
}
