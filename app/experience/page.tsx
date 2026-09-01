import { PageHero } from '@/components/page-hero';
import { roles } from '@/lib/content';
import { Reveal } from '@/components/reveal';
export const metadata = { title: 'Experience', description: 'A career across software engineering, IoT and platform delivery, enterprise architecture, product leadership and executive technology direction.' };
export default function Experience() {
  return (
    <main id="main">
      <PageHero
        index="02"
        kicker="Experience"
        title="From writing software to leading—and still building—the whole technology system."
        copy="A career across hands-on engineering, platform delivery, enterprise architecture, product leadership and executive accountability."
      />
      <section className="timeline">
        {roles.map((r, i) => (
          <Reveal key={r[0]}>
            <article>
              <div>
                <span>{r[0]}</span>
                <i>0{i + 1}</i>
              </div>
              <div>
                <h2>{r[1]}</h2>
                <h3>{r[2]}</h3>
                <p>{r[3]}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="experience-band">
        <p className="eyebrow">The through-line</p>
        <h2>
          Code → platforms → architecture → product leadership → executive
          technology direction.
        </h2>
      </section>
    </main>
  );
}
