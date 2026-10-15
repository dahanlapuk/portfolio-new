import { createFileRoute } from '@tanstack/react-router'

import { portfolioFiles } from '#/data/site'

export const Route = createFileRoute('/download/portfolio/')({
  server: {
    handlers: {
      GET: ({ request }) => {
        const accept = (request.headers.get('accept-language') ?? '').toLowerCase()
        const lang = accept.startsWith('id') ? 'id' : 'en'
        return new Response(null, {
          status: 302,
          headers: { Location: portfolioFiles[lang].href, 'Cache-Control': 'no-store', Vary: 'Accept-Language' },
        })
      },
    },
  },
})
