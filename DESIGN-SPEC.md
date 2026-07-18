# DESIGN SPEC — Redesign "Dusun Dokgarut" v1.0

> Sistem desain **"Pesisir Institusional"** — kerangka civic-clean (kredibel, disiplin, flat-border)
> dengan suntikan drama pesisir di titik yang tepat (hero, kartu wisata, footer navy).
> Hasil sintesis panel desain 3 konsep + 3 juri. Dokumen ini KONTRAK — implementasi tidak boleh menyimpang.

## 1. Identitas & Konten

- Situs profil **Dusun Dokgarut, Desa Watukarung, Kec. Pringkuku, Kab. Pacitan, Jawa Timur**.
- SEMUA referensi "Probolinggo" adalah sisa template dan WAJIB hilang (teks, link sosmed, heading "Profil Kabupaten Probolinggo" → "Profil Dusun Dokgarut").
- Bahasa antarmuka: **Indonesia konsisten** (bukan campur Inggris). "Home"→"Beranda", "Stay up to date"→hapus, dll.
- Statistik kunci: **164 jiwa** (Sensus 2025) · **6 destinasi wisata** · **7 lembaga aktif**.

## 2. Theme (sudah diimplementasikan di `src/theme/index.js` — PAKAI TOKEN INI, jangan hex mentah)

- **Warna brand** `brand.50–900` (Biru Watukarung; aksi utama `brand.600`, link `text.link`, navy `brand.900`).
- **Aksen** `accent.50–900` (Amber Mentari). ATURAN: amber sebagai TEKS di bg terang wajib `accent.700`; `accent.400/500` hanya untuk bg/ikon/garis.
- **Semantic tokens** (light/dark otomatis): `bg.canvas`, `bg.surface`, `bg.subtle`, `bg.inverse`, `border.default`, `border.hover`, `text.primary`, `text.secondary`, `text.muted`, `text.link`, `text.onInverse`.
- **Font**: heading `Plus Jakarta Sans` (600/700/800), body `Inter` (400/500/600). Sudah dimuat di `public/index.html`. JANGAN set `fontFamily` manual per-komponen — sudah dari theme.
- **Button variants** dari theme: `solid`, `outline`, `accent`, `onImage`, `onImageOutline`. Radius 8px (`rounded="lg"` bawaan variant), tinggi `h="44px"` (md) / `h="48px"` (lg).
- **Badge variants**: `pemerintahan`, `pendidikan`, `kesehatan` (pill, uppercase 12px — sudah di theme).
- **Kartu (aturan umum)**: `bg="bg.surface"`, `border="1px solid"`, `borderColor="border.default"`, `rounded="xl"` (12px) atau `rounded="2xl"` (16px) untuk kartu besar, **TANPA shadow saat idle**. Hover: `transform translateY(-2px)` + `shadow="lift"` + `borderColor="border.hover"`, `transition="all 0.2s ease"`.
- **Shadow custom**: `lift` dan `raised` (sudah di theme). Jangan pakai `xl`/`2xl` default.
- **Overlay foto (KONSTAN, tidak ikut color mode)**: `linear-gradient(to-t, rgba(12,42,71,0.85), rgba(12,42,71,0.35) 50%, rgba(12,42,71,0.15))` — semua teks putih di atas foto wajib di atas overlay ini.
- Section: `py={{ base: 14, md: 24 }}`; Container `maxW="7xl"` `px={{ base: 5, md: 8 }}`.

## 3. Komponen bersama (kontrak props — file pemilik di kurung)

