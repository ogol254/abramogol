'use client';

import { useState } from 'react';
import { ArrowUpRight, LinkIcon, Mail } from 'lucide-react';
import { PageHero } from '@/components/page-hero';

export const metadata = { title: 'Contact', description: 'Start a conversation with Abraham Ogol about executive technology roles, product leadership, AI, digital transformation or strategic partnerships.' };

export default function Contact() {
  const [topic, setTopic] = useState('Executive technology role');
  return (
    <main id="main">
      <PageHero
        index="07"
        kicker="Contact"
        title="Bring the ambitious problem."
        copy="Open to conversations where hands-on engineering, architecture, product judgment, AI and technology leadership need to work as one."
      />
      <section className="contact-layout">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>What could we build, change or lead together?</h2>
          <p>
            Reach me directly. No tracking, form provider or third-party data
            collection is used.
          </p>
          <a className="contact-link" href="mailto:abramogol@gmail.com">
            <Mail size={18} /> abramogol@gmail.com
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/abramogol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon size={18} /> Connect on LinkedIn
          </a>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent(`${topic} — portfolio enquiry`);
            const field = (key: string) => {
              const value = data.get(key);
              return typeof value === 'string' ? value : '';
            };
            const name = field('name');
            const email = field('email');
            const message = field('message');
            const body = encodeURIComponent(
              `Name: ${name}\nWork email: ${email}\n\n${message}`,
            );
            window.location.href = `mailto:abramogol@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <fieldset>
            <legend>What would you like to discuss?</legend>
            {[
              'Executive technology role',
              'Platform or product leadership',
              'AI & digital transformation',
              'Consulting or partnership',
            ].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setTopic(item)}
                className={topic === item ? 'selected' : ''}
              >
                {item}
              </button>
            ))}
          </fieldset>
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              placeholder="Name"
              required
            />
          </label>
          <label>
            Work email
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label>
            Context
            <textarea
              name="message"
              placeholder="A short note about the opportunity"
              required
            />
          </label>
          <button type="submit">
            Continue in your email app <ArrowUpRight size={16} />
          </button>
          <small>
            Your message is prepared locally and opens in your email
            application. This website does not collect or store it.
          </small>
        </form>
      </section>
    </main>
  );
}
