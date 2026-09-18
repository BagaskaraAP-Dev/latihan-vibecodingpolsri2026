# PRD & Implementation Plan — 3D Voxel Portfolio Upgrade

## 1. Context

Workspace saat ini berisi satu halaman HTML statis bertema Minecraft/voxel (`index.html`), satu foto (`fotosaya.jpeg`), dan server Node sederhana. Halaman yang ada baru memiliki navbar, hero, satu blok 3D CSS, serta tiga kartu fitur. Belum ada bagian portofolio personal yang lengkap.

Temuan penting:

- `server.js:23` mengarahkan `/` ke `landing-page.html`, tetapi file tersebut tidak ada; file utama yang tersedia adalah `index.html`.
- Konten saat ini masih generik ("Craft Your World", Mining/Crafting/Building), bukan identitas dan karya pemilik portofolio.
- Tidak ada framework, bundler, database, atau backend; solusi dipertahankan sebagai situs statis satu file agar langsung bisa dijalankan dengan server yang tersedia.
- `fotosaya.jpeg` akan dipakai sebagai foto profil; metadata visual/detail gambar perlu ditinjau saat implementasi.

## 2. Product Goal

Mengubah halaman voxel saat ini menjadi portofolio personal 3D yang terasa hidup, premium, dan mudah dipindai recruiter/klien tanpa mengorbankan waktu muat, aksesibilitas, atau pengalaman mobile.

Keberhasilan utama:

1. Pengunjung memahami siapa pemilik situs, keahlian utama, dan jenis pekerjaan dalam 5–10 detik.
2. Pengunjung dapat menuju karya/proyek, menghubungi pemilik, dan membuka CV dari navigasi utama.
3. Latar 3D memberi kedalaman dan interaksi nyata, tetapi konten tetap terbaca ketika animasi dimatikan atau perangkat lambat.
4. Halaman dapat dijalankan melalui `node server.js` dan root URL tidak menghasilkan 404.

## 3. Assumptions & Scope

### Asumsi yang dipakai untuk implementasi awal

- Ini adalah portofolio pribadi developer/designer bernama/ber-brand "Coolyeah".
- Bahasa antarmuka utama Bahasa Indonesia, dengan istilah teknologi berbahasa Inggris bila lebih natural.
- Konten spesifik yang belum tersedia akan dibuat sebagai placeholder yang jelas dan mudah diganti (nama lengkap, headline, bio, tautan sosial, daftar proyek, URL CV).
- Tidak ada CMS, autentikasi, form backend, atau database dalam scope. Tombol kontak memakai `mailto:`/tautan sosial.
- Nuansa voxel/Minecraft dipertahankan, tetapi dipoles menjadi gaya portfolio yang lebih modern: deep-night sky, neon cyan/lime/purple, panel glass/voxel, dan hierarki tipografi yang lebih profesional.

### Out of scope

- Pembuatan model 3D kompleks melalui Blender atau pipeline asset eksternal.
- Backend pengiriman pesan, analytics, dashboard admin, atau integrasi CMS.
- Pengadaan konten proyek asli, copy final personal, logo final, dan URL media sosial; semua disiapkan sebagai data placeholder.

## 4. Target Users

- Recruiter/hiring manager yang ingin menilai skill dan pengalaman dengan cepat.
- Klien/kolaborator yang ingin melihat kualitas visual dan proyek.
- Pengunjung mobile yang datang dari tautan sosial.

## 5. Experience & Visual Direction

### Konsep

"Digital world built block by block": pengunjung masuk ke dunia voxel malam hari dengan grid horizon, pulau/blok 3D mengambang, partikel, dan panel UI seperti HUD. Visual harus terasa 3D tanpa menjadi game landing page semata.

### Design system

- Background: gradient navy/indigo ke hitam dengan radial glow cyan/purple.
- Aksen: cyan, lime, violet, amber untuk status/CTA.
- Panel: translucent dark glass dengan border 1px/voxel highlight dan shadow berlapis.
- Bentuk: sudut kecil/bertingkat, garis grid, blok isometrik, outline kontras tinggi.
- Tipografi: font display pixel yang sekarang dipakai hanya untuk label/eyebrow; gunakan font sans-serif yang sangat terbaca untuk paragraf dan detail proyek. Sediakan fallback system font jika Google Fonts gagal dimuat.
- Motion: semua animasi halus, tidak mengganggu pembacaan; dukung `prefers-reduced-motion`.

## 6. Information Architecture & Requirements

### A. Global shell

- Sticky navbar dengan brand Coolyeah, anchor link `Home`, `About`, `Projects`, `Skills`, `Contact`.
- CTA utama `Let's collaborate`/`Hubungi saya` dan CTA sekunder `Lihat proyek`.
- Mobile menu accessible dengan tombol `aria-expanded`, focus state, dan penutupan setelah memilih anchor.
- Progress/section indicator opsional jika tidak menambah noise.

### B. Hero (`#home`)

