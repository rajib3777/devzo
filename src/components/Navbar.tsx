import { motion } from 'framer-motion'

const items = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/55 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2" data-interactive="true">
          <span className="text-xl font-semibold tracking-tight">devzo<span className="text-accent">.</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="hover:text-white transition-colors"
              data-interactive="true"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#pricing"
          data-interactive="true"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium shadow-glow border border-white/10 bg-gradient-to-r from-accent to-accent2"
        >
          Get Started
        </motion.a>
      </div>
    </header>
  )
}
