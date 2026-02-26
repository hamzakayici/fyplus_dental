'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Hizmetlerimiz', href: '/hizmetler' },
  { label: 'Doktorlarımız', href: '/doktorlarimiz' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Blog', href: '/blog' },
  { label: 'SSS', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="tel:+902120000000"><Phone size={13} /> +90 212 000 00 00</a>
            <a href="mailto:info@fyplus.com.tr"><Mail size={13} /> info@fyplus.com.tr</a>
          </div>
          <div className="topbar-right">
            <span><Clock size={13} /> Pzt-Cum: 09:00-19:00 | Cmt: 10:00-16:00</span>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header-inner">
          <Link href="/" className="logo">
            <img src="/images/logo.png" alt="FyPlus Dental Clinic Bahçeşehir" width={140} height={40} />
          </Link>
          <nav className="nav-desktop">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link href="/iletisim" className="btn btn-primary btn-sm">Randevu Al <ChevronRight size={15} /></Link>
            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu" onClick={() => setMobileOpen(false)}>
          <div className="mobile-menu-inner" onClick={e => e.stopPropagation()}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="mobile-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
            <Link href="/iletisim" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }} onClick={() => setMobileOpen(false)}>Randevu Al</Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .topbar{background:var(--navy);color:var(--gray-400);font-size:0.78rem;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)}
        .topbar-inner{display:flex;justify-content:space-between;align-items:center}
        .topbar-left,.topbar-right{display:flex;align-items:center;gap:20px}
        .topbar a,.topbar span{display:flex;align-items:center;gap:6px;color:var(--gray-400);transition:var(--transition)}
        .topbar a:hover{color:var(--white)}
        .header{position:fixed;top:38px;left:0;right:0;z-index:100;background:rgba(255,255,255,0.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--gray-200);transition:var(--transition)}
        .header--scrolled{top:0;box-shadow:var(--shadow-sm)}
        .header-inner{display:flex;align-items:center;justify-content:space-between;height:64px}
        .logo img{height:36px;width:auto}
        .nav-desktop{display:flex;gap:4px}
        .nav-link{padding:8px 14px;font-size:0.88rem;font-weight:500;color:var(--gray-600);border-radius:var(--radius-sm);transition:var(--transition)}
        .nav-link:hover{color:var(--navy);background:var(--gray-50)}
        .header-actions{display:flex;align-items:center;gap:12px}
        .btn-sm{padding:10px 20px;font-size:0.84rem}
        .mobile-toggle{display:none;background:none;border:none;cursor:pointer;color:var(--navy);padding:8px}
        .mobile-menu{position:fixed;inset:0;z-index:200;background:rgba(10,22,40,0.5);backdrop-filter:blur(4px)}
        .mobile-menu-inner{position:absolute;top:0;right:0;width:300px;height:100%;background:var(--white);padding:80px 24px 24px;display:flex;flex-direction:column;gap:4px}
        .mobile-link{padding:14px 16px;font-size:0.95rem;font-weight:500;color:var(--navy);border-radius:var(--radius-sm);transition:var(--transition)}
        .mobile-link:hover{background:var(--gray-50);color:var(--blue)}
        @media(max-width:1024px){.topbar{display:none}.header{top:0}.nav-desktop{display:none}.mobile-toggle{display:block}}
      `}</style>
    </>
  );
}
