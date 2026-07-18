// Sumber data konten situs — komponen TIDAK hardcode konten (lihat DESIGN-SPEC.md §6).
// Gambar berita memakai versi terkompresi di src/assets/news (semula PNG 0,4–1 MB per file).

import k1 from '../assets/news/k1.jpg';
import k2 from '../assets/news/k2.jpg';
import k3 from '../assets/news/k3.jpg';
import k4 from '../assets/news/k4.jpg';
import k5 from '../assets/news/k5.jpg';
import p1 from '../assets/news/p1.jpg';
import p2 from '../assets/news/p2.jpg';
import p3 from '../assets/news/p3.jpg';
import p4 from '../assets/news/p4.jpg';
import p5 from '../assets/news/p5.jpg';
import x1 from '../assets/news/x1.jpg';
import x2 from '../assets/news/x2.jpg';
import x3 from '../assets/news/x3.jpg';
import x4 from '../assets/news/x4.jpg';
import x5 from '../assets/news/x5.jpg';
import lesehan from '../assets/news/lesehan.jpg';
import bantuanPendidikan from '../assets/news/bantuan-pendidikan.png';
import menabung from '../assets/news/menabung.jpg';
import manejemen from '../assets/news/manejemen.jpg';
import qris from '../assets/news/qris.jpeg';
import warna from '../assets/news/warna.jpeg';
import ckg from '../assets/news/ckg.png';
import geo from '../assets/news/geo.jpeg';
import geo3 from '../assets/news/geo3.jpeg';
import maps from '../assets/news/maps.png';
import kampungKb from '../assets/WATUKARUNG02.jpg';

import fotoKasap from '../assets/travel/kasap.jpg';
import fotoCokel from '../assets/travel/cokel.jpg';
import fotoCamping from '../assets/travel/camping.jpg';
import fotoParkir from '../assets/travel/parkir.jpg';
import fotoPakKus from '../assets/travel/pakkus.jpg';
import benteng from '../assets/travel/benteng mati.jpg';
import bercak from '../assets/travel/bercak.jpg';
import denombo from '../assets/travel/denombo.jpg';
import dila from '../assets/travel/dila.jpg';
import iyek from '../assets/travel/iyek.jpg';
import rajaampat from '../assets/travel/rajaampat.jpg';
import sitos from '../assets/travel/sitoss.png';
import sumaryono from '../assets/travel/sumaryono.jpg';
import puan from '../assets/travel/puan.png';
import wl from '../assets/travel/wl.jpg';
import watukarungTravel from '../assets/travel/watukarung.jpg';
import waduk from '../assets/travel/waduk.jpg';
import esetetic from '../assets/travel/esetetic.jpg';
import balai from '../assets/travel/balai.jpg';
import lapangan from '../assets/travel/lapangan.jpg';
import ams from '../assets/travel/ams.png';
import pos from '../assets/travel/pos.png';
import ayam from '../assets/travel/ayam.jpg';
import sukino from '../assets/travel/sukino.jpg';
import putra from '../assets/travel/putra.jpg';
import masjid from '../assets/travel/masjid.jpg';
import wan from '../assets/travel/wan.jpg';
import homestay from '../assets/travel/homestay.jpg';

import logoKarangTaruna from '../assets/supports/karang-taruna.png';
import logoPkk from '../assets/supports/pkk-removebg-preview.png';
import logoPengajian from '../assets/supports/pengajian-removebg-preview.png';
import logoSeni from '../assets/supports/seni-removebg-preview.png';
import logoVoli from '../assets/supports/voli-removebg-preview.png';
import logoNelayan from '../assets/supports/nelayan-removebg-preview.png';
import logoTani from '../assets/supports/tani-removebg-preview.png';

// ---------------------------------------------------------------------------
// Statistik kunci dusun
// ---------------------------------------------------------------------------
export const stats = [
  { value: '170', label: 'Jiwa Penduduk', note: 'Sensus 2025' },
  { value: '6', label: 'Titik Wisata & Fasilitas', note: 'Pantai, sungai & camping' },
  { value: '7', label: 'Lembaga Aktif', note: 'Penggerak dusun' },
];

