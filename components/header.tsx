'use client';
import Link from 'next/link';
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
      <Link className="brand" href="/" aria-label="Abraham Ogol home">
        <b>AO</b>
        <span>
          Abraham Ogol<small>Engineer · AI & technology leader</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary">
        {nav.map((n, i) => (
          <Link
            key={n.href}
            className={path.startsWith(n.href) ? 'active' : ''}
            href={n.href}
          >
            <i>0{i + 1}</i>
            {n.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Start a conversation <ArrowUpRight size={15} />
      </Link>
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
          <Link onClick={close} key={n.href} href={n.href}>
            <span>0{i + 1}</span>
            {n.label}
          </Link>
        ))}
        <Link onClick={close} href="/resume">
          <span>06</span>Résumé
        </Link>
        <Link onClick={close} href="/contact">
          <span>07</span>Contact
        </Link>
      </div>
    </header>
  );
}
