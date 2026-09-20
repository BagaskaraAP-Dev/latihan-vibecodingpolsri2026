# Panduan Kontribusi — IT-Festival 2026 POLSRI

Terima kasih telah tertarik untuk berkontribusi pada pengembangan website **IT-FESTIVAL 2026 Politeknik Negeri Sriwijaya**!

## 🛠️ Alur Kerja Kontribusi

1. **Fork** repository ini ke akun GitHub Anda.
2. Buat branch fitur baru:
   ```bash
   git checkout -b fitur/nama-fitur-keren
   ```
3. Lakukan perubahan kode sesuai standar desain:
   - Pertahankan estetika **Neo-Brutalist 16-Bit Retro Pixel Art** (border solid `#050718`, no blur shadow).
   - Pastikan script kompatibel dengan single-page browser environment.
4. Jalankan audit pengujian otomatis:
   ```bash
   node test/verify-storage.js
   ```
   Pastikan seluruh pengujian menghasilkan status `PASS` (100%).
5. Commit perubahan dengan pesan deskriptif (mengikuti konvensi Conventional Commits).
6. Push ke branch Anda dan buka **Pull Request**.

## 🎨 Token Desain Utama
- **Cyber Yellow:** `#FFE600`
- **Neon Pink:** `#FF2E93`
- **Electric Cyan:** `#00F0FF`
- **Dark Cyber Navy:** `#040612` / `#070a1e`
- **Solid Ink:** `#050718`
