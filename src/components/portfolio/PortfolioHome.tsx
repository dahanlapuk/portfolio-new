import { useEffect, useState } from 'react'

import { ProjectPanel } from '#/components/portfolio/ProjectPanel'
import { experience, projects, writing, type ProjectSlug } from '#/data/portfolio'
import { aboutSocialLinks, copy, projectCopy, socialLinks, type Language, type Theme } from '#/data/site'


const keywordSplit = /(digital|filosof\w*|philosoph\w*)/gi
const keywordMatch = /^(digital|filosof\w*|philosoph\w*)$/i

function highlight(value: string) {
  return value.split(keywordSplit).map((part, index) =>
    keywordMatch.test(part) ? <mark className="typewriter-keyword" key={`${part}-${index}`}>{part}</mark> : part,
  )
}

function TypewriterText({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

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
      <span className="typewriter-measure" aria-hidden="true">{highlight(text)}</span>
      <span className="typewriter-live" aria-hidden="true">{highlight(visibleText)}{isTyping && <span className="typewriter-cursor cursor-blink" />}</span>
    </>
  )
}

type PortfolioHomeProps = {
  activeProject?: ProjectSlug
  onSelectProject: (slug?: ProjectSlug) => void
}

export function PortfolioHome({ activeProject, onSelectProject }: PortfolioHomeProps) {
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<Theme>('light')
  const [aboutOpen, setAboutOpen] = useState(false)
  const [talkOpen, setTalkOpen] = useState(false)
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
          <div className="project-list">{projects.map((project) => { const localized = projectCopy[project.slug][language]; return <article className={`project ${project.featured ? 'project-featured' : ''} ${project.status ? 'project-archived' : ''} project-clickable`} key={project.number} onClick={() => onSelectProject(project.slug)}><div className="project-visual"><span>{project.number}</span><div className="visual-label">{project.name}</div><div className="visual-grid" /></div><div className="project-copy"><div className="project-title"><span className="project-number">{project.number}</span><h2>{project.name}</h2></div><p className="project-type">{localized.type} {project.status && <b className="project-status">{project.status === 'Active' ? ui.status : project.status === 'Archived' ? ui.archived : ui.deprecated}</b>}</p><p className="project-description">{localized.description}</p><p className="project-case-study">{localized.story}</p><p className="project-stack">{project.stack}</p><div className="project-actions" onClick={(event) => event.stopPropagation()}><button className="project-button" type="button" onClick={() => onSelectProject(project.slug)}>{ui.details}</button><a className="project-button" href={project.githubUrl} target="_blank" rel="noreferrer">{ui.github} <span>↗</span></a>{project.liveUrl ? <a className="project-button" href={project.liveUrl} target="_blank" rel="noreferrer">{project.status ? ui.historicalSite : 'Live site'} <span>↗</span></a> : <span className="project-button project-button-disabled">{ui.liveUnavailable}</span>}</div></div></article> })}</div>
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

      <footer className="site-footer section-frame"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#top">ITBA<span>.</span></a><p>{ui.footerCopy.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</p></div><div className="footer-cta"><p>{ui.contact}</p><div className="footer-talk-wrap"><button className="footer-talk" type="button" aria-expanded={talkOpen} onClick={() => setTalkOpen((open) => !open)}>{ui.letsTalk} <span>↗</span></button>{talkOpen && <div className="talk-options"><a href="https://ig.me/m/itbamuhammad_" target="_blank" rel="noreferrer">Instagram <span>↗</span></a><a href="https://www.linkedin.com/in/itbamuhammad/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="mailto:itbamuhammadkamil@gmail.com">Email <span>↗</span></a></div>}</div></div></div><div className="footer-bottom"><span>© 2026 Itba Muhammad Kamil</span></div></footer>

      <ProjectPanel slug={activeProject} language={language} onClose={() => onSelectProject(undefined)} />
    </div>
  )
}
