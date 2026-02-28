import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
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

const categoryLabel = {
  core: 'Core',
  state: 'State Mgmt',
  forms: 'Forms',
  arch: 'Architecture',
  quality: 'Quality',
  devops: 'DevOps',
  backend: 'Backend',
}

const categoryColor = {
  core: '#E8FF47',
  state: '#A8EDFF',
  forms: '#FFB7A8',
  arch: '#C8FFD4',
  quality: '#E8BAFF',
  devops: '#FFE4A8',
  backend: '#A8C8FF',
}

function SkillBar({ name, level, category, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span
            className="text-lg"
            style={{ color: categoryColor[category] }}
          >
            {iconMap[name] || '◈'}
          </span>
          <span className="font-display font-600 text-sm">{name}</span>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: categoryColor[category] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-mono text-xs text-accent mb-3"
        >
          02 / skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-800 text-4xl sm:text-5xl tracking-tight mb-14"
        >
          What I work <span className="text-accent">with.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              {...skill}
              inView={inView}
              delay={i * 0.06}
            />
          ))}
        </div>

        {/* Tech pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-10 border-t border-[var(--border)]"
        >
          <p className="text-sm text-[var(--text-muted)] font-mono mb-5">// tools & ecosystem</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Single-SPA', 'Stryker', 'PWA', 'Service Worker', 'Storybook',
              'SonarQube', 'Veracode', 'Grafana', 'Insomnia', 'Figma', 'Vite', 'GitLab CI',
            ].map(tool => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-mono bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--text-muted)] hover:border-accent/40 hover:text-[var(--text)] transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
