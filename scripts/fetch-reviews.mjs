/**
 * FyPlus Dental — Google Yorumları Manuel Ekleme Aracı
 * 
 * Kullanım: node scripts/fetch-reviews.mjs
 * 
 * Google Maps oturum gerektirdiği için, bu araç interaktif olarak
 * klinik yorumlarını eklemenizi ve JSON dosyasına kaydetmenizi sağlar.
 * 
 * YÖNTEMLERİ:
 * 1. Direkt çalıştırma: node scripts/fetch-reviews.mjs
 *    → Tarayıcı açılır, Google Maps'e gidin, yorumları kendiniz kopyalayın
 * 
 * 2. Hızlı ekle: node scripts/fetch-reviews.mjs --add
 *    → Komut satırından hızlıca yorum ekleyin
 */

import { writeFileSync, readFileSync, mkdirSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { createInterface } from "readline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../app/data/reviews.json");

const rl = createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

/* Mevcut veriyi oku */
function loadExisting() {
  try {
    const raw = readFileSync(OUTPUT_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { lastUpdated: null, source: "Google Maps", totalCount: 0, reviews: [] };
  }
}

/* Kaydet */
function save(data) {
  const outputDir = dirname(OUTPUT_PATH);
  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
  
  data.lastUpdated = new Date().toISOString();
  data.totalCount = data.reviews.length;
  writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2), "utf-8");
}

/* ═══ İNTERAKTİF YORUM EKLEME ═══ */
async function interactiveAdd() {
  console.log("\n╔═══════════════════════════════════════════════════════╗");
  console.log("║     🦷 FyPlus Dental — Google Yorum Ekleme Aracı     ║");
  console.log("╚═══════════════════════════════════════════════════════╝\n");

  const data = loadExisting();
  console.log(`📊 Mevcut yorum sayısı: ${data.reviews.length}\n`);

  console.log("ℹ️  Google Maps'ten yorum kopyalamak için:");
  console.log("   1. https://maps.app.goo.gl adresine gidin");
  console.log("   2. 'FY Plus Ağız ve Diş Sağlığı Polikliniği' arayın");
  console.log("   3. Yorumlar sekmesine tıklayın");
  console.log("   4. Her yorumu buraya girin\n");
  console.log("──────────────────────────────────────────────────────\n");

  let continueAdding = true;

  while (continueAdding) {
    console.log(`\n📝 Yorum #${data.reviews.length + 1}`);
    
    const name = await ask("   İsim (ör: Mehmet Y.): ");
    if (!name || name.toLowerCase() === "q") break;
    
    const ratingStr = await ask("   Yıldız (1-5, varsayılan 5): ");
    const rating = parseInt(ratingStr) || 5;
    
    const text = await ask("   Yorum metni: ");
    if (!text) { console.log("   ⚠️ Yorum metni boş, atlanıyor..."); continue; }
    
    const date = await ask("   Tarih (ör: 2 ay önce): ");

    data.reviews.push({
      id: data.reviews.length + 1,
      name: name.trim(),
      rating: Math.min(5, Math.max(1, rating)),
      text: text.trim(),
      date: date.trim() || "Yakın zamanda",
      profileImg: "",
    });

    save(data);
    console.log(`   ✅ "${name}" yorumu eklendi! (Toplam: ${data.reviews.length})`);
    
    const more = await ask("\n   Başka yorum eklemek ister misiniz? (E/h): ");
    continueAdding = !more || more.toLowerCase() !== "h";
  }

  console.log(`\n💾 ${data.reviews.length} yorum kaydedildi: app/data/reviews.json`);
  console.log("🔄 Siteyi yenileyerek yorumları görebilirsiniz.\n");
  rl.close();
}

/* ═══ JSON TOPLU YÜKLEME ═══ */
async function bulkLoad() {
  console.log("\n╔═══════════════════════════════════════════════════════╗");
  console.log("║    🦷 FyPlus Dental — Toplu Yorum Yükleme             ║");
  console.log("╚═══════════════════════════════════════════════════════╝\n");

  console.log("📋 Aşağıdaki formatı reviews.json dosyasında kullanın:\n");
  
  const example = {
    lastUpdated: "2026-03-28T21:00:00.000Z",
    source: "Google Maps",
    totalCount: 3,
    reviews: [
      {
        id: 1,
        name: "Ayşe K.",
        rating: 5,
        text: "Çok memnun kaldım, klinik temiz ve modern.",
        date: "2 ay önce",
        profileImg: "",
      },
      {
        id: 2,
        name: "Mehmet Y.",
        rating: 5,
        text: "Harika bir deneyim, teşekkürler!",
        date: "1 ay önce",
        profileImg: "",
      },
    ],
  };

  console.log(JSON.stringify(example, null, 2));
  console.log(`\n📂 Dosya yolu: ${OUTPUT_PATH}`);
  console.log("   Dosyayı oluşturup içine yorumları yapıştırın.\n");
  rl.close();
}

/* ═══ ANA GİRİŞ ═══ */
const arg = process.argv[2];

if (arg === "--help" || arg === "-h") {
  console.log(`
Kullanım:
  node scripts/fetch-reviews.mjs           İnteraktif yorum ekleme
  node scripts/fetch-reviews.mjs --format  JSON format örneği
  node scripts/fetch-reviews.mjs --help    Bu yardım mesajı
  `);
  process.exit(0);
} else if (arg === "--format") {
  await bulkLoad();
} else {
  await interactiveAdd();
}
