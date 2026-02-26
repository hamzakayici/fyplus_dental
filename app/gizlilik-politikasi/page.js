'use client';
import Link from 'next/link';

export default function GizlilikPage() {
  return (
    <>
      <section className="page-hero"><div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb"><Link href="/">Ana Sayfa</Link><span>/</span><span>Gizlilik Politikası</span></nav>
        <h1>Gizlilik Politikası</h1>
      </div></section>
      <section className="section"><div className="container"><div className="legal">
        <h2>1. Veri Sorumlusu</h2>
        <p>FyPlus Dental Clinic olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemekteyiz.</p>
        <h2>2. İşlenen Kişisel Veriler</h2>
        <p>Kliniğimize başvurduğunuzda; kimlik bilgileriniz, iletişim bilgileriniz, sağlık verileri ve finansal bilgileriniz KVKK&apos;nın 5. ve 6. maddelerinde belirtilen hukuki sebeplere dayalı olarak işlenmektedir.</p>
        <h2>3. Kişisel Verilerin İşlenme Amacı</h2>
        <p>Kişisel verileriniz; sağlık hizmetlerinin sunulması, randevu oluşturulması, tedavi planlaması, yasal yükümlülüklerin yerine getirilmesi ve iletişim amaçlarıyla işlenmektedir.</p>
        <h2>4. Kişisel Verilerin Aktarılması</h2>
        <p>Kişisel verileriniz, yasal zorunluluklar çerçevesinde Sağlık Bakanlığı ve ilgili kamu kurum ve kuruluşlarına aktarılabilir. Bunun haricinde üçüncü şahıslarla paylaşılmaz.</p>
        <h2>5. Kişisel Veri Saklama Süresi</h2>
        <p>Kişisel verileriniz, ilgili mevzuatın öngördüğü süre boyunca saklanmaktadır. Sağlık verileri için bu süre 20 yıldır.</p>
        <h2>6. Veri Sahibinin Hakları</h2>
        <p>KVKK&apos;nın 11. maddesi gereğince; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme, düzeltilmesini veya silinmesini isteme haklarına sahipsiniz.</p>
        <h2>7. İletişim</h2>
        <p>KVKK kapsamındaki talepleriniz için info@fyplus.com.tr adresine e-posta gönderebilirsiniz.</p>
        <p style={{ marginTop: '40px', color: 'var(--gray-400)', fontSize: '0.85rem' }}>Son güncelleme: Şubat 2026</p>
      </div></div></section>
      <style jsx>{`
        .page-hero{background:linear-gradient(135deg,var(--navy),var(--blue-dark));padding:140px 0 60px;color:var(--white)}
        .breadcrumb{display:flex;align-items:center;gap:8px;font-size:0.85rem;margin-bottom:16px;color:rgba(255,255,255,0.6)}
        .breadcrumb a{color:rgba(255,255,255,0.6)}.breadcrumb a:hover{color:var(--coral)}
        .page-hero h1{margin-bottom:12px}
        .legal{max-width:800px;margin:0 auto}
        .legal h2{font-size:1.2rem;margin:32px 0 12px;color:var(--navy)}
        .legal p{color:var(--gray-600);line-height:1.8;font-size:0.95rem}
      `}</style>
    </>
  );
}
