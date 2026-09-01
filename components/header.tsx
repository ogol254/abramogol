'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { nav } from '@/lib/content';
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(scrollY > 24);
    addEventListener('scroll', fn, { passive: true });
    return () => removeEventListener('scroll', fn);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="/" aria-label="Abraham Ogol home">
        <b>AO</b>
        <span>
          Abraham Ogol<small>Engineer · AI & technology leader</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Primary">
        {nav.map((n, i) => (
          <a
            key={n.href}
            className={path.startsWith(n.href) ? 'active' : ''}
            href={n.href}
          >
            <i>0{i + 1}</i>
            {n.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="/contact">
        Start a conversation <ArrowUpRight size={15} />
      </a>
      <button
        className="menu-button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <p>Navigate</p>
        {nav.map((n, i) => (
          <a onClick={close} key={n.href} href={n.href}>
            <span>0{i + 1}</span>
            {n.label}
          </a>
        ))}
        <a onClick={close} href="/resume">
          <span>06</span>Résumé
        </a>
        <a onClick={close} href="/contact">
          <span>07</span>Contact
        </a>
      </div>
    </header>
  );
}
