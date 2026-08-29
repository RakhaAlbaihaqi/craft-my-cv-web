export const profile = {
  name: "Rakha Albaihaqi Yulianto",
  initials: "RA",
  roles: ["Web Developer", "Computer Vision", "Data & Administrasi"],
  location: "Tangerang Selatan, ID",
  email: "rakhaalbaihaqi04@gmail.com",
  phones: ["085717636970", "085772156472"],
  status: "Terbuka untuk peluang baru",
  summary:
    "Lulusan Teknik Informatika (Universitas Gunadarma) dengan pengalaman membangun aplikasi web menyeluruh (front-end hingga back-end) serta proyek computer vision berbasis deep learning (YOLOv8/YOLOv11). Terbiasa bekerja dengan data dalam volume tinggi dan menjaga akurasi serta ketepatan waktu.",
  about: [
    "Saya Rakha Albaihaqi Yulianto, lulusan Teknik Informatika Universitas Gunadarma. Fokus saya ada pada dua hal: membangun aplikasi web menyeluruh dan menerapkan computer vision untuk menyelesaikan masalah nyata.",
    "Saya pernah membangun dan mendeploy website pelaporan WBS KPPU (wbs.kppu.go.id) ke server Plesk, serta mengembangkan sistem penghitungan populasi ayam broiler berbasis Next.js dan FastAPI dengan model YOLOv11 sebagai skripsi.",
    "Berorientasi pada hasil, cepat belajar hal baru, dan terbiasa berkolaborasi dalam tim untuk menyelesaikan masalah teknis secara efektif.",
  ],
  quote:
    "Teknologi yang baik lahir dari ketelitian — data yang jujur, kode yang rapi, dan hasil yang bisa dipertanggungjawabkan.",
};

export const stats = [
  { value: "3", label: "Proyek & Riset" },
  { value: "3", label: "Pengalaman Kerja" },
  { value: "10", label: "Sertifikasi & Pelatihan" },
  { value: "2026", label: "Tahun Lulus" },
];

export const facts = [
  { label: "Pendidikan", value: "Universitas Gunadarma — Teknik Informatika" },
  { label: "Lokasi", value: "Tangerang Selatan, Banten" },
  { label: "Email", value: "rakhaalbaihaqi04@gmail.com" },
  { label: "Telepon", value: "085717636970 / 085772156472" },
];

export const experiences = [
  {
    tag: "Magang",
    org: "Komisi Pengawas Persaingan Usaha (KPPU)",
    role: "Peserta Magang — Unit Data dan Informasi",
    period: "18 Februari – 30 Maret 2026",
    place: "Jakarta",
    note: "Sekretariat Komisi KPPU, Unit Data dan Informasi. Hasil penilaian: Baik.",
    points: [
      "Melaksanakan magang di Unit Data dan Informasi, Sekretariat Komisi KPPU, dengan hasil penilaian Baik.",
      "Mendukung pengelolaan dan pengolahan data serta informasi di lingkungan Sekretariat Komisi.",
      "Menerapkan ketelitian dan tanggung jawab dalam menangani data serta dokumentasi instansi.",
    ],
  },
  {
    tag: "Event",
    org: "PT. Aktifitas Atmosfir",
    role: "Staf Administrasi Katering",
    period: "September 2024",
    place: "Jakarta Selatan",
    note: "Katering resmi PON XXI.",
    points: [
      "Mengoordinasikan data logistik bersama tim operasional lapangan (>15 orang) untuk distribusi pangan berskala besar.",
      "Mengelola dokumentasi administrasi dan keuangan harian dengan kepatuhan pencatatan 100%.",
      "Mencatat dan melacak data konsumsi pangan untuk ratusan peserta acara (atlet, ofisial, panitia).",
    ],
  },
  {
    tag: "Internal",
    org: "Rumah Sakit Umum",
    role: "Staf Entri Data & Pengembangan Web Internal",
    period: "—",
    place: "Indonesia",
    note: "Fokus digitalisasi sistem administrasi medis.",
    points: [
      "Merancang dan menerapkan halaman web internal dengan HTML, CSS, dan vanilla JavaScript.",
      "Melakukan entri data volume tinggi untuk rekam medis, inventaris medis, dan data administratif dengan akurasi 99%.",
      "Menerapkan validasi data ketat untuk menjaga integritas basis data pusat.",
    ],
  },
];

export const education = {
  degree: "S1 Teknik Informatika",
  school: "Universitas Gunadarma",
  place: "Depok, Jawa Barat",
  faculty: "Fakultas Teknologi Industri — Program Studi Teknik Informatika",
  training: [
    "Dasar Pemrograman Berbasis Web",
    "Admin Linux Server (Dasar & Menengah)",
    "Go-Lang (Dasar & Menengah)",
    "Desain & Implementasi Pengembangan Aplikasi",
  ],
};

