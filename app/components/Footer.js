'use client';
import Link from 'next/link';

const services = [
  { name: 'İmplant Tedavisi', slug: 'implant-tedavisi' },
  { name: 'Zirkonyum Kaplama', slug: 'zirkonyum-kaplama' },
  { name: 'Diş Beyazlatma', slug: 'dis-beyazlatma' },
  { name: 'Ortodonti', slug: 'ortodonti' },
  { name: 'Gülüş Tasarımı', slug: 'gulus-tasarimi' },
  { name: 'Kanal Tedavisi', slug: 'kanal-tedavisi' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <img src="/images/logo.png" alt="FyPlus Dental" width="150" height="47" className="footer-logo" />
            <p>FyPlus Dental Clinic olarak, en son teknolojiyi kullanarak hastalarımıza premium diş sağlığı hizmeti sunuyoruz.</p>
            <div className="footer-social">
              <a href="https://instagram.com/fyplusdental" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://facebook.com/fyplusdental" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://twitter.com/fyplusdental" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Hizmetlerimiz</h4>
            <ul>{services.map(s => <li key={s.slug}><Link href={`/hizmetler/${s.slug}`}>{s.name}</Link></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Hızlı Bağlantılar</h4>
            <ul>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/doktorlarimiz">Doktorlarımız</Link></li>
              <li><Link href="/galeri">Galeri</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/sss">Sık Sorulan Sorular</Link></li>
              <li><Link href="/gizlilik-politikasi">Gizlilik Politikası</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <ul className="footer-contact">
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> İstanbul, Türkiye</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> +90 212 000 00 00</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg> info@fyplus.com.tr</li>
            </ul>
            <div className="footer-hours">
              <h5>Çalışma Saatleri</h5>
              <p>Pzt - Cum: 09:00 - 19:00</p>
              <p>Cumartesi: 10:00 - 16:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 FyPlus Dental Clinic. Tüm hakları saklıdır.</p>
        </div>
      </div>
      <style jsx>{`
        .footer{background:var(--navy);color:rgba(255,255,255,0.7);padding:80px 0 0}
        .footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr 1.2fr;gap:48px}
        .footer-logo{filter:brightness(0) invert(1);margin-bottom:16px;height:44px;width:auto}
        .footer-about p{font-size:0.9rem;line-height:1.7;margin-bottom:20px}
        .footer-social{display:flex;gap:12px}
        .footer-social a{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;transition:var(--transition)}
        .footer-social a:hover{background:var(--coral);color:#fff;transform:translateY(-3px)}
        .footer-col h4{font-family:var(--font-body);font-size:1rem;font-weight:700;color:var(--white);margin-bottom:20px;position:relative;padding-bottom:12px}
        .footer-col h4::after{content:'';position:absolute;bottom:0;left:0;width:30px;height:2px;background:var(--coral)}
        .footer-col ul{display:flex;flex-direction:column;gap:10px}
        .footer-col li{font-size:0.88rem}
        .footer-col li a{transition:var(--transition)}
        .footer-col li a:hover{color:var(--coral);padding-left:4px}
        .footer-contact li{display:flex;align-items:center;gap:10px;font-size:0.88rem}
        .footer-hours{margin-top:20px}
        .footer-hours h5{font-family:var(--font-body);font-size:0.9rem;font-weight:600;color:var(--white);margin-bottom:8px}
        .footer-hours p{font-size:0.85rem;line-height:1.8}
        .footer-bottom{margin-top:48px;padding:24px 0;border-top:1px solid rgba(255,255,255,0.1);text-align:center;font-size:0.85rem}
        @media(max-width:1024px){.footer-grid{grid-template-columns:1fr 1fr;gap:40px}}
        @media(max-width:600px){.footer-grid{grid-template-columns:1fr;gap:32px}}
      `}</style>
    </footer>
  );
}
