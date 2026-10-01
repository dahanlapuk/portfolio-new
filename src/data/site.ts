export type Language = 'id' | 'en'
export type Theme = 'cold' | 'light' | 'warm' | 'deep'

export const socialLinks = [
  ['GitHub', 'https://github.com/dahanlapuk'],
  ['LinkedIn', 'https://www.linkedin.com/in/itbamuhammad/'],
  ['Instagram', 'https://www.instagram.com/itbamuhammad_'],
  ['X', 'https://x.com/itbamuhammad_'],
  ['Medium', 'https://medium.com/@itbamuhammad'],
  ['YouTube', 'https://youtu.be/eEtHOsudTNw'],
] as const

export const aboutSocialLinks = [
  ['Instagram', 'https://www.instagram.com/itbamuhammad_'],
  ['Facebook', 'https://www.facebook.com/itbamuhammad.kamil.3'],
  ['X', 'https://twitter.com/dahanlapuk'],
  ['LinkedIn', 'https://www.linkedin.com/in/itbamuhammad/'],
  ['KaryaKarsa', 'https://karyakarsa.com/dahanlapuk'],
  ['YouTube', 'https://youtu.be/eEtHOsudTNw'],
  ['GitHub', 'https://github.com/dahanlapuk'],
] as const

export const projectCopy = {
  'biblioteka-filsafat': {
    en: { type: 'Library management system · Active', description: 'A library system for the Department of Philosophy, Universitas Indonesia, built to make collections, loans, members, and administrative activity easier to understand and manage.', story: 'The project began as a catalog. Building it further exposed harder questions: how should stock be allocated, how can a loan remain consistent when several records change, and what should a public visitor be allowed to know? That is how Pustaka Filsafat evolved into Biblioteka Filsafat UI: a more deliberate system for the library it serves.' },
    id: { type: 'Sistem manajemen perpustakaan · Aktif', description: 'Sistem perpustakaan untuk Departemen Filsafat, Universitas Indonesia, yang membantu mengelola koleksi, peminjaman, anggota, dan aktivitas administratif.', story: 'Proyek ini bermula sebagai katalog. Saat dikembangkan lebih jauh, muncul pertanyaan yang lebih sulit: bagaimana stok dialokasikan, bagaimana transaksi tetap konsisten ketika beberapa data berubah, dan informasi apa yang boleh diketahui pengunjung? Dari situlah Pustaka Filsafat berkembang menjadi Biblioteka Filsafat UI, sebuah sistem yang dirancang lebih sadar terhadap kebutuhan perpustakaan.' },
  },
  'salsyaf': {
    en: { type: 'Full-stack pesantren platform', description: 'A public website and admin system for Pondok Pesantren Tahfidzul Quran Salafiyah Syafi’iyah Proto, covering news, schedules, galleries, and media.', story: 'Salsyaf separates the public experience from the work of managing pesantren content behind it.' },
    id: { type: 'Platform pesantren full-stack', description: 'Website publik dan sistem admin untuk Pondok Pesantren Tahfidzul Quran Salafiyah Syafi’iyah Proto, yang mencakup berita, jadwal, galeri, dan media.', story: 'Salsyaf memisahkan pengalaman pengunjung dari pekerjaan mengelola konten pesantren di baliknya.' },
  },
  'ceki-scoreboard': {
    en: { type: 'Interactive scoring application', description: 'A browser-based scoring tool for rounds, rankings, and game states.', story: 'The interface turns a specific game rule set into visible, predictable state.' },
    id: { type: 'Aplikasi penilaian interaktif', description: 'Aplikasi browser untuk ronde, peringkat, dan status permainan.', story: 'Antarmukanya menerjemahkan seperangkat aturan permainan menjadi status yang terlihat dan dapat diprediksi.' },
  },
  'goodcut': {
    en: { type: 'Interactive investment proposal', description: 'A digital presentation combining business information, projections, and data visualization.', story: 'Goodcut treats a proposal as an experience that guides attention, not just a static document.' },
    id: { type: 'Proposal investasi interaktif', description: 'Presentasi digital yang menggabungkan informasi bisnis, proyeksi, dan visualisasi data.', story: 'Goodcut memperlakukan proposal sebagai pengalaman yang mengarahkan perhatian, bukan sekadar dokumen statis.' },
  },
  'lazuarda': {
    en: { type: 'Client portfolio website', description: 'A responsive portfolio for a graphic designer and art director.', story: 'The site gives a large body of visual work a clear, browsable structure.' },
    id: { type: 'Website portfolio client', description: 'Portfolio responsif untuk graphic designer dan art director.', story: 'Website ini memberi struktur yang jelas dan mudah ditelusuri untuk kumpulan karya visual yang besar.' },
  },
  'jessd-symposium': {
    en: { type: 'International symposium website', description: 'A historical event website covering event information, registration, schedule, and speakers.', story: 'Archived historical work, kept here as part of the record.' },
    id: { type: 'Website simposium internasional', description: 'Website acara historis yang memuat informasi, registrasi, jadwal, dan pembicara.', story: 'Karya historis yang diarsipkan sebagai bagian dari catatan perjalanan.' },
  },
  'vienna-ai': {
    en: { type: 'AI-powered web project', description: 'An archived experiment whose original API integration is no longer available.', story: 'Deprecated after the original API integration became unavailable.' },
    id: { type: 'Proyek web berbasis AI', description: 'Eksperimen yang diarsipkan karena integrasi API aslinya sudah tidak tersedia.', story: 'Deprecated setelah integrasi API aslinya tidak lagi tersedia.' },
  },
} as const

