import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { experiences } from '../../data/content'
import { FiMapPin, FiCalendar, FiChevronDown } from 'react-icons/fi'

function ExperienceCard({ exp, index, inView }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[29px] top-7 w-3 h-3 rounded-full border-2 border-accent bg-[var(--bg)] z-10" />

      <div
        className={`bg-[var(--bg-card)] border rounded-xl overflow-hidden transition-colors duration-200 ${
          open ? 'border-accent/30' : 'border-[var(--border)] hover:border-accent/20'
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-start justify-between p-6 text-left"
          aria-expanded={open}
        >
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-display font-700 text-lg">{exp.role}</h3>
              {index === 0 && (
                <span className="text-xs font-mono px-2 py-0.5 bg-accent/15 text-accent rounded-full border border-accent/30">
                  Current
                </span>
              )}
            </div>
            <p className="font-display font-600 text-accent text-base">{exp.company}</p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <FiCalendar size={12} />
                {exp.period}
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin size={12} />
                {exp.location}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-[var(--text-muted)] mt-1 flex-shrink-0 ml-4"
          >
            <FiChevronDown size={18} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 pb-6 border-t border-[var(--border)]">
                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-sm text-[var(--text-muted)] leading-relaxed"
                    >
                      <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-xs text-accent mb-3"
        >
          03 / experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-800 text-4xl sm:text-5xl tracking-tight mb-14"
        >
          Where I've <span className="text-accent">worked.</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"
          />

          <div className="pl-10 space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
