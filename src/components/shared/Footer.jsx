import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)] font-mono">
          © {new Date().getFullYear()} Sanket Shelke — Built with React + Vite
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shelkesanket"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/shelkesanket"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
