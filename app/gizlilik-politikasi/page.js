"use client";
import Link from "next/link";
import { ChevronRight, Shield } from "lucide-react";

export default function GizlilikPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link>
            <ChevronRight size={14} />
            <span>Gizlilik Politikası</span>
          </div>
          <h1>Gizlilik Politikası</h1>
          <p className="hero-subtitle">
            KVKK kapsamında kişisel verilerinizin korunmasına ilişkin aydınlatma
            metni.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="card" style={{ padding: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "32px",
              }}
            >
              <Shield size={24} style={{ color: "var(--blue)" }} />
              <h2 style={{ margin: 0, fontSize: "1.2rem" }}>
                Kişisel Verilerin Korunması
              </h2>
            </div>
            {[
              {
                title: "1. Veri Sorumlusu",
                content:
                  "FyPlus Dental Clinic, Bahçeşehir 1. Kısım Mah., Başakşehir / İstanbul adresinde faaliyet göstermektedir.",
              },
              {
                title: "2. Toplanan Veriler",
                content:
                  "Ad, soyad, telefon, e-posta adresi, sağlık verileri gibi kişisel veriler tedavi ve iletişim amacıyla toplanmaktadır.",
              },
              {
                title: "3. Verilerin Kullanımı",
                content:
                  "Toplanan veriler randevu yönetimi, tedavi takibi, iletişim ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılmaktadır.",
              },
              {
                title: "4. Veri Güvenliği",
                content:
                  "Kişisel verileriniz teknik ve idari önlemlerle korunmakta, yetkisiz erişime karşı güvence altına alınmaktadır.",
              },
              {
                title: "5. Haklarınız",
                content:
                  "6698 sayılı KVKK kapsamında kişisel verilerinize erişme, düzeltme, silme ve işlemeye itiraz etme haklarına sahipsiniz.",
              },
              {
                title: "6. İletişim",
                content:
                  "Kişisel verilerinizle ilgili talepleriniz için info@fyplus.com.tr adresine e-posta gönderebilirsiniz.",
              },
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: "24px" }}>
                <h3 style={{ fontSize: "1rem", marginBottom: "8px" }}>
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "var(--gray-600)",
                    fontSize: "0.92rem",
                    lineHeight: 1.8,
                  }}
                >
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