- Eyebrow status: `AVAILABLE FOR CREATIVE COLLABS` atau padanan Indonesia.
- Headline personal yang kuat, misalnya `Saya membangun pengalaman digital yang terasa hidup.`
- Ringkasan 1–2 kalimat tentang spesialisasi.
- CTA `Lihat proyek` dan `Download CV` (placeholder URL yang mudah diganti).
- Foto `fotosaya.jpeg` di dalam frame voxel/isometrik dengan fallback jika gambar gagal dimuat.
- Badge kecil untuk lokasi, pengalaman, atau availability.
- Latar 3D utama di belakang konten; hero tetap memiliki kontras teks yang memadai.

### C. About (`#about`)

- Bio singkat berbasis outcome, bukan daftar jargon.
- Statistik ringkas yang dapat diganti: jumlah proyek, tahun pengalaman, atau klien.
- Timeline/mini journey 3 tahap dengan style node voxel.

### D. Projects (`#projects`)

- Grid responsif 3–6 proyek.
- Setiap kartu memuat thumbnail/visual, kategori, judul, ringkasan, stack, dan link demo/source.
- Hover desktop memberi tilt ringan/parallax; keyboard focus memberi state setara.
- Klik kartu membuka detail dalam modal atau expandable panel tanpa mengubah halaman; modal memiliki close button, Escape handler, trap/focus restore, dan tidak bergantung pada JavaScript untuk informasi dasar.
- Placeholder project data diletakkan dalam satu array JS agar mudah diganti.

### E. Skills (`#skills`)

- Kelompok skill (Frontend, Backend/Tools, Design/Motion) dalam chip/panel.
- Visualisasi skill berupa meter sederhana atau orbit/constellation yang tidak mengklaim level objektif secara berlebihan.
- Filter proyek berdasarkan kategori skill dapat ditambahkan bila implementasinya tetap sederhana.

### F. Contact (`#contact`)

- Closing statement yang jelas.
- Email, GitHub, LinkedIn/Instagram sebagai placeholder links.
- CTA `Kirim email` menggunakan `mailto:` dan tombol copy email dengan feedback non-intrusif.
- Footer dengan tahun otomatis, brand, dan link kembali ke atas.

## 7. 3D Background & Interaction Specification

### Teknologi

Gunakan HTML/CSS 3D dan Canvas 2D/DOM ringan di dalam `index.html`; jangan menambah library besar kecuali benar-benar diperlukan. Prioritasnya adalah stabilitas di server statis saat ini.

### Scene layers

1. `scene-sky`: gradient dan glow responsif.
2. `scene-grid`: perspective grid/horizon sebagai pseudo-element atau canvas.
3. `scene-objects`: 5–9 blok voxel/isometric (grass, crystal, laptop/monitor abstrak) dengan kedalaman berbeda.
4. `scene-particles`: partikel kecil dengan jumlah dibatasi dan lifecycle terkontrol.
5. `scene-overlay`: vignette/gradient agar teks hero tetap terbaca.

### Behavior

- Gerakan objek mengikuti pointer secara sangat kecil (parallax clamp), bukan memindahkan layout.
- Objek utama berputar lambat; animasi tidak boleh menyebabkan horizontal overflow.
- Scroll reveal untuk section/card menggunakan IntersectionObserver; fallback tampil langsung bila API tidak tersedia.
- Klik menghasilkan partikel pixel hanya pada interaksi yang relevan, dengan batas maksimum elemen aktif untuk mencegah memory/DOM growth.
- `prefers-reduced-motion: reduce` mematikan rotasi, parallax, particle burst, dan scroll reveal; scene berubah menjadi gambar/gradient statis yang tetap menarik.
- Pada viewport kecil atau `navigator.hardwareConcurrency` rendah, turunkan jumlah objek/partikel dan nonaktifkan efek mahal.

## 8. Responsive & Accessibility

- Breakpoint utama: mobile, tablet, desktop; gunakan CSS fluid (`clamp`, grid/flex) sebelum breakpoint tambahan.
- Tidak ada teks penting yang hanya muncul saat hover.
- Semua gambar memiliki alt text; dekorasi diberi `aria-hidden="true"`.
- Kontras teks/body dan CTA diverifikasi terhadap background dinamis.
- Struktur heading berurutan, landmark semantic (`header`, `main`, `section`, `footer`), skip link, dan visible focus ring.
- Navigasi keyboard dan modal wajib berfungsi tanpa pointer.
- Hindari `cursor: crosshair` global karena merusak affordance dan usability; jika dipakai, batasi hanya pada area dekoratif.
- `loading="lazy"` untuk gambar di luar hero; set dimensi/aspect ratio untuk mencegah layout shift.

## 9. Content Model (single source of truth)

Di bagian script paling bawah, buat object konfigurasi yang menampung:

- `profile`: nama, role, bio, lokasi, availability, email, CV URL.
- `socials`: label, URL, icon/initial.
- `stats`: label dan value.
- `projects`: id, title, category, description, stack, image, demoUrl, sourceUrl, featured.
- `skills`: group, items.

