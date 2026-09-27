/*
  ============================================================
  DATA POCKET BOOK MONEV
  Monitoring dan Evaluasi Pembangunan Perkotaan Non-Wilayah
  Metropolitan Kabupaten Batang, 28–30 September 2026
  Disusun dari Surat Undangan Nomor 771/ME.02.05/09/2026 dan
  bahan paparan Pengembangan Perkotaan Gringsing (14 April 2026)
  ============================================================
*/

const POCKETBOOK_DATA = {

  // ---------- 1. IDENTITAS & SAMPUL ----------
  meta: {
    institution: "Kementerian PPN/Bappenas · Direktorat Tata Ruang, Perkotaan, Pertanahan, dan Penanggulangan Bencana",
    title: "Pocket Book Monev Pembangunan Perkotaan Non-Wilayah Metropolitan Kabupaten Batang",
    tagline: "Sejauh mana pembangunan Kabupaten Batang sebagai kota industri penyangga Kawasan Industri Terpadu Batang telah berjalan, dan intervensi apa yang masih diperlukan agar transformasi ini tidak mengorbankan keberlanjutan kawasan penyangganya.",
    dateRange: "28–30 September 2026",
    locationsSummary: "Kabupaten Batang, Jawa Tengah",
    focusAreas: ["Progres Pembangunan", "Isu Strategis", "Kebutuhan Intervensi"],
    themeColor: "#0f4c5c"
  },

  // ---------- 2. NARASI PEMBUKA ----------
  narrative: [
    "Kabupaten Batang merupakan salah satu lokasi Kegiatan Prioritas Perkotaan Non-Wilayah Metropolitan dalam Rencana Pembangunan Jangka Menengah Nasional Tahun 2025-2029 dengan tematik kota industri. Kehadiran Kawasan Industri Terpadu Batang seluas 4.300 hektare mendorong pergeseran fungsi ruang dari kawasan yang semula didominasi budi daya pertanian menjadi pusat pertumbuhan industri berskala masif. Transformasi ini diproyeksikan menyerap hingga 214.384 tenaga kerja hingga periode 2040-2044, separuh di antaranya merupakan pekerja pendatang yang membutuhkan alokasi ruang hunian baru setara 650 hektare di luar kawasan inti. Apabila ledakan demografis dan kebutuhan tata ruang tersebut tidak dikelola melalui perencanaan investasi modal yang terpadu, pertumbuhan ekonomi kawasan industri berisiko mengorbankan keberlanjutan ekosistem serta memicu kerentanan baru di kawasan penyangganya.",
    "Terdapat lima isu strategis yang saling terkait, yaitu ancaman kekumuhan dan urban sprawl akibat sulitnya akses perumahan layak huni bagi pekerja pendatang, defisit utilitas dasar berupa ketiadaan jaringan air minum di Kecamatan Banyuputih serta kapasitas pengelolaan sampah dari skala hulu, dinamika sosial dan kependudukan termasuk risiko gentrifikasi dan ketimpangan penyerapan tenaga kerja lokal, tantangan tata ruang berupa konversi lahan pertanian dan kebutuhan pembangunan hunian vertikal, serta penurunan fungsi ekonomi koridor Pantura Gringsing pascaberoperasinya jalan tol. Permasalahan ini diperberat oleh fragmentasi kewenangan antara pengelola kawasan industri dan pemerintah daerah, sehingga monitoring dan evaluasi terpadu menjadi penting untuk memetakan kendala teknis dan kebutuhan tindak lanjut yang nyata di lapangan."
  ],

  // ---------- 3. SEKTOR (dipakai untuk pewarnaan & filter) ----------
  sectors: [
    { id: "infrastruktur", name: "Infrastruktur & Transportasi", color: "#D9720A" },
    { id: "kawasan", name: "Kawasan Industri & Permukiman", color: "#3A7D7B" },
    { id: "ekonomi", name: "Ekonomi Kawasan", color: "#B5442E" },
    { id: "kelembagaan", name: "Kelembagaan & Koordinasi", color: "#3B5BA5" }
  ],

  // ---------- 4. PROFIL UMUM KABUPATEN BATANG ----------
  profile: {
    narrative: "Kabupaten Batang berpenduduk 855.878 jiwa dengan kepadatan 998,6 jiwa per kilometer persegi pada luas wilayah 857,07 kilometer persegi. Indeks Pembangunan Manusia tercatat 70,74, tingkat kemiskinan 7,79 persen, dan tingkat pengangguran terbuka 5,07 persen, dengan rasio gini 0,323. Dari sisi kebencanaan, skor risiko bencana Kabupaten Batang berada pada 128,70 dengan empat jenis bahaya berisiko tinggi, yaitu banjir, kebakaran hutan dan lahan, kekeringan, serta gelombang ekstrem dan abrasi — profil risiko yang relevan mengingat sebagian kawasan penyangga KITB berada di wilayah pesisir Pantura.",
    stats: [
      { label: "Penduduk", value: "855.878 jiwa" },
      { label: "Kepadatan Penduduk", value: "998,6 jiwa/km²" },
      { label: "Luas Wilayah", value: "857,07 km²" },
      { label: "IPM", value: "70,74" },
      { label: "Tingkat Kemiskinan", value: "7,79%" },
      { label: "Tingkat Pengangguran Terbuka", value: "5,07%" },
      { label: "Rasio Gini", value: "0,323" },
      { label: "Skor Risiko Bencana", value: "128,70 (4 bahaya risiko tinggi)" }
    ]
  },

  // ---------- 5. INDEKS KOTA BERKELANJUTAN (IKB) 2024 — spiderweb ----------
  ikb: {
    title: "Indeks Kota Berkelanjutan (IKB) 2024 — Kabupaten Batang",
    description: "Skor IKB Kabupaten Batang tahun 2024 tercatat 45,58 (kategori Berkelanjutan Menengah Rendah), peringkat 304 dari 514 kota se-Indonesia dan peringkat 48 di antara kota besar, atau 3,26 poin di bawah rata-rata nasional sebesar 48,84. Performa tertinggi berada pada Misi 2 Kota Layak Huni, Inklusif dan Berbudaya (70,4), sedangkan performa terendah pada Misi 4 Kota Hijau dan Tangguh (17,3). Dari 27 indikator pembentuk, tujuh di antaranya bermain di bawah skor 50 dan ditandai pada grafik berikut: persentase penduduk terlibat kegiatan pertunjukan dan pameran seni (16,3), inflasi (45,9), penyandang disabilitas yang bekerja (32,3), ruang terbuka hijau (0,1), indeks risiko bencana (44,9), rasio PAD terhadap realisasi anggaran (25,6), dan keberadaan command center (25,0). Dua indikator lain, yaitu sampah terkelola dan sampah terdaur ulang, belum tersedia datanya (N/A) sehingga tidak ditampilkan pada grafik.",
    maxScore: 100,
    weakThreshold: 50,
    dimensions: [
      { label: "1.1 Kepadatan Penduduk", score: 50.0 },
      { label: "1.2 Pemberdayaan Gender", score: 65.6 },
      { label: "2.1 Rumah Layak Huni", score: 100.0 },
      { label: "2.2 Korban Kriminalitas", score: 93.9 },
      { label: "2.3 Fatalitas Kecelakaan", score: 98.3 },
      { label: "2.4 Kendaraan per Km", score: 78.2 },
      { label: "2.5 Lama Sekolah", score: 52.1 },
      { label: "2.6 Keterlibatan Seni Budaya", score: 16.3 },
      { label: "2.7 Harapan Hidup (Lk)", score: 98.3 },
      { label: "2.8 Harapan Hidup (Pr)", score: 100.0 },
      { label: "3.1 Inflasi", score: 45.9 },
      { label: "3.2 Disabilitas Bekerja", score: 32.3 },
      { label: "3.3 TPT", score: 78.8 },
      { label: "3.4 Pertumbuhan Ekonomi", score: 69.9 },
      { label: "3.5 Kemiskinan Ekstrem", score: 86.7 },
      { label: "3.6 Gini Coefficient", score: 55.7 },
      { label: "4.1 Kualitas Udara", score: 85.7 },
      { label: "4.2 Kualitas Air", score: 59.4 },
      { label: "4.3 RTH", score: 0.1 },
      { label: "4.6 Risiko Bencana", score: 44.9 },
      { label: "4.7 Cakupan BPJS Kesehatan", score: 67.9 },
      { label: "5.1 LKPD (BPK)", score: 100.0 },
      { label: "5.2 Lama Sekolah PNS", score: 85.3 },
      { label: "5.3 PAD/Realisasi Anggaran", score: 25.6 },
      { label: "5.4 Command Center", score: 25.0 }
    ]
  },

  // ---------- 6. PROFIL KAWASAN UTAMA (sebelum peta) ----------
  locationProfiles: [
    {
      name: "Batang Industrial Park (BIP)",
      description: "Batang Industrial Park dikembangkan oleh PT Intiland Development Tbk sejak 2022 di Kecamatan Tulis, sekitar 8 kilometer dari Gerbang Tol Batang (KM 348) ruas Tol Semarang-Batang. Kawasan ini direncanakan mencapai luas 500 hektare, dengan tahap pertama seluas 287 hektare, dan diarahkan untuk industri ringan hingga menengah dengan pendekatan green building serta pengelolaan air limbah yang ketat. BIP beroperasi terpisah dari Kawasan Industri Terpadu Batang, sehingga menjadi simpul industri kedua yang turut membentuk tekanan pembangunan di Kabupaten Batang."
    },
    {
      name: "Kawasan Industri Terpadu Batang (KITB) / Industropolis Batang",
      description: "Kawasan Industri Terpadu Batang seluas 4.300 hektare dikelola oleh PT Kawasan Industri Terpadu Batang, bagian dari Proyek Strategis Nasional yang berstatus Kawasan Ekonomi Khusus dengan dukungan Danareksa dan Danantara. Kawasan ini telah menampung lebih dari 100 tenant dari 29 jenis industri dengan lebih dari 25.000 pekerja, serta menyediakan lahan industri, gedung pabrik standar, kawasan komersial, dan hunian pekerja melalui Sagara Residence dan Mahameru Residence. Jumlah tenaga kerja diproyeksikan meningkat dari sekitar 12.000 orang saat ini menjadi 28.000 pada 2028 dan lebih dari 200.000 pada 2040, dengan akses tol langsung di KM 371."
    },
    {
      name: "Stasiun Krengseng — potensi Kawasan TOD",
      description: "Stasiun Krengseng di Kecamatan Gringsing diarahkan menjadi simpul pengembangan kawasan berorientasi transit sebagai wadah pertumbuhan baru di kawasan penyangga Kawasan Industri Terpadu Batang. Potensi ini didukung oleh volume pengguna jalan tol tahunan yang melampaui 11 juta kendaraan dan tumbuh 5 hingga 8 persen per tahun, serta penumpang kereta lintas Pekalongan-Semarang yang melampaui 1 juta penumpang dan tumbuh 3,44 persen per tahun, sehingga konektivitas berbasis rel berpeluang mengurangi beban jaringan jalan eksisting yang saat ini sudah padat oleh pergerakan komuter pekerja."
    }
  ],

  // ---------- 7. TREN CAPAIAN (line chart) ----------
  trend: {
    title: "Pertumbuhan Ekonomi (PDRB, persen, year on year)",
    description: "Pertumbuhan ekonomi Kabupaten Batang tahun 2025 tercatat 7,79 persen, berada di atas rata-rata Provinsi Jawa Tengah dan nasional, didorong oleh sektor konstruksi dan pengadaan listrik serta gas seiring pembangunan kawasan industri.",
    years: [2021, 2022, 2023, 2024, 2025],
    series: [
      { name: "Kabupaten Batang", color: "#c8862d", data: [4.88, 5.97, 5.53, 6.09, 7.79] },
      { name: "Provinsi Jawa Tengah", color: "#0f4c5c", data: [3.33, 5.31, 4.97, 4.95, 5.37] },
      { name: "Nasional", color: "#9aa6a5", data: [3.71, 5.35, 5.06, 5.04, 5.11] }
    ]
  },

  // ---------- 8. PERBANDINGAN INDIKATOR (bar chart) ----------
  comparison: {
    title: "Tingkat Pengangguran Terbuka Menurut Pendidikan (2025)",
    description: "Pengangguran tertinggi berada pada lulusan Diploma dan SMK, mengindikasikan kesenjangan keterampilan tenaga kerja lokal terhadap kebutuhan industri di Kawasan Industri Terpadu Batang.",
    categories: ["SD", "SMP", "SMA", "SMK", "Diploma", "S1/S2/S3"],
    series: [
      { name: "Tingkat Pengangguran (%)", color: "#0f4c5c", data: [1.77, 6.42, 9.49, 10.95, 11.28, 5.38] }
    ]
  },

  // ---------- 9. TITIK LOKASI KUNJUNGAN (peta) ----------
  locations: [
    {
      name: "Kantor Bapperida Kabupaten Batang",
      city: "Kabupaten Batang",
      sector: "kelembagaan",
      lat: -6.9107251,
      lng: 109.7302044,
      address: "Jl. RA Kartini No. 1, Proyonanggan Tengah, Kec. Batang, Kabupaten Batang, Jawa Tengah",
      notes: "Lokasi audiensi bersama Bupati Kabupaten Batang (Hari 1) serta rapat pembukaan dan paparan narasumber (Hari 2)."
    },
    {
      name: "Koridor Perkotaan Batang",
      city: "Kabupaten Batang",
      sector: "infrastruktur",
      lat: -6.9107251,
      lng: 109.7302044,
      address: "Pusat Kota Batang, Kabupaten Batang, Jawa Tengah",
      notes: "Kunjungan lapangan hari pertama untuk meninjau kesiapan infrastruktur penyangga di pusat kota."
    },
    {
      name: "Batang Industrial Park (BIP)",
      city: "Kecamatan Tulis",
      sector: "kawasan",
      lat: -6.966151,
      lng: 109.7980058,
      address: "Jl. Raya Bandar - Tulis, Area Sawah, Posong, Kec. Tulis, Kabupaten Batang, Jawa Tengah",
      notes: "Kawasan industri yang dikembangkan PT Intiland Development Tbk, simpul industri kedua yang dikunjungi pada Hari 1 bersama Koridor Perkotaan Batang."
    },
    {
      name: "Koridor Perkotaan Gringsing",
      city: "Kecamatan Gringsing",
      sector: "ekonomi",
      lat: -6.9710659999999995,
      lng: 110.01901,
      address: "Kecamatan Gringsing, Kabupaten Batang, Jawa Tengah",
      notes: "Koridor ekonomi jalan nasional Pantura yang mengalami penurunan keramaian pascaberoperasinya jalan tol, diarahkan menjadi kawasan komersial baru. Kunjungan dijadwalkan pada Hari 2."
    },
    {
      name: "Kawasan Industri Terpadu Batang (KITB)",
      city: "Kecamatan Gringsing",
      sector: "kawasan",
      lat: -6.930301000000001,
      lng: 109.9642772,
      address: "Ketanggan, Kec. Gringsing, Kabupaten Batang, Jawa Tengah",
      notes: "Kawasan industri inti seluas 4.300 hektare, pemicu utama transformasi struktural dan kebutuhan hunian baru seluas 650 hektare di kawasan penyangga."
    },
    {
      name: "Potensi Kawasan TOD Krengseng (Stasiun Krengseng)",
      city: "Kecamatan Gringsing",
      sector: "infrastruktur",
      lat: -6.9523189,
      lng: 110.0279122,
      address: "Jl. St. Krengseng Jendogo, Lebo Kulon, Krengseng, Kec. Gringsing, Kabupaten Batang, Jawa Tengah",
      notes: "Rencana pengembangan kawasan berorientasi transit sebagai wadah pertumbuhan baru di kawasan penyangga Kawasan Industri Terpadu Batang."
    }
  ],

  // ---------- 10. RANGKAIAN KUNJUNGAN (itinerary) ----------
  itinerary: [
    {
      day: "Hari 1",
      date: "Senin, 28 September 2026",
      items: [
        { time: "06.00 – 10.15", title: "Perjalanan menuju Kabupaten Batang", location: "Jakarta – Kabupaten Batang", notes: "" },
        { time: "10.15 – 10.45", title: "Persiapan dan perjalanan menuju Kantor Bapperida Kabupaten Batang", location: "Kabupaten Batang", notes: "" },
        { time: "10.45 – 12.00", title: "Audiensi bersama Bupati Kabupaten Batang", location: "Kantor Bapperida Kabupaten Batang", notes: "" },
        { time: "12.00 – 13.00", title: "Ishoma", location: "Kabupaten Batang", notes: "" },
        { time: "13.00 – 16.00", title: "Kunjungan Lapangan", location: "Koridor Perkotaan Batang, Batang Industrial Park", notes: "Peninjauan kondisi eksisting infrastruktur pusat kota dan kawasan industri Batang Industrial Park." }
      ]
    },
    {
      day: "Hari 2",
      date: "Selasa, 29 September 2026",
      items: [
        { time: "08.30 – 09.00", title: "Registrasi", location: "Kantor Bapperida Kabupaten Batang", notes: "Seluruh peserta." },
        { time: "09.00 – 09.30", title: "Pembukaan Rapat", location: "Kantor Bapperida Kabupaten Batang", notes: "Direktur Tata Ruang, Perkotaan, Pertanahan dan Penanggulangan Bencana, Kementerian PPN/Bappenas." },
        { time: "09.30 – 10.00", title: "Paparan Narasumber 1", location: "Kantor Bapperida Kabupaten Batang", notes: "Kepala Bapperida Kabupaten Batang: strategi penataan ruang, kemajuan infrastruktur penyangga, isu strategis dan kebutuhan intervensi." },
        { time: "10.00 – 10.30", title: "Paparan Narasumber 2", location: "Kantor Bapperida Kabupaten Batang", notes: "Direktur Pemasaran dan Pengembangan PT Kawasan Industri Terpadu Batang: arah pengembangan KITB, sinergi dengan pemerintah daerah, komitmen keberlanjutan." },
        { time: "10.30 – 11.40", title: "Diskusi dan Tanya Jawab", location: "Kantor Bapperida Kabupaten Batang", notes: "Seluruh peserta." },
        { time: "10.40 – 11.45", title: "Penutup", location: "Kantor Bapperida Kabupaten Batang", notes: "Direktur Tata Ruang, Perkotaan, Pertanahan dan Penanggulangan Bencana, Kementerian PPN/Bappenas." },
        { time: "11.45 – 13.00", title: "Ishoma", location: "Kabupaten Batang", notes: "" },
        { time: "13.00 – 16.00", title: "Kunjungan Lapangan", location: "Potensi Kawasan TOD Krengseng (Stasiun Krengseng), Koridor Perkotaan Gringsing, Kawasan Industri Terpadu Batang", notes: "Seluruh peserta." }
      ]
    },
    {
      day: "Hari 3",
      date: "Rabu, 30 September 2026",
      items: [
        { time: "07.00 – 11.30", title: "Perjalanan menuju Jakarta", location: "Kabupaten Batang – Jakarta", notes: "" }
      ]
    }
  ],

  // ---------- 11. METODOLOGI & SUMBER ----------
  methodology: {
    sources: [
      "Surat Undangan Direktur Tata Ruang, Perkotaan, Pertanahan, dan Penanggulangan Bencana Nomor 771/ME.02.05/09/2026 tanggal 22 September 2026 beserta Kerangka Acuan Kegiatan",
      "Bahan paparan Pengembangan Perkotaan Gringsing, Bapperida Kabupaten Batang, 14 April 2026",
      "Batang Dalam Angka Tahun 2026, Badan Pusat Statistik Kabupaten Batang",
      "Data Bank Dunia (2022) mengenai kontribusi kawasan perkotaan terhadap PDB nasional",
      "Profil wilayah Kabupaten Batang, basis data profil regional nasional (2025)",
      "Company Profile Industropolis Batang SEZ, PT Kawasan Industri Terpadu Batang"
    ],
    disclaimer: "Data kuantitatif pada pocket book ini bersumber dari bahan paparan tanggal 14 April 2026, Kerangka Acuan Kegiatan monitoring dan evaluasi, basis data profil wilayah, dan company profile Industropolis Batang. Mengingat rentang waktu antara penyusunan bahan dan pelaksanaan kunjungan, angka dan kondisi lapangan perlu diverifikasi kembali pada saat monitoring dan evaluasi berlangsung."
  }
};
