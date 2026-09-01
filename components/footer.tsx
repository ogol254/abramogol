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
        <a className="button gold" href="/contact">
          Start a conversation <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="footer-links">
        <div>
          <b>Explore</b>
          <a href="/about">Profile</a>
          <a href="/experience">Experience</a>
          <a href="/projects">Selected work</a>
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
          <a href="/resume">Résumé</a>
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
