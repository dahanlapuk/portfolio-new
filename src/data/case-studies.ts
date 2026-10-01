import type { ProjectSlug } from '#/data/portfolio'
import type { Language } from '#/data/site'

export type CaseStudySection = { heading: string; body: string }

export const caseStudies: Partial<Record<ProjectSlug, Record<Language, CaseStudySection[]>>> = {
  'biblioteka-filsafat': {
    id: [
      {
        heading: 'Konteks',
        body: 'Pustaka Filsafat dimulai Maret 2026 sebagai katalog buku untuk Departemen Filsafat UI (Vue 3, Go, PostgreSQL) dan terus ditambal sampai April. Saat dikembangkan, pertanyaannya bukan lagi soal tampilan, tapi soal bagaimana stok dialokasikan, bagaimana peminjaman tetap konsisten, dan data apa yang boleh dilihat publik.',
      },
      {
        heading: 'Audit',
        body: 'Di awal pengerjaan V2 (September 2026) saya membaca ulang kode V1 dan mencatat temuannya. Pertama, persetujuan pengajuan pinjam menyimpan pinjaman tanpa alokasi stok dan tanpa transaksi, jadi sebuah pengajuan bisa berstatus "disetujui" walau pinjamannya tidak pernah tercatat. Kedua, pengecekan ketersediaan pada pengajuan memakai logika ada atau tidak ada, bukan jumlah eksemplar. Ketiga, API katalog publik mengembalikan nama peminjam.',
      },
      {
        heading: 'Desain ulang',
        body: 'Logika alokasi stok dikunci dengan test karakterisasi sebelum dipindahkan, termasuk satu edge case V1 yang sengaja dipertahankan sampai ada keputusan sadar: buku satu eksemplar tanpa posisi rak tetap bisa dipinjam, tanpa catatan alokasi. Di V2, persetujuan berjalan dalam satu transaksi: memvalidasi stok, membuat anggota dan pinjaman, menulis alokasi, mengubah status pengajuan, dan mencatat aktivitas. Katalog publik hanya mengembalikan status dipinjam atau tersedia, tidak mengembalikan nama peminjam.',
      },
      {
        heading: 'Trade-off yang disengaja',
        body: 'Pengajuan pinjam dari publik tidak lagi mengecek ketersediaan saat diajukan. Pengecekan dilakukan saat admin menyetujui, memakai jumlah eksemplar yang sebenarnya. Tujuannya memudahkan admin. Konsekuensinya, pengajuan untuk buku yang sedang habis tetap bisa masuk dan baru ditolak saat ditinjau.',
      },
      {
        heading: 'Yang berubah',
        body: 'V1 dipensiunkan lewat redirect 301 ke V2 pada 22 September 2026. Setelah melewati proses ini, V2 terasa lebih nyaman dikerjakan, lebih rapi, dan lebih aman.',
      },
    ],
    en: [
      {
        heading: 'Context',
        body: 'Pustaka Filsafat started in March 2026 as a book catalog for the Department of Philosophy at Universitas Indonesia (Vue 3, Go, PostgreSQL) and was patched through April. As it grew, the questions stopped being about the interface and became about how stock is allocated, how a loan stays consistent, and what data the public should be able to see.',
      },
      {
        heading: 'Audit',
        body: 'At the start of V2 (September 2026) I re-read the V1 code and documented what I found. First, approving a loan request saved the loan without a stock allocation and without a transaction, so a request could be marked "approved" even if the loan was never recorded. Second, the availability check on requests was a yes-or-no test, not a count of copies. Third, the public catalog API returned the names of borrowers.',
      },
      {
        heading: 'Redesign',
        body: 'The stock allocation logic was pinned with characterization tests before being ported, including one V1 edge case kept on purpose until a conscious decision is made: a single-copy book with no shelf position can still be loaned, without an allocation record. In V2, approval runs in one transaction: it validates stock, creates the member and the loan, writes the allocation, updates the request status, and logs the activity. The public catalog returns only borrowed or available, and does not return the name of a borrower.',
      },
      {
        heading: 'A deliberate trade-off',
        body: 'Public loan requests no longer check availability when they are submitted. The check happens when an admin approves, using the actual number of copies. The goal was to make things easier for admins. The cost is that a request for a book that is currently out can still come in and is only rejected at review.',
      },
      {
        heading: 'What changed',
        body: 'V1 was retired with a 301 redirect to V2 on 22 September 2026. Having been through it, V2 feels more comfortable to work on, tidier, and safer.',
      },
    ],
  },
}
