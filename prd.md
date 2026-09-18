# PRD — Coolyeah Event Portfolio Experience

## Ringkasan

Coolyeah adalah portofolio personal satu halaman yang di-upgrade menjadi landing page siap event. Karena file referensi visual `image.png` tidak dapat dibaca oleh model ini, arah visual dibuat fleksibel dan dapat dikonfigurasi: kombinasi midnight navy, electric blue, coral/orange, hot pink, dan gold dengan aksen voxel/3D yang tetap membawa identitas Coolyeah.

## Tujuan Produk

1. Membuat kesan kuat dalam 5 detik pertama saat ditampilkan di booth, layar event, atau dibagikan melalui tautan.
2. Menjelaskan siapa Coolyeah, apa yang dikerjakan, dan bagaimana cara menghubungi.
3. Menampilkan karya dalam format yang mudah dipindai tanpa bergantung pada asset gambar tambahan.
4. Tetap cepat, usable, dan terbaca di layar besar maupun mobile.

## Audiens

- Pengunjung event dan komunitas kreatif/teknologi.
- Recruiter, calon klien, dan partner kolaborasi.
- Pengunjung yang membuka halaman dari QR code atau sosial media.

## Arah Visual Event

### Palet default

- Midnight: `#090b20` sebagai dasar dan kontras.
- Electric blue: `#38bdf8` untuk link, grid, dan glow.
- Hot pink: `#fb4f9b` untuk highlight emosional.
- Coral orange: `#ff7043` untuk CTA dan energi event.
- Gold: `#ffd166` untuk badge dan status.
- Soft white: `#f8fbff` untuk headline.

Semua token berada di `:root` pada `index.html` agar mudah diganti apabila event memiliki brand guideline berbeda.

### Karakter

- Bold, energetic, premium, dan playful.
- Voxel geometry dipakai sebagai motif pendukung, bukan tema game penuh.
- Tipografi display modern untuk headline; pixel font hanya untuk label kecil.
- Background berupa gradient aurora, grid perspektif, beam, orb, dan particle terbatas.
- CTA memiliki shadow offset dan warna solid agar terlihat jelas dari jarak jauh.

## Struktur Halaman

- `#home`: event status, headline, CTA, profile visual, dan quick facts.
- `#about`: pendekatan kerja dan statistik.
- `#projects`: tiga atau lebih project cards dengan modal detail.
- `#skills`: kelompok skill dan meter fokus.
- `#contact`: email, social links, dan CTA kolaborasi.

## Fitur Interaksi

- Sticky navigation dan mobile menu accessible.
- Scroll reveal dengan fallback jika IntersectionObserver tidak tersedia.
- Modal detail proyek dengan tombol close, backdrop close, Escape, dan focus restore.
- Copy email dengan fallback teks manual.
- Particle burst hanya pada tombol/link relevan dan dibatasi maksimal 30 elemen aktif.
- `prefers-reduced-motion` menonaktifkan animasi mahal.
- Enter/Space pada project card keyboard membuka detail proyek.

## Konten dan Asset

Konten placeholder disimpan pada object `portfolio` di bagian akhir `index.html`. Sebelum event:

- Ganti nama, role, bio, statistik, dan availability.
- Ganti email, URL CV, GitHub, LinkedIn, demo, dan source code.
- Tambahkan `fotosaya.jpeg` jika foto asli tersedia; fallback visual tetap aman jika asset tidak ada.
- Hindari mengklaim URL placeholder sebagai tautan nyata.

## Batasan Teknis

- Single-file frontend: seluruh HTML, CSS, dan JavaScript berada di `index.html`.
- Tidak ada framework, bundler, npm dependency, backend, atau database.
- Server lokal dijalankan menggunakan `node server.js` pada port 3000.
- Tidak menggunakan WebGL atau video autoplay.
- Google Fonts bersifat enhancement; fallback font wajib tetap terbaca.

## Acceptance Criteria

- Halaman tampak sebagai portfolio event-ready, bukan template Minecraft generik.
- Palet event terlihat konsisten pada navbar, hero, cards, CTA, dan contact panel.
- Semua section dan CTA dapat dicapai lewat keyboard.
- Modal proyek dapat dibuka melalui pointer maupun Enter/Space.
- Root `http://localhost:3000/` mengembalikan HTTP 200.
- Path traversal server mengembalikan HTTP 403.
- Layout tidak horizontal scroll pada viewport 320px sampai desktop.
- README menjelaskan setup, customisasi event, dan checklist publikasi.

## Checklist Hari-H Event

- Jalankan server dan tes URL root.
- Pastikan placeholder tidak tampil di layar publik.
- Tes koneksi internet dan fallback font.
- Uji layar/proyektor dengan brightness dan kontras berbeda.
- Aktifkan reduced motion bila device event kurang bertenaga.
- Pastikan QR code atau link pendek mengarah ke URL deployment yang benar.