- **`SectionHeading`** (`src/components/SectionHeading.js`, SUDAH ADA): props `kicker`, `title`, `description?`, `action?` (node link "Lihat semua →" rata kanan), `align?` ('start'|'center'). Pola wajib di SETIAP section.
- **`Reveal`** (`src/components/Reveal.js`, SUDAH ADA): wrapper framer-motion fade-up sekali jalan (`whileInView`, y 24→0, 0.5s, once, hormati `useReducedMotion`). Props: `delay?`. Bungkus section/kartu dengan ini, JANGAN buat varian animasi sendiri.
- **`PageHeader`** (`src/components/PageHeader.js`, SUDAH ADA): band header halaman dalam (`bg.subtle`, py 12): props `kicker`, `title`, `description?`, `breadcrumb?` (array `{label, to?}`). Juga set `<title>` dokumen via react-helmet (prop `title`).
- **`CardNews`** (`src/components/CardNews.js`): props `{title, image, date, caption, category}` — category: 'pemerintahan'|'pendidikan'|'kesehatan'. Gambar 16:9 (`AspectRatio`) + `loading="lazy"`; body p 5: Badge kategori + tanggal `text.muted` 13px → judul Heading size md `noOfLines={2}` → caption 15px `text.secondary` `noOfLines={2}`. Hover: lift standar + judul `text.link`. Lebar fleksibel (100% dari grid parent — TIDAK fixed 400px).
- **`SmallCardNews`** (`src/components/SmallCardNews.js`): props `{title, image, date, category}` — horizontal: thumb 96×96 `rounded="lg"` + kolom: badge mini → judul 15px semibold `noOfLines={2}` → tanggal 13px `text.muted`. Pemisah `border-bottom` antar item, hover `bg="bg.subtle"`.
- **`CardTravel`** (`src/components/CardTravel.js`) — IMMERSIVE (cangkok SAMUDRA): rasio 4:5 (`AspectRatio ratio={4/5}`), `rounded="2xl"`, overflow hidden; `Image` full-bleed `objectFit="cover"` + overlay gradient konstan (lihat §2). Konten absolut bawah p 5: chip kategori kecil (pill `bg="blackAlpha.600"` `backdropFilter="blur(4px)"` teks putih 12px) → nama putih Heading 20px → baris `FaMapMarkerAlt` + "Watukarung, Pacitan" 13px `whiteAlpha.800`. Hover: foto `scale(1.05)` (transition 0.4s), kartu lift. Seluruh kartu = link `as="a" href={location}` target _blank rel noopener. Props `{title, image, location, category}`.

## 4. Halaman

### Navbar (`src/components/Navbar.js`)
Sticky top, h 72px, `bg` glass: `rgba(255,255,255,0.86)` light / `rgba(11,18,32,0.86)` dark + `backdropFilter="blur(12px)"`, border-bottom `border.default`. Kiri: logo desa (`logo_watukarung-removebg-preview.png`) 36px **tanpa IconButton** (cukup `Image` dekoratif `alt=""`) + wordmark "Dusun Dokgarut" 16px/700 + sub "Desa Watukarung · Pacitan" 11px `text.muted` (sub hanya ≥md). Nav: **`Link as={RouterLink} to=...`** (BUKAN href — tanpa full reload): Beranda `/`, Profil ▾ (dropdown: Data Wilayah `/profil#datawilayah`, Visi Misi `/profil#visimisi`, Logo Desa `/profil#logodesa`, Kondisi Geografis `/profil#kondisigeografis`), Wisata `/#wisata`, Berita `/news`, Pemetaan `/pemetaan`. Link 15px/500 `text.secondary`, halaman aktif (`useLocation`) = `text.link` + underline 2px `brand.600` offset 6px. Dropdown pakai Chakra `Menu` (bukan Popover hover — keyboard accessible), panel `rounded="xl"` `shadow="raised"`. Kanan: `ColorModeSwitcher`. Mobile: hamburger → `Collapse`, item py 3 + divider. Hash link pakai RouterLink `to="/profil#datawilayah"` (ScrollManager menangani scroll).

