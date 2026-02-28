import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDownRight } from 'react-icons/fi'

const ROLES = ['Frontend Developer', 'React Specialist', 'UI Architect', 'Accessibility Advocate']

function TypewriterText({ words }) {
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[idx]
    let timeout

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else {
      setDeleting(false)
      setIdx((idx + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, idx, words])

  return (
    <span className="text-accent">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Large BG text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="font-display font-800 text-[18vw] leading-none text-[var(--text)] opacity-[0.025] whitespace-nowrap"
        >
          REACT
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <motion.div variants={item} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded-full">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6"
            >
              Sanket
              <br />
              Shelke
            </motion.h1>

            <motion.div
              variants={item}
              className="font-display text-2xl sm:text-3xl font-600 mb-6 h-10"
            >
              <TypewriterText words={ROLES} />
            </motion.div>

            <motion.p
              variants={item}
              className="text-[var(--text-muted)] text-lg leading-relaxed max-w-lg mb-10"
            >
              6+ years crafting high-performance enterprise UIs with React and TypeScript.
              Passionate about micro-frontend architecture, accessibility, and developer experience.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-black font-display font-700 rounded-full hover:bg-accent-dark transition-all duration-200"
              >
                View Work
                <FiArrowDownRight className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[var(--border)] text-[var(--text)] font-display font-600 rounded-full hover:border-accent/60 transition-all duration-200"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/shelkesanket"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/50 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={17} />
              </a>
              <a
                href="https://linkedin.com/in/shelkesanket"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/50 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={17} />
              </a>
              <span className="text-sm text-[var(--text-muted)] font-mono">Pune, India</span>
            </motion.div>
          </div>

          {/* Right — Stats card */}
          <motion.div
            variants={item}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 border border-accent/10 rounded-3xl" />
              <div className="absolute -inset-8 border border-accent/5 rounded-3xl" />

              <div className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8">
                <div className="font-mono text-xs text-[var(--text-muted)] mb-6">profile.json</div>

                <div className="space-y-5">
                  {[
                    { label: 'experience', value: '6+ years' },
                    { label: 'specialty', value: 'React / TypeScript' },
                    { label: 'architecture', value: 'Micro Frontends' },
                    { label: 'focus', value: 'Performance & A11y' },
                    { label: 'location', value: 'Pune, India 🇮🇳' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="font-mono text-sm text-accent">"{label}":</span>
                      <span className="font-mono text-sm text-[var(--text)] ml-2">"{value}"</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] grid grid-cols-3 gap-4 text-center">
                  {[
                    { num: '6+', label: 'Years' },
                    { num: '85%', label: 'Test Coverage' },
                    { num: '30%', label: 'Dev Efficiency ↑' },
                  ].map(({ num, label }) => (
                    <div key={label}>
                      <div className="font-display font-700 text-2xl text-[var(--text)]">{num}</div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[var(--text-muted)]">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-0.5 h-10 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
