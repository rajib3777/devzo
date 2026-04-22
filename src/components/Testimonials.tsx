import { motion, useSpring, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import TiltCard from './TiltCard'
import { useMouse } from '../hooks/useMouse'

const projects = [
  {
    name: 'E-commerce Boost',
    role: 'Facebook Ads Campaign',
    text:
      'We generated over 300% ROI for a leading fashion brand through highly targeted Facebook ads and retargeting strategies.'
  },
  {
    name: 'TechNova Corporate Site',
    role: 'Web Development',
    text:
      'Developed a blazing-fast, interactive corporate website with Next.js, increasing their user engagement by 40%.'
  },
  {
    name: 'Brand Refresh: Lumina',
    role: 'Graphic Design & Branding',
    text:
      'Complete brand overhaul including a modern logo, social media templates, and marketing materials that resonate with their new target audience.'
  }
]

export default function ProjectShowcase() {
  const { x, y } = useMouse()
  const sx = useSpring(x, { stiffness: 50, damping: 20 })
  const sy = useSpring(y, { stiffness: 50, damping: 20 })

  const tx = useTransform(sx, (v) => (v - window.innerWidth / 2) * 0.01)
  const ty = useTransform(sy, (v) => (v - window.innerHeight / 2) * 0.01)

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ left: '-20%', top: '-15%', opacity: 0.6 }} />
        <div className="ring-gradient" style={{ right: '-22%', top: '10%', opacity: 0.55 }} />
        <div className="arc-line" style={{ top: '86%' }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-24 relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Our Project<br />
            <span className="text-white/40">Showcase</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-xl mx-auto">Take a look at some of the successful campaigns and projects we have delivered.</p>
        </div>

        <div className="mt-14 relative">
          <motion.div style={{ x: tx, y: ty }} className="relative">
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {projects.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={i === 0 ? 'md:translate-x-6 md:translate-y-6' : i === 2 ? 'md:-translate-x-6 md:translate-y-6' : ''}
                >
                  <TiltCard className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 shadow-soft flex flex-col" maxRotate={9}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-lg">{p.name}</p>
                        <p className="text-xs text-accent mt-1">{p.role}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white/70" />
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-white/70 leading-relaxed flex-grow">{p.text}</p>
                    <div className="mt-6 flex items-center justify-start">
                      <button
                        onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
                        className="text-xs text-white/90 border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 transition-colors"
                      >
                        Give Offer
                      </button>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium border border-white/10 bg-gradient-to-r from-accent to-accent2 shadow-glow hover:scale-105 transition-transform"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
