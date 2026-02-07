import { motion, useSpring, useTransform } from 'framer-motion'
import { Star } from 'lucide-react'
import TiltCard from './TiltCard'
import { useMouse } from '../hooks/useMouse'

const people = [
  {
    name: 'Kendrick V.',
    role: 'Operations Lead @ DgrCraft',
    text:
      'With AI‑powered analytics, we now understand our customers better than ever. Our marketing campaigns are 3x more effective!'
  },
  {
    name: 'Morganetho F.',
    role: 'Founder @ GridWave',
    text:
      'The seamless integration with our existing tools made adoption effortless. Our team moved faster and smarter than before.'
  },
  {
    name: 'Alexandron S.',
    role: 'CEO @ TechNova',
    text:
      'The AI implementation from devzo boosted our operational efficiency by 40%. Their service is highly professional and easy to adapt!'
  }
]

function Stars() {
  return (
    <div className="flex items-center gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { x, y } = useMouse()
  const sx = useSpring(x, { stiffness: 50, damping: 20 })
  const sy = useSpring(y, { stiffness: 50, damping: 20 })

  // map mouse position to gentle translation
  const tx = useTransform(sx, (v) => (v - window.innerWidth / 2) * 0.01)
  const ty = useTransform(sy, (v) => (v - window.innerHeight / 2) * 0.01)

  return (
    <section id="testimonials" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ left: '-20%', top: '-15%', opacity: 0.6 }} />
        <div className="ring-gradient" style={{ right: '-22%', top: '10%', opacity: 0.55 }} />
        <div className="arc-line" style={{ top: '86%' }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-24 relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Don’t trust us,<br />
            <span className="text-white/40">trust them</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="mt-14 relative">
          <motion.div style={{ x: tx, y: ty }} className="relative">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {people.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={i === 0 ? 'md:translate-x-6 md:translate-y-6' : i === 2 ? 'md:-translate-x-6 md:translate-y-6' : ''}
                >
                  <TiltCard className="rounded-3xl border border-white/10 bg-white/90 text-[#060606] p-7 shadow-soft" maxRotate={9}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold">{p.name}</p>
                        <p className="text-xs text-black/60">{p.role}</p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-black/10" />
                    </div>
                    <p className="mt-4 text-sm text-black/70 leading-relaxed">{p.text}</p>
                    <div className="mt-5 flex items-center justify-center">
                      <Stars />
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
