// Anggota Tim KKN 34 UKDW 2025 (unit "Dokgarut 34") — data mengikuti poster
// perkenalan di public/team. Halaman memakai versi terkompresi .jpg
// (asli .png 1,8–2 MB per file, di-resize ke lebar 1100px).
const FOTO = `${process.env.PUBLIC_URL}/team`;

export const teamUnit = {
  name: 'Tekil 30',
  program: 'KKN Reguler 2026 · Universitas Kristen Duta Wacana Yogyakarta',
  tagline: '#BersamaBerbuatBermanfaat',
};

export const teamMembers = [
  {
    id: 'vinc',
    name: 'Alphantius Vincent',
    role: 'Ketua',
    major: 'Informatika 2023',
    photo: `${FOTO}/ketua.jpg`,
  },
  {
    id: 'ganis',
    name: 'Rengganis Putri Kusumaningtyas',
    role: 'Sekretaris',
    major: 'Kedokteran 2022',
    photo: `${FOTO}/sekertaris.jpg`,
  },
  {
    id: 'livia',
    name: 'Livia Valentina Siregar',
    role: 'Sekretaris',
    major: 'Manajemen 2023',
    photo: `${FOTO}/Bendahara.jpg`,
  },
  {
    id: 'amel',
    name: 'Bibiana Fuji Amelia',
    role: 'Bendahara',
    major: 'Akuntansi 2023',
    photo: `${FOTO}/Humas.jpg`,
  },
  {
    id: 'enjel',
    name: 'Anglysta Kombingkila',
    role: 'Bendahara',
    major: 'Manajemen 2023',
    photo: `${FOTO}/Perkap.jpg`,
  },
  {
    id: 'jonfil',
    name: 'Jonfil Alberto Naat',
    role: 'PDD',
    major: 'Arsitektur 2022',
    photo: `${FOTO}/perkap2.jpg`,
  },
  {
    id: 'zefan',
    name :'Auriga Banyu Zefan Nugraha',
    role: 'PDD',
    major: 'Studi Humanitas 2023',
    photo: `${FOTO}/Desdok.jpg`,
  },
];
