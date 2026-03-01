import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi'

export default function Contact() {
  const [ref, inView] = useInView()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('shelkesanket.b@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-800 text-4xl sm:text-5xl tracking-tight mb-4"
        >
          Let's build <span className="text-accent">together.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[var(--text-muted)] text-lg mb-14 max-w-lg"
        >
          Open to new opportunities, collaborations, or just a technical
          conversation about frontend architecture.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Big CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 flex flex-col gap-6"
          >
            <div>
              <p className="font-mono text-xs text-[var(--text-muted)] mb-2">
                email
              </p>
              <p className="font-display font-700 text-xl break-all">
                shelkesanket.b@gmail.com
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:shelkesanket.b@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-black font-display font-700 rounded-full hover:bg-accent-dark transition-colors"
              >
                <FiMail size={16} />
                Send Email
              </a>
              <button
                onClick={copyEmail}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-[var(--border)] text-[var(--text)] font-display font-600 rounded-full hover:border-accent/50 transition-colors"
              >
                {copied ? "✓ Copied!" : "Copy Email"}
              </button>
            </div>

            <div className="pt-4 border-t border-[var(--border)]">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <FiMapPin size={13} />
                Pune, Maharashtra, India
              </div>
            </div>
          </motion.div>

          {/* Right — Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: <FiGithub size={20} />,
                label: "GitHub",
                handle: "@shelkesanket",
                href: "https://github.com/shelkesanket",
                desc: "Code, projects, contributions",
              },
              {
                icon: <FiLinkedin size={20} />,
                label: "LinkedIn",
                handle: "in/shelkesanket",
                href: "https://linkedin.com/in/shelkesanket",
                desc: "Professional profile & experience",
              },
            ].map(({ icon, label, handle, href, desc }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 hover:border-accent/40 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg)] border border-[var(--border)] group-hover:border-accent/40 text-[var(--text-muted)] group-hover:text-accent transition-all">
                    {icon}
                  </div>
                  <div>
                    <p className="font-display font-600 text-sm">{label}</p>
                    <p className="text-xs text-[var(--text-muted)]">{desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <span className="font-mono text-xs hidden sm:block">
                    {handle}
                  </span>
                  <FiArrowUpRight
                    size={14}
                    className="group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </a>
            ))}

            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-display font-600">
                  Currently Available
                </span>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Open to senior frontend roles, consulting engagements, and
                exciting architectural challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
