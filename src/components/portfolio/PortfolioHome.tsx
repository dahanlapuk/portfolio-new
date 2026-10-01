import { useEffect, useState } from 'react'

import { experience, projects, writing } from '#/data/portfolio'

type Language = 'id' | 'en'
type Theme = 'cold' | 'light' | 'warm' | 'deep'

function TypewriterText({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const renderTypedText = () => {
    const parts = visibleText.split(/(digital|filosof\w*|philosoph\w*)/gi)
    return parts.map((part, index) => {
      const isKeyword = /^(digital|filosof\w*|philosoph\w*)$/i.test(part)
      return isKeyword ? <mark className="typewriter-keyword" key={`${part}-${index}`}>{part}</mark> : part
    })
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleText(text)
      setIsTyping(false)
      return
    }

    setVisibleText('')
    setIsTyping(true)
    let characterIndex = 0
    let timer = 0
    const typeNextCharacter = () => {
      characterIndex += 1
      setVisibleText(text.slice(0, characterIndex))
      if (characterIndex >= text.length) {
        setIsTyping(false)
        return
      }
      const reachedKeyword = /(?:digital|filosof\w*|philosoph\w*)\s*$/i.test(text.slice(0, characterIndex))
      timer = window.setTimeout(typeNextCharacter, reachedKeyword ? 520 : 32)
    }
    timer = window.setTimeout(typeNextCharacter, 32)

    return () => window.clearTimeout(timer)
  }, [text])

  return (
    <>
      <span className="typewriter-measure" aria-hidden="true">{text}</span>
      <span className="typewriter-live" aria-hidden="true">{renderTypedText()}{isTyping && <span className="typewriter-cursor cursor-blink" />}</span>
    </>
  )
}

const socialLinks = [
  ['GitHub', 'https://github.com/dahanlapuk'],
  ['LinkedIn', 'https://www.linkedin.com/in/itbamuhammad/'],
  ['Instagram', 'https://www.instagram.com/itbamuhammad_'],
  ['X', 'https://x.com/itbamuhammad_'],
  ['Medium', 'https://medium.com/@itbamuhammad'],
  ['YouTube', 'https://youtu.be/eEtHOsudTNw'],
] as const

const aboutSocialLinks = [
  ['Instagram', 'https://www.instagram.com/itbamuhammad_'],
  ['Facebook', 'https://www.facebook.com/itbamuhammad.kamil.3'],
  ['X', 'https://twitter.com/dahanlapuk'],
  ['LinkedIn', 'https://www.linkedin.com/in/itbamuhammad/'],
  ['KaryaKarsa', 'https://karyakarsa.com/dahanlapuk'],
  ['YouTube', 'https://youtu.be/eEtHOsudTNw'],
  ['GitHub', 'https://github.com/dahanlapuk'],
] as const

