import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SceneLoader } from '@/components/scene-loader';
import { Reveal } from '@/components/reveal';
import { projects } from '@/lib/content';
export default function Home() {
  return (
    <main id="main">
      <section className="home-hero">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">Engineering · AI · Technology leadership</p>
            <h1>
              I do not just lead technology. <em>I build it.</em>
            </h1>
            <p className="lede">
              I design complex enterprise and business solutions, write code,
              deploy and support them—and lead the teams behind everything.
            </p>
            <div className="hero-actions">
              <a className="button gold" href="/projects">
                Explore selected work <ArrowRight size={17} />
              </a>
              <a className="text-link" href="/about">
                Leadership profile <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
        <SceneLoader />
        <div className="hero-portrait">
          <Image
            src="/assets/headshots/abraham-ogol.png"
            alt="Abraham Ogol, technology executive"
            width={768}
            height={1024}
            priority
          />
          <span>
            Abraham Ogol<small>Engineer · AI & technology leader</small>
          </span>
        </div>
        <div className="hero-stats">
          <div>
            <b>11+</b>
            <span>Years across engineering and leadership*</span>
          </div>
          <div>
            <b>05</b>
            <span>African markets reported*</span>
          </div>
          <div>
            <b>360°</b>
            <span>Strategy · architecture · delivery</span>
          </div>
        </div>
      </section>
      <section className="marquee" aria-label="Areas of expertise">
        <div>
          Product platforms <i /> Enterprise architecture <i /> Cloud & DevOps{' '}
          <i /> IoT & connectivity <i /> AI engineering <i /> Secure delivery{' '}
          <i />
        </div>
      </section>
      <section className="thesis">
        <Reveal>
          <p className="eyebrow">Leadership, translated into systems</p>
          <h2>
            I lead by example—from architecture and code to deployment and team
            outcomes.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p>
            I move between business ambition and implementation detail: shaping
            the roadmap, designing the system, contributing to code, guiding
            releases, supporting operations and developing the people who
            deliver it.
          </p>
          <a className="text-link" href="/experience">
            Trace the journey <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </section>
      <section className="selected">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work / 01—04</p>
            <h2>Platforms built for movement, scale and control.</h2>
          </div>
          <a className="text-link" href="/projects">
            All projects <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="project-feature-grid">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <a className="project-card" href={`/projects/${p.slug}`}>
                <figure>
                  <Image
                    src={p.image}
                    alt={`Conceptual visual for ${p.title}`}
                    width={1024}
                    height={768}
                  />
                  <span>Conceptual portfolio visual</span>
                </figure>
                <p>{p.discipline}</p>
                <h3>{p.title}</h3>
                <small>
                  {p.organisation} · {p.period}
                </small>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="offer">
        <div>
          <p className="eyebrow">What I bring</p>
          <h2>
            Executive perspective.
            <br />
            <em>Engineering instinct.</em>
          </h2>
        </div>
        <div className="offer-grid">
          <article>
            <span>01</span>
            <h3>Direction</h3>
            <p>
              Roadmaps and technology strategy that turn ambiguity into aligned
              decisions.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Architecture</h3>
            <p>
              Systems designed around real product, operating and security
              constraints.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Delivery</h3>
            <p>
              Multidisciplinary leadership that keeps quality and outcomes
              connected.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
