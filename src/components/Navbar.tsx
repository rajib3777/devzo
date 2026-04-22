import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

const items = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#features' },
  { label: 'Portfolio', href: '/#projects' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/55 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" data-interactive="true">
          <span className="text-xl font-semibold tracking-tight">Rana IT Ltd<span className="text-accent">.</span></span>
        </a>

        {/* Desktop Nav */}
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

        <div className="flex items-center gap-2 sm:gap-4">
          <motion.a
            href="tel:+8801815311438"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-2xl border-2 border-accent/40 bg-accent/10 hover:bg-accent/20 transition-all group relative overflow-hidden shadow-[0_0_20px_rgba(207,37,118,0.2)]"
            data-interactive="true"
          >
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
            className="hidden xs:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold shadow-glow border border-white/10 bg-gradient-to-r from-accent to-accent2 text-white"
          >
            Get Started
          </motion.button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-white/10 lg:hidden overflow-hidden z-50"
          >
            <div className="px-5 py-8 flex flex-col gap-6">
              {items.map((it, i) => (
                <motion.a
                  key={it.href}
                  href={it.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-accent transition-colors"
                >
                  {it.label}
                </motion.a>
              ))}

              <div className="h-px w-full bg-white/5 my-2" />

              {/* Mobile Hotline */}
              <a
                href="tel:+8801815311438"
                className="flex items-center gap-4 p-4 rounded-2xl bg-accent/10 border border-accent/20"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-accent font-black uppercase tracking-widest">Hotline 24/7</span>
                  <span className="text-xl font-black text-white">01815-311438</span>
                </div>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false)
                  document.dispatchEvent(new CustomEvent('open-message-modal'))
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-accent to-accent2 text-white font-bold shadow-glow"
              >
                Get Started Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
