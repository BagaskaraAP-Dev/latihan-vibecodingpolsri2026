# 🎮 Coolyeah — Minecraft-Themed Landing Page

> **Pelatihan Vibe Coding POLSRI 2026**  
> Repository ini adalah hasil pelatihan *Vibe Coding* di Politeknik Negeri Sriwijaya (POLSRI) tahun 2026. Landing page bergaya **Minecraft / Pixel Art / 8-Bit** yang dibuat menggunakan HTML, CSS, dan JavaScript murni — tanpa framework.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🎨 **Pixel Art UI** | Seluruh tampilan menggunakan font `Press Start 2P` dan estetika kotak-kotak 8-bit |
| 🟩 **3D Grass Block** | Blok rumput 3D yang berputar, dibuat 100% dari CSS (tanpa gambar) |
| ☁️ **Awan & Matahari Animasi** | Elemen langit yang bergerak secara otomatis untuk menghidupkan suasana |
| 💎 **Floating Ores** | Partikel Diamond, Gold, Emerald, dan Redstone yang melayang di layar |
| 🖱️ **Click Particles** | Klik di mana saja untuk memunculkan efek cipratan partikel piksel |
| 🪵 **Tombol Gaya Minecraft** | Tombol UI bergaya blok kayu/batu dengan efek 3D `inset`/`outset` |
| 📱 **Responsive** | Tampilan menyesuaikan layar desktop, tablet, dan mobile |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic tags (`<header>`, `<section>`, `<main>`)
- **Vanilla CSS3** — CSS Variables, Flexbox, CSS Grid, `@keyframes`, 3D `transform`
- **Vanilla JavaScript (ES6+)** — DOM manipulation, event listener, particle system
- **Google Fonts** — [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
- **Tanpa Framework** — Tidak menggunakan Bootstrap, Tailwind, React, atau library lainnya

---

## 📁 Struktur File

```
.
├── index.html       # Satu file utuh: HTML + CSS + JS (landing page Minecraft)
├── prd.md           # Product Requirements Document (PRD)
├── server.js        # Static server Node.js pada port 3000
├── run.bat          # Shortcut menjalankan server di Windows
└── README.md        # Dokumentasi (file ini)
```

---

## 🚀 Menjalankan Secara Lokal

**Prasyarat:** [Node.js](https://nodejs.org/) tersedia di PATH. Tidak perlu `npm install`.

```bash
node server.js
```

Buka **http://localhost:3000** di browser. Atau di Windows, klik dua kali `run.bat`.

Hentikan server dengan `Ctrl+C`.

---

## 🎨 Warna & Design Tokens

Variabel warna yang digunakan di `:root`:

| Token | Hex | Kegunaan |
|---|---|---|
| `--sky-blue` | `#87CEEB` | Background langit |
| `--grass` | `#41980a` | Blok rumput |
| `--grass-top` | `#55FF55` | Permukaan rumput |
| `--dirt` | `#8B4513` | Blok tanah |
| `--stone` | `#7D7D7D` | Tombol batu |
| `--wood` | `#8B5A2B` | Navbar & tombol kayu |
| `--diamond` | `#55FFFF` | Partikel berlian |
| `--gold` | `#FFAA00` | Partikel emas |

---

## 👨‍💻 Author

**Bagaskara Amukti Palapa**  
Mahasiswa Politeknik Negeri Sriwijaya (POLSRI)

---

## 📄 Lisensi

Project ini dibuat untuk keperluan pelatihan dan pembelajaran. Bebas digunakan dan dimodifikasi.