export const copy = {
  en: {
    nav: ['Work', 'Writing', 'Experience', 'About'], heroKicker: 'Web developer / builder', heroTitle: 'I build digital things with a critical, analytical approach shaped by philosophy.', heroIntro: "I'm Itba Muhammad Kamil, a developer and writer interested in the relationship between ideas, systems, and the things we make.", viewWork: 'View work', readWriting: 'Read writing', selectedWork: 'Selected work', workNote: 'Products, applications, websites, and experiments.', seeAll: 'See all projects', approach: 'Approach', approachNote: 'How I approach problems.', approachTitle: 'Building software is rarely just a matter of writing code.', approachIntro: 'I try to understand the problem, examine how its parts relate, and use implementation to test the ideas behind it.', principles: ['Question the assumption', 'Understand the system', 'Build, test, rethink'], writing: 'Writing', writingNote: 'Ideas that sit between philosophy and everyday life.', readAll: 'Read all writing', experience: 'Experience', experienceNote: 'Work across software, research, media, and organizations.', beyond: 'Beyond the screen', beyondTitle: 'Build, think, write.', beyondCopy: 'My work has also involved digital media, content production, event websites, research, and organizational coordination.', moreAbout: 'More about me', liveUnavailable: 'Live unavailable', historicalSite: 'Historical site', contact: 'Have a problem worth building around?', letsTalk: "Let's talk", available: 'Available for selected work', scroll: 'Scroll to explore', based: 'Based in Indonesia', github: 'GitHub', status: 'Active', details: 'Details', close: 'Close', archived: 'Archived', deprecated: 'Deprecated', back: 'Back to top', footerCopy: 'Web developer / builder\nwith a philosophy-shaped approach.',
  },
  id: {
    nav: ['Karya', 'Tulisan', 'Pengalaman', 'Tentang'], heroKicker: 'Web developer / builder', heroTitle: 'Membangun hal-hal digital melalui pendekatan kritis yang dibentuk secara filosofis', heroIntro: 'Saya Itba Muhammad Kamil, developer dan penulis yang tertarik pada hubungan antara gagasan, sistem, dan hal-hal yang kita buat.', viewWork: 'Lihat karya', readWriting: 'Baca tulisan', selectedWork: 'Karya terpilih', workNote: 'Produk digital, aplikasi, website, dan eksperimen.', seeAll: 'Lihat semua karya', approach: 'Pendekatan', approachNote: 'Cara saya memahami masalah.', approachTitle: 'Membangun software jarang hanya soal menulis kode.', approachIntro: 'Saya mencoba memahami masalahnya, melihat hubungan antarbagian, lalu menggunakan implementasi untuk menguji gagasan di baliknya.', principles: ['Mempertanyakan asumsi', 'Memahami sistem', 'Membangun, menguji, memikirkan ulang'], writing: 'Tulisan', writingNote: 'Gagasan di antara filsafat dan kehidupan sehari-hari.', readAll: 'Baca semua tulisan', experience: 'Pengalaman', experienceNote: 'Bekerja di antara software, riset, media, dan organisasi.', beyond: 'Di luar layar', beyondTitle: 'Bangun, pikirkan, tulis.', beyondCopy: 'Pekerjaan saya juga mencakup media digital, produksi konten, website acara, riset, dan koordinasi organisasi.', moreAbout: 'Tentang saya', liveUnavailable: 'Live belum tersedia', historicalSite: 'Situs historis', contact: 'Punya masalah yang layak dibangun?', letsTalk: 'Mari bicara', available: 'Terbuka untuk pekerjaan terpilih', scroll: 'Gulir untuk melihat', based: 'Berbasis di Indonesia', github: 'GitHub', status: 'Aktif', details: 'Detail', close: 'Tutup', archived: 'Arsip', deprecated: 'Deprecated', back: 'Kembali ke atas', footerCopy: 'Web developer / builder\ndengan pendekatan yang dibentuk filsafat.',
  },
} as const
