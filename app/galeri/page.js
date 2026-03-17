import Link from "next/link";

export const metadata = {
  title: "Galeri",
  description: "FyPlus Dental Clinic Bahçeşehir — Kliniğimizden kareler.",
};

const images = [
  { src: "/images/real/lobby.png", alt: "FyPlus Dental Lobi" },
  { src: "/images/real/treatment.png", alt: "Tedavi Odası" },
  { src: "/images/real/exterior.png", alt: "Klinik Dış Görünüm" },
  { src: "/images/hero-clinic.png", alt: "Klinik İç Mekan" },
  { src: "/images/about-clinic.png", alt: "Klinik Hakkında" },
  { src: "/images/treatment.png", alt: "Tedavi Süreci" },
];

export default function GaleriPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>Galeri</span>
          </div>
          <h1>Galeri</h1>
          <p className="hero-subtitle">Kliniğimizden kareler ve tedavi öncesi-sonrası görseller.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 16,
          }}>
            {images.map((img, i) => (
              <div key={i} style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid var(--gray-100)",
                transition: "all .3s",
              }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
