import { useEffect, useRef } from 'react'

import { projects, type ProjectSlug } from '#/data/portfolio'
import { caseStudies } from '#/data/case-studies'
import { copy, projectCopy, type Language } from '#/data/site'

type ProjectPanelProps = {
  slug?: ProjectSlug
  language: Language
  onClose: () => void
}

export function ProjectPanel({ slug, language, onClose }: ProjectPanelProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const project = projects.find((item) => item.slug === slug)
  const ui = copy[language]
  const localized = project ? projectCopy[project.slug][language] : undefined
  const sections = project ? caseStudies[project.slug]?.[language] : undefined

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  const close = () => dialogRef.current?.close()

  return (
    <dialog
      ref={dialogRef}
      className="project-panel"
      aria-labelledby="project-panel-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      {project && localized && (
        <div className="project-panel-body">
          <button className="project-panel-close" type="button" onClick={close}>{ui.close} <span>×</span></button>
          <span className="project-number">{project.number}</span>
          <h2 id="project-panel-title">{project.name}</h2>
          <p className="project-type">{localized.type} {project.status && <b className="project-status">{project.status === 'Active' ? ui.status : project.status === 'Archived' ? ui.archived : ui.deprecated}</b>}</p>
          <p className="project-description">{localized.description}</p>
          {sections ? sections.map((section) => <section className="project-panel-section" key={section.heading}><h3>{section.heading}</h3><p>{section.body}</p></section>) : <p className="project-case-study">{localized.story}</p>}
          <p className="project-stack">{project.stack}</p>
          <div className="project-actions">
            <a className="project-button" href={project.githubUrl} target="_blank" rel="noreferrer">{ui.github} <span>↗</span></a>
            {project.liveUrl ? <a className="project-button" href={project.liveUrl} target="_blank" rel="noreferrer">{project.status ? ui.historicalSite : 'Live site'} <span>↗</span></a> : <span className="project-button project-button-disabled">{ui.liveUnavailable}</span>}
          </div>
        </div>
      )}
    </dialog>
  )
}