export const projects = [
  {
    title: "Website WBS KPPU",
    kicker: "Web Development · 2026",
    subtitle: "Sistem pengaduan pelanggaran usaha",
    description:
      "Website pengaduan/pelaporan pelanggaran usaha yang dibangun dengan Python. Mengembangkan front-end dan back-end sekaligus mengintegrasikannya, lalu mendeploy wbs.kppu.go.id ke server Plesk.",
    stack: ["Python", "Front-End", "Back-End", "Plesk"],
    metrics: [{ value: "Live", label: "wbs.kppu.go.id" }],
  },
  {
    title: "Penghitungan Populasi Ayam Broiler (YOLOv11)",
    kicker: "Skripsi · 2026",
    subtitle: "Computer vision berbasis website",
    description:
      "Sistem penghitungan populasi ayam broiler berbasis website mengikuti metodologi CRISP-DM, dari data understanding hingga deployment. Front-end Next.js, back-end FastAPI, dengan model deteksi objek YOLOv11 hasil pelatihan khusus untuk input video/gambar.",
    stack: ["Next.js", "FastAPI", "YOLOv11", "CRISP-DM"],
    metrics: [
      { value: "mAP@50", label: "Metrik evaluasi model" },
      { value: "SUS", label: "Uji usability website" },
    ],
  },
  {
    title: "Deteksi Warna dengan YOLOv8",
    kicker: "Riset · 2025",
    subtitle: "Computer vision real-time",
    description:
      "Sistem computer vision real-time berbasis YOLOv8 untuk mendeteksi dan mengklasifikasikan warna pada gambar/video. Mengelola pipeline machine learning menyeluruh: pengumpulan data, anotasi, pelatihan, validasi, hingga optimasi.",
    stack: ["YOLOv8", "OpenCV", "Matplotlib", "Seaborn"],
    metrics: [{ value: "67,5", label: "Skor System Usability Scale" }],
  },
];

export const skillGroups = [
  {
    no: "01",
    title: "Bahasa Pemrograman",
    description: "Fondasi utama untuk membangun logika aplikasi dan otomasi.",
    items: ["Python", "Go", "PHP", "JavaScript"],
  },
  {
    no: "02",
    title: "Pengembangan Web",
    description: "Membangun antarmuka dan layanan back-end secara menyeluruh.",
    items: ["Next.js", "FastAPI", "HTML", "CSS", ".NET Framework"],
  },
  {
    no: "03",
    title: "Deep Learning & Computer Vision",
    description: "Deteksi objek dan pengolahan citra dengan model terlatih.",
    items: ["YOLOv8", "YOLOv11", "Object Detection", "OpenCV"],
  },
  {
    no: "04",
    title: "Visualisasi & Analisis Data",
    description: "Menerjemahkan data mentah menjadi temuan yang bisa dibaca.",
    items: ["Matplotlib", "Seaborn", "Analisis Data"],
  },
  {
    no: "05",
    title: "Infrastruktur & Tooling",
    description: "Menyiapkan, mendeploy, dan merawat aplikasi di server.",
    items: ["Linux Server", "Plesk", "GitHub"],
  },
  {
    no: "06",
    title: "Metodologi",
    description: "Kerangka kerja terstruktur untuk proyek berbasis data.",
    items: ["CRISP-DM", "Hyperparameter Tuning", "Evaluasi SUS"],
  },
];

export const softSkills = [
  "Berpikir Analitis",
  "Pemecahan Masalah",
  "Kerja Sama Tim & Kolaborasi",
  "Komunikasi Efektif",
];

export const certificates = [
  { title: "Implementasi dan Pengembangan Aplikasi", issuer: "Universitas Gunadarma", date: "Juni 2026", tag: "Pelatihan" },
  { title: "Membangun Website Menggunakan HTML 5", issuer: "Universitas Gunadarma", date: "Juli 2026", tag: "Pelatihan" },
  { title: "Aptitude Test", issuer: "Universitas Gunadarma", date: "Juli 2026", tag: "Asesmen" },
  { title: "Desain Pengembangan Aplikasi", issuer: "Universitas Gunadarma", date: "September 2025", tag: "Pelatihan" },
  { title: "Go-Lang for Intermediate", issuer: "Universitas Gunadarma", date: "Agustus 2025", tag: "Pelatihan" },
  { title: "Intermediate Linux Server Administration", issuer: "Universitas Gunadarma", date: "Februari 2025", tag: "Pelatihan" },
  { title: "Go-Lang for Beginner", issuer: "Universitas Gunadarma", date: "Agustus 2024", tag: "Pelatihan" },
  { title: "Linux System Administration for Beginner", issuer: "Universitas Gunadarma", date: "Februari 2024", tag: "Pelatihan" },
  { title: "Fundamental Web Programming", issuer: "Universitas Gunadarma", date: "Agustus 2023", tag: "Pelatihan" },
  { title: "Webinar Outlook APBN 2024–2025 & Update Reform DJP", issuer: "Webinar Nasional", date: "2024", tag: "Webinar" },
];

export const workflow = [
  {
    no: "01",
    title: "Pemahaman Data & Kebutuhan",
    description:
      "Memetakan tujuan, sumber data, dan batasan teknis lebih dulu — mengikuti tahap business & data understanding pada CRISP-DM.",
  },
  {
    no: "02",
    title: "Pembangunan & Integrasi",
    description:
      "Mengembangkan front-end dan back-end secara paralel, lalu mengintegrasikan model atau basis data ke dalam alur aplikasi.",
  },
  {
    no: "03",
    title: "Evaluasi & Deployment",
    description:
      "Mengukur hasil dengan metrik objektif (mAP@50, SUS), melakukan tuning, kemudian mendeploy ke server produksi.",
  },
];

export const navItems = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "proyek", label: "Proyek" },
  { id: "keahlian", label: "Keahlian" },
  { id: "sertifikat", label: "Sertifikat" },
  { id: "kontak", label: "Kontak" },
];
