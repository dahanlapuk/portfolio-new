import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { resolveShortLink } from '#/data/shortlinks'
import type { Language, Theme } from '#/data/site'

const SECONDS = 5

const text = {
  en: {
    kicker: 'Redirecting',
    lead: "You're being sent to",
    note: (n: number) => `Taking you there in ${n} second${n === 1 ? '' : 's'}.`,
    paused: 'Redirect paused.',
    go: 'Go now',
    portfolio: 'View portfolio',
    cancel: 'Cancel redirect',
    resume: 'Resume redirect',
    notFoundTitle: 'Link not found',
    notFoundNote: "This short link doesn't exist.",
  },
  id: {
    kicker: 'Pengalihan',
    lead: 'Anda akan diarahkan ke',
    note: (n: number) => `Anda akan dibawa ke sana dalam ${n} detik.`,
    paused: 'Pengalihan dijeda.',
    go: 'Langsung ke sana',
    portfolio: 'Lihat portfolio',
    cancel: 'Batalkan pengalihan',
    resume: 'Lanjutkan pengalihan',
    notFoundTitle: 'Link tidak ditemukan',
    notFoundNote: 'Short link ini tidak tersedia.',
  },
} as const

function useSiteTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const hour = new Date().getHours()
    setTheme(hour < 7 ? 'deep' : hour < 11 ? 'cold' : hour < 17 ? 'light' : 'warm')
    setLanguage(navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en')
  }, [])

  return { theme, language }
}

export const Route = createFileRoute('/$slug')({
  loader: ({ params }) => {
    const link = resolveShortLink(params.slug)
    if (!link) throw notFound()
    return { link }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.link.label ?? 'Link'} — Itba Muhammad Kamil` },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: RedirectPage,
  notFoundComponent: LinkNotFound,
})

function RedirectPage() {
  const { link } = Route.useLoaderData()
  const { theme, language } = useSiteTheme()
  const ui = text[language]
  const [left, setLeft] = useState<number>(SECONDS)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (left <= 0) {
      window.location.assign(link.url)
      return
    }
    const timer = setTimeout(() => setLeft((value) => value - 1), 1000)
    return () => clearTimeout(timer)
  }, [left, paused, link.url])

  const progress = ((SECONDS - left) / SECONDS) * 100

  return (
    <div className={`site-shell redirect-page theme-${theme}`}>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Itba home">
          ITBA<span>.</span>
        </Link>
      </header>
      <main className="redirect-main">
        <div className="redirect-card">
          <p className="eyebrow">
            <span className="status-dot" />
            {ui.kicker}
          </p>
          <h1 className="redirect-title">
            {ui.lead} <span className="redirect-target">{link.label}</span>
          </h1>
          <div className="redirect-count" aria-live="polite">
            <span className="redirect-number">{paused ? '||' : left}</span>
            <span className="redirect-note">{paused ? ui.paused : ui.note(left)}</span>
          </div>
          <div className="redirect-bar">
            <div className="redirect-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="redirect-url">{link.url}</p>
          <div className="redirect-actions">
            <a className="button button-dark" href={link.url}>
              {ui.go} <span>↗</span>
            </a>
            <Link className="button button-light" to="/">
              {ui.portfolio} <span>→</span>
            </Link>
          </div>
          <button className="redirect-cancel" type="button" onClick={() => setPaused((value) => !value)}>
            {paused ? ui.resume : ui.cancel}
          </button>
        </div>
      </main>
    </div>
  )
}

function LinkNotFound() {
  const { theme, language } = useSiteTheme()
  const ui = text[language]

  return (
    <div className={`site-shell redirect-page theme-${theme}`}>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Itba home">
          ITBA<span>.</span>
        </Link>
      </header>
      <main className="redirect-main">
        <div className="redirect-card">
          <p className="eyebrow">404</p>
          <h1 className="redirect-title">{ui.notFoundTitle}</h1>
          <p className="redirect-url">{ui.notFoundNote}</p>
          <div className="redirect-actions">
            <Link className="button button-dark" to="/">
              {ui.portfolio} <span>→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
