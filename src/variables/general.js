// Sumber data konten situs — komponen TIDAK hardcode konten (lihat DESIGN-SPEC.md §6).
// Gambar berita memakai versi terkompresi di src/assets/news (semula PNG 0,4–1 MB per file).

import k1 from '../assets/news/k1.jpg';
import posyanduRemaja from '../assets/news/posyandu-remaja.jpg';
import inggrisTekil from '../assets/news/inggris-tekil.jpg';
import umkmKasap from '../assets/news/umkm-kasap.jpg';
import tayubKenul from '../assets/news/tayub-kenul.jpg';
import lesehan from '../assets/news/lesehan.jpg';
import ckg from '../assets/news/ckg.png';

import fotoKasap from '../assets/travel/kasap.jpg';
import fotoCokel from '../assets/travel/cokel.jpg';
import fotoParkir from '../assets/travel/parkir.jpg';
import fotoPakKus from '../assets/travel/pakkus.jpg';
import benteng from '../assets/travel/benteng mati.jpg';
import bercak from '../assets/travel/bercak.jpg';
import denombo from '../assets/travel/denombo.jpg';
import rajaampat from '../assets/travel/rajaampat.jpg';
import sitos from '../assets/travel/sitoss.png';
import sumaryono from '../assets/travel/sumaryono.jpg';
import watukarungTravel from '../assets/travel/watukarung.jpg';
import waduk from '../assets/travel/waduk.jpg';
import balai from '../assets/travel/balai-tekil.jpg';
import ams from '../assets/travel/ams.png';
import masjid from '../assets/travel/masjid.jpg';
import masjidTekil from '../assets/travel/masjid-tekil.jpg';
import wan from '../assets/travel/wan.jpg';
import warungTatik from '../assets/travel/warung-tatik.jpg';
import rumahRw from '../assets/travel/rumah-rw.jpg';
import rumahKasun from '../assets/travel/rumah-kasun.jpg';
import rumahRt from '../assets/travel/rumah-rt.jpg';
import rmPakSipur from '../assets/travel/rm-paksipur.jpg';
import kiosWahyu from '../assets/travel/kios-wahyu.jpg';
import wmKarmi from '../assets/travel/wm-karmi.jpg';
import wmIntan from '../assets/travel/wm-intan.jpg';
import wmSuratmi from '../assets/travel/wm-suratmi.jpg';
import wmAmelia from '../assets/travel/wm-amelia.jpg';
import wmNovita from '../assets/travel/wm-novita.jpg';
import wmDoram from '../assets/travel/wm-doram.jpg';
import pakNo from '../assets/travel/pak-no.jpg';
import kedaiAfika from '../assets/travel/kedai-afika.jpg';

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
  { value: '133', label: 'Jiwa Penduduk', note: 'Sensus 2025' },
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
    title: 'Pemeriksaan Remaja dan Sosialisasi Pencegahan Kehamilan Dini',
    date: '11 Juli 2026',
    dateISO: '2026-07-11',
    image: posyanduRemaja,
    caption:
      'Pemeriksaan tinggi badan, berat badan, dan cek HB darah bagi remaja Dusun Tekil, dirangkai dengan sosialisasi "Pencegahan Kehamilan Dini pada Remaja".',
  },
  {
    id: 'nugget-ikan',
    category: 'pendidikan',
    title: 'Pembelajaran Literasi Dasar untuk Anak-Anak Dusun Tekil, Watukarung',
    date: '9-10 Juli 2026',
    dateISO: '2026-07-09',
    image: inggrisTekil,
    caption:
      'Mahasiswa KKN UKDW 2026 mengajak anak-anak Dusun Tekil belajar bahasa Inggris dasar, matematika, membaca, dan berhitung lewat pendekatan belajar sambil bermain.',
  },
  {
    id: 'literasi-keuangan',
    category: 'pendidikan',
    title: 'Branding UMKM warung Warga Tekil di pantai kasap',
    date: '11-12 Juli 2026',
    dateISO: '2026-07-11',
    image: umkmKasap,
    caption:
      'Edukasi pembukuan keuangan dasar bagi sepuluh UMKM di kawasan Pantai Kasap, dirangkai dengan program branding digital untuk mendukung promosi warung warga kepada wisatawan.',
  },


  {
    id: 'tayub-kenul',
    category: 'sosialisasi',
    title: 'Syukuran Sumber Air, Warga dan Mahasiswa KKN UKDW 2026 Larut dalam Tari Tayub di Dusun Kenul',
    date: '14 Juli 2026',
    dateISO: '2026-07-14',
    image: tayubKenul,
    caption:
      'Belasan dusun turut serta dalam syukuran pengadaan sumur bersih di Dusun Kenul, dimeriahkan pagelaran Tari Tayub Kreasi bersama mahasiswa KKN UKDW dan warga Dusun Tekil.',
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
    title: 'Balai Dusun Tekil',
    category: 'Fasilitas',
    image: balai,
    location: 'https://maps.app.goo.gl/zMTFyrd7xQGD8Ze6A?g_st=iw',
  },
  
  {
    title: 'Masjid Baiturrohim Watukarung',
    category: 'Fasilitas',
    image: masjid,
    location: 'https://maps.app.goo.gl/VtnGF57Wvsc3JJox7',
  },
 
  
 
  {
    title: 'Warung Bu Tatik',
    category: 'Kuliner',
    image: warungTatik,
    location: 'https://maps.app.goo.gl/kUA9uV9jBdpyQ9UU7?g_st=ic',
  },
  {
    title: 'Rumah Pak RW Tekil',
    category: 'Fasilitas',
    image: rumahRw,
    location: 'https://maps.app.goo.gl/3LCbbBnnNgQBsRYSA?g_st=ic',
  },
  {
    title: 'Rumah Pak Kasun Tekil',
    category: 'Fasilitas',
    image: rumahKasun,
    location: 'https://maps.app.goo.gl/JQP9bbKwYdGyxnv96?g_st=ic',
  },
  {
    title: 'Rumah Pak RT Tekil',
    category: 'Fasilitas',
    image: rumahRt,
    location: 'https://maps.app.goo.gl/FBDQXcsRqoGqdXAb6?g_st=ic',
  },
  {
    title: 'Warung Makan Pak Sipur',
    category: 'Kuliner',
    image: rmPakSipur,
    location: 'https://maps.app.goo.gl/djbE2G24HyiR36rt8?g_st=ic',
  },
  {
    title: 'Kios Wahyu Lestari',
    category: 'Toko',
    image: kiosWahyu,
    location: 'https://maps.app.goo.gl/AR6DHBvAJTbJBxF36?g_st=ic',
  },
  {
    title: 'Warung Bu Karmi Barokah',
    category: 'Kuliner',
    image: wmKarmi,
    location: 'https://maps.app.goo.gl/xHzonyxXyi1XUi8f6?g_st=ic',
  },
  {
    title: 'Warung Makan Mba Intan',
    category: 'Kuliner',
    image: wmIntan,
    location: 'https://maps.app.goo.gl/SRFS44DcKznq5Y1L8?g_st=ic',
  },
  {
    title: 'Warung Bu Suratmi',
    category: 'Kuliner',
    image: wmSuratmi,
    location: 'https://maps.app.goo.gl/czXMDKFFZR2hDPJU8?g_st=ic',
  },
  {
    title: 'Warung Makan Amelia',
    category: 'Kuliner',
    image: wmAmelia,
    location: 'https://maps.app.goo.gl/McJB22C8sNNGvq7i9?g_st=ic',
  },
  {
    title: 'Warung Makan Novita',
    category: 'Kuliner',
    image: wmNovita,
    location: 'https://maps.app.goo.gl/D3QcDTWifdsnCYWw9?g_st=ic',
  },
  {
    title: 'Warung Makan Aroma Pesisir Denombo',
    category: 'Kuliner',
    image: wmDoram,
    location: 'https://maps.app.goo.gl/xG42xGeGJfFjDgj49?g_st=ic',
  },
  {
    title: 'Warung Makan Pak No',
    category: 'Kuliner',
    image: pakNo,
    location: 'https://maps.app.goo.gl/FhLBintJM8UUCdHm7?g_st=ic',
  },
  {
    title: 'Kedai Afika',
    category: 'Kuliner',
    image: kedaiAfika,
    location: 'https://maps.app.goo.gl/B51BtLmzBbXFjkXW9?g_st=ic',
  },
  {
    title: 'Masjid Tekil',
    category: 'Fasilitas',
    image: masjidTekil,
    location: 'https://maps.app.goo.gl/kkYyL1aWdRQ4u2ww5?g_st=ic',
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
  { title: 'Voli Tekil', image: logoVoli },
  { title: 'Kelompok Nelayan', image: logoNelayan },
  { title: 'Kelompok Tani', image: logoTani },
];
