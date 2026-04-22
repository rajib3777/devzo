import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const items = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#features' },
  { label: 'Portfolio', href: '/#projects' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/55 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" data-interactive="true">
          <span className="text-xl font-semibold tracking-tight">Rana IT Ltd<span className="text-accent">.</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-white/80">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="hover:text-white transition-colors font-medium"
              data-interactive="true"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="tel:+8801815311438"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-2xl border-2 border-accent/40 bg-accent/10 hover:bg-accent/20 transition-all group relative overflow-hidden shadow-[0_0_20px_rgba(207,37,118,0.2)]"
            data-interactive="true"
          >
            {/* Pulsing Live Dot */}
            <div className="absolute top-1 right-2 flex items-center gap-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[7px] font-black text-green-500 uppercase tracking-tighter">Live</span>
            </div>

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center shadow-lg relative z-10">
              <Phone className="w-5 h-5 text-white animate-[bounce_2s_infinite]" />
            </div>
            <div className="flex flex-col relative z-10 pr-2">
              <span className="text-[10px] text-accent font-black uppercase tracking-widest leading-none mb-1">Hotline 24/7</span>
              <span className="text-[16px] font-black text-white tracking-tight leading-none">01815-311438</span>
            </div>
          </motion.a>

          <motion.button
            onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
            data-interactive="true"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold shadow-glow border border-white/10 bg-gradient-to-r from-accent to-accent2 text-white"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </header>
  )
}