Markup merender data ini bila praktis; bila tetap memakai markup statis, semua placeholder harus memiliki komentar/penamaan yang jelas agar penggantian konten tidak memerlukan pencarian di banyak lokasi.

## 10. Technical Changes

1. Refactor `index.html` menjadi portfolio lengkap dengan semantic sections dan komponen CSS terkelompok.
2. Pertahankan single-file deployment; seluruh CSS/JS berada di file tersebut kecuali asset gambar yang sudah tersedia.
3. Ganti referensi gambar dengan path relatif `fotosaya.jpeg` dan sediakan fallback visual.
4. Perbaiki `server.js:23` agar `/` menyajikan `index.html` (atau rename strategy yang konsisten); verifikasi path traversal tetap aman.
5. Perbarui title, meta description, theme-color, Open Graph dasar, dan favicon fallback tanpa membuat dependency baru.
6. Tambahkan error-safe JS: semua query element dicek, observer dan particle cleanup memiliki fallback, dan modal tidak aktif bila elemen tidak tersedia.

## 11. Performance & Security Constraints

- Tidak menggunakan autoplay video, WebGL scene berat, atau asset remote besar.
- Batasi DOM partikel dan gunakan transform/opacity untuk animasi yang dipercepat compositor.
- Gunakan `content-visibility` hanya pada section yang aman dan uji agar anchor tetap benar.
- External font bersifat enhancement; situs harus tetap terbaca saat offline/font gagal.
- Link eksternal memakai `target="_blank" rel="noopener noreferrer"` bila dibuka di tab baru.
- Jangan menaruh secret/API key; seluruh data bersifat publik.

## 12. Validation Plan

### Functional

- Buka `/` melalui `node server.js`; pastikan tidak 404 dan browser memuat `index.html`.
- Semua anchor navbar/CTA berpindah ke section yang benar.
- Mobile menu buka/tutup, keyboard focus, Escape, dan resize bekerja.
- Modal proyek membuka konten yang benar, dapat ditutup via tombol/Escape/backdrop, dan mengembalikan focus.
- Copy email menampilkan feedback dan tetap menyediakan `mailto:`.
- Broken image/link tidak membuat halaman error total.

### Visual/responsive

- Uji 320px, 375px, 768px, 1024px, dan desktop lebar.
- Pastikan tidak ada horizontal scroll, overlap teks, atau CTA di luar viewport.
- Uji foto portrait/landscape dan font fallback.
- Uji animasi aktif serta reduced-motion.

### Accessibility/performance

- Keyboard-only pass untuk navbar, CTA, kartu/modal, dan footer links.
- Screen reader sanity check untuk landmark, heading, alt, label, dan state menu/modal.
- Lighthouse/DevTools: tidak ada error console, layout shift besar, atau animasi yang mengubah layout.
- Verifikasi jumlah particle/object tidak terus bertambah setelah banyak klik/scroll.

## 13. Acceptance Criteria

- Situs terlihat jelas sebagai portofolio personal, bukan lagi template fitur game.
- Latar 3D terasa nyata melalui depth, parallax, rotasi, grid, dan objek voxel, namun konten utama selalu terbaca.
- Minimal tersedia section Home, About, Projects, Skills, Contact serta CTA kerja sama.
- Foto `fotosaya.jpeg` tampil aman dengan alt text dan fallback.
- Root server mengarah ke file yang benar.
- Layout dan interaksi usable di mobile, keyboard, dan reduced-motion.
- Tidak ada dependency/toolchain baru yang wajib untuk menjalankan situs.

## 14. Implementation Order

1. Perbaiki entry point server dan siapkan struktur semantic HTML.
2. Bangun design tokens, shell/navbar, hero, dan scene 3D.
3. Tambahkan About, Projects + modal, Skills, Contact, dan footer.
4. Masukkan foto serta object konfigurasi placeholder.
5. Implementasikan parallax, reveal, menu, modal, copy email, dan particle cleanup.
6. Tambahkan metadata, accessibility states, responsive rules, dan reduced-motion fallback.
7. Jalankan validation plan, perbaiki console/layout issues, lalu lakukan final visual pass.

## 16. Documentation Deliverable

Buat `README.md` di root project sebagai panduan penggunaan dan handoff. README harus mencakup:

- Deskripsi singkat portofolio Coolyeah dan arah visual voxel/3D.
- Struktur file utama (`index.html`, `server.js`, `run.bat`, `fotosaya.jpeg`).
- Prasyarat: Node.js tanpa dependency/npm install.
- Cara menjalankan dengan `node server.js` atau `run.bat`, termasuk URL lokal `http://localhost:3000`.
- Cara mengganti konten placeholder di object `portfolio` pada `index.html`.
- Daftar placeholder yang wajib diganti sebelum publikasi: identitas, email, CV, sosial, proyek, demo/source URL.
- Catatan bahwa font Google bersifat enhancement dan situs tetap memiliki fallback font.
- Checklist validasi ringkas untuk desktop, mobile, keyboard, reduced motion, dan broken image.

README tidak boleh mengklaim URL, proyek, atau identitas placeholder sebagai data nyata.

