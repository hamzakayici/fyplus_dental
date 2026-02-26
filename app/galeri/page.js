"use client";
import Link from "next/link";
import { ChevronRight, Camera, ArrowRight } from "lucide-react";

const categories = [
  { title: "Klinik Görünüm", count: 8 },
  { title: "Tedavi Öncesi-Sonrası", count: 12 },
  { title: "Ekipman ve Teknoloji", count: 6 },
  { title: "Ekibimiz", count: 4 },
];

export default function GaleriPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span>Galeri</span>
          </div>
          <h1>Galeri</h1>
          <p className="hero-subtitle">
            Bahçeşehir FyPlus Dental Clinic kliniğimiz, tedavi sonuçlarımız ve
            modern ekipmanlarımız.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {categories.map((c, i) => (
              <div
                key={i}
                className="card"
                style={{ padding: 0, overflow: "hidden", cursor: "pointer" }}
              >
                <div
                  style={{
                    height: "240px",
                    background: `linear-gradient(135deg, var(--navy), hsl(${200 + i * 15}, 60%, ${30 + i * 5}%))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Camera
                    size={40}
                    style={{ color: "rgba(255,255,255,0.2)" }}
                  />
                </div>
                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3>{c.title}</h3>
                    <span
                      style={{ color: "var(--gray-500)", fontSize: "0.85rem" }}
                    >
                      {c.count} fotoğraf
                    </span>
                  </div>
                  <ArrowRight size={18} style={{ color: "var(--gray-300)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
