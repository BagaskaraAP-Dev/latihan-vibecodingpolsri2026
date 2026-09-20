# IT-FESTIVAL 2026 POLSRI — Vibe Coding Project

Website portal resmi pendaftaran **IT-FESTIVAL 2026** Politeknik Negeri Sriwijaya (POLSRI) Palembang dengan gaya desain **Neo-Brutalist 16-Bit Retro Pixel Art**.

Proyek ini dibangun sebagai bagian dari pelatihan **Vibe Coding POLSRI 2026**, mengintegrasikan data autentik dari website resmi penyelenggara ke dalam Single Page Application (SPA) modern tanpa framework berat.

---

## 🌟 Fitur Utama (8-Stage User Journey)

1. **Landing Page (`#view-landing`)**:
   - Hero glitch & efek typewriter retro
   - Live countdown timer menuju hari pelaksanaan acara
   - **4 Slot Galeri Maskot Belibit** (Cyber Belida Palembang)
   - Highlight event dan integrasi alamat resmi sekretariat POLSRI
2. **Autentikasi Modal (`#auth-modal`)**:
   - Tab Login & Registrasi Akun baru
   - Penyimpanan data akun lokal via HTML5 `localStorage`
3. **User Dashboard (`#view-dashboard`)**:
   - Informasi profil peserta & tiket event yang diikuti
   - Navigasi cepat pendaftaran event
4. **Pilih Event (`#view-events`)**:
   - Filter kategori: **Kompetisi** (MLBB, Free Fire, Vibe Coding, CTF, Fotografi), **Pelatihan** (Vibe Coding & Cyber Security), dan **Seminar Nasional**
5. **Detail Event (`#view-event-detail`)**:
   - Informasi lengkap jadwal online/offline, prize pool, syarat, ketentuan, & benefit
6. **Form Pendaftaran (`#view-form-pendaftaran`)**:
   - Form dinamis untuk pendaftaran tim maupun individu
7. **Konfirmasi Data (`#view-konfirmasi`)**:
   - Lembar pratinjau data pendaftaran sebelum finalisasi
8. **Status & E-Ticket (`#view-status`)**:
   - Tiket digital neo-brutalist dengan kode unik (`ITFEST-2026-XXXX`)
   - Barcode visual, badge status terverifikasi, cetak tiket (`window.print()`), dan efek selebrasi canvas confetti

---

## 📍 Informasi Resmi Acara
* **Penyelenggara:** Jurusan Manajemen Informatika, Politeknik Negeri Sriwijaya (POLSRI)
* **Alamat Sekretariat:** `Jl. Srijaya Negara, Bukit Lama, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30128`
* **Email Resmi:** `itfestivalpolsri2026@gmail.com`
* **WhatsApp:** `08822-7984-0310` / `08838-1925-5395`
* **Instagram:** `@itfestival.polsri`

---

## 🚀 Cara Menjalankan

### Cara 1: Menggunakan Node.js (Rekomendasi)
```bash
node server.js
```
Atau klik dua kali pada file **`run.bat`** (Windows). Server akan otomatis berjalan di `http://localhost:3000` dan membuka browser default.

### Cara 2: Langsung Buka File
Cukup klik dua kali berkas **`index.html`** di File Explorer untuk membukanya di browser apa saja.

---

## 📁 Struktur Berkas

- `index.html` — Portal utama IT-Festival 2026 (SPA Neo-Brutalist)
- `server.js` — Static web server berbasis Node.js
- `run.bat` — Skrip pembantu peluncur server di Windows
- `specification.md` — Spesifikasi teknis (PRD, TRD, DRD, alur Mermaid, & Prompt Codex)
- `portfolio-lama.html` — Arsip tugas portofolio Coolyeah sebelumnya

---

**Bagaskara Amukti Palapa**  
GitHub: [@BagaskaraAP-Dev](https://github.com/BagaskaraAP-Dev)