const projectCopy = {
  '01': {
    en: { type: 'Library management system · Active', description: 'A library system for the Department of Philosophy, Universitas Indonesia, built to make collections, loans, members, and administrative activity easier to understand and manage.', story: 'The project began as a catalog. Building it further exposed harder questions: how should stock be allocated, how can a loan remain consistent when several records change, and what should a public visitor be allowed to know? That is how Pustaka Filsafat evolved into Biblioteka Filsafat UI: a more deliberate system for the library it serves.' },
    id: { type: 'Sistem manajemen perpustakaan · Aktif', description: 'Sistem perpustakaan untuk Departemen Filsafat, Universitas Indonesia, yang membantu mengelola koleksi, peminjaman, anggota, dan aktivitas administratif.', story: 'Proyek ini bermula sebagai katalog. Saat dikembangkan lebih jauh, muncul pertanyaan yang lebih sulit: bagaimana stok dialokasikan, bagaimana transaksi tetap konsisten ketika beberapa data berubah, dan informasi apa yang boleh diketahui pengunjung? Dari situlah Pustaka Filsafat berkembang menjadi Biblioteka Filsafat UI, sebuah sistem yang dirancang lebih sadar terhadap kebutuhan perpustakaan.' },
  },
  '02': {
    en: { type: 'Full-stack pesantren platform', description: 'A public website and admin system for Pondok Pesantren Tahfidzul Quran Salafiyah Syafi’iyah Proto, covering news, schedules, galleries, and media.', story: 'Salsyaf separates the public experience from the work of managing pesantren content behind it.' },
    id: { type: 'Platform pesantren full-stack', description: 'Website publik dan sistem admin untuk Pondok Pesantren Tahfidzul Quran Salafiyah Syafi’iyah Proto, yang mencakup berita, jadwal, galeri, dan media.', story: 'Salsyaf memisahkan pengalaman pengunjung dari pekerjaan mengelola konten pesantren di baliknya.' },
  },
  '03': {
    en: { type: 'Interactive scoring application', description: 'A browser-based scoring tool for rounds, rankings, and game states.', story: 'The interface turns a specific game rule set into visible, predictable state.' },
    id: { type: 'Aplikasi penilaian interaktif', description: 'Aplikasi browser untuk ronde, peringkat, dan status permainan.', story: 'Antarmukanya menerjemahkan seperangkat aturan permainan menjadi status yang terlihat dan dapat diprediksi.' },
  },
  '04': {
    en: { type: 'Interactive investment proposal', description: 'A digital presentation combining business information, projections, and data visualization.', story: 'Goodcut treats a proposal as an experience that guides attention, not just a static document.' },
    id: { type: 'Proposal investasi interaktif', description: 'Presentasi digital yang menggabungkan informasi bisnis, proyeksi, dan visualisasi data.', story: 'Goodcut memperlakukan proposal sebagai pengalaman yang mengarahkan perhatian, bukan sekadar dokumen statis.' },
  },
  '05': {
    en: { type: 'Client portfolio website', description: 'A responsive portfolio for a graphic designer and art director.', story: 'The site gives a large body of visual work a clear, browsable structure.' },
    id: { type: 'Website portfolio client', description: 'Portfolio responsif untuk graphic designer dan art director.', story: 'Website ini memberi struktur yang jelas dan mudah ditelusuri untuk kumpulan karya visual yang besar.' },
  },
  '06': {
    en: { type: 'International symposium website', description: 'A historical event website covering event information, registration, schedule, and speakers.', story: 'Archived historical work, kept here as part of the record.' },
    id: { type: 'Website simposium internasional', description: 'Website acara historis yang memuat informasi, registrasi, jadwal, dan pembicara.', story: 'Karya historis yang diarsipkan sebagai bagian dari catatan perjalanan.' },
  },
  '07': {
    en: { type: 'AI-powered web project', description: 'An archived experiment whose original API integration is no longer available.', story: 'Deprecated after the original API integration became unavailable.' },
    id: { type: 'Proyek web berbasis AI', description: 'Eksperimen yang diarsipkan karena integrasi API aslinya sudah tidak tersedia.', story: 'Deprecated setelah integrasi API aslinya tidak lagi tersedia.' },
  },
} as const

const copy = {
  en: {
    nav: ['Work', 'Writing', 'Experience', 'About'], heroKicker: 'Web developer / builder', heroTitle: 'I build digital things with a critical, analytical approach shaped by philosophy.', heroIntro: "I'm Itba Muhammad Kamil, a developer and writer interested in the relationship between ideas, systems, and the things we make.", viewWork: 'View work', readWriting: 'Read writing', selectedWork: 'Selected work', workNote: 'Products, applications, websites, and experiments.', seeAll: 'See all projects', approach: 'Approach', approachNote: 'How I approach problems.', approachTitle: 'Building software is rarely just a matter of writing code.', approachIntro: 'I try to understand the problem, examine how its parts relate, and use implementation to test the ideas behind it.', principles: ['Question the assumption', 'Understand the system', 'Build, test, rethink'], writing: 'Writing', writingNote: 'Ideas that sit between philosophy and everyday life.', readAll: 'Read all writing', experience: 'Experience', experienceNote: 'Work across software, research, media, and organizations.', beyond: 'Beyond the screen', beyondTitle: 'Build, think, write.', beyondCopy: 'My work has also involved digital media, content production, event websites, research, and organizational coordination.', moreAbout: 'More about me', liveUnavailable: 'Live unavailable', historicalSite: 'Historical site', contact: 'Have a problem worth building around?', letsTalk: "Let's talk", available: 'Available for selected work', scroll: 'Scroll to explore', based: 'Based in Indonesia', github: 'GitHub', status: 'Active', archived: 'Archived', deprecated: 'Deprecated', back: 'Back to top', footerCopy: 'Web developer / builder\nwith a philosophy-shaped approach.',
  },
  id: {
    nav: ['Karya', 'Tulisan', 'Pengalaman', 'Tentang'], heroKicker: 'Web developer / builder', heroTitle: 'Membangun hal-hal digital melalui pendekatan kritis yang dibentuk secara filosofis', heroIntro: 'Saya Itba Muhammad Kamil, developer dan penulis yang tertarik pada hubungan antara gagasan, sistem, dan hal-hal yang kita buat.', viewWork: 'Lihat karya', readWriting: 'Baca tulisan', selectedWork: 'Karya terpilih', workNote: 'Produk digital, aplikasi, website, dan eksperimen.', seeAll: 'Lihat semua karya', approach: 'Pendekatan', approachNote: 'Cara saya memahami masalah.', approachTitle: 'Membangun software jarang hanya soal menulis kode.', approachIntro: 'Saya mencoba memahami masalahnya, melihat hubungan antarbagian, lalu menggunakan implementasi untuk menguji gagasan di baliknya.', principles: ['Mempertanyakan asumsi', 'Memahami sistem', 'Membangun, menguji, memikirkan ulang'], writing: 'Tulisan', writingNote: 'Gagasan di antara filsafat dan kehidupan sehari-hari.', readAll: 'Baca semua tulisan', experience: 'Pengalaman', experienceNote: 'Bekerja di antara software, riset, media, dan organisasi.', beyond: 'Di luar layar', beyondTitle: 'Bangun, pikirkan, tulis.', beyondCopy: 'Pekerjaan saya juga mencakup media digital, produksi konten, website acara, riset, dan koordinasi organisasi.', moreAbout: 'Tentang saya', liveUnavailable: 'Live belum tersedia', historicalSite: 'Situs historis', contact: 'Punya masalah yang layak dibangun?', letsTalk: 'Mari bicara', available: 'Terbuka untuk pekerjaan terpilih', scroll: 'Gulir untuk melihat', based: 'Berbasis di Indonesia', github: 'GitHub', status: 'Aktif', archived: 'Arsip', deprecated: 'Deprecated', back: 'Kembali ke atas', footerCopy: 'Web developer / builder\ndengan pendekatan yang dibentuk filsafat.',
  },
} as const

