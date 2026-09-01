import Image from 'next/image';
import { PageHero } from '@/components/page-hero';
export const metadata = { title: 'Capabilities', description: 'Technology strategy, enterprise architecture, product engineering, cloud platforms, secure delivery, IoT, connectivity and AI engineering.' };
const groups = [
  [
    'Leadership',
    'Technology strategy',
    'Product direction',
    'Team leadership',
    'Executive communication',
  ],
  [
    'Architecture',
    'Distributed systems',
    'APIs & integration',
    'Cloud platforms',
    'Secure delivery',
  ],
  [
    'Engineering',
    'Python & .NET',
    'TypeScript / Node.js',
    'CI/CD & observability',
    'Testing & quality',
  ],
  [
    'Domains',
    'Connectivity & SD-WAN',
    'Enterprise IoT',
    'Cybersecurity',
    'AI engineering',
  ],
];
export default function Capabilities() {
  return (
    <main id="main">
      <PageHero
        index="05"
        kicker="Capabilities"
        title="Depth where systems, products and people intersect."
        copy="A structured view of capabilities consistently supported across the professional record."
      />
      <section className="capability-grid">
        {groups.map((g, i) => (
          <article key={g[0]}>
            <span>0{i + 1}</span>
            <h2>{g[0]}</h2>
            {g.slice(1).map((x) => (
              <p key={x}>
                {x}
                <i />
              </p>
            ))}
          </article>
        ))}
      </section>
      <section className="architecture-feature">
        <figure>
          <Image
            src="/assets/projects/capability-enterprise-architecture-concept-v1.png"
            alt="Conceptual layered enterprise architecture"
            width={1536}
            height={1024}
          />
          <figcaption>Conceptual portfolio visual</figcaption>
        </figure>
        <div>
          <p className="eyebrow">Systems view</p>
          <h2>Architecture as a leadership instrument.</h2>
          <p>
            Technical architecture makes trade-offs visible. It gives product,
            engineering and operations a common language for sequencing work and
            managing change.
          </p>
        </div>
      </section>
    </main>
  );
}
