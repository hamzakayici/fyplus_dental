"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ChevronRight } from "lucide-react";

const services = [
  { label: "İmplant Tedavisi", href: "/hizmetler/implant-tedavisi" },
  { label: "Zirkonyum Kaplama", href: "/hizmetler/zirkonyum-kaplama" },
  { label: "Diş Beyazlatma", href: "/hizmetler/dis-beyazlatma" },
  { label: "Gülüş Tasarımı", href: "/hizmetler/gulus-tasarimi" },
  { label: "Ortodonti", href: "/hizmetler/ortodonti" },
  { label: "Kanal Tedavisi", href: "/hizmetler/kanal-tedavisi" },
];

const quickLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Doktorlarımız", href: "/doktorlarimiz" },
  { label: "Galeri", href: "/galeri" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/sss" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <img src="/images/footer_logo.svg" alt="FyPlus Dental" className="footer-logo" />
              <p className="footer-about">
                Bahçeşehir&apos;de son teknoloji ile donatılmış kliniğimizde, uzman kadromuzla premium diş sağlığı hizmeti sunuyoruz.
              </p>
              <div className="footer-socials">
                <a href="https://instagram.com/fyplusdental" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="https://facebook.com/fyplusdental" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Hizmetlerimiz</h4>
              <ul>
                {services.map((s) => (
                  <li key={s.href}><Link href={s.href}><ChevronRight size={12} /> {s.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Hızlı Bağlantılar</h4>
              <ul>
                {quickLinks.map((l) => (
                  <li key={l.href}><Link href={l.href}><ChevronRight size={12} /> {l.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>İletişim</h4>
              <div className="footer-contact">
                <div>
                  <MapPin size={14} />
                  <span>Bahçeşehir 1. Kısım Mah.<br />Vali Recep Yazıcıoğlu Cad.<br />No:50 BG, Başakşehir / İstanbul</span>
                </div>
                <div>
                  <Phone size={14} />
                  <div className="footer-phones">
                    <a href="tel:+905335165134">0533 516 51 34</a>
                    <a href="tel:+902129995134" className="footer-phone-alt">0212 999 51 34</a>
                  </div>
                </div>
                <div>
                  <Mail size={14} />
                  <a href="mailto:info@fyplus.com.tr">info@fyplus.com.tr</a>
                </div>
                <div>
                  <Clock size={14} />
                  <span>Pzt–Cum: 09:00–19:00<br />Cumartesi: 10:00–16:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} FyPlus Dental Clinic. Tüm hakları saklıdır.</p>
            <p>Bahçeşehir Diş Kliniği | Başakşehir</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer{background:#0a1628;color:#8891a0;padding:64px 0 0}
        .footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.3fr;gap:40px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.06)}
        .footer-logo{height:32px;width:auto;margin-bottom:18px;filter:brightness(0) invert(1);opacity:.9}
        .footer-about{font-size:.86rem;line-height:1.75;margin-bottom:20px;max-width:280px;color:#8891a0}
        .footer-socials{display:flex;gap:8px}
        .footer-socials a{width:34px;height:34px;border-radius:8px;border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;color:#8891a0;transition:all .2s}
        .footer-socials a:hover{border-color:#2b7cad;color:#2b7cad;background:rgba(43,124,173,.08)}
        .footer-col h4{font-family:var(--font-heading);color:#fff;font-size:.9rem;font-weight:600;margin-bottom:18px}
        .footer-col ul{display:flex;flex-direction:column;gap:5px}
        .footer-col ul li a{display:flex;align-items:center;gap:6px;font-size:.84rem;color:#8891a0;padding:3px 0;transition:all .2s}
        .footer-col ul li a:hover{color:#fff;padding-left:4px}
        .footer-contact{display:flex;flex-direction:column;gap:12px}
        .footer-contact>div{display:flex;gap:10px;font-size:.84rem;line-height:1.65;align-items:flex-start}
        .footer-contact svg{flex-shrink:0;margin-top:2px;color:#2b7cad;opacity:.7}
        .footer-contact a{color:#8891a0;transition:color .2s}
        .footer-contact a:hover{color:#fff}
        .footer-phones{display:flex;flex-direction:column;gap:2px}
        .footer-phone-alt{font-size:.78rem;opacity:.7}
        .footer-bottom{display:flex;justify-content:space-between;align-items:center;padding:24px 0;font-size:.76rem;color:#5f6877}
        @media(max-width:1024px){.footer-grid{grid-template-columns:1fr 1fr;gap:32px}}
        @media(max-width:600px){.footer-grid{grid-template-columns:1fr}.footer-bottom{flex-direction:column;gap:8px;text-align:center}}
      `}</style>
    </>
  );
}
