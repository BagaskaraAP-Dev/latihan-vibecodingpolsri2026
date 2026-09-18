# Coolyeah — Event Portfolio

Portfolio satu halaman yang di-upgrade untuk kebutuhan event, booth, showcase, creative technology, dan presentasi layar besar. Visualnya menggabungkan midnight navy, electric blue, hot pink, coral orange, dan gold dengan motif voxel/3D yang ringan.

Catatan: file referensi visual `image.png` tidak dapat dibaca oleh model ini, jadi desain dibuat menggunakan sistem warna dan token yang mudah dikonfigurasi. Jika ada brand guideline event, ubah token warna di `index.html` tanpa perlu mengubah struktur halaman.

## Yang Berubah

- Arah visual event-ready dengan gradient aurora, beam, grid perspektif, dan aksen warna neon hangat.
- Event ribbon `CREATIVE TECH EVENT / 2026` pada hero.
- CTA orange/coral yang lebih terlihat pada layar jauh.
- Highlight cyan untuk link dan struktur, pink untuk energi brand, gold untuk status/badge.
- Project card dapat dibuka menggunakan mouse, keyboard Enter, atau Space.
- Semua fitur portfolio sebelumnya tetap tersedia: mobile menu, modal, copy email, fallback foto, reduced-motion, dan particle cleanup.

## Fitur

- Section `Home`, `About`, `Projects`, `Skills`, dan `Contact`.
- Responsive untuk mobile, tablet, desktop, booth display, dan layar event.
- CSS 3D/voxel background tanpa WebGL atau dependency besar.
- Accessible keyboard navigation dengan skip link dan focus ring.
- Modal proyek dengan Escape, backdrop close, dan focus restore.
- Fallback jika foto tidak tersedia atau Clipboard API gagal.
- Tidak membutuhkan `npm install`, framework, bundler, database, atau API key.

## Struktur File

```text
.
├── index.html       # UI, token warna, content model, CSS, dan interaksi
├── server.js        # Static server Node.js pada port 3000
├── run.bat          # Shortcut Windows
├── fotosaya.jpeg    # Foto profil opsional
├── prd.md           # PRD event portfolio terbaru
└── .kilo/plans/     # Plan implementasi
```

## Menjalankan Lokal

Prasyarat: Node.js tersedia pada PATH. Tidak perlu `npm install`.

```bash
node server.js
```

Buka [http://localhost:3000](http://localhost:3000). Pada Windows, jalankan `run.bat` sebagai alternatif.

Root server menyajikan `index.html`. Hentikan dengan `Ctrl+C`.

## Customisasi Warna Event

Token warna berada di bagian `:root` pada `index.html`:

```css
--bg: #090b20;
--cyan: #38bdf8;
--lime: #ffd166;
--violet: #fb4f9b;
--amber: #ff7043;
```

Pemetaan pemakaian:

- `--bg`: background utama.
- `--cyan`: link, grid, outline, dan aksen teknologi.
- `--violet`: pink/hot accent untuk depth dan shadow.
- `--amber`: CTA utama dan energi event.
- `--lime`: badge/status/highlight gold.

Gunakan warna brand event dengan kontras yang cukup terhadap `--bg` dan `--text`.

## Mengganti Konten

Object `portfolio` berada di bagian paling bawah `index.html`. Update:

- `profile.email`
- `stats`
- `socials`
- `skills`
- `projects`

Ganti juga teks hero, event ribbon, bio, statistik, dan quick facts di markup HTML.

Placeholder yang wajib diganti sebelum tampil publik:

- `hello@coolyeah.placeholder`
- `github.com/your-handle`
- `linkedin.com/in/your-handle`
- URL `example.com`
- `CV-Coolyeah.pdf` atau sediakan file CV sebenarnya
- Nama, role, bio, statistik, dan deskripsi proyek

## Asset Foto

Hero menggunakan `fotosaya.jpeg`. Jika file tidak tersedia atau rusak, halaman otomatis menampilkan fallback `FOTO COOLYEAH` dan tetap dapat digunakan.

File `image.png` tidak diperlukan oleh implementasi saat ini. Desain tidak bergantung pada kemampuan membaca gambar eksternal.

## Validasi Sebelum Event

- Jalankan server dan pastikan root merespons `HTTP 200`.
- Tes layout pada 320px, 375px, 768px, 1024px, dan layar lebar.
- Tes menu mobile dan semua anchor section.
- Buka modal dengan klik, Enter, dan Space; tutup dengan tombol, backdrop, dan Escape.
- Tes keyboard-only dari navbar sampai footer.
- Aktifkan `prefers-reduced-motion` untuk device event bertenaga rendah.
- Pastikan placeholder email dan URL tidak tampil di layar publik.
- Tes font fallback ketika koneksi internet dimatikan.
- Pastikan brightness proyektor tidak menghilangkan teks muted dan CTA.

## Deployment

Untuk static hosting, upload `index.html` dan `fotosaya.jpeg` jika foto digunakan. `server.js` hanya diperlukan untuk development lokal atau hosting Node. Tidak ada secret atau API key di project ini.
