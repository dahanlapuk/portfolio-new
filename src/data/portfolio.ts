export type Project = {
  number: string
  name: string
  type: string
  description: string
  caseStudy?: string
  stack: string
  featured?: boolean
  status?: 'Active' | 'Archived' | 'Deprecated'
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Biblioteka Filsafat UI',
    type: 'Library management system',
    description:
      'A library system for the Department of Philosophy, Universitas Indonesia, built to make collections, loans, members, and administrative activity easier to understand and manage.',
    caseStudy:
      'The project began as a catalog. Building it further exposed harder questions: how should stock be allocated, how can a loan remain consistent when several records change, and what should a public visitor be allowed to know? The new system treats those questions as part of the product, not as details to solve later.',
    stack: 'React · TypeScript · PostgreSQL',
    featured: true,
    githubUrl: 'https://github.com/dahanlapuk/library-management-filsafat',
    liveUrl: 'https://biblioteka.filsafatui.app/',
  },
  {
    number: '02',
    name: 'Salsyaf',
    type: 'Full-stack content platform',
    description: 'A public website and admin system for news, schedules, galleries, and media.',
    stack: 'Next.js · Express · MongoDB',
    githubUrl: 'https://github.com/dahanlapuk/salsyaf',
    liveUrl: 'https://salsyaf.vercel.app/',
  },
  {
    number: '03',
    name: 'Ceki Scoreboard',
    type: 'Interactive scoring application',
    description: 'A browser-based scoring tool for rounds, rankings, and game states.',
    stack: 'React · JavaScript',
    githubUrl: 'https://github.com/dahanlapuk/ceki-scoreboard',
  },
  {
    number: '04',
    name: 'Goodcut',
    type: 'Interactive investment proposal',
    description: 'A digital presentation combining business information, projections, and data visualization.',
    stack: 'React · Vite · Recharts',
    githubUrl: 'https://github.com/dahanlapuk/goodcut',
    liveUrl: 'https://goodcut.vercel.app/',
  },
  {
    number: '05',
    name: 'Lazuarda',
    type: 'Client portfolio website',
    description: 'A responsive portfolio for a graphic designer and art director.',
    stack: 'Web development · Client work',
    githubUrl: 'https://github.com/dahanlapuk/lazuarda',
    liveUrl: 'https://lazuarda.vercel.app/',
  },
  {
    number: '06',
    name: 'JESSD Symposium',
    type: 'International symposium website',
    description: 'A historical event website covering event information, registration, schedule, and speakers.',
    stack: 'Archived project',
    status: 'Archived',
    githubUrl: 'https://github.com/dahanlapuk/jessd-symposium',
  },
  {
    number: '07',
    name: 'Vienna AI',
    type: 'AI-powered web project',
    description: 'An archived experiment whose original API integration is no longer available.',
    stack: 'Deprecated deployment',
    status: 'Deprecated',
    githubUrl: 'https://github.com/dahanlapuk/vienna-ai',
    liveUrl: 'https://dahanlapuk.github.io/vienna-ai/',
  },
]

export const writing = [
  { title: 'Merdeka Belajar dalam Pragmatisme', category: 'Philosophy · Education', image: 'MBdP', url: 'https://medium.com/@itbamuhammad/merdeka-belajar-dalam-pragmatisme-a73e9a825477' },
  { title: 'Komodifikasi dalam Kalkulasi Politik Mahasiswa', category: 'Political · Social Thought', image: 'KdKPM', url: 'https://medium.com/@itbamuhammad/komodifikasi-dalam-kalkulasi-politik-mahasiswa-c823424ef7f8' },
  { title: 'Wadah', category: 'Philosophy · Essay', image: 'Wadah', url: 'https://medium.com/@itbamuhammad/wadah-6caf1b9ef989' },
]

export const experience = [
  { period: '2026', role: 'Library Intern', organization: 'Department of Philosophy Library, FIB UI' },
  { period: '2024—26', role: 'Head of Media Production', organization: 'DPC GMNI Depok' },
  { period: '2023—24', role: 'Institutional Staff · General Secretary', organization: 'DPM UI · DPK GMNI FIB UI' },
]