export function PortfolioHome() {
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<Theme>('light')
  const [aboutOpen, setAboutOpen] = useState(false)
  const ui = copy[language]

  useEffect(() => {
    const hour = new Date().getHours()
    setTheme(hour < 7 ? 'deep' : hour < 11 ? 'cold' : hour < 17 ? 'light' : 'warm')
  }, [])

  return (
    <div className={`site-shell theme-${theme}`}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Itba home">ITBA<span>.</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">{ui.nav[0]}</a><a href="#writing">{ui.nav[1]}</a><a href="#experience">{ui.nav[2]}</a><a href="#about">{ui.nav[3]}</a>
        </nav>
        <div className="header-links"><div className="social-links">{socialLinks.slice(0, 2).map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={label}>{label}</a>)}</div><div className="language-switch" aria-label="Language"><button className={language === 'id' ? 'language-active' : ''} onClick={() => setLanguage('id')} type="button">ID</button><span>|</span><button className={language === 'en' ? 'language-active' : ''} onClick={() => setLanguage('en')} type="button">EN</button></div></div>
        <button className="menu-button" type="button" aria-label="Open menu">Menu <span>↗</span></button>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-grid"><h1 className="hero-title-typewriter" aria-label={ui.heroTitle}><TypewriterText text={ui.heroTitle} /></h1><div className="hero-aside"><p>{ui.heroIntro}</p><div className="hero-actions"><a className="button button-dark" href="#work">{ui.viewWork} <span>↘</span></a><a className="text-link" href="#writing">{ui.readWriting} <span>↗</span></a></div></div></div>
          <div className="hero-meta" aria-hidden="true" />
        </section>

        <section className="work-section section-frame" id="work">
          <div className="section-heading"><h2 className="section-title">{ui.selectedWork}</h2><p className="section-note">{ui.workNote}</p></div>
          <div className="project-list">{projects.map((project) => { const localized = projectCopy[project.number][language]; return <article className={`project ${project.featured ? 'project-featured' : ''} ${project.status ? 'project-archived' : ''} ${project.liveUrl ? 'project-clickable' : ''}`} key={project.number} role={project.liveUrl ? 'link' : undefined} tabIndex={project.liveUrl ? 0 : undefined} onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank', 'noopener,noreferrer')} onKeyDown={(event) => { if (project.liveUrl && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); window.open(project.liveUrl, '_blank', 'noopener,noreferrer') } }}><div className="project-visual"><span>{project.number}</span><div className="visual-label">{project.name}</div><div className="visual-grid" /></div><div className="project-copy"><div className="project-title"><span className="project-number">{project.number}</span><h2>{project.name}</h2></div><p className="project-type">{localized.type} {project.status && <b className="project-status">{project.status === 'Active' ? ui.status : project.status === 'Archived' ? ui.archived : ui.deprecated}</b>}</p><p className="project-description">{localized.description}</p><p className="project-case-study">{localized.story}</p><p className="project-stack">{project.stack}</p><div className="project-actions" onClick={(event) => event.stopPropagation()}><a className="project-button" href={project.githubUrl} target="_blank" rel="noreferrer">{ui.github} <span>↗</span></a>{project.liveUrl ? <a className="project-button" href={project.liveUrl} target="_blank" rel="noreferrer">{project.status ? ui.historicalSite : 'Live site'} <span>↗</span></a> : <span className="project-button project-button-disabled">{ui.liveUnavailable}</span>}</div></div></article> })}</div>
          <a className="section-link" href="https://github.com/dahanlapuk" target="_blank" rel="noreferrer">{ui.seeAll} <span>↗</span></a>
        </section>

        <section className="approach-section section-frame" id="about">
          <div className="section-heading"><h2 className="section-title">{ui.approach}</h2><p className="section-note">{ui.approachNote}</p></div>
          <div className="approach-grid"><h2>{ui.approachTitle}</h2><p>{ui.approachIntro}</p></div>
          <div className="principles"><div><h3>{ui.principles[0]}</h3><p>{language === 'id' ? 'Sebelum membangun sesuatu, saya mencoba memahami masalah yang sebenarnya perlu diselesaikan.' : 'Before building something, I try to understand what problem actually needs solving.'}</p></div><div><h3>{ui.principles[1]}</h3><p>{language === 'id' ? 'Kebutuhan, pengguna, data, dan implementasi saling terhubung.' : 'Requirements, users, data, and implementation are connected.'}</p></div><div><h3>{ui.principles[2]}</h3><p>{language === 'id' ? 'Implementasi sering memperlihatkan masalah yang tidak terlihat dalam gagasan awal.' : 'Implementation reveals problems that are often invisible in the initial idea.'}</p></div></div>
        </section>

        <section className="writing-section section-frame" id="writing">
          <div className="section-heading"><h2 className="section-title">{ui.writing}</h2><p className="section-note">{ui.writingNote}</p></div>
          <div className="writing-list">{writing.map((article) => <a className="writing-item" href={article.url} target="_blank" rel="noreferrer" key={article.title}><img src={`/img/medium/medium-new-thumbnail/${article.image}-${theme}.svg`} alt="" /><div className="writing-copy"><h2>{article.title}</h2><p>{article.category}</p></div><div className="writing-overlay"><div className="writing-overlay-title">{article.title}</div><span className="writing-cta">Read more on Medium <b>↗</b></span></div></a>)}</div>
          <a className="section-link" href="https://medium.com/@itbamuhammad" target="_blank" rel="noreferrer">{ui.readAll} <span>↗</span></a>
        </section>

        <section className="experience-section section-frame" id="experience">
          <div className="section-heading"><h2 className="section-title">{ui.experience}</h2><p className="section-note">{ui.experienceNote}</p></div>
          <div className="experience-list">{experience.map((item) => <div key={item.organization}><span>{item.period}</span><h2>{item.organization}</h2><p>{item.role}</p></div>)}</div>
        </section>

        <section className={`about-band section-frame ${aboutOpen ? 'about-open' : ''}`}><div><h2>{ui.beyondTitle}</h2></div><div className="about-detail"><p>{ui.beyondCopy}</p></div><div className="about-trigger" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}><button className="button button-light about-button" type="button" onClick={() => setAboutOpen(true)} aria-expanded={aboutOpen}>{aboutOpen ? 'Close' : ui.moreAbout} <span className={aboutOpen ? 'button-arrow is-rotated' : 'button-arrow'}>↗</span></button><div className="about-social-panel" aria-hidden={!aboutOpen}>{aboutSocialLinks.map(([label, href], index) => <a className="about-social-link" style={{ '--social-index': index } as React.CSSProperties} href={href} target="_blank" rel="noreferrer" key={label}><strong>{label}</strong><span className="social-card-arrow">↗</span></a>)}</div></div></section>

      </main>

      <footer className="site-footer section-frame"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#top">HEX ADEV<span>.</span></a><p>Digital products, systems,<br />and thoughtful interfaces.</p></div><div className="footer-cta"><p>{ui.contact}</p><button className="footer-talk" type="button">Let&apos;s talk <span>↗</span></button><div className="footer-contacts"><a href="mailto:itbamuhammadkamil@gmail.com">Email <span>↗</span></a><a href="https://www.instagram.com/itbamuhammad_" target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a href="https://www.linkedin.com/in/itbamuhammad/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div></div><div className="footer-bottom"><span>© 2026 Hexadev Technologies</span></div></footer>
    </div>
  )
}
