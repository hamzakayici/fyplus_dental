"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (name) => {
    if (openDropdown === name) setOpenDropdown(null);
    else setOpenDropdown(name);
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href="tel:+905335165134">
              <Phone size={13} /> +90 533 516 51 34
            </a>
            <a href="mailto:info@fyplus.com.tr">
              <Mail size={13} /> info@fyplus.com.tr
            </a>
          </div>
          <div className="topbar-right">
            <span>
              <Clock size={13} /> Pzt-Cum: 09:00-19:00 | Cmt: 10:00-16:00
            </span>
          </div>
        </div>
      </div>

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

            <div className="nav-item-dropdown">
              <span className="nav-link">
                Hizmetlerimiz <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                <Link href="/hizmetler/implant-tedavisi">İmplant Tedavisi</Link>
                <Link href="/hizmetler/zirkonyum-kaplama">
                  Zirkonyum Kaplama
                </Link>
                <Link href="/hizmetler/dis-beyazlatma">Diş Beyazlatma</Link>
                <Link href="/hizmetler/gulus-tasarimi">Gülüş Tasarımı</Link>
                <Link href="/hizmetler/ortodonti">Ortodonti</Link>
                <Link href="/hizmetler/kanal-tedavisi">Kanal Tedavisi</Link>
                <Link href="/hizmetler" className="view-all">
                  Tüm Hizmetler &rarr;
                </Link>
              </div>
            </div>

            <div className="nav-item-dropdown">
              <span className="nav-link">
                Kurumsal <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                <Link href="/doktorlarimiz">Doktorlarımız</Link>
                <Link href="/galeri">Galeri</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/sss">Sık Sorulan Sorular</Link>
              </div>
            </div>

            <Link href="/iletisim" className="nav-link">
              İletişim
            </Link>
          </nav>

          <div className="header-actions">
            <a
              href="tel:+905335165134"
              className="btn btn-outline btn-sm desktop-only"
              style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            >
              <Phone size={14} /> Hemen Ara
            </a>
            <Link href="/iletisim" className="btn btn-primary btn-sm">
              Randevu Al <ChevronRight size={15} />
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

      {mobileOpen && (
        <div className="mobile-menu" onClick={() => setMobileOpen(false)}>
          <div
            className="mobile-menu-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimizda"
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              Hakkımızda
            </Link>

            <div className="mobile-dropdown">
              <button
                className="mobile-link"
                onClick={() => toggleDropdown("hizmetler")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  border: "none",
                  background: "none",
                }}
              >
                Hizmetlerimiz{" "}
                <ChevronDown
                  size={16}
                  style={{
                    transform:
                      openDropdown === "hizmetler" ? "rotate(180deg)" : "none",
                    transition: "0.3s",
                  }}
                />
              </button>
              {openDropdown === "hizmetler" && (
                <div className="mobile-sublinks">
                  <Link
                    href="/hizmetler/implant-tedavisi"
                    onClick={() => setMobileOpen(false)}
                  >
                    İmplant Tedavisi
                  </Link>
                  <Link
                    href="/hizmetler/zirkonyum-kaplama"
                    onClick={() => setMobileOpen(false)}
                  >
                    Zirkonyum Kaplama
                  </Link>
                  <Link
                    href="/hizmetler/dis-beyazlatma"
                    onClick={() => setMobileOpen(false)}
                  >
                    Diş Beyazlatma
                  </Link>
                  <Link
                    href="/hizmetler/gulus-tasarimi"
                    onClick={() => setMobileOpen(false)}
                  >
                    Gülüş Tasarımı
                  </Link>
                  <Link
                    href="/hizmetler"
                    onClick={() => setMobileOpen(false)}
                    style={{ color: "var(--coral)", fontWeight: 600 }}
                  >
                    Tüm Hizmetler
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-dropdown">
              <button
                className="mobile-link"
                onClick={() => toggleDropdown("kurumsal")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  border: "none",
                  background: "none",
                }}
              >
                Kurumsal{" "}
                <ChevronDown
                  size={16}
                  style={{
                    transform:
                      openDropdown === "kurumsal" ? "rotate(180deg)" : "none",
                    transition: "0.3s",
                  }}
                />
              </button>
              {openDropdown === "kurumsal" && (
                <div className="mobile-sublinks">
                  <Link
                    href="/doktorlarimiz"
                    onClick={() => setMobileOpen(false)}
                  >
                    Doktorlarımız
                  </Link>
                  <Link href="/galeri" onClick={() => setMobileOpen(false)}>
                    Galeri
                  </Link>
                  <Link href="/blog" onClick={() => setMobileOpen(false)}>
                    Blog
                  </Link>
                  <Link href="/sss" onClick={() => setMobileOpen(false)}>
                    Sık Sorulan Sorular
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/iletisim"
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              İletişim
            </Link>

            <div
              style={{
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <a
                href="tel:+905335165134"
                className="btn btn-outline"
                style={{ justifyContent: "center" }}
              >
                <Phone size={16} /> 0533 516 51 34
              </a>
              <Link
                href="/iletisim"
                className="btn btn-primary"
                style={{ justifyContent: "center" }}
                onClick={() => setMobileOpen(false)}
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .topbar {
          background: var(--navy);
          color: var(--gray-400);
          font-size: 0.78rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .topbar-left,
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .topbar a,
        .topbar span {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--gray-400);
          transition: var(--transition);
        }
        .topbar a:hover {
          color: var(--white);
        }
        .header {
          position: fixed;
          top: 38px;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--gray-200);
          transition: var(--transition);
        }
        .header--scrolled {
          top: 0;
          box-shadow: var(--shadow-sm);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .logo img {
          height: 36px;
          width: auto;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          padding: 8px 14px;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--gray-600);
          border-radius: var(--radius-sm);
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }
        .nav-link:hover {
          color: var(--navy);
          background: var(--gray-50);
        }

        /* Dropdown Styles */
        .nav-item-dropdown {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 200px;
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          padding: 8px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        .nav-item-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-menu a {
          padding: 10px 16px;
          font-size: 0.85rem;
          color: var(--gray-600);
          transition: var(--transition);
        }
        .dropdown-menu a:hover {
          background: var(--gray-50);
          color: var(--navy);
        }
        .dropdown-menu .view-all {
          border-top: 1px solid var(--gray-100);
          margin-top: 4px;
          padding-top: 10px;
          color: var(--blue);
          font-weight: 600;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn-sm {
          padding: 10px 20px;
          font-size: 0.84rem;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--navy);
          padding: 8px;
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(10, 22, 40, 0.5);
          backdrop-filter: blur(4px);
        }
        .mobile-menu-inner {
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 100%;
          background: var(--white);
          padding: 80px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }
        .mobile-link {
          padding: 14px 16px;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--navy);
          border-radius: var(--radius-sm);
          transition: var(--transition);
          text-align: left;
        }
        .mobile-link:hover {
          background: var(--gray-50);
          color: var(--blue);
        }
        .mobile-sublinks {
          display: flex;
          flex-direction: column;
          padding-left: 20px;
          border-left: 2px solid var(--gray-100);
          margin-left: 16px;
          margin-bottom: 8px;
        }
        .mobile-sublinks a {
          padding: 10px 0;
          font-size: 0.88rem;
          color: var(--gray-600);
        }

        @media (max-width: 1024px) {
          .topbar {
            display: none;
          }
          .header {
            top: 0;
          }
          .nav-desktop {
            display: none;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
