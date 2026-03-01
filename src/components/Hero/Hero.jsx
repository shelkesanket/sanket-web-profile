import { useRef } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Hero() {
  // simplified hero layout modeled loosely after reference site
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-12 lg:py-24 overflow-hidden"
    >
      {/* ambient glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
        {/* Left side content */}
        <div className="order-2 lg:order-1 flex flex-col items-start gap-8">
          <span className="hero-tag px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-[0.3em] w-fit">
            WELCOME TO MY UNIVERSE
          </span>
          <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
            Crafting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
              Digital Masterpieces
            </span>
          </h1>
          <p className="hero-heading text-lg md:text-xl text-[var(--text-muted)] max-w-xl leading-relaxed font-medium">
            I'm <span className="text-accent font-bold">Sanket Shelke</span>, passionate about building high-performance, user‑centric web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-dark text-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(232,255,71,0.3)]"
            >
              View Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-4 rounded-2xl border border-[var(--border)] text-[var(--text)] font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://github.com/shelkesanket"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-accent hover:border-accent/50 transition-all duration-300 shadow-xl"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/shelkesanket"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-accent hover:border-accent/50 transition-all duration-300 shadow-xl"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right side placeholder (e.g. image) */}
        <div className="order-1 lg:order-2 flex justify-center">
          {/* image or other graphic could go here */}
        </div>
      </div>
    </section>
  );
}
