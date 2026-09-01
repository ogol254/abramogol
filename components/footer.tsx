import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">Your next complex technology challenge</p>
        <h2>
          Let’s make it
          <br />
          <em>move.</em>
        </h2>
        <Link className="button gold" href="/contact">
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="footer-links">
        <div>
          <b>Explore</b>
          <Link href="/about">Profile</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Selected work</Link>
        </div>
        <div>
          <b>Connect</b>
          <a
            href="https://www.linkedin.com/in/abramogol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:abramogol@gmail.com">abramogol@gmail.com</a>
          <Link href="/resume">Résumé</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <b>AO</b>
        <span>Nairobi · East Africa</span>
        <span>© 2026 Abraham Ogol</span>
      </div>
    </footer>
  );
}
