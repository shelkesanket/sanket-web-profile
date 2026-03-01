import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDownRight } from 'react-icons/fi'
import { skills } from '../../data/content'
import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt
} from 'react-icons/fa'
import {
  SiTypescript, SiJavascript, SiRedux, SiJest, SiJenkins, SiVite
} from 'react-icons/si'

const iconMap = {
  React: <FaReact />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  'Redux / RTK': <SiRedux />,
  'Node.js': <FaNodeJs />,
  'Git / GitLab': <FaGitAlt />,
  'HTML / CSS': <FaHtml5 />,
  'Testing Library': <SiJest />,
  'Jenkins / CI-CD': <SiJenkins />,
}

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
  const tools = [
    'Single-SPA', 'Stryker', 'PWA', 'Service Worker', 'Storybook',
    'SonarQube', 'Veracode', 'Grafana', 'Insomnia', 'Figma', 'Vite', 'GitLab CI',
  ]

  const masterItems = [...skills.map(s => s.name), ...tools]
  const [circleItems, setCircleItems] = useState([])

  useEffect(() => {
    function pickInitial() {
      const pool = [...masterItems]
      const count = 7 + Math.floor(Math.random() * 3) // 7-9
      const selected = []
      for (let i = 0; i < count && pool.length; i++) {
        const idx = Math.floor(Math.random() * pool.length)
        selected.push(pool.splice(idx, 1)[0])
      }
      setCircleItems(selected)
    }

    pickInitial()
    const id = setInterval(() => {
      setCircleItems(prev => {
        let nxt = [...prev]
        // decide add or remove
        const doAdd = nxt.length < 9 && Math.random() < 0.6
        if (doAdd) {
          const available = masterItems.filter(i => !nxt.includes(i))
          if (available.length > 0) {
            const choice = available[Math.floor(Math.random() * available.length)]
            nxt.push(choice)
          }
        } else {
          if (nxt.length > 7) {
            nxt.splice(Math.floor(Math.random() * nxt.length), 1)
          }
        }
        // shuffle order
        nxt.sort(() => Math.random() - 0.5)
        return nxt
      })
    }, 3000)

    return () => clearInterval(id)
  }, [masterItems])

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

          {/* Right — Rotating skills circle */}
          <motion.div
            variants={item}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto spin-slow">
                {circleItems.map((name, idx) => {
                  const angle = (360 / circleItems.length) * idx
                  return (
                    <div
                      key={name + idx}
                      className="absolute top-1/2 left-1/2 flex flex-col items-center text-accent"
                      style={{
                        transform: `rotate(${angle}deg) translate(8rem) rotate(-${angle}deg)`,
                      }}
                    >
                      <span className="text-2xl">{iconMap[name] || name.charAt(0)}</span>
                      <span className="text-xs mt-1 font-mono whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                  )
                })}
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
