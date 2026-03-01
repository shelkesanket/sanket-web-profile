import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { projects } from '../../data/content'
import { FiArrowUpRight, FiCode } from 'react-icons/fi'

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden cursor-default flex flex-col"
    >
      {/* Color bar */}
      <motion.div
        animate={{ height: hovered ? 4 : 2 }}
        transition={{ duration: 0.3 }}
        className="w-full flex-shrink-0"
        style={{ background: project.color }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full border"
            style={{ color: project.color, borderColor: project.color + '40', background: project.color + '15' }}
          >
            {project.category}
          </span>
          <motion.div
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-[var(--text-muted)]"
          >
            <FiCode size={16} />
          </motion.div>
        </div>

        <h3 className="font-display font-700 text-xl mb-3 group-hover:text-[var(--text)] transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 bg-[var(--bg)] border border-[var(--border)] rounded text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay accent */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none rounded-2xl border-2"
            style={{ borderColor: project.color + '40' }}
          />
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/shelkesanket/repos?per_page=6')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-xs text-accent mb-3"
        >
          04 / projects
        </motion.p>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-800 text-4xl sm:text-5xl tracking-tight"
          >
            Selected <span className="text-accent">work.</span>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            href="https://github.com/shelkesanket?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-accent transition-colors font-mono"
          >
            View GitHub <FiArrowUpRight size={14} />
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub repos fetched live */}
        {repos.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display font-600 text-2xl mb-4">GitHub Repositories</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {repos.slice(0, 4).map(repo => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-accent transition"
                >
                  <h4 className="font-display font-700 text-lg group-hover:text-[var(--text)]">
                    {repo.name}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mt-2">
                    {repo.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
