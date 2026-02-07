import { motion } from 'framer-motion'
import { Brain, BarChart3, PlugZap, ShieldCheck } from 'lucide-react'
import TiltCard from './TiltCard'

const pills = [
  { title: 'Smart\nAutomation', icon: Brain },
  { title: 'Data-Driven\nInsights', icon: BarChart3 },
  { title: 'Seamless\nIntegration', icon: PlugZap },
  { title: 'Scalable &\nSecure', icon: ShieldCheck }
]

const cards = [
  {
    title: 'Automate the boring stuff',
    desc: 'Turn repetitive workflows into reliable pipelines. Set triggers, approvals, and fallback logic in minutes.'
  },
  {
    title: 'Analytics that speak human',
    desc: 'Real-time dashboards and forecasting that surface the next best action — not just charts.'
  },
  {
    title: 'Plug into your stack',
    desc: 'Connect to the tools you already use. Keep data in sync with strong governance and audit trails.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden mt-8">
      <div className="absolute inset-0 pointer-events-none">
        {/* ✅ TOP ARC: always visible */}
        <svg
          className="absolute left-0 top-0 w-full h-[520px] opacity-95"
          viewBox="0 0 1440 520"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="featuresCurveGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8E23E2">
                <animate attributeName="stop-color" values="#8E23E2;#CF2576;#FFD000;#8E23E2" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#CF2576">
                <animate attributeName="stop-color" values="#CF2576;#FFD000;#8E23E2;#CF2576" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#FFD000">
                <animate attributeName="stop-color" values="#FFD000;#8E23E2;#CF2576;#FFD000" dur="6s" repeatCount="indefinite" />
              </stop>
              <animate attributeName="x1" values="0;1440;0" dur="7s" repeatCount="indefinite" />
              <animate attributeName="x2" values="1440;0;1440" dur="7s" repeatCount="indefinite" />
            </linearGradient>

            <filter id="featuresCurveGlow" x="-30%" y="-200%" width="160%" height="500%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 0.9 0"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ✅ big arc like screenshot (top-left to right-down) */}
          <path
            d="M-260 140 C 260 -40, 720 -20, 1000 120 C 1260 250, 1460 360, 1760 520"
            stroke="url(#featuresCurveGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.55"
            filter="url(#featuresCurveGlow)"
          />
          <path
            d="M-260 140 C 260 -40, 720 -20, 1000 120 C 1260 250, 1460 360, 1760 520"
            stroke="url(#featuresCurveGrad)"
            strokeWidth="2.25"
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>

        <div className="ring-gradient" style={{ left: '-18%', top: '24%', opacity: 0.7 }} />
        <div className="arc-line" style={{ top: '42%' }} />
      </div>


      <div className="mx-auto max-w-6xl px-5 py-20 relative">
        <div className="text-center relative">

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight"
          >
            Built for efficiency,<br />
            <span className="text-white/40">designed for growth.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="mt-5 text-white/65 max-w-xl mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </motion.p>
        </div>

        <div className="mt-14">
          <div className="relative flex items-center justify-between gap-4">
            <div className="absolute left-7 right-7 top-1/2 -translate-y-1/2 h-px bg-white/15" />

            {pills.map((p) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-140px' }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col items-center gap-3"
                >
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-accent to-accent2 p-[1px] shadow-glow">
                      <div className="h-full w-full rounded-full bg-bg/80 backdrop-blur flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-2 w-2 rounded-full bg-white/80" />
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 text-center whitespace-pre-line">{p.title}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <TiltCard key={c.title} className="rounded-3xl border border-white/10 bg-card p-7 shadow-soft">
              <p className="text-lg font-semibold">{c.title}</p>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.desc}</p>
              <div className="mt-6 inline-flex items-center text-sm text-white/70">
                Learn more <span className="ml-2">→</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
