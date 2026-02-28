import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const values = [
  { icon: '⚡', label: 'Performance', desc: 'Obsessed with load times, bundle sizes, and smooth 60fps UIs' },
  { icon: '♿', label: 'Accessibility', desc: 'WCAG 2.1 compliant interfaces for everyone, without exception' },
  { icon: '🧩', label: 'Architecture', desc: 'Scalable, maintainable systems that teams love to work with' },
  { icon: '🧪', label: 'Quality', desc: '85%+ test coverage and 90%+ mutation testing scores' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left */}
          <div>
            <motion.p variants={fadeUp} className="font-mono text-xs text-accent mb-3">
              01 / about
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-800 text-4xl sm:text-5xl leading-tight tracking-tight mb-6"
            >
              Building the
              <br />
              <span className="text-accent">web that scales.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[var(--text-muted)] text-lg leading-relaxed mb-6"
            >
              I'm a Frontend Developer with 6+ years of experience delivering enterprise-grade React applications.
              I specialize in micro-frontend architecture, TypeScript systems, and performance-first UI development.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-[var(--text-muted)] leading-relaxed"
            >
              Currently at Barclays, I've helped teams migrate massive monolithic codebases to scalable
              micro-frontend platforms, built shared component libraries, and brought test coverage to production-grade
              standards. I care deeply about the developer experience and believe that clean architecture enables
              teams to move fast without breaking things.
            </motion.p>
          </div>

          {/* Right — Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon, label, desc }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: 'rgba(232, 255, 71, 0.4)' }}
                transition={{ duration: 0.25 }}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 cursor-default"
              >
                <span className="text-2xl mb-3 block">{icon}</span>
                <h3 className="font-display font-700 text-base mb-1.5">{label}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
