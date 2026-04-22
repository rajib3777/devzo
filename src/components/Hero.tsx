import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import HeroCurveLine from './HeroCurveLine'


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } }
}

const word = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 22 } }
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* background grid/lines */}
        <div className="absolute inset-0 opacity-[0.25]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,37,118,0.12),transparent_60%)]" />
        </div>

        {/* diagonal glow line */}
        <div className="absolute left-1/2 top-0 h-[140%] w-[2px] -translate-x-1/2 rotate-[25deg] bg-gradient-to-b from-transparent via-white/15 to-transparent blur-[0.2px]" />

        <div className="ring-gradient animate-floaty" style={{ left: '-28%', top: '-28%' }} />
        <div className="ring-gradient animate-floaty" style={{ right: '-32%', top: '-20%', animationDelay: '0.7s' }} />
        <div className="arc-line" style={{ top: '48%' }} />

        {/* ✅ Animated Figma Curve Line */}
        <svg
          className="pointer-events-none absolute left-0 bottom-0 w-full h-[240px] opacity-90"
          viewBox="0 0 1440 240"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="curveGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8E23E2">
                <animate
                  attributeName="stop-color"
                  values="#8E23E2;#CF2576;#FFD000;#8E23E2"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>

              <stop offset="50%" stopColor="#CF2576">
                <animate
                  attributeName="stop-color"
                  values="#CF2576;#FFD000;#8E23E2;#CF2576"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>

              <stop offset="100%" stopColor="#FFD000">
                <animate
                  attributeName="stop-color"
                  values="#FFD000;#8E23E2;#CF2576;#FFD000"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>

              {/* gradient moving effect */}
              <animate attributeName="x1" values="0;1440;0" dur="7s" repeatCount="indefinite" />
              <animate attributeName="x2" values="1440;0;1440" dur="7s" repeatCount="indefinite" />
            </linearGradient>

            {/* glow filter */}
            <filter id="curveGlow" x="-30%" y="-200%" width="160%" height="500%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.85 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* glow line */}
          <path
            d="M-40 40 C 260 220, 520 260, 820 220 C 1120 180, 1290 120, 1480 60"
            stroke="url(#curveGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.55"
            filter="url(#curveGlow)"
          />

          {/* main sharp line */}
          <path
            d="M-40 40 C 260 220, 520 260, 820 220 C 1120 180, 1290 120, 1480 60"
            stroke="url(#curveGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 relative">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-sm text-white/70"
          >
            Professional Facebook Marketing • Web Development • SEO
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
          >
            <span className="block">
              {'Best Digital Agency'.split(' ').map((t) => (
                <motion.span key={t} variants={word} className="inline-block mr-3">
                  {t}
                </motion.span>
              ))}
            </span>
            <span className="block mt-2">
              <motion.span variants={word} className="inline-block mr-3">
                in
              </motion.span>
              <motion.span variants={word} className="gradient-text font-bold animate-shimmer">
                Bangladesh
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/70"
          >
            We provide professional digital marketing, web development, and branding services to take your business further and scale it effortlessly.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
              data-interactive="true"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold border border-white/10 bg-gradient-to-r from-accent to-accent2 shadow-glow text-white"
            >
              Give Offer
            </motion.button>

            <motion.a
              href="#projects"
              data-interactive="true"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white"
            >
              See Projects
              <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-xs">
                ↓
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