// ---------------------------------------------------------------------------
// Berita — category: 'pemerintahan' | 'pendidikan' | 'kesehatan' | 'sosialisasi'
// dateISO dipakai untuk pengurutan, date untuk tampilan.
// ---------------------------------------------------------------------------
const news = [
  {
    id: 'ckg',
    category: 'kesehatan',
    title: 'Cek Kesehatan Gratis: Hipertensi dan Gula Darah',
    date: '2 Juli 2026',
    dateISO: '2026-07-02',
    image: ckg,
    caption:
      'Mahasiswa KKN UKDW kelompok 30 berkolaborasi dengan Puskesmas Pembantu (Pustu) Sempon menggelar layanan pemeriksaan kesehatan gratis di Dusun Tekil pada Senin (7/7/2026).',
  },
  {
    id: 'phbs-first-aid',
    category: 'kesehatan',
    title: 'Sosialisasi pernikahan dini pada remaja dan cek kesehatan gratis',
    date: '11 Ju;i 2026',
    dateISO: '2026-08-29',
    image: k5,
    caption:
      'edukasi tentang pernikahan dini dan cek bb, tb dan kesehatan gratis remaja.',
  },
  {
    id: 'nugget-ikan',
    category: 'pendidikan',
    title: 'Pemberdayaan bahasa inggris anak2 di dusun Tekil',
    date: '10 Juli 2026',
    dateISO: '2026-07-10',
    image: x3,
    caption:
      'Pemberdayaan seluruh anak2 di dusun Tekil dengan mengajarkan bahasa inggris dasar',
  },
  {
    id: 'literasi-keuangan',
    category: 'pendidikan',
    title: 'Branding UMKM warung Warga Tekil di pantai kasap',
    date: '10 Juli 2026',
    dateISO: '2026-07-10',
    image: x5,
    caption:
      'Pendampingan pengelolaan keuangan rumah tangga yang mandiri dan efisien — dari mencatat pemasukan-pengeluaran hingga merencanakan tabungan keluarga.',
  },
  {
    id: 'edukasi-anemia',
    category: 'kesehatan',
    title: 'Edukasi Anemia pada Usia Anak hingga Remaja',
    date: '7 Juli 2025',
    dateISO: '2025-07-07',
    image: x4,
    caption:
      'Penyuluhan pencegahan anemia bagi anak dan remaja dusun: mengenali gejala, pentingnya gizi seimbang, dan konsumsi tablet tambah darah bagi remaja putri.',
  },
  {
    id: 'pelatihan-ai',
    category: 'pendidikan',
    title: 'Pelatihan Pengenalan Kecerdasan Buatan (AI) untuk Anak-Anak',
    date: '4 Juli 2025',
    dateISO: '2025-07-04',
    image: x1,
    caption:
      'Pengenalan kecerdasan buatan untuk anak-anak Dusun Dokgarut melalui Teachable Machine dan Scratch — menumbuhkan kreativitas, logika berpikir, dan literasi digital sejak dini.',
  },
  {
    id: 'pelatihan-desain',
    category: 'pendidikan',
    title: 'Pelatihan Desain Dasar bagi Anak-Anak untuk Promosi UMKM Lokal',
    date: '4 Juli 2025',
    dateISO: '2025-07-04',
    image: x2,
    caption:
      'Anak-anak belajar dasar desain grafis sambil bermain, lalu karyanya dipakai mendukung promosi produk usaha warga sekitar.',
  },
  {
    id: 'pemeriksaan-gratis',
    category: 'kesehatan',
    title: 'Pemeriksaan Kesehatan Gratis',
    date: '21 Februari 2025',
    dateISO: '2025-02-21',
    image: k3,
    caption:
      'Layanan pemeriksaan kesehatan gratis bagi warga dusun: cek tekanan darah, gula darah, dan konsultasi kesehatan umum.',
  },
  {
    id: 'pernikahan-dini',
    category: 'kesehatan',
    title: 'Sosialisasi Pencegahan Pernikahan Dini dan Pembuatan Kreasi Bunga',
    date: '25 Desember 2024',
    dateISO: '2024-12-25',
    image: k4,
    caption:
      'Sosialisasi dampak pernikahan dini bagi remaja yang dirangkai dengan pelatihan keterampilan membuat kreasi bunga sebagai kegiatan produktif.',
  },
  {
    id: 'pupuk-organik',
    category: 'pemerintahan',
    title: 'Sosialisasi Pembuatan Pupuk Organik',
    date: '8 Agustus 2024',
    dateISO: '2024-08-08',
    image: p5,
    caption:
      'Pelatihan pembuatan pupuk organik dari limbah rumah tangga dan pertanian untuk mendukung pertanian dusun yang lebih hemat dan ramah lingkungan.',
  },
  {
    id: 'fgd-pariwisata',
    category: 'pemerintahan',
    title: 'FGD Sosialisasi Masyarakat oleh Dinas Pariwisata Kabupaten Pacitan',
    date: '6 Agustus 2024',
    dateISO: '2024-08-06',
    image: p4,
    caption:
      'Diskusi terarah bersama Dinas Pariwisata Kabupaten Pacitan tentang pengembangan potensi wisata Watukarung dan peran aktif masyarakat dusun.',
  },
  {
    id: 'posyandu-putri-ceria',
    category: 'kesehatan',
    title: 'Posyandu Remaja "Putri Ceria"',
    date: '3 Agustus 2024',
    dateISO: '2024-08-03',
    image: k1,
    caption:
      'Posyandu remaja yang aktif sejak 2018 sebagai wadah pembinaan kesehatan remaja — pemantauan gizi, konseling, dan edukasi kesehatan reproduksi.',
  },
  {
    id: 'pilkasun-pemungutan',
    category: 'pemerintahan',
    title: 'Pemungutan Suara Pilkasun Dusun Dokgarut',
    date: '4 Januari 2024',
    dateISO: '2024-01-04',
    image: p3,
    caption:
      'Warga Dusun Dokgarut menggunakan hak pilihnya dalam pemilihan kepala dusun yang berlangsung tertib dan demokratis.',
  },
  {
    id: 'pilkasun-sosialisasi',
    category: 'pemerintahan',
    title: 'Sosialisasi Pilkasun Dokgarut, Desa Watukarung',
    date: '10 November 2023',
    dateISO: '2023-11-10',
    image: p2,
    caption:
      'Warga diberikan informasi tata cara, jadwal, tahapan, dan kriteria calon dalam pemilihan kepala dusun, serta diajak menjaga ketertiban selama proses berlangsung.',
  },
  {
    id: 'soth',
    category: 'pemerintahan',
    title: 'Sekolah Orang Tua Hebat (SOTH) Desa Watukarung',
    date: '1 November 2023',
    dateISO: '2023-11-01',
    image: p1,
    caption:
      'Program edukatif untuk meningkatkan pengetahuan, keterampilan, dan peran aktif orang tua dalam mendampingi tumbuh kembang anak secara holistik.',
  },
  {
    id: 'kampung-kb',
    category: 'kesehatan',
    title: 'Kampung KB "Watukarung Sehat" Desa Watukarung',
    date: '23 Januari 2023',
    dateISO: '2023-01-23',
    image: kampungKb,
    caption:
      'Pencanangan Kampung Keluarga Berkualitas "Watukarung Sehat" sebagai upaya peningkatan kualitas hidup keluarga di Desa Watukarung, Kecamatan Pringkuku.',
  },
  {
    id: 'bias-imunisasi',
    category: 'kesehatan',
    title: 'Pelaksanaan Bulan Imunisasi Anak Sekolah (BIAS)',
    date: '21 September 2020',
    dateISO: '2020-09-21',
    image: k2,
    caption:
      'Pelaksanaan BIAS MR di SD Negeri Watukarung 1 dengan tetap menerapkan protokol kesehatan.',
  },
  {
    id: 'bantuan-pendidikan-2017',
    category: 'pendidikan',
    title: 'Bantuan Pendidikan Siswa Miskin Kabupaten Pacitan',
    date: '2017',
    dateISO: '2017-06-01',
    image: bantuanPendidikan,
    caption:
      'Bantuan finansial pemerintah kabupaten bagi siswa dari keluarga kurang mampu untuk perlengkapan sekolah, seragam, dan biaya operasional pendidikan pada Tahun Anggaran 2017.',
  },
  {
    id: 'gores-warna',
    category: 'pendidikan',
    title: 'Gores Warna: Menggambar Cita-Cita, Menumbuhkan Mimpi Anak Dusun Dokgarut',
    date: '3 Juli 2026',
    dateISO: '2026-07-03',
    image: warna,
    caption:
      'Melalui program Gores Warna, mahasiswa KKN mengajak anak-anak Dusun Dokgarut, Watukarung, Pacitan untuk mengenal berbagai profesi dan cita-cita melalui kegiatan menggambar yang kreatif dan menyenangkan. Selain mengembangkan kemampuan seni, program ini juga memperkenalkan peran teknologi digital, pemanfaatan potensi alam, serta pentingnya kepedulian terhadap lingkungan sebagai bekal bagi generasi muda dalam menghadapi masa depan.',
  },
  
  {
    id: 'kesehatan-digital',
    category: 'sosialisasi',
    title: 'Ngelacak Kesehatan Digitalmu!',
    date: '3 Juli 2026',
    dateISO: '2026-07-03',
    image: geo3,
    caption:
      'Ketika Karang Taruna Dokgarut ngobrolin soal HP, scroll, dan rasa cemas yang nggak kelihatan.',
  },
  {
    id: 'menabung',
    category: 'pendidikan',
    title: 'Belajar Mengatur Keuangan Sejak Dini: Menabung dan Menyisihkan Uang Jajan',
    date: '6 Juli 2026',
    dateISO: '2026-07-06',
    image: menabung,
    caption:
      '"Sedikit demi sedikit, lama-lama menjadi bukit." Program KKN yang mengajak anak-anak untuk melek finansial sejak usia sekolah. Lewat kebiasaan kecil seperti menyimpan sebagian uang jajan di celengan dan menahan diri dari sifat boros, anak-anak tidak hanya belajar tentang uang, tetapi juga tentang kedisiplinan, rasa syukur, dan cara mempersiapkan masa depan yang lebih terencana.',
  },
  {
    id: 'manajemen-waktu',
    category: 'pendidikan',
    title: 'Belajar Mengatur Waktu dan Menggunakan Gadget dengan Bijak Bersama Anak-Anak Dusun Dokgarut',
    date: '9 Juli 2026',
    dateISO: '2026-07-09',
    image: manejemen,
    caption:
      'Dusun Dokgarut, Watukarung, Pacitan, Kamis 9 Juli 2026. Mahasiswa Kuliah Kerja Nyata (KKN) Universitas Kristen Duta Wacana, Kelompok 43 melaksanakan program kerja bertajuk "Manajemen Waktu dan Penggunaan Gadget Secara Bijak untuk Anak-Anak". Kegiatan ini bertujuan memberikan edukasi kepada anak-anak mengenai pentingnya mengatur waktu serta memanfaatkan gadget secara bijaksana agar teknologi dapat memberikan manfaat dalam kehidupan sehari-hari.',
  },
  {
    id: 'qris',
    category: 'sosialisasi',
    title: 'Pengenalan dan Sosialisasi Metode Pembayaran QRIS bagi Pelaku Usaha',
    date: '10 Juli 2026',
    dateISO: '2026-07-10',
    image: qris,
    caption:
      'Pada hari Jumat, 10 Juli 2026 pukul 19.30 WIB, telah dilaksanakan program kerja KKN bertajuk "Pengenalan dan Sosialisasi Metode Pembayaran QRIS bagi Pelaku Usaha" yang bertempat di Balai Dusun Dokgarut, Pacitan, Jawa Timur. Kegiatan ini bertujuan untuk meningkatkan pemahaman para pelaku usaha mengenai sistem pembayaran digital QRIS sebagai salah satu metode transaksi yang praktis, aman, dan efisien.',
  },
  {
    id: 'kesehatan-digital2',
    category: 'digital',
    title: 'Ketika Layar Bicara Lebih Keras dari Kata-Kata',
    date: '11 Juli 2026',
    dateISO: '2026-07-11',
    image: geo,
    caption:
      'Sore itu, halaman balai warga Dusun Dokgarut kembali ramai. Sesi kedua dari program "Ngelacak Kesehatan Digitalmu!" digelar, dan kali ini suasananya sedikit berbeda — bukan cuma karena materinya makin dalam, tapi karena ada tamu istimewa yang datang untuk berbagi cerita.',
  },
  {
    id: 'maps',
    category: 'sosialisasi',
    title: 'Sosialisasi pernikahan dini pada remaja dan cek kesehatan gratis',
    date: ' 7 Juli 2026',
    dateISO: '2026-07-15',
    image: maps,
    caption:
      'Kegiatan meliputi pemeriksaan tinggi badan, berat badan, serta cek HB darah untuk mendukung kesehatan dan tumbuh kembang remaja, ilanjutkan dengan Sosialisasi Pencegahan Kehamilan Dini'
    },
];

