import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "FyPlus Dental Clinic — Ağız ve diş sağlığı hakkında bilgilendirici yazılar.",
};

const posts = [
  { title: "İmplant Tedavisinde Dikkat Edilmesi Gerekenler", desc: "İmplant tedavisi öncesi ve sonrası bilmeniz gereken önemli noktalar.", date: "15 Şubat 2026" },
  { title: "Diş Beyazlatma Yöntemleri Karşılaştırması", desc: "Ofis tipi ve ev tipi beyazlatma yöntemlerinin avantaj ve dezavantajları.", date: "8 Şubat 2026" },
  { title: "Çocuklarda Diş Bakımının Önemi", desc: "Çocuklarda sağlıklı diş gelişimi için izlenmesi gereken adımlar.", date: "1 Şubat 2026" },
];

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>Blog</span>
          </div>
          <h1>Blog</h1>
          <p className="hero-subtitle">Ağız ve diş sağlığı hakkında bilgilendirici yazılar.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
          {posts.map((p, i) => (
            <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: ".75rem", color: "var(--gray-400)", fontWeight: 500 }}>{p.date}</span>
              <h3 style={{ fontSize: "1.05rem" }}>{p.title}</h3>
              <p style={{ fontSize: ".86rem", lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
