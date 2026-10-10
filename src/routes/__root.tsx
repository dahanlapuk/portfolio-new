import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { Analytics } from '@vercel/analytics/react'
import appCss from '../styles.css?url'

const SITE_URL = 'https://www.itbamuhammad.me/'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Itba Muhammad Kamil',
  url: SITE_URL,
  jobTitle: 'Web Developer',
  sameAs: [
    'https://github.com/dahanlapuk',
    'https://www.linkedin.com/in/itbamuhammad/',
    'https://medium.com/@itbamuhammad',
    'https://www.instagram.com/itbamuhammad_',
    'https://twitter.com/dahanlapuk',
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Itba Muhammad Kamil — Web Developer & Writer' },
      {
        name: 'description',
        content:
          'Itba Muhammad Kamil is a web developer and writer building websites and web apps with a critical, analytical approach shaped by philosophy.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Itba Muhammad Kamil' },
      { property: 'og:title', content: 'Itba Muhammad Kamil — Web Developer & Writer' },
      {
        property: 'og:description',
        content:
          'Web developer and writer building digital things with a critical, analytical approach shaped by philosophy.',
      },
      { property: 'og:url', content: SITE_URL },
      { name: 'twitter:card', content: 'summary' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      { rel: 'canonical', href: SITE_URL },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(personJsonLd),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
      </body>
    </html>
  )
}
