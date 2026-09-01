import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { projects } from '@/lib/content';
import { Reveal } from '@/components/reveal';
export const metadata = { title: 'Selected Work', description: 'Evidence-supported case studies in connectivity, enterprise platforms, IoT, SD-WAN and AI-enabled engineering.' };
export default function Projects() {
  return (
    <main id="main">
      <PageHero
        index="03"
        kicker="Selected work"
        title="Platforms where product intent meets technical depth."
        copy="Evidence-supported stories demonstrating platform thinking, engineering leadership and operational design."
      />
      <section className="project-index">
        {projects.map((p) => (
          <Reveal key={p.slug}>
            <a href={`/projects/${p.slug}`} className="project-row">
              <figure>
                <Image
                  src={p.image}
                  alt={`Conceptual visual for ${p.title}`}
                  width={1024}
                  height={768}
                />
                <span>Conceptual portfolio visual</span>
              </figure>
              <div>
                <p className="eyebrow">
                  {p.number} / {p.discipline}
                </p>
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
                <b>
                  Read case study <ArrowUpRight size={15} />
                </b>
              </div>
              <em>
                {p.organisation}
                <br />
                {p.period}
              </em>
            </a>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
