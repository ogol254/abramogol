import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
export const metadata = { title: 'Résumé', description: 'Download Abraham Ogol’s approved public résumé covering AI, data transformation and enterprise technology leadership.' };
export default function Resume() {
  return (
    <main id="main">
      <PageHero
        index="06"
        kicker="Résumé"
        title="A career built across code, platforms and leadership."
        copy="A privacy-reviewed public résumé covering AI, data transformation and enterprise technology leadership."
      />
      <section className="resume-grid">
        <article>
          <p>Current scope</p>
          <h2>Director / CTO</h2>
          <span>Cognativ · March 2025—present</span>
        </article>
        <article>
          <p>Core practice</p>
          <h2>Technology & product leadership</h2>
          <span>Architecture · platforms · engineering delivery</span>
        </article>
        <article>
          <p>Education</p>
          <h2>BSc Information Technology</h2>
          <span>Maseno University</span>
        </article>
        <a className="button gold" href="/resume/Abraham_Ogol-AAR-AI-Data-Transformations-Lead.pdf" download>
          <ArrowDownToLine size={17} /> Download public résumé
        </a>
      </section>
      <section className="resume-prompt">
        <div>
          <p className="eyebrow">Prefer a conversation?</p>
          <h2>Discuss the role, platform or transformation ahead.</h2>
        </div>
        <a className="button gold" href="/contact">
          Contact Abraham <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}
