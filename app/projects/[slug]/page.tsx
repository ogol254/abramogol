import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/content';
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <main id="main">
      <section className="case-hero">
        <Link className="text-link" href="/projects">
          <ArrowLeft size={15} /> All selected work
        </Link>
        <p className="eyebrow">
          Case study {p.number} / {p.discipline}
        </p>
        <h1>{p.title}</h1>
        <p className="lede">{p.summary}</p>
        <figure>
          <Image
            src={p.image}
            alt={`Conceptual system visual for ${p.title}`}
            width={1536}
            height={1024}
            priority
          />
          <figcaption>
            Conceptual visual created for portfolio presentation—not a product
            screenshot.
          </figcaption>
        </figure>
      </section>
      <section className="case-facts">
        <div>
          <span>Organisation</span>
          <b>{p.organisation}</b>
        </div>
        <div>
          <span>Period</span>
          <b>{p.period}</b>
        </div>
        <div>
          <span>Contribution</span>
          <b>{p.discipline}</b>
        </div>
      </section>
      <section className="case-content">
        <aside>
          <p className="eyebrow">On this page</p>
          <a href="#challenge">01 Challenge</a>
          <a href="#role">02 My role</a>
          <a href="#approach">03 Approach</a>
          <a href="#significance">04 Significance</a>
        </aside>
        <div>
          <article id="challenge">
            <p>01 / Challenge</p>
            <h2>{p.challenge}</h2>
          </article>
          <article id="role">
            <p>02 / My role</p>
            <h2>Leadership grounded in delivery.</h2>
            <p>{p.role}</p>
          </article>
          <article id="approach">
            <p>03 / Approach</p>
            <h2>Align product, architecture and operation.</h2>
            <ol>
              {p.approach.map((x, i) => (
                <li key={x}>
                  <span>0{i + 1}</span>
                  {x}
                </li>
              ))}
            </ol>
          </article>
          <article id="significance">
            <p>04 / Significance</p>
            <h2>What this work demonstrates.</h2>
            <p>{p.significance}</p>
          </article>
        </div>
      </section>
      <section className="next-project">
        <p className="eyebrow">Next case study</p>
        <Link href={`/projects/${next.slug}`}>
          <span>{next.title}</span>
          <ArrowUpRight />
        </Link>
      </section>
    </main>
  );
}