// Semua berita, terbaru lebih dulu (stabil untuk tanggal yang sama).
export const allNews = [...news].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

// 3 berita terbaru untuk landing page.
export const latestNews = allNews.slice(0, 3);

export const newsCategories = [
  { key: 'pemerintahan', label: 'Pemerintahan' },
  { key: 'pendidikan', label: 'Pendidikan' },
  { key: 'kesehatan', label: 'Kesehatan' },
  { key: 'sosialisasi', label: 'Sosialisasi' },
  { key: 'digital', label: 'digital' },
];

// ---------------------------------------------------------------------------
// Destinasi & fasilitas wisata
// ---------------------------------------------------------------------------
export const TravelPlace = [
  {
    title: 'Pantai Kasap',
    category: 'Pantai',
    image: fotoKasap,
    location:
      'https://www.google.com/maps/place/Kasap+Beach/@-8.2402434,110.9829,13z/data=!4m6!3m5!1s0x2e7bdde98e5438dd:0x61e796fc381a11db!8m2!3d-8.2402434!4d110.9829!16s%2Fg%2F11c20snssd',
  },
  {
    title: 'Kali Cokel',
    category: 'Sungai',
    image: fotoCokel,
    location:
      'https://www.google.com/maps/place/Kali+Cokel+Pacitan/@-8.2372638,110.9835022,18.56z/data=!4m6!3m5!1s0x2e7bdde829c33561:0x5fa4d90341326a49!8m2!3d-8.2380166!4d110.983932!16s%2Fg%2F11gbthnb6k',
  },
  {
    title: 'Lesehan Spot Kasap Indah',
    category: 'Kuliner',
    image: lesehan,
    location:
      'https://www.google.com/maps/place/Lesehan+Spot+Kasap+Indah/@-8.2375783,110.9834963,17.14z/data=!4m6!3m5!1s0x2e7bdde82a59a691:0xc9067f5b9f371e57!8m2!3d-8.238405!4d110.9835569!16s%2Fg%2F11dz0kcvlk',
  },
  {
    title: 'Parkir Mobil & Motor',
    category: 'Fasilitas',
    image: fotoParkir,
    location:
      'https://www.google.com/maps/place/Parkir+Mobil+Motor/@-8.2371996,110.9834429,18.76z/data=!4m6!3m5!1s0x2e7bdd24d4ac1619:0xcbfd3cd4b12ba549!8m2!3d-8.2377973!4d110.9843441!16s%2Fg%2F11rcwj1m7_',
  },
  {
    title: 'Parkir & Kamar Mandi Bersih Pak Kus',
    category: 'Fasilitas',
    image: fotoPakKus,
    location:
      'https://www.google.com/maps/place/Penyedia+Layanan+Parkir+dan+Kamar+Mandi+Bersih+Pak+Kus+Pantai+Kasap%2FSungai+Cokel/@-8.2380101,110.9834565,19.14z/data=!4m6!3m5!1s0x2e7bdd004a3137b5:0xb461765b3ab0f614!8m2!3d-8.2380677!4d110.9842173!16s%2Fg%2F11vjxw9zfn',
  },
  {
    title: 'Camping Area Watu Payung "Batu Cinta"',
    category: 'Camping',
    image: fotoCamping,
    location:
      'https://www.google.com/maps/place/Camping+Area+Watu+Payung+%22Batu+Cinta%22/@-8.2388314,110.9834905,16.93z/data=!4m6!3m5!1s0x2e7bddd2205de849:0x63f179765fe9181f!8m2!3d-8.241214!4d110.9857759!16s%2Fg%2F11v0sn374n',
  },
  {
    title: "Sito's Pizza Pizza & Bar",
    category: 'Kuliner',
    image: sitos,
    location: 'https://maps.app.goo.gl/CZ7EF4eoDmUy9XB67',
  },
  {
    title: 'Parkiran Pak Sumaryono',
    category: 'Fasilitas',
    image: sumaryono,
    location: 'https://maps.app.goo.gl/pNunHHbMqdriBAxc9',
  },
  {
    title: 'Warung Kopi Puandu',
    category: 'Kuliner',
    image: puan,
    location: 'https://maps.app.goo.gl/j1qDjYjSTPtGosxj8',
  },
  {
    title: 'WL Aksesoris Pacitan',
    category: 'Souvenir',
    image: wl,
    location: 'https://maps.app.goo.gl/FPWeP1EcBAdisHAk7',
  },
  {
    title: 'Warung Makan Mak Iyek Pantai Kasap',
    category: 'Kuliner',
    image: iyek,
    location: 'https://maps.app.goo.gl/Ugj7PKgo9ukBRBkt6',
  },
  {
    title: 'Warung Seafood Mbak Dilla',
    category: 'Kuliner',
    image: dila,
    location: 'https://maps.app.goo.gl/rsfMwZFeceRrv6P66',
  },
  {
    title: 'Pantai Denombo',
    category: 'Wisata',
    image: denombo,
    location: 'https://maps.app.goo.gl/oG66Q8uE3QAGNARq8',
  },
  {
    title: 'Pantai Benteng Mati',
    category: 'Wisata',
    image: benteng,
    location: 'https://maps.app.goo.gl/cF296waXSMQgEwdt5',
  },
  {
    title: 'Pantai Bercak',
    category: 'Wisata',
    image: bercak,
    location: 'https://maps.app.goo.gl/S6mVW2Gm88JiEtuF6',
  },
  {
    title: 'Spot Foto Raja Ampatnya Puncak Kasap',
    category: 'Wisata',
    image: rajaampat,
    location: 'https://maps.app.goo.gl/xEDKVsgaxzzK5KZ79',
  },
  {
    title: 'Pantai Watukarung',
    category: 'Wisata',
    image: watukarungTravel,
    location: 'https://maps.app.goo.gl/RrGeeZj9JQmY8izc8',
  },
  {
    title: 'Pantai Waduk',
    category: 'Wisata',
    image: waduk,
    location: 'https://maps.app.goo.gl/g3UMMHq63sqqpuU88',
  },
  {
    title: 'WAN LAS',
    category: 'Bengkel',
    image: wan,
    location: 'https://maps.app.goo.gl/oGCgVEjuhWBEfH7h8',
  },
  {
    title: 'AMS GARAGE',
    category: 'Bengkel',
    image: ams,
    location: 'https://maps.app.goo.gl/tMbCygope2Y7XkHe9',
  },
  {
    title: 'Estetic',
    category: 'Toko',
    image: esetetic,
    location: 'https://maps.app.goo.gl/QMZdVfTQ22QWupJd8',
  },
  {
    title: 'Warung Mie Ayam Lina',
    category: 'Kuliner',
    image: ayam,
    location: 'https://maps.app.goo.gl/VrLMPDRWRvpqyAD39',
  },
  {
    title: 'Pos Kamling Dusun Dokgarut',
    category: 'Fasilitas',
    image: pos,
    location: 'https://maps.app.goo.gl/MNJ4NmK8ijVX5MRX9',
  },
  {
    title: 'Balai Dusun Dokgarut',
    category: 'Fasilitas',
    image: balai,
    location: 'https://maps.app.goo.gl/P5aLWg9w21DoW814A',
  },
  {
    title: 'Lapangan Voli Dokgarut',
    category: 'Fasilitas',
    image: lapangan,
    location: 'https://maps.app.goo.gl/pAw921NAQCnLdVzZ9',
  },
  {
    title: 'Masjid Baiturrohim Watukarung',
    category: 'Fasilitas',
    image: masjid,
    location: 'https://maps.app.goo.gl/VtnGF57Wvsc3JJox7',
  },
  {
    title: 'Toko Berkah Putra',
    category: 'Toko',
    image: putra,
    location: 'https://maps.app.goo.gl/ambHSEi4ZhXtZPvB6',
  },
  {
    title: 'Warung Pak Sukino',
    category: 'Toko',
    image: sukino,
    location: 'https://maps.app.goo.gl/a3Vdiaz4YxBHceb98',
  },
  {
    title: 'Homestay Pondok Kranji',
    category: 'Fasilitas',
    image: homestay,
    location: 'https://maps.app.goo.gl/Rs3SgbTgf81FcZnG9',
  },
];

// ---------------------------------------------------------------------------
// Lembaga & program dusun — nama disesuaikan dengan logonya
// (sebelumnya berisi nama program kabupaten sisa template yang tidak cocok).
// ---------------------------------------------------------------------------
export const institutionSupports = [
  { title: 'Karang Taruna', image: logoKarangTaruna },
  { title: 'PKK', image: logoPkk },
  { title: 'Pengajian', image: logoPengajian },
  { title: 'Sanggar Seni', image: logoSeni },
  { title: 'Voli Dokgarut', image: logoVoli },
  { title: 'Kelompok Nelayan', image: logoNelayan },
  { title: 'Kelompok Tani', image: logoTani },
];
