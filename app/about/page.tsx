import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
export const metadata = { title: 'Profile', description: 'Meet Abraham Ogol: a hands-on engineer and technology leader who turns business ambition into resilient products, platforms and teams.' };
export default function About() {
  return (
    <main id="main">
      <PageHero
        index="01"
        kicker="Profile"
        title="An engineer who leads. A leader who still builds."
        copy="Executive accountability grounded in architecture, code, deployment, support and the day-to-day reality of delivery."
      />
      <section className="profile">
        <Reveal className="profile-image">
          <Image
            src="/assets/headshots/abraham-ogol.png"
            alt="Abraham Ogol, engineer and technology leader"
            width={768}
            height={1024}
          />
          <span>Abraham Ogol · Nairobi</span>
        </Reveal>
        <div className="profile-copy">
          <Reveal>
            <p className="eyebrow">Leadership by example</p>
            <h2>I build systems and the teams capable of sustaining them.</h2>
            <p>
              My career has progressed from Python engineering and developer
              mentorship into IoT and platform development, enterprise
              architecture, multi-market product leadership and a Director/CTO
              role.
            </p>
            <p>
              I translate business problems into product direction and solution
              architecture, then stay active through implementation: writing and
              reviewing code, shaping APIs and integrations, deploying services,
              supporting live systems and managing the multidisciplinary team
              behind the outcome.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="principles">
        <article>
          <span>01</span>
          <h3>Make complexity legible</h3>
          <p>
            Give leaders and teams a shared view of the system, constraints and
            decision.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Design for operation</h3>
          <p>A platform succeeds when people can run, adapt and trust it.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Stay close to delivery</h3>
          <p>
            Strategy gains credibility through feedback from engineering
            reality.
          </p>
        </article>
      </section>
      <section className="page-cta">
        <p className="eyebrow">Continue the story</p>
        <h2>See how the work evolved.</h2>
        <a className="button gold" href="/experience">
          Experience <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}
