import { createFileRoute } from '@tanstack/react-router'

import { PortfolioHome } from '#/components/portfolio/PortfolioHome'
import { projects, type ProjectSlug } from '#/data/portfolio'

type HomeSearch = { project?: ProjectSlug }

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): HomeSearch => {
    const project = projects.find((item) => item.slug === search.project)
    return project ? { project: project.slug } : {}
  },
  component: Home,
})

function Home() {
  const { project } = Route.useSearch()
  const navigate = Route.useNavigate()

  const selectProject = (slug?: ProjectSlug) => {
    if (slug === project) return
    navigate({ search: { project: slug }, resetScroll: false })
  }

  return <PortfolioHome activeProject={project} onSelectProject={selectProject} />
}
