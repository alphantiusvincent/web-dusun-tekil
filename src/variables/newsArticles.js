// Isi lengkap tiap artikel berita, dipisah dari general.js agar data kartu
// (judul/tanggal/caption) tetap ringan dimuat di landing & daftar berita.
// Dirender oleh src/views/NewsDetail. Bentuk blok:
//   { type: 'p',     text }         paragraf
//   { type: 'h2',    text }         sub-judul bagian
//   { type: 'quote', text, cite? }  kutipan menonjol
//   { type: 'list',  items }        daftar bullet
// Kunci objek = id berita di general.js.

const newsArticles = {
  'phbs-first-aid': [
    {
      type: 'p',
      text: 'Pada Jumat, 11 Juli 2026, mahasiswa Kuliah Kerja Nyata (KKN) UKDW menggelar kegiatan pemeriksaan kesehatan bagi remaja Dusun Tekil, mencakup pengukuran tinggi badan, berat badan, serta cek kadar HB (hemoglobin) darah. Pemeriksaan ini bertujuan memantau status gizi dan kesehatan remaja setempat sebagai bagian dari perhatian terhadap tumbuh kembang generasi muda pesisir.',
    },
    { type: 'h2', text: 'Sosialisasi Pencegahan Kehamilan Dini pada Remaja' },
    {
      type: 'p',
      text: 'Rangkaian kegiatan dilanjutkan dengan sosialisasi bertajuk "Pencegahan Kehamilan Dini pada Remaja". Materi ini disampaikan untuk membekali remaja Dusun Tekil dengan pemahaman mengenai risiko kesehatan dan sosial dari kehamilan di usia dini, sekaligus mendorong mereka menunda pernikahan hingga usia yang lebih matang secara fisik maupun mental.',
    },
    {
      type: 'p',
      text: 'Melalui kombinasi pemeriksaan kesehatan dan edukasi ini, mahasiswa KKN UKDW berharap remaja Dusun Tekil semakin peduli terhadap kesehatan diri sendiri dan memiliki bekal pengetahuan yang cukup untuk membuat keputusan yang lebih baik bagi masa depannya.',
    },
  ],

  'nugget-ikan': [
    {
      type: 'p',
      text: 'Kegiatan Kuliah Kerja Nyata (KKN) Universitas Kristen Duta Wacana (UKDW) tahun 2026 turut menghadirkan program pengabdian di bidang pendidikan bagi anak-anak Dusun Tekil, Watukarung. Program ini berupa kegiatan pembelajaran dasar yang mencakup empat bidang utama, yaitu bahasa Inggris dasar, matematika, membaca, dan berhitung. Kegiatan dilaksanakan selama dua hari, tepatnya pada tanggal 9 hingga 10 Juli 2026, dengan sasaran anak-anak usia sekolah dasar yang tinggal di lingkungan Dusun Tekil. Program ini digagas sebagai bentuk kepedulian mahasiswa KKN terhadap pentingnya literasi sejak usia dini bagi generasi muda di kawasan pesisir tersebut.',
    },
    {
      type: 'p',
      text: 'Selama dua hari pelaksanaan, mahasiswa KKN UKDW mengajak anak-anak untuk belajar dengan suasana yang menyenangkan dan interaktif. Materi bahasa Inggris dasar diperkenalkan melalui kosakata sehari-hari dan permainan sederhana, sementara pembelajaran matematika dan berhitung difokuskan pada penguatan kemampuan dasar seperti penjumlahan, pengurangan, serta perkalian sesuai jenjang usia anak-anak. Di sisi lain, sesi membaca dirancang untuk melatih kelancaran serta pemahaman anak-anak terhadap teks bacaan sederhana. Pendekatan belajar sambil bermain ini dipilih agar anak-anak tidak merasa terbebani, namun tetap dapat menyerap materi dengan baik.',
    },
    {
      type: 'p',
      text: 'Program ini hadir sebagai respons terhadap kondisi literasi anak-anak di Dusun Tekil yang masih memerlukan pendampingan tambahan, mengingat keterbatasan akses dan fasilitas pendidikan di wilayah pesisir seperti Watukarung. Melalui kegiatan ini, mahasiswa KKN berharap dapat memberikan stimulasi belajar yang positif serta menumbuhkan semangat anak-anak dalam mengembangkan kemampuan dasar bahasa, membaca, dan berhitung sejak dini. Antusiasme anak-anak selama mengikuti rangkaian kegiatan menjadi salah satu indikator bahwa program ini disambut baik oleh masyarakat setempat.',
    },
    {
      type: 'p',
      text: 'Kegiatan pembelajaran literasi dasar ini merupakan salah satu bentuk nyata kontribusi mahasiswa KKN UKDW 2026 dalam bidang pendidikan di Dusun Tekil, Watukarung. Meskipun dilaksanakan dalam waktu yang singkat, program ini diharapkan dapat meninggalkan kesan dan manfaat jangka panjang bagi anak-anak setempat, khususnya dalam membangun fondasi kemampuan literasi dan numerasi yang lebih kuat. Melalui pengabdian ini, mahasiswa KKN berharap dapat turut berperan dalam mendukung tumbuh kembang generasi muda Dusun Tekil menuju masa depan yang lebih baik.',
    },
  ],

  'literasi-keuangan': [
    {
      type: 'p',
      text: 'Salah satu kegiatan Kuliah Kerja Nyata (KKN) Universitas Kristen Duta Wacana (UKDW) tahun 2026 yang berlokasi di sekitar Pantai Kasap menghadirkan program kerja individu berupa edukasi pembukuan keuangan dasar bagi pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) setempat. Pada tanggal 11–12 Juli 2026, program ini digagas untuk membantu para pelaku usaha memahami cara mencatat pemasukan dan pengeluaran secara tertib, sehingga perhitungan omset dapat dilakukan dengan lebih akurat.',
    },
    {
      type: 'p',
      text: 'Sasaran kegiatan ini adalah sepuluh UMKM milik warga Dusun Tekil, yang sebagian besar bergerak di bidang kuliner berupa warung makan, satu unit toko kelontong, serta pengelola toilet umum di kawasan wisata pantai. Program ini dijalankan oleh Amel, mahasiswa yang berfokus pada bidang akuntansi.',
    },
    {
      type: 'p',
      text: 'Melalui edukasi ini, para pelaku UMKM diperkenalkan pada konsep dasar pembukuan sederhana, mulai dari pencatatan transaksi harian, pemisahan antara keuangan pribadi dan usaha, hingga cara menghitung total omset dalam periode tertentu. Selama ini, banyak pelaku usaha di Dusun Tekil yang menjalankan usahanya tanpa pencatatan yang rapi, sehingga sulit mengetahui secara pasti besaran pendapatan maupun keuntungan yang diperoleh. Dengan adanya pendampingan langsung dari mahasiswa KKN, para pemilik warung makan, toko kelontong, dan pengelola toilet umum diharapkan mampu menerapkan sistem pembukuan yang lebih terstruktur, sehingga dapat menjadi dasar dalam pengambilan keputusan usaha ke depannya.',
    },
    { type: 'h2', text: 'Kolaborasi Lintas Jurusan: Branding Digital UMKM' },
    {
      type: 'p',
      text: 'Selain program kerja individu di bidang akuntansi, kegiatan KKN UKDW 2026 di Pantai Kasap juga dilengkapi dengan program kerja kolaborasi yang melibatkan mahasiswa jurusan Manajemen, yaitu Angelysta dan Livia. Program kolaborasi ini berfokus pada pembuatan konten digital untuk keperluan branding lokasi warung-warung yang berada di sekitar kawasan wisata. Melalui konten digital yang menarik, diharapkan warung-warung UMKM di Dusun Tekil dapat lebih dikenal oleh wisatawan yang berkunjung ke Pantai Kasap, sekaligus meningkatkan daya saing usaha di tengah persaingan sektor kuliner wisata pantai.',
    },
    {
      type: 'p',
      text: 'Kombinasi antara edukasi pembukuan keuangan dan penguatan branding digital ini merupakan bentuk sinergi lintas disiplin ilmu antara mahasiswa akuntansi dan manajemen dalam mendukung pemberdayaan ekonomi masyarakat pesisir. Dengan pencatatan keuangan yang lebih tertib serta promosi digital yang lebih optimal, UMKM di Dusun Tekil diharapkan mampu berkembang secara berkelanjutan, baik dari sisi pengelolaan internal maupun dari sisi pemasaran kepada wisatawan. Program kerja ini menjadi salah satu wujud nyata kontribusi mahasiswa KKN UKDW 2026 dalam mendampingi dan meningkatkan kapasitas pelaku UMKM di kawasan wisata Pantai Kasap.',
    },
  ],

  'posyandu-putri-ceria': [
    {
      type: 'p',
      text: 'Setiap bulan, remaja di Desa Watukarung punya jadwal yang ditunggu: Posyandu Remaja "Putri Ceria". Pada kegiatan Sabtu, 3 Agustus 2024, giliran para remaja menimbang berat badan, mengukur tinggi dan lingkar lengan, lalu duduk berbincang dengan kader tentang keluhan masing-masing.',
    },
    {
      type: 'p',
      text: 'Posyandu remaja ini bukan barang baru — sudah aktif sejak 2018 dan bertahan sampai sekarang. Alurnya mengikuti sistem lima meja: pendaftaran, pengukuran, pencatatan, pelayanan kesehatan, lalu penyuluhan. Yang membedakannya dari posyandu balita: di sini pesertanya sekaligus jadi pelaksana, karena sebagian kader adalah remaja sendiri.',
    },
    {
      type: 'p',
      text: 'Materi penyuluhan berganti-ganti tiap pertemuan — dari gizi dan anemia, kesehatan reproduksi, sampai bahaya rokok dan pergaulan bebas. Pemantauan rutin membuat masalah gizi bisa terdeteksi dini, sebelum berkembang lebih jauh.',
    },
    {
      type: 'quote',
      text: 'Kalau cuma ditimbang, remaja malas datang. Yang bikin betah itu ngobrolnya — di sini mereka bisa cerita yang tidak berani diceritakan di rumah.',
      cite: 'Kader Posyandu Remaja Putri Ceria',
    },
    {
      type: 'p',
      text: 'Enam tahun berjalan, Putri Ceria membuktikan bahwa kegiatan kesehatan remaja bisa hidup di desa — asal remajanya dilibatkan, bukan sekadar diundang.',
    },
  ],


  ckg: [
  {
    type: 'p',
    text: 'Dusun Tekil, Watukarung menjadi lokasi pelaksanaan kegiatan sosialisasi kesehatan bertema Diabetes Melitus yang diselenggarakan pada Selasa, 7 Juli 2026, pukul 09.00 hingga 12.00 WIB. Kegiatan ini merupakan salah satu program kerja mahasiswa Kuliah Kerja Nyata (KKN) Reguler Universitas Kristen Duta Wacana (UKDW) Tahun 2026 yang diinisiasi oleh Rengganis, mahasiswa Fakultas Kedokteran, bersama rekan-rekan sesama mahasiswa kedokteran serta didukung penuh oleh seluruh anggota Kelompok 30 yang bertugas di Dusun Tekil. Kegiatan ini juga didampingi oleh kader dan bidan Puskesmas setempat yang memberikan dukungan teknis maupun edukatif selama pelaksanaan acara.',
  },
  {
    type: 'p',
    text: 'Kegiatan dilaksanakan di Balai Dusun Tekil dan diikuti sekitar 30 warga lanjut usia (lansia). Sejak awal acara, para peserta menunjukkan antusiasme yang tinggi dengan hadir tepat waktu dan mengikuti seluruh rangkaian kegiatan hingga selesai. Materi yang disampaikan meliputi pengertian Diabetes Melitus, faktor risiko, tanda dan gejala yang perlu diwaspadai, serta pentingnya menerapkan pola hidup sehat sebagai upaya pencegahan. Penyampaian materi dilakukan menggunakan bahasa yang sederhana sehingga mudah dipahami oleh seluruh peserta.',
  },
  {
    type: 'p',
    text: 'Selain sesi edukasi, kegiatan ini juga menghadirkan pelayanan pemeriksaan kesehatan gratis bagi seluruh peserta. Pemeriksaan meliputi pengukuran tekanan darah, pemeriksaan kadar gula darah, penimbangan berat badan, serta pengukuran lingkar perut. Seluruh pemeriksaan dilakukan oleh mahasiswa kedokteran dengan pendampingan bidan dan kader Puskesmas. Pemeriksaan ini bertujuan untuk mendeteksi secara dini risiko Diabetes Melitus maupun gangguan kesehatan lain yang umum dialami oleh kelompok lansia.',
  },
  {
    type: 'p',
    text: 'Untuk mendukung penyampaian materi, panitia menyiapkan peralatan medis sederhana serta proyektor sebagai media presentasi. Penggunaan media visual membantu peserta memahami informasi mengenai Diabetes Melitus dengan lebih jelas, sementara hasil pemeriksaan yang diperoleh menjadi bahan konsultasi langsung antara warga dengan tenaga kesehatan yang hadir.',
  },
  {
    type: 'p',
    text: 'Kegiatan berlangsung dengan lancar berkat kerja sama yang baik antara mahasiswa KKN Reguler UKDW Kelompok 30, kader dan bidan Puskesmas, serta perangkat Dusun Tekil. Mahasiswa berperan aktif dalam proses pendaftaran peserta, pemeriksaan kesehatan, pencatatan hasil pemeriksaan, hingga membantu jalannya sosialisasi. Sementara itu, tenaga kesehatan memberikan arahan dan penjelasan mengenai hasil pemeriksaan yang diperoleh masing-masing peserta.',
  },
  {
    type: 'p',
    text: 'Suasana kegiatan berlangsung hangat dan penuh keakraban. Interaksi antara mahasiswa, tenaga kesehatan, dan warga menciptakan komunikasi dua arah yang efektif sehingga peserta tidak hanya menerima materi, tetapi juga dapat mengajukan pertanyaan serta berkonsultasi mengenai kondisi kesehatannya secara langsung.',
  },
  {
    type: 'p',
    text: 'Melalui kegiatan sosialisasi dan pemeriksaan kesehatan gratis ini, diharapkan masyarakat Dusun Tekil, khususnya kelompok lansia, memiliki pemahaman yang lebih baik mengenai bahaya Diabetes Melitus serta pentingnya menjaga pola hidup sehat dan melakukan pemeriksaan kesehatan secara berkala. Program ini juga menjadi wujud nyata kontribusi mahasiswa KKN Reguler UKDW Tahun 2026 bersama tenaga kesehatan Puskesmas dalam meningkatkan kesadaran kesehatan masyarakat serta mempererat hubungan antara perguruan tinggi, tenaga kesehatan, dan warga melalui kegiatan yang bermanfaat dan berkelanjutan.',
  },
],

  'tayub-kenul': [
    {
      type: 'p',
      text: 'Pada Selasa malam, 14 Juli 2026, suasana meriah menyelimuti Dusun Kenul yang menggelar acara syukuran atas keberhasilan pengadaan sumur sebagai sumber air bersih bagi warga sekitar. Acara yang berlangsung sejak pukul 19.00 WIB hingga puncaknya pada tengah malam ini dimeriahkan dengan pagelaran seni Tari Tayub Kreasi, sebuah kesenian tradisional khas Jawa yang sarat makna rasa syukur dan kebersamaan. Tidak kurang dari 15 dusun turut berpartisipasi dalam acara ini, menjadikannya salah satu perhelatan syukuran terbesar yang pernah digelar di kawasan tersebut, mulai dari wilayah Desa Watukarung, Desa Candi, hingga Desa Jlubang.',
    },
    {
      type: 'p',
      text: 'Keistimewaan acara ini juga terlihat dari keterlibatan mahasiswa Kuliah Kerja Nyata (KKN) 2026 Universitas Kristen Duta Wacana (UKDW) yang turut serta menari tayub bersama warga Dusun Tekil. Kehadiran para mahasiswa dalam balutan busana adat lengkap dengan selendang merah khas penari tayub menjadi bukti nyata semangat pengabdian masyarakat yang tidak hanya berhenti pada program kerja formal, tetapi juga menyentuh sisi budaya dan kearifan lokal. Interaksi hangat antara mahasiswa dan warga dalam tarian ini mempererat hubungan sosial sekaligus menjadi wujud penghormatan terhadap tradisi setempat.',
    },
    {
      type: 'p',
      text: 'Acara syukuran ini menjadi momentum penting bagi warga untuk mengekspresikan rasa terima kasih atas keberhasilan pengadaan air bersih yang selama ini menjadi kebutuhan vital masyarakat. Melalui tari tayub yang berlangsung hingga puncak acara pukul 24.00 WIB, semangat gotong royong dan kebersamaan antarwarga dari berbagai dusun semakin terjalin erat. Kegiatan ini sekaligus menegaskan bahwa pembangunan infrastruktur desa, seperti pengadaan sumur, tidak hanya membawa manfaat praktis bagi kehidupan sehari-hari, tetapi juga menjadi perekat sosial yang memperkuat identitas budaya masyarakat setempat.',
    },
  ],

};

export default newsArticles;