### Footer (`src/components/Footer.js`)
`bg="brand.900"` KEDUA mode, **border-top 4px `accent.500`** (signature). 4 kolom (mobile stack): (1) logo desa 48px dalam lingkaran putih + "Dusun Dokgarut" + alamat "Dusun Dokgarut, Desa Watukarung, Kec. Pringkuku, Kab. Pacitan, Jawa Timur" `whiteAlpha.700` 14px; (2) "Navigasi" (Beranda, Profil, Wisata, Berita, Pemetaan — RouterLink); (3) "Kontak": Telp/WhatsApp `https://wa.me/6282338142821` + link "Lihat di Google Maps" (URL embed DataWilayah versi maps.google.com); (4) "Tentang Situs": "Dibangun oleh Tim KKN 34 UKDW 2025" + link GitHub `https://github.com/EzraNahumury`. Judul kolom 13px/600 uppercase ls 0.06em `whiteAlpha.600`; link 15px `whiteAlpha.800` hover white. Bottom bar border-top `whiteAlpha.200`: "© 2025 Dusun Dokgarut · Desa Watukarung". **HAPUS**: kolom Company/Support placeholder, newsletter, Fax, sosmed Probolinggo, emoji.

### Landing (`src/views/LandingPage/…`)
1. **Hero** (`Hero.js`): full-bleed `minH={{base:'88svh', md:'88vh'}}` foto **`src/assets/WATUKARUNG.jpg`** (aerial teluk) `bgSize cover/center` + overlay konstan §2. Konten rata kiri Container 7xl, align bawah-tengah: chip glass (pill `bg="whiteAlpha.200"` blur border `whiteAlpha.300` teks 12px uppercase "Desa Watukarung · Kab. Pacitan") → H1 putih 36→56px/800 "Dusun Dokgarut, Pesona Pesisir Selatan Jawa" → lead 17-18px `whiteAlpha.900` maxW 560px: "Dusun pesisir berpenduduk 164 jiwa — rumah bagi ombak kelas dunia, pantai karang, dan kehangatan kampung nelayan." → 2 tombol: `onImage` "Jelajahi Wisata" (RouterLink `/#wisata`) + `onImageOutline` "Profil Dusun" (`/profil`). HAPUS deretan Badge visi lama. Animasi: stagger on-mount (chip→H1→lead→CTA, y 20→0, 0.5s per item, delay 0.1s berurutan) — ganti durasi lama 2s/5s.
2. **Stats strip** (di `Hero.js` atau `index.js`): kartu `bg.surface` `rounded="2xl"` `shadow="raised"` maxW 7xl `mt="-48px"` relatif menimpa hero, grid 3 sel (divider vertikal): angka 36-40px/800 `text.link` + label 14px `text.secondary` — "164 Jiwa Penduduk" / "6 Destinasi Wisata" / "7 Lembaga Aktif".
3. **Berita Terbaru** (`LatestNews.js`): `SectionHeading` (kicker "KABAR DUSUN", title "Berita Terbaru", action "Lihat semua →" ke `/news`) + grid 3 **`CardNews`** dari export **`latestNews`** di `variables/general.js` (JANGAN hardcode konten di komponen). lg 3 kolom / md 2 / base 1, gap 6.
4. **Wisata** (`Travel.js`, section `id="wisata"`): bg `bg.canvas` (zebra vs surface). `SectionHeading` (kicker "JELAJAHI DOKGARUT", title "Destinasi Wisata", desc 1 kalimat). Grid `CardTravel`: lg 3 kolom gap 6; **mobile: scroll-snap horizontal** (`overflowX="auto"` `scrollSnapType="x mandatory"`, kartu `minW="78vw"` `scrollSnapAlign="center"`, sembunyikan scrollbar) — cangkok TEPIAN.
5. **Video Promo** (`VideoPromo.js`): section `bg="brand.900"` KEDUA mode: kicker `accent.300`, H2 putih "Watukarung dari Dekat", `AspectRatio 16/9` maxW 960px center `rounded="2xl"` overflow hidden border `whiteAlpha.300`; iframe `title` + `loading="lazy"` + `allowFullScreen`.
6. **Lembaga & Program** (`Supports.js`): `SectionHeading` center (kicker "PENGGERAK DUSUN", title "Lembaga & Program Dusun"). Grid tile: `bg` **putih konstan kedua mode** `rounded="xl"` border p 5, logo 64px `filter="grayscale(100%)"` `opacity 0.65` → hover `grayscale(0)` opacity 1 + lift; label 13px/600 di bawah. Data dari `institutionSupports` (nama SUDAH dibetulkan: Karang Taruna, PKK, dst). TANPA link keluar.
7. Urutan section di `index.js`: Hero(+stats) → LatestNews → Travel → VideoPromo → Supports. Tiap section dibungkus `Reveal`.

