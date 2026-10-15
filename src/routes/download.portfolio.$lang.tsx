import { createFileRoute } from '@tanstack/react-router'

import { portfolioFiles } from '#/data/site'

export const Route = createFileRoute('/download/portfolio/$lang')({
  server: {
    handlers: {
      GET: ({ params }) => {
        const lang = params.lang
        if (lang !== 'id' && lang !== 'en') return new Response('Not found', { status: 404 })
        return new Response(null, {
          status: 302,
          headers: { Location: portfolioFiles[lang].href, 'Cache-Control': 'no-store' },
        })
      },
    },
  },
})
