export type ProjectSlug = 'biblioteka-filsafat' | 'salsyaf' | 'ceki-scoreboard' | 'goodcut' | 'lazuarda' | 'jessd-symposium' | 'vienna-ai'

export type Project = {
  number: string
  slug: ProjectSlug
  name: string
  stack: string
  featured?: boolean
  status?: 'Active' | 'Archived' | 'Deprecated'
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    number: '01',
    slug: 'biblioteka-filsafat',
    name: 'Biblioteka Filsafat UI',
    stack: 'React · TypeScript · PostgreSQL',
    featured: true,
    githubUrl: 'https://github.com/dahanlapuk/library-management-filsafat',
    liveUrl: 'https://biblioteka.filsafatui.app/',
  },
  {
    number: '02',
    slug: 'salsyaf',
    name: 'Salsyaf',
    stack: 'Next.js · Express · MongoDB',
    githubUrl: 'https://github.com/dahanlapuk/salsyaf',
    liveUrl: 'https://salsyaf.vercel.app/',
  },
  {
    number: '03',
    slug: 'ceki-scoreboard',
    name: 'Ceki Scoreboard',
    stack: 'React · JavaScript',
    githubUrl: 'https://github.com/dahanlapuk/ceki-scoreboard',
    liveUrl: 'https://ceki-scoreboard.vercel.app/',
  },
  {
    number: '04',
    slug: 'goodcut',
    name: 'Goodcut',
    stack: 'React · Vite · Recharts',
    githubUrl: 'https://github.com/dahanlapuk/goodcut',
    liveUrl: 'https://goodcut.vercel.app/',
  },
  {
    number: '05',
    slug: 'lazuarda',
    name: 'Lazuarda',
    stack: 'Web development · Client work',
    githubUrl: 'https://github.com/dahanlapuk/lazuarda',
    liveUrl: 'https://lazuarda.vercel.app/',
  },
  {
    number: '06',
    slug: 'jessd-symposium',
    name: 'JESSD Symposium',
    stack: 'Archived project',
    status: 'Archived',
    githubUrl: 'https://github.com/dahanlapuk/jessd-symposium',
  },
  {
    number: '07',
    slug: 'vienna-ai',
    name: 'Vienna AI',
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
