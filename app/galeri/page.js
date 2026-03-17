"use client";
import { useState } from "react";
import Link from "next/link";
import { X, ZoomIn } from "lucide-react";

const categories = ["Tümü", "Klinik", "Tedavi", "Ekip", "Teknoloji"];

const images = [
  { src: "/images/gallery/lobby.png", alt: "FyPlus Dental Lobi & Resepsiyon", category: "Klinik" },
  { src: "/images/gallery/treatment-room.png", alt: "Modern Tedavi Odası", category: "Tedavi" },
  { src: "/images/gallery/exterior.png", alt: "Klinik Dış Görünüm", category: "Klinik" },
  { src: "/images/gallery/smile-result.png", alt: "Gülüş Tasarımı Sonucu", category: "Tedavi" },
  { src: "/images/gallery/dental-tech.png", alt: "3D Tarayıcı & CAD/CAM Teknoloji", category: "Teknoloji" },
  { src: "/images/gallery/dental-team.png", alt: "Uzman Hekim Kadromuz", category: "Ekip" },
  { src: "/images/hero-clinic.jpg", alt: "Klinik Genel Görünüm", category: "Klinik" },
  { src: "/images/about-clinic.png", alt: "Bekleme Salonu", category: "Klinik" },
  { src: "/images/treatment.png", alt: "Tedavi Süreci", category: "Tedavi" },
];

export default function GaleriPage() {
  const [active, setActive] = useState("Tümü");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "Tümü" ? images : images.filter(i => i.category === active);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link> / <span>Galeri</span>
          </div>
          <h1>Galeri</h1>
          <p className="hero-subtitle">Kliniğimizden kareler, tedavi öncesi-sonrası görseller ve ekip fotoğrafları.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Kategori Filtre */}
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter${active === cat ? " gallery-filter--active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="gallery-item"
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-item__overlay">
                  <ZoomIn size={24} />
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Kapat">
            <X size={28} />
          </button>
          <img src={lightbox.src} alt={lightbox.alt} onClick={e => e.stopPropagation()} />
          <p className="lightbox__caption">{lightbox.alt}</p>
        </div>
      )}

      <style jsx>{`
        .gallery-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 40px;
        }
        .gallery-filter {
          padding: 9px 22px;
          border: 1.5px solid var(--gray-200);
          border-radius: var(--radius-full);
          background: var(--white);
          color: var(--gray-500);
          font-size: .85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all .25s ease;
        }
        .gallery-filter:hover {
          border-color: var(--blue);
          color: var(--blue);
        }
        .gallery-filter--active {
          background: var(--blue);
          border-color: var(--blue);
          color: #fff;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .gallery-item {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
        }
        .gallery-item:hover img {
          transform: scale(1.06);
        }
        .gallery-item__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,22,40,.7) 0%, rgba(10,22,40,.1) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          gap: 8px;
          padding: 20px;
          opacity: 0;
          transition: opacity .3s ease;
          color: #fff;
        }
        .gallery-item:hover .gallery-item__overlay {
          opacity: 1;
        }
        .gallery-item__overlay span {
          font-size: .8rem;
          font-weight: 600;
          text-align: center;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(10,22,40,.92);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: lbFadeIn .3s ease;
        }
        .lightbox img {
          max-width: 90vw;
          max-height: 78vh;
          border-radius: var(--radius-xl);
          box-shadow: 0 24px 80px rgba(0,0,0,.4);
          object-fit: contain;
        }
        .lightbox__close {
          position: absolute;
          top: 20px;
          right: 24px;
          background: rgba(255,255,255,.1);
          border: none;
          color: #fff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background .25s;
        }
        .lightbox__close:hover { background: rgba(255,255,255,.2); }
        .lightbox__caption {
          margin-top: 16px;
          color: rgba(255,255,255,.7);
          font-size: .9rem;
          font-weight: 500;
        }
        @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .gallery-item { aspect-ratio: 1/1; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
