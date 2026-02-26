'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="tel:+902120000000"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> +90 212 000 00 00</a>
            <a href="mailto:info@fyplus.com.tr"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg> info@fyplus.com.tr</a>
          </div>
          <div className="topbar-right">
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Pzt - Cum: 09:00 - 19:00</span>
          </div>
        </div>
      </div>
      <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link href="/" className="header-logo">
            <img src="/images/logo.png" alt="FyPlus Dental Clinic" width="160" height="50" />
          </Link>
          <nav className="header-nav">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </nav>
          <Link href="/iletisim" className="btn btn-primary header-cta">Randevu Al</Link>
          <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <span /><span /><span />
          </button>
        </div>
      </header>
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu" onClick={e => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src="/images/logo.png" alt="FyPlus" width="140" height="44" />
              <button onClick={() => setMenuOpen(false)} className="mobile-close" aria-label="Kapat">✕</button>
            </div>
            <nav className="mobile-nav">
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</Link>
              ))}
            </nav>
            <Link href="/iletisim" className="btn btn-primary mobile-cta" onClick={() => setMenuOpen(false)}>Randevu Al</Link>
          </div>
        </div>
      )}
      <style jsx>{`
        .topbar{background:var(--navy);color:rgba(255,255,255,0.8);font-size:0.82rem;padding:8px 0}
        .topbar-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
        .topbar-left,.topbar-right{display:flex;align-items:center;gap:20px}
        .topbar a,.topbar span{display:inline-flex;align-items:center;gap:6px;color:rgba(255,255,255,0.8);transition:var(--transition)}
        .topbar a:hover{color:var(--coral)}
        .header{position:sticky;top:0;z-index:1000;background:rgba(255,255,255,0.95);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);transition:var(--transition);border-bottom:1px solid transparent}
        .header-scrolled{box-shadow:var(--shadow-md);border-bottom:1px solid var(--gray-200)}
        .header-inner{display:flex;align-items:center;justify-content:space-between;height:80px;gap:20px}
        .header-logo img{height:48px;width:auto}
        .header-nav{display:flex;align-items:center;gap:4px}
        .nav-link{padding:8px 16px;font-size:0.9rem;font-weight:500;color:var(--gray-600);border-radius:var(--radius-sm);transition:var(--transition)}
        .nav-link:hover{color:var(--blue);background:rgba(27,143,206,0.06)}
        .header-cta{padding:10px 24px;font-size:0.85rem}
        .hamburger{display:none;flex-direction:column;gap:5px;background:none;padding:8px}
        .hamburger span{width:24px;height:2px;background:var(--navy);transition:var(--transition);border-radius:2px}
        .hamburger.active span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
        .hamburger.active span:nth-child(2){opacity:0}
        .hamburger.active span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}
        .mobile-overlay{position:fixed;inset:0;background:rgba(10,22,40,0.5);backdrop-filter:blur(4px);z-index:2000;animation:fadeIn 0.3s ease}
        .mobile-menu{position:fixed;top:0;right:0;width:min(380px,85vw);height:100vh;background:var(--white);padding:24px;overflow-y:auto;animation:slideInRight 0.3s ease}
        .mobile-menu-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;padding-bottom:20px;border-bottom:1px solid var(--gray-200)}
        .mobile-close{background:none;font-size:1.4rem;color:var(--gray-500);padding:8px}
        .mobile-nav{display:flex;flex-direction:column;gap:4px}
        .mobile-nav-link{padding:14px 16px;font-size:1rem;font-weight:500;color:var(--navy);border-radius:var(--radius-sm);transition:var(--transition)}
        .mobile-nav-link:hover{background:var(--gray-50);color:var(--blue)}
        .mobile-cta{width:100%;justify-content:center;margin-top:24px}
        @media(max-width:1024px){
          .header-nav,.header-cta{display:none}
          .hamburger{display:flex}
        }
        @media(max-width:480px){.topbar-right{display:none}}
      `}</style>
    </>
  );
}
