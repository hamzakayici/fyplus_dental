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
            <div className="footer-col footer-brand">
              <img
                src="/images/footer_logo.svg"
                alt="FyPlus Dental Bahçeşehir"
                width={130}
                height={36}
                style={{
                  marginBottom: "18px",
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
                  <Instagram size={17} />
                </a>
                <a
                  href="https://facebook.com/fyplusdental"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href="https://twitter.com/fyplusdental"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={17} />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Hizmetlerimiz</h4>
              <ul>
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href}>
                      <ChevronRight size={13} /> {s.label}
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
                      <ChevronRight size={13} /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>İletişim</h4>
              <div className="footer-contact">
                <div>
                  <MapPin size={15} />
                  <span>
                    Bahçeşehir 1. Kısım Mah.
                    <br />
                    Vali Recep Yazıcıoğlu Cad.
                    <br />
                    No:50 BG, Başakşehir / İstanbul
                  </span>
                </div>
                <div>
                  <Phone size={15} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    <a href="tel:+905335165134">+90 533 516 51 34</a>
                    <a href="tel:+902129995134" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                      +90 212 999 51 34
                    </a>
                  </div>
                </div>
                <div>
                  <Mail size={15} />
                  <a href="mailto:info@fyplus.com.tr">info@fyplus.com.tr</a>
                </div>
                <div>
                  <Clock size={15} />
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
          grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-about {
          font-size: 0.88rem;
          line-height: 1.75;
          margin-bottom: 20px;
          max-width: 280px;
          color: var(--gray-400);
        }
        .footer-socials {
          display: flex;
          gap: 8px;
        }
        .footer-socials a {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-400);
          transition: var(--transition);
        }
        .footer-socials a:hover {
          border-color: var(--blue);
          color: var(--blue);
          background: rgba(43, 124, 173, 0.08);
        }
        .footer-col h4 {
          font-family: var(--font-heading);
          color: var(--white);
          font-size: 0.92rem;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }
        .footer-col ul {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .footer-col ul li a {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          color: var(--gray-400);
          transition: var(--transition);
          padding: 3px 0;
        }
        .footer-col ul li a:hover {
          color: var(--white);
          padding-left: 4px;
        }
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-contact > div {
          display: flex;
          gap: 10px;
          font-size: 0.84rem;
          line-height: 1.65;
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
          opacity: 0.7;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          font-size: 0.78rem;
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
