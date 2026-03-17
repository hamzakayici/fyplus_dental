"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone, Menu, X, ChevronDown, ArrowRight, MapPin, Clock,
  Mail, Instagram, Facebook
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
];

const servicesLinks = [
  { label: "İmplant Tedavisi", href: "/hizmetler/implant-tedavisi", desc: "Kalıcı titanyum implantlar" },
  { label: "Zirkonyum Kaplama", href: "/hizmetler/zirkonyum-kaplama", desc: "Metal-free estetik kaplamalar" },
  { label: "Diş Beyazlatma", href: "/hizmetler/dis-beyazlatma", desc: "8 tona kadar beyazlatma" },
  { label: "Gülüş Tasarımı", href: "/hizmetler/gulus-tasarimi", desc: "Hollywood Smile tasarımı" },
  { label: "Ortodonti", href: "/hizmetler/ortodonti", desc: "Şeffaf plak ve braketler" },
  { label: "Kanal Tedavisi", href: "/hizmetler/kanal-tedavisi", desc: "Ağrısız kök kanal tedavisi" },
];

const corporateLinks = [
  { label: "Doktorlarımız", href: "/doktorlarimiz" },
  { label: "Galeri", href: "/galeri" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sss" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const menuTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const openMenu = (m) => { clearTimeout(menuTimeout.current); setActiveMenu(m); };
  const closeMenu = () => { menuTimeout.current = setTimeout(() => setActiveMenu(null), 120); };
  const isActive = (href) => pathname === href || (href !== "/" && pathname.startsWith(href));

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 420, damping: 30 } },
    exit: { opacity: 0, y: 8, scale: 0.97, transition: { duration: 0.1 } },
  };

  return (
    <>
      {/* ═══ TOPBAR — Premium dark strip ═══ */}
      <div className={`topbar${scrolled ? " topbar--hidden" : ""}`}>
        <div className="container topbar__inner">
          <div className="topbar__left">
            <a href="tel:+905335165134" className="topbar__link">
              <span className="topbar__icon"><Phone size={10} /></span>
              0533 516 51 34
            </a>
            <span className="topbar__dot" />
            <a href="tel:+902129995134" className="topbar__link">
              <span className="topbar__icon"><Phone size={10} /></span>
              0212 999 51 34
            </a>
            <span className="topbar__dot" />
            <a href="mailto:info@fyplus.com.tr" className="topbar__link">
              <span className="topbar__icon"><Mail size={10} /></span>
              info@fyplus.com.tr
            </a>
          </div>
          <div className="topbar__right">
            <div className="topbar__info">
              <span className="topbar__icon"><MapPin size={10} /></span>
              Bahçeşehir, İstanbul
            </div>
            <span className="topbar__dot" />
            <div className="topbar__info">
              <span className="topbar__icon"><Clock size={10} /></span>
              Pzt–Cum 09:00–19:00
            </div>
            <span className="topbar__dot" />
            <div className="topbar__socials">
              <a href="https://instagram.com/fyplusdental" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={12} /></a>
              <a href="https://facebook.com/fyplusdental" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={12} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ MAIN HEADER ═══ */}
      <header className={`hdr${scrolled ? " hdr--scrolled" : ""}`}>
        <div className="container hdr__inner">
          {/* LOGO */}
          <Link href="/" className="hdr__logo">
            <img src="/images/header_logo.svg" alt="FyPlus Dental" width={140} height={36} style={{ padding: "8px 0" }} />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hdr__nav" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link key={l.href} href={l.href}
                  onMouseEnter={() => openMenu(null)}
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "9px 18px",
                    fontSize: "0.9rem",
                    fontWeight: active ? 600 : 500,
                    color: active ? "#2b7cad" : "#3d4654",
                    borderRadius: 10,
                    whiteSpace: "nowrap",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}>
                  {l.label}
                  {active && <span style={{
                    position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                    width: 18, height: 2.5, borderRadius: 2, background: "#2b7cad"
                  }} />}
                </Link>
              );
            })}

            {/* Hizmetlerimiz Mega */}
            <div style={{ position: "relative" }} onMouseEnter={() => openMenu("services")} onMouseLeave={closeMenu}>
              <button style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "9px 18px",
                fontSize: "0.9rem",
                fontWeight: activeMenu === "services" || pathname.startsWith("/hizmetler") ? 600 : 500,
                color: activeMenu === "services" || pathname.startsWith("/hizmetler") ? "#2b7cad" : "#3d4654",
                background: "none",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}>
                Hizmetlerimiz
                <ChevronDown size={13} style={{
                  transition: "transform 0.25s",
                  opacity: activeMenu === "services" ? 0.8 : 0.4,
                  transform: activeMenu === "services" ? "rotate(180deg)" : "none",
                }} />
                {pathname.startsWith("/hizmetler") && <span style={{
                  position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                  width: 18, height: 2.5, borderRadius: 2, background: "#2b7cad"
                }} />}
              </button>
              <AnimatePresence>
                {activeMenu === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 420, damping: 30 } }}
                    exit={{ opacity: 0, y: 8, transition: { duration: 0.1 } }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 14px)",
                      left: "50%",
                      marginLeft: -260,
                      width: 520,
                      background: "#fff",
                      border: "1px solid #eef1f5",
                      borderRadius: 16,
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.02), 0 4px 8px rgba(10,22,40,0.03), 0 16px 48px rgba(10,22,40,0.08)",
                      overflow: "hidden",
                      zIndex: 60,
                    }}>
                    <div style={{ padding: 12 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                        {servicesLinks.map((s) => (
                          <Link key={s.href} href={s.href} onClick={() => setActiveMenu(null)}
                            style={{
                              display: "flex", flexDirection: "column", gap: 3,
                              padding: "14px 16px", borderRadius: 12,
                              transition: "all 0.15s", textDecoration: "none",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = "#f5f7f9"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
                            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1a2030", letterSpacing: "-0.01em" }}>{s.label}</span>
                            <span style={{ fontSize: "0.75rem", color: "#8891a0", lineHeight: 1.4 }}>{s.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "12px 20px", borderTop: "1px solid #f0f2f5", background: "#fafbfc",
                    }}>
                      <span style={{ fontSize: "0.72rem", color: "#8891a0" }}>Kliniğimizde sunduğumuz tüm tedavi hizmetleri</span>
                      <Link href="/hizmetler" onClick={() => setActiveMenu(null)}
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          fontSize: "0.78rem", fontWeight: 600, color: "#2b7cad",
                          textDecoration: "none", transition: "gap 0.2s",
                        }}>
                        Tüm Hizmetler <ArrowRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Kurumsal Drop */}
            <div style={{ position: "relative" }} onMouseEnter={() => openMenu("corp")} onMouseLeave={closeMenu}>
              <button style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "9px 18px",
                fontSize: "0.9rem",
                fontWeight: activeMenu === "corp" ? 600 : 500,
                color: activeMenu === "corp" ? "#2b7cad" : "#3d4654",
                background: "none",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}>
                Kurumsal
                <ChevronDown size={13} style={{
                  transition: "transform 0.25s",
                  opacity: activeMenu === "corp" ? 0.8 : 0.4,
                  transform: activeMenu === "corp" ? "rotate(180deg)" : "none",
                }} />
              </button>
              <AnimatePresence>
                {activeMenu === "corp" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 420, damping: 30 } }}
                    exit={{ opacity: 0, y: 8, transition: { duration: 0.1 } }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 14px)",
                      left: "50%",
                      marginLeft: -100,
                      minWidth: 200,
                      background: "#fff",
                      border: "1px solid #eef1f5",
                      borderRadius: 14,
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.02), 0 4px 8px rgba(10,22,40,0.03), 0 16px 48px rgba(10,22,40,0.08)",
                      padding: 6,
                      zIndex: 60,
                    }}>
                    {corporateLinks.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setActiveMenu(null)}
                        style={{
                          display: "block", padding: "10px 16px",
                          fontSize: "0.85rem", fontWeight: 500, color: "#3d4654",
                          borderRadius: 10, transition: "all 0.15s",
                          textDecoration: "none",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#f5f7f9"; e.currentTarget.style.color = "#2b7cad"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#3d4654"; }}>
                        {c.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/iletisim"
              onMouseEnter={() => openMenu(null)}
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                padding: "9px 18px",
                fontSize: "0.9rem",
                fontWeight: isActive("/iletisim") ? 600 : 500,
                color: isActive("/iletisim") ? "#2b7cad" : "#3d4654",
                borderRadius: 10,
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                textDecoration: "none",
              }}>
              İletişim
              {isActive("/iletisim") && <span style={{
                position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                width: 18, height: 2.5, borderRadius: 2, background: "#2b7cad"
              }} />}
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="hdr__right">
            <Link href="/iletisim" className="hdr__cta-btn">
              Randevu Al <ArrowRight size={14} />
            </Link>
            <button className="hdr__burger" onClick={() => setMobileOpen(true)} aria-label="Menü">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE DRAWER — Premium ═══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="m-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}>
            <motion.aside className="m-drawer" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }} onClick={(e) => e.stopPropagation()}>
              <div className="m-drawer__head">
                <img src="/images/header_logo.svg" alt="FyPlus" style={{ height: 28 }} />
                <button onClick={() => setMobileOpen(false)} className="m-drawer__x"><X size={18} /></button>
              </div>
              <div className="m-drawer__body">
                <span className="m-section-label">Menü</span>
                {navLinks.map((l) => (
                  <Link key={l.href} href={l.href} className={`m-link${isActive(l.href) ? " m-link--active" : ""}`}
                    onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}

                <button className="m-acc" onClick={() => setMobileAccordion(mobileAccordion === "s" ? null : "s")}>
                  Hizmetlerimiz <ChevronDown size={16} className={mobileAccordion === "s" ? "open" : ""} />
                </button>
                <AnimatePresence>
                  {mobileAccordion === "s" && (
                    <motion.div className="m-sub" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      {servicesLinks.map((s) => (
                        <Link key={s.href} href={s.href} className="m-sublink" onClick={() => setMobileOpen(false)}>
                          <span className="m-sublink__text">{s.label}</span>
                          <span className="m-sublink__desc">{s.desc}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button className="m-acc" onClick={() => setMobileAccordion(mobileAccordion === "c" ? null : "c")}>
                  Kurumsal <ChevronDown size={16} className={mobileAccordion === "c" ? "open" : ""} />
                </button>
                <AnimatePresence>
                  {mobileAccordion === "c" && (
                    <motion.div className="m-sub" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      {corporateLinks.map((c) => (
                        <Link key={c.href} href={c.href} className="m-sublink" onClick={() => setMobileOpen(false)}>{c.label}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link href="/iletisim" className={`m-link${isActive("/iletisim") ? " m-link--active" : ""}`}
                  onClick={() => setMobileOpen(false)}>İletişim</Link>
              </div>
              <div className="m-drawer__foot">
                <a href="tel:+905335165134" className="m-btn m-btn--ghost"><Phone size={15} /> 0533 516 51 34</a>
                <Link href="/iletisim" className="m-btn m-btn--fill" onClick={() => setMobileOpen(false)}>Randevu Al <ArrowRight size={14} /></Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        /* ═══════════════════════════════════════════
           TOPBAR — Premium koyu navy strip
           ═══════════════════════════════════════════ */
        .topbar {
          background: linear-gradient(135deg, #0a1628 0%, #0f1e36 100%);
          height: 36px;
          display: flex;
          align-items: center;
          transition: margin-top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          position: relative;
          z-index: 110;
        }
        .topbar--hidden { margin-top: -36px; }
        .topbar__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }
        .topbar__left, .topbar__right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .topbar__link, .topbar__info {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .topbar__link:hover { color: rgba(255,255,255,0.9); }
        .topbar__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 4px;
          background: rgba(255,255,255,0.06);
          color: #3d9bd4;
          flex-shrink: 0;
        }
        .topbar__dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
        }
        .topbar__socials {
          display: flex;
          gap: 4px;
        }
        .topbar__socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 5px;
          color: rgba(255,255,255,0.4);
          transition: all 0.2s;
        }
        .topbar__socials a:hover {
          color: #3d9bd4;
          background: rgba(255,255,255,0.06);
        }

        /* ═══════════════════════════════════════════
           HEADER — Glassmorphism + floating feel
           ═══════════════════════════════════════════ */
        .hdr {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(24px) saturate(200%);
          -webkit-backdrop-filter: blur(24px) saturate(200%);
          border-bottom: 1px solid rgba(0,0,0,0.04);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hdr--scrolled {
          background: rgba(255,255,255,0.92);
          border-bottom-color: rgba(0,0,0,0.06);
          box-shadow:
            0 1px 0 rgba(0,0,0,0.02),
            0 4px 16px rgba(10,22,40,0.04);
        }
        .hdr__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 84px;
          transition: height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hdr--scrolled .hdr__inner { height: 72px; }

        /* Logo */
        .hdr__logo {
          display: flex;
          align-items: center;
        }
        .hdr__logo img {
          height: 56px;
          width: 220px;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hdr--scrolled .hdr__logo img {
          height: 46px;
          width: 180px;
        }

        /* Nav links */
        .hdr__nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hdr__menu-wrap { position: relative; }
        .hdr__link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 9px 18px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #3d4654;
          background: none;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          font-family: inherit;
          letter-spacing: -0.005em;
        }
        .hdr__link:hover {
          color: #111827;
          background: rgba(0,0,0,0.04);
        }
        .hdr__link--active {
          color: #2b7cad;
          font-weight: 600;
        }
        .hdr__link--active::after {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 2.5px;
          border-radius: 2px;
          background: #2b7cad;
        }
        .hdr__link--trigger { cursor: pointer; }
        .hdr__chevron {
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.4;
          margin-left: 1px;
        }
        .hdr__chevron.open {
          transform: rotate(180deg);
          opacity: 0.8;
        }

        /* ── Mega Menu ── */
        .mega {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%) !important;
          width: 520px;
          background: #ffffff;
          border: 1px solid #eef1f5;
          border-radius: 16px;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.02),
            0 4px 8px rgba(10,22,40,0.03),
            0 16px 48px rgba(10,22,40,0.08);
          overflow: hidden;
          z-index: 60;
        }
        .mega__body { padding: 12px; }
        .mega__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .mega__item {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 14px 16px;
          border-radius: 12px;
          transition: all 0.15s;
        }
        .mega__item:hover {
          background: #f5f7f9;
        }
        .mega__item-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1a2030;
          letter-spacing: -0.01em;
        }
        .mega__item:hover .mega__item-title { color: #2b7cad; }
        .mega__item-desc {
          font-size: 0.75rem;
          color: #8891a0;
          line-height: 1.4;
        }
        .mega__foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border-top: 1px solid #f0f2f5;
          background: #fafbfc;
        }
        .mega__foot-text {
          font-size: 0.72rem;
          color: #8891a0;
        }
        .mega__foot-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #2b7cad;
          transition: gap 0.2s;
        }
        .mega__foot-link:hover { gap: 8px; }

        /* ── Dropdown ── */
        .drop {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%) !important;
          min-width: 200px;
          background: #ffffff;
          border: 1px solid #eef1f5;
          border-radius: 14px;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.02),
            0 4px 8px rgba(10,22,40,0.03),
            0 16px 48px rgba(10,22,40,0.08);
          padding: 6px;
          z-index: 60;
        }
        .drop__item {
          display: block;
          padding: 10px 16px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #434c5a;
          border-radius: 10px;
          transition: all 0.15s;
        }
        .drop__item:hover {
          background: #f5f7f9;
          color: #2b7cad;
        }

        /* ── Right actions ── */
        .hdr__right {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hdr__cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #d4634b 0%, #c0503a 100%);
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(212,99,75,.35), 0 0 0 0 rgba(212,99,75,.4);
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          letter-spacing: 0.02em;
          text-transform: uppercase;
          animation: ctaPulse 2.5s ease-in-out infinite;
          position: relative;
        }
        @keyframes ctaPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(212,99,75,.35), 0 0 0 0 rgba(212,99,75,.3); }
          50% { box-shadow: 0 4px 20px rgba(212,99,75,.35), 0 0 0 8px rgba(212,99,75,0); }
        }
        .hdr__cta-arrow {
          color: rgba(255,255,255,.9);
          transition: transform 0.25s ease;
        }
        .hdr__cta-btn:hover {
          color: #fff;
          box-shadow: 0 8px 32px rgba(212,99,75,.45);
          transform: translateY(-2px) scale(1.04);
          animation: none;
        }
        .hdr__cta-btn:hover .hdr__cta-arrow {
          transform: translateX(4px);
          color: #fff;
        }
        .hdr__burger {
          display: none;
          padding: 8px;
          color: #2d3543;
          cursor: pointer;
          background: none;
          border: none;
          border-radius: 10px;
          transition: background 0.2s;
        }
        .hdr__burger:hover { background: rgba(0,0,0,0.04); }

        /* ═══════════════════════════════════════════
           MOBILE DRAWER
           ═══════════════════════════════════════════ */
        .m-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,22,40,0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000;
        }
        .m-drawer {
          position: absolute;
          top: 0;
          right: 0;
          width: 360px;
          max-width: 92vw;
          height: 100%;
          background: #fff;
          display: flex;
          flex-direction: column;
          box-shadow: -16px 0 48px rgba(10,22,40,0.15);
        }
        .m-drawer__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 24px;
          border-bottom: 1px solid #eef1f5;
        }
        .m-drawer__x {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f5f7f9;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5f6877;
          cursor: pointer;
          transition: all 0.2s;
        }
        .m-drawer__x:hover { background: #eef1f5; color: #111; transform: rotate(90deg); }
        .m-drawer__body {
          flex: 1;
          overflow-y: auto;
          padding: 12px 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .m-section-label {
          font-size: .68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: #b0b8c5;
          padding: 12px 16px 6px;
        }
        .m-link, .m-acc {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 13px 16px;
          font-size: 0.92rem;
          font-weight: 600;
          color: #2d3543;
          background: none;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          text-align: left;
          text-decoration: none;
        }
        .m-link:hover, .m-acc:hover { background: #f5f7f9; color: #0a1628; }
        .m-link--active { color: #2b7cad; background: rgba(43,124,173,0.06); font-weight: 700; }
        .m-acc svg { transition: transform 0.3s cubic-bezier(.4,0,.2,1); opacity: 0.35; }
        .m-acc svg.open { transform: rotate(180deg); opacity: 0.8; color: #2b7cad; }
        .m-sub {
          display: flex;
          flex-direction: column;
          margin-left: 12px;
          padding-left: 16px;
          border-left: 2px solid rgba(43,124,173,0.12);
          overflow: hidden;
          gap: 2px;
        }
        .m-sublink {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px 14px;
          font-size: 0.86rem;
          color: #5f6877;
          border-radius: 10px;
          transition: all 0.2s;
          text-decoration: none;
          font-weight: 500;
        }
        .m-sublink:hover { color: #2b7cad; background: rgba(43,124,173,0.04); }
        .m-sublink__text { font-weight: 600; color: #2d3543; }
        .m-sublink:hover .m-sublink__text { color: #2b7cad; }
        .m-sublink__desc { font-size: .74rem; color: #9aa3b0; line-height: 1.3; }
        .m-drawer__foot {
          padding: 16px 20px 22px;
          border-top: 1px solid #eef1f5;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #fafbfc;
        }
        .m-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.88rem;
          transition: all 0.25s;
          font-family: inherit;
          text-decoration: none;
        }
        .m-btn--ghost {
          border: 1px solid #e4e8ed;
          color: #2d3543;
          background: #fff;
        }
        .m-btn--ghost:hover { background: #f5f7f9; border-color: #d0d5de; }
        .m-btn--fill {
          background: linear-gradient(135deg, #d4634b, #c0503a);
          color: #fff;
          border: none;
          box-shadow: 0 4px 20px rgba(212,99,75,0.25);
          text-transform: uppercase;
          letter-spacing: .02em;
          font-weight: 700;
        }
        .m-btn--fill:hover {
          box-shadow: 0 6px 28px rgba(212,99,75,0.35);
          transform: translateY(-1px);
        }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width: 1100px) {
          .hdr__nav { display: none !important; }
          .hdr__cta-btn { display: none !important; }
          .hdr__burger { display: flex; }
          
          /* Topbar Swipeable on Mobile/Tablet */
          .topbar__inner {
            justify-content: flex-start;
            overflow-x: auto;
            white-space: nowrap;
            padding: 0 16px;
            gap: 20px;
            -ms-overflow-style: none; /* IE/Edge */
            scrollbar-width: none; /* Firefox */
          }
          .topbar__inner::-webkit-scrollbar { display: none; } /* Chrome, Safari, Opera */
          .topbar__left, .topbar__right { flex-shrink: 0; }
        }
        @media (max-width: 640px) {
          .hdr__inner { height: 70px; padding: 0 16px; transition: height 0.4s; }
          .hdr--scrolled .hdr__inner { height: 60px; }
          
          .hdr__logo img { width: 170px; height: 44px; transition: all 0.4s; }
          .hdr--scrolled .hdr__logo img { width: 150px; height: 38px; }
          
          .m-drawer { width: 100%; max-width: 100vw; }
        }
      `}</style>
    </>
  );
}
