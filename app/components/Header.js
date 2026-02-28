"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const servicesLinks = [
  { label: "İmplant Tedavisi", href: "/hizmetler/implant-tedavisi" },
  { label: "Zirkonyum Kaplama", href: "/hizmetler/zirkonyum-kaplama" },
  { label: "Diş Beyazlatma", href: "/hizmetler/dis-beyazlatma" },
  { label: "Gülüş Tasarımı", href: "/hizmetler/gulus-tasarimi" },
  { label: "Ortodonti", href: "/hizmetler/ortodonti" },
  { label: "Kanal Tedavisi", href: "/hizmetler/kanal-tedavisi" },
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <>
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

            <div className="nav-dropdown">
              <button className="nav-link" type="button">
                Hizmetlerimiz <ChevronDown size={14} />
              </button>
              <div className="dropdown-panel">
                <div className="dropdown-content">
                  {servicesLinks.map((s) => (
                    <Link key={s.href} href={s.href} className="dropdown-item">
                      {s.label}
                    </Link>
                  ))}
                  <div className="dropdown-divider" />
                  <Link href="/hizmetler" className="dropdown-item dropdown-all">
                    Tüm Hizmetler <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="nav-dropdown">
              <button className="nav-link" type="button">
                Kurumsal <ChevronDown size={14} />
              </button>
              <div className="dropdown-panel">
                <div className="dropdown-content">
                  {corporateLinks.map((c) => (
                    <Link key={c.href} href={c.href} className="dropdown-item">
                      {c.label}
                    </Link>
                  ))}
                </div>
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
              <Phone size={15} />
              <span>0533 516 51 34</span>
            </a>
            <Link href="/iletisim" className="btn btn-primary btn-sm">
              Randevu Al
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
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div
            className="mobile-panel"
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
                {mobileDropdown === "hizmetler" && (
                  <div className="mobile-subnav">
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
                )}
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
                {mobileDropdown === "kurumsal" && (
                  <div className="mobile-subnav">
                    {corporateLinks.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setMobileOpen(false)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
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
      )}

      <style jsx>{`
        /* ═══ HEADER ═══ */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: var(--transition);
          height: 72px;
        }
        .header--scrolled {
          border-bottom-color: var(--gray-100);
          box-shadow: 0 1px 12px rgba(10, 22, 40, 0.04);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .logo img {
          height: 36px;
          width: auto;
        }

        /* ═══ DESKTOP NAV ═══ */
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-link {
          padding: 8px 16px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-600);
          border-radius: var(--radius-sm);
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          font-family: var(--font-body);
        }
        .nav-link:hover {
          color: var(--navy);
          background: var(--gray-50);
        }

        /* ═══ DROPDOWN ═══ */
        .nav-dropdown {
          position: relative;
        }
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          min-width: 220px;
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          padding: 8px;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
          pointer-events: none;
          z-index: 200;
        }
        .nav-dropdown:hover .dropdown-panel {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .dropdown-content {
          display: flex;
          flex-direction: column;
        }
        .dropdown-item {
          padding: 10px 14px;
          font-size: 0.86rem;
          color: var(--gray-600);
          border-radius: var(--radius-sm);
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .dropdown-item:hover {
          background: var(--gray-50);
          color: var(--navy);
        }
        .dropdown-divider {
          height: 1px;
          background: var(--gray-100);
          margin: 4px 0;
        }
        .dropdown-all {
          color: var(--blue);
          font-weight: 600;
        }

        /* ═══ HEADER ACTIONS ═══ */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .header-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--navy);
          border: 1.5px solid var(--gray-200);
          border-radius: var(--radius-full);
          transition: var(--transition);
        }
        .header-phone:hover {
          border-color: var(--navy);
          box-shadow: var(--shadow-sm);
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
          background: rgba(10, 22, 40, 0.4);
          backdrop-filter: blur(4px);
        }
        .mobile-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: 320px;
          max-width: 85vw;
          height: 100%;
          background: var(--white);
          display: flex;
          flex-direction: column;
          animation: slideIn 0.3s ease;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
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
          color: var(--blue);
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
