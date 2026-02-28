"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, ArrowRight, MapPin, Clock } from "lucide-react";

const servicesLinks = [
  { label: "İmplant Tedavisi", href: "/hizmetler/implant-tedavisi", desc: "Kalıcı titanyum implantlar" },
  { label: "Zirkonyum Kaplama", href: "/hizmetler/zirkonyum-kaplama", desc: "Metal-free estetik çözümler" },
  { label: "Diş Beyazlatma", href: "/hizmetler/dis-beyazlatma", desc: "8 tona kadar beyazlatma" },
  { label: "Gülüş Tasarımı", href: "/hizmetler/gulus-tasarimi", desc: "Hollywood smile tasarımı" },
  { label: "Ortodonti", href: "/hizmetler/ortodonti", desc: "Şeffaf plak ve braketler" },
  { label: "Kanal Tedavisi", href: "/hizmetler/kanal-tedavisi", desc: "Ağrısız kök kanal tedavisi" },
];

const corporateLinks = [
  { label: "Doktorlarımız", href: "/doktorlarimiz" },
  { label: "Galeri", href: "/galeri" },
  { label: "Blog", href: "/blog" },
  { label: "Sık Sorulan Sorular", href: "/sss" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = (name) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className={`top-bar ${scrolled ? "top-bar--hidden" : ""}`}>
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:+905335165134" className="top-bar-item">
              <Phone size={12} />
              <span>0533 516 51 34</span>
            </a>
            <span className="top-bar-divider" />
            <a href="tel:+902129995134" className="top-bar-item">
              <Phone size={12} />
              <span>0212 999 51 34</span>
            </a>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-item">
              <MapPin size={12} />
              <span>Bahçeşehir, İstanbul</span>
            </span>
            <span className="top-bar-divider" />
            <span className="top-bar-item">
              <Clock size={12} />
              <span>Pzt-Cum: 09:00-19:00</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="logo">
            <img
              src="/images/logo.png"
              alt="FyPlus Dental Clinic Bahçeşehir"
              width={140}
              height={40}
            />
          </Link>

          <nav className="nav-desktop">
            <Link href="/" className="nav-link">
              Ana Sayfa
            </Link>
            <Link href="/hakkimizda" className="nav-link">
              Hakkımızda
            </Link>

            {/* Hizmetlerimiz Mega Menu */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter("hizmetler")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className={`nav-link ${activeDropdown === "hizmetler" ? "nav-link--active" : ""}`} type="button" onClick={() => setActiveDropdown(activeDropdown === "hizmetler" ? null : "hizmetler")}>
                Hizmetlerimiz <ChevronDown size={14} className={`nav-chevron ${activeDropdown === "hizmetler" ? "nav-chevron--open" : ""}`} />
              </button>
              <div className={`mega-panel ${activeDropdown === "hizmetler" ? "mega-panel--visible" : ""}`}>
                <div className="mega-grid">
                  {servicesLinks.map((s) => (
                    <Link key={s.href} href={s.href} className="mega-item" onClick={() => setActiveDropdown(null)}>
                      <div className="mega-item-dot" />
                      <div>
                        <strong>{s.label}</strong>
                        <span>{s.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mega-footer">
                  <Link href="/hizmetler" className="mega-all" onClick={() => setActiveDropdown(null)}>
                    Tüm Hizmetleri Görüntüle <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Kurumsal Dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => handleDropdownEnter("kurumsal")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className={`nav-link ${activeDropdown === "kurumsal" ? "nav-link--active" : ""}`} type="button" onClick={() => setActiveDropdown(activeDropdown === "kurumsal" ? null : "kurumsal")}>
                Kurumsal <ChevronDown size={14} className={`nav-chevron ${activeDropdown === "kurumsal" ? "nav-chevron--open" : ""}`} />
              </button>
              <div className={`dropdown-panel ${activeDropdown === "kurumsal" ? "dropdown-panel--visible" : ""}`}>
                {corporateLinks.map((c) => (
                  <Link key={c.href} href={c.href} className="dropdown-item" onClick={() => setActiveDropdown(null)}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/iletisim" className="nav-link">
              İletişim
            </Link>
          </nav>

          <div className="header-actions">
            <a
              href="tel:+905335165134"
              className="header-phone"
            >
              <Phone size={14} />
              <span>0533 516 51 34</span>
            </a>
            <Link href="/iletisim" className="header-cta">
              Randevu Al <ArrowRight size={14} />
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${mobileOpen ? "mobile-overlay--visible" : ""}`} onClick={() => setMobileOpen(false)}>
        <div
          className={`mobile-panel ${mobileOpen ? "mobile-panel--visible" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-panel-header">
            <img
              src="/images/logo.png"
              alt="FyPlus"
              width={120}
              height={34}
            />
            <button onClick={() => setMobileOpen(false)} aria-label="Kapat">
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav">
            <Link href="/" className="mobile-link" onClick={() => setMobileOpen(false)}>
              Ana Sayfa
            </Link>
            <Link href="/hakkimizda" className="mobile-link" onClick={() => setMobileOpen(false)}>
              Hakkımızda
            </Link>

            <div className="mobile-accordion">
              <button
                className="mobile-link mobile-accordion-trigger"
                onClick={() => toggleMobileDropdown("hizmetler")}
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown
                  size={16}
                  className={`mobile-chevron ${mobileDropdown === "hizmetler" ? "mobile-chevron--open" : ""}`}
                />
              </button>
              <div className={`mobile-subnav ${mobileDropdown === "hizmetler" ? "mobile-subnav--open" : ""}`}>
                {servicesLinks.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
                <Link
                  href="/hizmetler"
                  onClick={() => setMobileOpen(false)}
                  className="mobile-subnav-all"
                >
                  Tüm Hizmetler
                </Link>
              </div>
            </div>

            <div className="mobile-accordion">
              <button
                className="mobile-link mobile-accordion-trigger"
                onClick={() => toggleMobileDropdown("kurumsal")}
              >
                <span>Kurumsal</span>
                <ChevronDown
                  size={16}
                  className={`mobile-chevron ${mobileDropdown === "kurumsal" ? "mobile-chevron--open" : ""}`}
                />
              </button>
              <div className={`mobile-subnav ${mobileDropdown === "kurumsal" ? "mobile-subnav--open" : ""}`}>
                {corporateLinks.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/iletisim" className="mobile-link" onClick={() => setMobileOpen(false)}>
              İletişim
            </Link>
          </nav>

          <div className="mobile-panel-footer">
            <a href="tel:+905335165134" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
              <Phone size={16} /> 0533 516 51 34
            </a>
            <Link
              href="/iletisim"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMobileOpen(false)}
            >
              Randevu Al
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ═══ TOP BAR ═══ */
        .top-bar {
          background: var(--navy);
          color: rgba(255,255,255,0.75);
          font-size: 0.76rem;
          height: 36px;
          display: flex;
          align-items: center;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          overflow: hidden;
        }
        .top-bar--hidden {
          height: 0;
          opacity: 0;
          pointer-events: none;
        }
        .top-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-bar-left,
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .top-bar-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.7);
          transition: var(--transition);
          letter-spacing: 0.01em;
        }
        .top-bar-item:hover {
          color: var(--blue);
        }
        .top-bar-divider {
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.15);
          margin: 0 8px;
        }

        /* ═══ HEADER ═══ */
        .header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid transparent;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          height: 68px;
        }
        .header--scrolled {
          border-bottom-color: rgba(0,0,0,0.04);
          box-shadow: 0 1px 20px rgba(10, 22, 40, 0.06);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .logo img {
          height: 34px;
          width: auto;
        }

        /* ═══ DESKTOP NAV ═══ */
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 0px;
        }
        .nav-link {
          padding: 8px 18px;
          font-size: 0.84rem;
          font-weight: 500;
          color: var(--gray-600);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          background: none;
          border: none;
          font-family: var(--font-body);
          position: relative;
          letter-spacing: -0.005em;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 18px;
          right: 18px;
          height: 1.5px;
          background: var(--navy);
          border-radius: 1px;
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover {
          color: var(--navy);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .nav-link--active {
          color: var(--navy);
        }
        .nav-link--active::after {
          transform: scaleX(1);
        }
        .nav-chevron {
          transition: transform 0.25s ease;
        }
        .nav-chevron--open {
          transform: rotate(180deg);
        }

        /* ═══ MEGA MENU (Hizmetler) ═══ */
        .mega-panel {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          width: 520px;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: var(--radius-xl);
          box-shadow: 0 20px 60px rgba(10, 22, 40, 0.12), 0 1px 3px rgba(10, 22, 40, 0.04);
          padding: 0;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          pointer-events: none;
          z-index: 200;
          overflow: hidden;
        }
        .mega-panel--visible {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .mega-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          padding: 8px;
        }
        .mega-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .mega-item:hover {
          background: var(--gray-50);
        }
        .mega-item-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--blue);
          flex-shrink: 0;
          margin-top: 6px;
          opacity: 0.6;
          transition: var(--transition);
        }
        .mega-item:hover .mega-item-dot {
          opacity: 1;
          transform: scale(1.3);
        }
        .mega-item div {
          display: flex;
          flex-direction: column;
        }
        .mega-item strong {
          display: block;
          font-size: 0.86rem;
          color: var(--navy);
          font-weight: 600;
          margin-bottom: 2px;
        }
        .mega-item span {
          font-size: 0.76rem;
          color: var(--gray-400);
          line-height: 1.4;
        }
        .mega-footer {
          border-top: 1px solid var(--gray-100);
          padding: 12px 20px;
          background: var(--gray-50);
        }
        .mega-all {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--coral);
          transition: var(--transition);
        }
        .mega-all:hover {
          gap: 10px;
        }

        /* ═══ SIMPLE DROPDOWN (Kurumsal) ═══ */
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          min-width: 200px;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 60px rgba(10, 22, 40, 0.12), 0 1px 3px rgba(10, 22, 40, 0.04);
          padding: 6px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          pointer-events: none;
          z-index: 200;
          display: flex;
          flex-direction: column;
        }
        .dropdown-panel--visible {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .dropdown-item {
          display: block;
          padding: 10px 14px;
          font-size: 0.84rem;
          color: var(--gray-600);
          border-radius: var(--radius-sm);
          transition: var(--transition);
        }
        .dropdown-item:hover {
          background: var(--gray-50);
          color: var(--navy);
        }

        /* ═══ HEADER ACTIONS ═══ */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .header-phone {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--navy);
          border: 1.5px solid var(--gray-150, #e5e7eb);
          border-radius: var(--radius-full);
          transition: var(--transition);
          letter-spacing: -0.01em;
        }
        .header-phone:hover {
          border-color: var(--navy);
          background: var(--gray-50);
        }
        .header-cta {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 9px 22px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--white);
          background: var(--coral);
          border-radius: var(--radius-full);
          transition: all 0.25s ease;
          letter-spacing: -0.01em;
        }
        .header-cta:hover {
          background: var(--coral-dark, #c77b5e);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(200, 130, 100, 0.3);
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--navy);
          padding: 8px;
        }

        /* ═══ MOBILE OVERLAY ═══ */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: rgba(10, 22, 40, 0.5);
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .mobile-overlay--visible {
          opacity: 1;
          visibility: visible;
        }
        .mobile-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: 340px;
          max-width: 88vw;
          height: 100%;
          background: var(--white);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-panel--visible {
          transform: translateX(0);
        }
        .mobile-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--gray-100);
        }
        .mobile-panel-header button {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-500);
          transition: var(--transition);
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-panel-header button:hover {
          background: var(--gray-50);
          color: var(--navy);
        }
        .mobile-nav {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .mobile-link {
          padding: 14px 16px;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--navy);
          border-radius: var(--radius-sm);
          transition: var(--transition);
          text-align: left;
          display: block;
        }
        .mobile-link:hover {
          background: var(--gray-50);
        }
        .mobile-accordion-trigger {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
        }
        .mobile-chevron {
          transition: transform 0.25s ease;
        }
        .mobile-chevron--open {
          transform: rotate(180deg);
        }
        .mobile-subnav {
          display: flex;
          flex-direction: column;
          padding-left: 16px;
          margin-left: 16px;
          border-left: 2px solid var(--gray-100);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease, margin-bottom 0.3s ease;
          margin-bottom: 0;
        }
        .mobile-subnav--open {
          max-height: 400px;
          margin-bottom: 8px;
        }
        .mobile-subnav a {
          padding: 10px 14px;
          font-size: 0.86rem;
          color: var(--gray-500);
          transition: var(--transition);
          border-radius: var(--radius-xs);
        }
        .mobile-subnav a:hover {
          color: var(--navy);
          background: var(--gray-50);
        }
        .mobile-subnav-all {
          color: var(--coral) !important;
          font-weight: 600;
        }
        .mobile-panel-footer {
          padding: 16px 24px 24px;
          border-top: 1px solid var(--gray-100);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width: 1024px) {
          .nav-desktop {
            display: none;
          }
          .header-phone {
            display: none;
          }
          .header-cta {
            display: none;
          }
          .top-bar {
            display: none;
          }
          .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
