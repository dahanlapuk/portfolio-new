import type { Language } from '#/data/site'

type Localized<T> = Record<Language, T>

export type ExperienceGroup = { heading: string; points: string[] }

export type ExperienceItem = {
  id: string
  period: string
  organization: Localized<string>
  role: Localized<string>
  details: Localized<ExperienceGroup[]>
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'library-intern',
    period: '2026',
    organization: {
      en: 'Department of Philosophy Library, FIB UI',
      id: 'Perpustakaan Departemen Filsafat, FIB UI',
    },
    role: { en: 'Library Intern', id: 'Magang Perpustakaan' },
    details: {
      en: [
        {
          heading: 'February 2026 – June 2026',
          points: [
            'Organized and rearranged library collections to improve accessibility for users.',
            'Conducted bibliographic data entry and inventory of library collections with attention to accuracy.',
            'Assisted in collection management by identifying book conditions and updating library records.',
            'Supported the development of the department library website to improve information accessibility.',
          ],
        },
      ],
      id: [
        {
          heading: 'Februari 2026 – Juni 2026',
          points: [
            'Menata dan menyusun ulang koleksi perpustakaan agar lebih mudah diakses pengguna.',
            'Melakukan entri data bibliografi dan inventarisasi koleksi perpustakaan dengan teliti.',
            'Membantu pengelolaan koleksi dengan mengidentifikasi kondisi buku dan memperbarui catatan perpustakaan.',
            'Mendukung pengembangan website perpustakaan departemen untuk memudahkan akses informasi.',
          ],
        },
      ],
    },
  },
  {
    id: 'dpc-gmni-depok',
    period: '2024—26',
    organization: { en: 'DPC GMNI Depok', id: 'DPC GMNI Depok' },
    role: { en: 'Head of Media Production', id: 'Kepala Kantor Komunikasi dan Informasi' },
    details: {
      en: [
        {
          heading: 'September 2024 – September 2026',
          points: [
            'Develop and maintain website.',
            'Contribute to project coordination and quality control of content design.',
            'Contribute to content creation and development.',
          ],
        },
      ],
      id: [
        {
          heading: 'September 2024 – September 2026',
          points: [
            'Mengembangkan dan memelihara website.',
            'Berkontribusi dalam koordinasi proyek dan kontrol kualitas desain konten.',
            'Berkontribusi dalam pembuatan dan pengembangan konten.',
          ],
        },
      ],
    },
  },
  {
    id: 'komafil',
    period: '2024',
    organization: { en: 'KOMAFIL FIB UI', id: 'KOMAFIL FIB UI' },
    role: { en: 'Staff of Media Production', id: 'Staf Produksi Media' },
    details: {
      en: [
        {
          heading: 'May 2024 – December 2024',
          points: [
            'Develop and maintain website.',
            'Contribute to project coordination and quality control of content design.',
            'Contribute to content creation and development.',
          ],
        },
      ],
      id: [
        {
          heading: 'Mei 2024 – Desember 2024',
          points: [
            'Mengembangkan dan memelihara website.',
            'Berkontribusi dalam koordinasi proyek dan kontrol kualitas desain konten.',
            'Berkontribusi dalam pembuatan dan pengembangan konten.',
          ],
        },
      ],
    },
  },
  {
    id: 'dpk-gmni-fib-ui',
    period: '2023—24',
    organization: { en: 'DPK GMNI FIB UI', id: 'DPK GMNI FIB UI' },
    role: { en: 'General Secretary → Interim Chairman', id: 'Sekretaris Umum → Ketua Interim' },
    details: {
      en: [
        {
          heading: 'General Secretary · May 2023 – February 2024',
          points: [
            'Manage incoming and outgoing emails and letters.',
            'Build and manage standard administration.',
          ],
        },
        {
          heading: 'Interim Chairman · February 2024 – May 2024',
          points: [
            'Provide leadership and guidance during the interim period.',
            'Manage the strategic direction and vision of the organization during the interim period.',
          ],
        },
      ],
      id: [
        {
          heading: 'Sekretaris Umum · Mei 2023 – Februari 2024',
          points: [
            'Mengelola surat dan email masuk maupun keluar.',
            'Membangun dan mengelola administrasi standar.',
          ],
        },
        {
          heading: 'Ketua Interim · Februari 2024 – Mei 2024',
          points: [
            'Memberikan kepemimpinan dan arahan selama masa interim.',
            'Mengelola arah strategis dan visi organisasi selama masa interim.',
          ],
        },
      ],
    },
  },
  {
    id: 'dpm-ui',
    period: '2023—24',
    organization: { en: 'DPM UI', id: 'DPM UI' },
    role: { en: 'Staff, Komisi Kelembagaan', id: 'Staf Komisi Kelembagaan' },
    details: {
      en: [
        {
          heading: 'May 2023 – February 2024',
          points: [
            'Supervise the programs and events of Badan Eksekutif Mahasiswa (BEM) UI and MWA UI UM.',
            'Advocate for faculty aspirations within the legislative organization (Legislative United).',
          ],
        },
      ],
      id: [
        {
          heading: 'Mei 2023 – Februari 2024',
          points: [
            'Mengawasi program dan kegiatan Badan Eksekutif Mahasiswa (BEM) UI dan MWA UI UM.',
            'Mengadvokasikan aspirasi fakultas dalam organisasi legislatif (Legislative United).',
          ],
        },
      ],
    },
  },
]