### NewsPage (`src/views/NewsPage/index.js`)
`PageHeader` (kicker "KABAR DUSUN", title "Berita Dusun", breadcrumb Beranda/Berita, helmet title "Berita — Dusun Dokgarut"). Filter pill kategori (Semua/Pemerintahan/Pendidikan/Kesehatan) pakai **state** (`useState`) — pill aktif `solid brand.600` putih, idle outline; filter menyaring data (bukan anchor). Data dari `allNews` (export baru general.js, sudah ada `category`). Layout lg: kiri 2/3 grid 2-kolom `CardNews`; kanan 1/3 sidebar sticky top 96px "Terbaru" + tumpukan `SmallCardNews` (5 terbaru lintas kategori). Base: stack. `key` wajib di semua map.

### NewsDetail (`src/views/NewsDetail/index.js`) — route `/news/:newsId`
Halaman artikel penuh. Isi artikel di **`src/variables/newsArticles.js`** (objek id → array blok `p`/`h2`/`quote`/`list` — TIDAK di komponen). Band header `bg.subtle` (breadcrumb Beranda/Berita/judul, Badge kategori + tanggal + estimasi baca ~200 kata/menit, H1 28→38px, caption sebagai lead `text.secondary`), `pb` ekstra karena **foto 16:9 menimpa band** (`Container maxW="4xl"` `mt` negatif, `rounded="2xl"` `shadow="raised"`) — pola overlap yang sama dengan stats strip hero. Body `Container maxW="3xl"`, prose 16-17px lh 1.8; blok quote = kartu `brand.50` (`_dark` `bg.subtle`) border-left 4px `accent.500` (pola VisiMisi). Setelah body: baris bagikan (WhatsApp `wa.me`, Facebook sharer, Salin Tautan via clipboard + toast) → navigasi Lebih baru/Lebih lama (kartu kecil dari urutan `allNews`) → section "Berita Lainnya" `bg.surface` 3 `CardNews` (kategori sama diprioritaskan). Id tak dikenal → `Navigate` ke `/news`. `CardNews`/`SmallCardNews` kini `LinkBox`+`LinkOverlay` ke `/news/:id` — props tambah `id`.

### ProfilPage (`src/views/ProfilPage/…`)
`PageHeader` (kicker "TENTANG KAMI", title **"Profil Dusun Dokgarut"**, breadcrumb). Layout lg: sidebar kiri 240px sticky top 96px — anchor nav 4 item (RouterLink hash), item 15px `text.secondary` border-left 2px `border.default`, aktif (scrollspy via IntersectionObserver sederhana ATAU minimal styling hover) = `text.link` + border-left `brand.600` + `bg="brand.50"` (`_dark` `bg.subtle`); konten kanan maxW 720px, `Stack spacing={16}`, tiap blok `id` sesuai: `datawilayah`, `visimisi`, `logodesa`, `kondisigeografis`.
- **DataWilayah**: ganti UnorderedList → grid kartu data kecil (Nama/Desa/Kecamatan/Kabupaten/Provinsi/Penduduk; label 12px uppercase `text.muted` + nilai 16px/600) + sub-blok "Batas Wilayah" (tabel 2 kolom arah→wilayah) + embed Google Maps existing `rounded="xl"` border, `AspectRatio 16/10`, `title="Peta lokasi Dusun Dokgarut"` `loading="lazy"`.
- **VisiMisi**: Visi = blockquote kartu `bg="brand.50"` (`_dark` `bg.subtle`) border-left 4px `accent.500`, teks 20-22px/600 heading-font; Misi = list nomor dalam lingkaran 28px `bg="brand.600"` putih 14px/700, teks 16px lh 1.7.
- **LogoKabupaten** → judul "Logo Desa Watukarung": logo 200-240px dalam panel `bg.subtle` `rounded="2xl"` p 10 center; makna lambang & warna sebagai list rapi (judul item 600 + deskripsi `text.secondary`) — perbaiki line-break janggal di teks sumber.
- **KondisiGeo**: prose 17px lh 1.75 maxW 68ch, sub-judul H3, rapikan paragraf (teks sumber punya line-break aneh — gabungkan).

