"use client";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
} from "lucide-react";

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
  { label: "Sık Sorulan Sorular", href: "/sss" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img
                src="/images/logo.png"
                alt="FyPlus Dental Bahçeşehir"
                width={130}
                height={36}
                style={{
                  marginBottom: "16px",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.9,
                }}
              />
              <p className="footer-about">
                Bahçeşehir&apos;de son teknoloji ile donatılmış kliniğimizde,
                uzman kadromuzla premium diş sağlığı hizmeti sunuyoruz.
              </p>
              <div className="footer-socials">
                <a
                  href="https://instagram.com/fyplusdental"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com/fyplusdental"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://twitter.com/fyplusdental"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Hizmetlerimiz</h4>
              <ul>
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href}>
                      <ChevronRight size={14} /> {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Hızlı Bağlantılar</h4>
              <ul>
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>
                      <ChevronRight size={14} /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>İletişim</h4>
              <div className="footer-contact">
                <div>
                  <MapPin size={16} />{" "}
                  <span>
                    Bahçeşehir 1. Kısım Mah.
                    <br />
                    Başakşehir / İstanbul
                  </span>
                </div>
                <div>
                  <Phone size={16} />{" "}
                  <a href="tel:+902120000000">+90 212 000 00 00</a>
                </div>
                <div>
                  <Mail size={16} />{" "}
                  <a href="mailto:info@fyplus.com.tr">info@fyplus.com.tr</a>
                </div>
                <div>
                  <Clock size={16} />{" "}
                  <span>
                    Pzt-Cum: 09:00-19:00
                    <br />
                    Cumartesi: 10:00-16:00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} FyPlus Dental Clinic. Tüm
              hakları saklıdır.
            </p>
            <p>Bahçeşehir Diş Kliniği | Başakşehir</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: var(--navy);
          color: var(--gray-400);
          padding: 64px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .footer-about {
          font-size: 0.88rem;
          line-height: 1.7;
          margin-bottom: 20px;
          max-width: 280px;
        }
        .footer-socials {
          display: flex;
          gap: 8px;
        }
        .footer-socials a {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .footer-socials a:hover {
          border-color: var(--blue);
          color: var(--blue);
        }
        .footer-col h4 {
          font-family: var(--font-heading);
          color: var(--white);
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .footer-col ul {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-col ul li a {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--gray-400);
          transition: var(--transition);
        }
        .footer-col ul li a:hover {
          color: var(--white);
        }
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-contact div {
          display: flex;
          gap: 10px;
          font-size: 0.85rem;
          line-height: 1.6;
          align-items: flex-start;
        }
        .footer-contact a {
          color: var(--gray-400);
          transition: var(--transition);
        }
        .footer-contact a:hover {
          color: var(--white);
        }
        .footer-contact svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--blue);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          font-size: 0.8rem;
          color: var(--gray-500);
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
