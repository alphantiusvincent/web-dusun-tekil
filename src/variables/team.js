// Anggota Tim KKN 30 UKDW 2026 (unit "Tekil 30") — poster perkenalan
// tiap anggota disimpan di public/team.
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
    photo: `${FOTO}/Ketua.jpg`,
  },
  {
    id: 'ganis',
    name: 'Rengganis Putri Kusumaningtyas',
    role: 'Sekretaris',
    major: 'Kedokteran 2022',
    photo: `${FOTO}/sekre1.jpg`,
  },
  {
    id: 'livia',
    name: 'Livia Valentina Siregar',
    role: 'Sekretaris',
    major: 'Manajemen 2023',
    photo: `${FOTO}/sekre2.jpg`,
  },
  {
    id: 'amel',
    name: 'Bibiana Fuji Amelia',
    role: 'Bendahara',
    major: 'Akuntansi 2023',
    photo: `${FOTO}/bendahara1.jpg`,
  },
  {
    id: 'enjel',
    name: 'Anglysta Kombingkila',
    role: 'Bendahara',
    major: 'Manajemen 2023',
    photo: `${FOTO}/bendahara2.jpg`,
  },
  {
    id: 'jonfil',
    name: 'Jonfil Alberto Naat',
    role: 'PDD',
    major: 'Arsitektur 2022',
    photo: `${FOTO}/pdd1.jpg`,
  },
  {
    id: 'zefan',
    name :'Auriga Banyu Zefan Nugraha',
    role: 'PDD',
    major: 'Studi Humanitas 2023',
    photo: `${FOTO}/pdd2.jpg`,
  },
];
