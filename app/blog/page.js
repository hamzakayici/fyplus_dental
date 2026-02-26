'use client';
import Link from 'next/link';

const posts = [
  { slug: 'implant-tedavisi-rehberi', title: 'İmplant Tedavisi: Bilmeniz Gereken Her Şey', excerpt: 'İmplant tedavisi hakkında merak edilen tüm soruların cevapları. Tedavi süreci, bakım önerileri ve daha fazlası.', date: '15 Şubat 2026', category: 'İmplant', readTime: '8 dk' },
  { slug: 'dis-beyazlatma-yontemleri', title: 'Profesyonel Diş Beyazlatma Yöntemleri', excerpt: 'Klinikte ve evde uygulanan diş beyazlatma yöntemleri, avantajları ve sonuç karşılaştırması.', date: '10 Şubat 2026', category: 'Estetik', readTime: '6 dk' },
  { slug: 'cocuklarda-dis-bakimi', title: 'Çocuklarda Diş Bakımı: 0-14 Yaş Rehberi', excerpt: 'Çocuğunuzun ağız ve diş sağlığını nasıl koruyabileceğinizi öğrenin. Yaşa göre bakım önerileri.', date: '5 Şubat 2026', category: 'Pedodonti', readTime: '7 dk' },
  { slug: 'zirkonyum-porselen-farki', title: 'Zirkonyum vs Porselen: Hangisi Daha İyi?', excerpt: 'Zirkonyum ve porselen kaplama arasındaki farklar, avantajlar ve tedavi süreci karşılaştırması.', date: '28 Ocak 2026', category: 'Protetik', readTime: '5 dk' },
  { slug: 'dis-eti-hastaliklari', title: 'Diş Eti Hastalıkları ve Tedavi Yöntemleri', excerpt: 'Diş eti kanaması, çekilme ve iltihabı hakkında uzman bilgisi. Erken teşhis ve tedavi önerileri.', date: '20 Ocak 2026', category: 'Periodontoloji', readTime: '6 dk' },
  { slug: 'gulus-tasarimi-sureci', title: 'Hollywood Smile: Gülüş Tasarımı Süreci', excerpt: 'Dijital gülüş tasarımı nasıl yapılır? Aşama aşama Hollywood Smile tedavi süreci anlatımı.', date: '12 Ocak 2026', category: 'Estetik', readTime: '7 dk' },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">Ana Sayfa</Link><span>/</span><span>Blog</span></nav>
        <h1>Blog</h1>
        <p>Diş sağlığı hakkında uzman makaleleri ve tedavi rehberleri.</p>
      </div></section>

      <section className="section"><div className="container">
        <div className="blog-grid">
          {posts.map((p, i) => (
            <article key={i} className="blog-card">
              <div className="blog-img"><span>📝</span></div>
              <div className="blog-body">
                <div className="blog-meta"><span className="blog-cat">{p.category}</span><span>{p.date}</span><span>{p.readTime}</span></div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="blog-link">Devamını Oku →</span>
              </div>
            </article>
          ))}
        </div>
      </div></section>

      <style jsx>{`
        .page-hero{background:linear-gradient(135deg,var(--navy),var(--blue-dark));padding:140px 0 60px;color:var(--white)}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.85rem;margin-bottom:16px;color:rgba(255,255,255,0.6)}
        .breadcrumb a{color:rgba(255,255,255,0.6)}.breadcrumb a:hover{color:var(--coral)}
        .page-hero h1{margin-bottom:12px}.page-hero p{color:rgba(255,255,255,0.75);font-size:1.05rem;max-width:600px}
        .blog-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px}
        .blog-card{background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-lg);overflow:hidden;transition:var(--transition)}
        .blog-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
        .blog-img{aspect-ratio:16/9;background:linear-gradient(135deg,var(--gray-100),var(--gray-200));display:flex;align-items:center;justify-content:center;font-size:2.5rem}
        .blog-body{padding:24px}
        .blog-meta{display:flex;gap:12px;font-size:0.8rem;color:var(--gray-400);margin-bottom:10px;flex-wrap:wrap}
        .blog-cat{color:var(--blue);font-weight:600}
        .blog-card h3{font-family:var(--font-body);font-size:1.05rem;font-weight:700;margin-bottom:10px;color:var(--navy)}
        .blog-card p{color:var(--gray-500);font-size:0.88rem;line-height:1.7;margin-bottom:14px}
        .blog-link{color:var(--coral);font-weight:600;font-size:0.88rem}
        @media(max-width:768px){.blog-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