### TeamPage (`src/views/TeamPage/index.js`) — route `/tim`
Halaman anggota Tim KKN 34 UKDW (unit "Dokgarut 34"). Data di **`src/variables/team.js`** (`teamMembers` + `teamUnit`); foto poster perkenalan di `public/team` — pakai versi `.jpg` terkompresi (lebar 1100px, asli `.png` 1,8–2 MB dibiarkan sebagai sumber). `PageHeader` (kicker "DI BALIK SITUS INI") → intro 1 paragraf + badge jumlah anggota → grid poster `SimpleGrid` base 1/sm 2/lg 4, kartu = `button` (poster `AspectRatio 4/5` + caption jabatan/nama/prodi, hover lift + foto scale 1.03) → klik buka `Modal` lightbox poster penuh (overlay `blackAlpha.700` blur) → band penutup `brand.900` berisi tagline `#BersamaBerbuatBermanfaat`. Akses dari ikon `FaUserFriends` di navbar (kanan, sebelum `ColorModeSwitcher`, Tooltip, aktif = `text.link`) dan link "Tim KKN" di footer.

### Pemetaan (`src/views/Pemetaan/pemetaan.js`)
**HAPUS react-helmet Bootstrap CDN + pemetaan.css + import Bootstrap apa pun** — full Chakra. `PageHeader` (kicker "WILAYAH", title "Peta Wilayah Dusun Dokgarut"). Gambar **`./images/peta-web.jpg`** (SUDAH dibuat, 715KB — JANGAN import peta.png 41MB) dalam kartu `rounded="2xl"` border p 2 `bg.surface`, `Image rounded="xl"` `loading="lazy"` alt deskriptif; klik buka Chakra `Modal size="full"` berisi gambar (lightbox) + tombol `outline` "Buka ukuran penuh" (link gambar target _blank). Caption 13px `text.muted`. Hapus file pemetaan.css dari import (file boleh dibiarkan).

### PageNotFound (`src/views/PageNotFound/index.js`)
Min-h 70vh center: "404" 96-120px/800 warna `brand.100` (`_dark` `bg.subtle`) sebagai latar tipografis + Heading "Halaman tidak ditemukan" `text.primary` + sub `text.secondary` "Halaman ini tersapu ombak — mungkin alamatnya berubah." + Button `solid` RouterLink "Kembali ke Beranda". Gambar Image404 boleh dipakai max 280px dengan alt. JANGAN warna hardcoded gray.700 (rusak di dark).

## 5. Motion (framer-motion v6)
- Easing `[0.21, 0.47, 0.32, 0.98]`, durasi 0.45–0.55s, `viewport={{ once: true, margin: '-80px' }}`.
- Pakai komponen `Reveal` untuk scroll-reveal; hover via Chakra `transition` CSS (BUKAN framer).
- `useReducedMotion()` dihormati (sudah di `Reveal`); animasi mount Hero juga wajib cek ini.
- Tidak ada loop kecuali scroll-cue hero (opsional).

## 6. Konvensi kode (WAJIB)
- Navigasi internal: `Link as={RouterLink}` / `Button as={RouterLink} to=...`. Eksternal: `isExternal` + rel.
- `key` unik di SETIAP `.map()`.
- TANPA import/variabel tak terpakai (build harus 0 warning eslint di file yang disentuh).
- Gambar konten: `alt` deskriptif; dekoratif: `alt=""`. `loading="lazy"` kecuali hero.
- Warna HANYA via token theme / semantic tokens. `useColorModeValue` hanya untuk kasus khusus yang tak tercakup token.
- Judul dokumen per halaman via react-helmet (PageHeader sudah; Landing set sendiri "Dusun Dokgarut — Desa Watukarung, Pacitan").
- Data konten dari `src/variables/general.js` — komponen tidak hardcode konten berita/wisata/lembaga.
