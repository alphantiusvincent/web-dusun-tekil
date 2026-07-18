# Website Dusun Dokgarut

Situs profil **Dusun Dokgarut, Desa Watukarung, Kecamatan Pringkuku, Kabupaten Pacitan, Jawa Timur** — dusun pesisir di selatan Jawa yang dikenal dengan pantai karang dan ombak kelas dunia.

Dibangun oleh **Tim KKN 34 UKDW 2025**.

## Fitur

- **Beranda** — hero foto aerial Teluk Watukarung, statistik dusun, berita terbaru, destinasi wisata, video promo, dan lembaga penggerak dusun
- **Berita** (`/news`) — kabar dusun dengan filter kategori (Pemerintahan, Pendidikan, Kesehatan)
- **Profil** (`/profil`) — data wilayah, visi & misi, logo desa, dan kondisi geografis
- **Pemetaan** (`/pemetaan`) — peta administratif wilayah dusun
- Mendukung **dark mode** dan ramah perangkat mobile

## Teknologi

- [React 18](https://react.dev) (Create React App)
- [Chakra UI v2](https://v2.chakra-ui.com) — design system "Pesisir Institusional" (lihat `DESIGN-SPEC.md`)
- [React Router v6](https://reactrouter.com)
- [Framer Motion](https://www.framer.com/motion/)

## Menjalankan secara lokal

```bash
npm install
npm start        # server development di http://localhost:3000 (alias: npm run dev)
npm run build    # build produksi ke folder build/
npm test         # menjalankan tes
```

## Struktur proyek

```
src/
├── components/      # Navbar, Footer, kartu, SectionHeading, Reveal, PageHeader
├── theme/           # token desain Chakra (warna, font, varian komponen)
├── variables/       # data konten (berita, wisata, lembaga, statistik)
├── views/           # halaman: LandingPage, NewsPage, ProfilPage, Pemetaan, 404
└── assets/          # foto & logo (versi web-optimized di assets/news)
```

Aturan desain lengkap (palet warna, tipografi, komponen, motion) terdokumentasi di [`DESIGN-SPEC.md`](./DESIGN-SPEC.md).
