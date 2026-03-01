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

function SkillItem({ name, category }) {
  return (
    <div
      className="group flex flex-col items-center justify-center p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-accent/50 hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
    >
      <span
        className="text-3xl mb-2"
        style={{ color: categoryColor[category] }}
      >
        {iconMap[name] || '◈'}
      </span>
      <span className="font-display text-sm text-center">{name}</span>
    </div>
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

        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map(skill => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </div>

        {/* Tech tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-10 border-t border-[var(--border)]"
        >
          <p className="text-sm text-[var(--text-muted)] font-mono mb-5">// tools & ecosystem</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              'Single-SPA', 'Stryker', 'PWA', 'Service Worker', 'Storybook',
              'SonarQube', 'Veracode', 'Grafana', 'Insomnia', 'Figma', 'Vite', 'GitLab CI',
            ].map(tool => (
              <div
                key={tool}
                className="group flex flex-col items-center justify-center p-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:border-accent/50 hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
              >
                <span className="text-lg font-mono">{tool.charAt(0)}</span>
                <span className="text-xs mt-1 text-center">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>      </div>
    </section>
  )
}
