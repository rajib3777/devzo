import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Real client logos from public folder
const clients = [
  { name: 'Partner 1', logo: '/Screenshot 2026-04-22 172725.png' },
  { name: 'Partner 2', logo: '/Screenshot 2026-04-22 173224.png' },
  { name: 'Partner 3', logo: '/Screenshot 2026-04-22 173240.png' },
  { name: 'Partner 4', logo: '/Screenshot 2026-04-22 173301.png' },
  { name: 'Partner 5', logo: '/Screenshot 2026-04-22 173316.png' },
  { name: 'Partner 6', logo: '/Screenshot 2026-04-22 173410.png' },
  { name: 'Partner 7', logo: '/Screenshot 2026-04-22 173517.png' },
  { name: 'Partner 8', logo: '/Screenshot 2026-04-22 173606.png' },
  { name: 'Partner 9', logo: '/Screenshot 2026-04-22 173642.png' },
  { name: 'Partner 10', logo: '/Screenshot 2026-04-22 173726.png' },
  { name: 'Partner 11', logo: '/Screenshot 2026-04-22 173831.png' },
  { name: 'Partner 12', logo: '/Screenshot 2026-04-22 173911.png' },
  { name: 'Partner 13', logo: '/Screenshot 2026-04-22 183937.png' },
  { name: 'Partner 14', logo: '/Screenshot 2026-04-22 183955.png' },
  { name: 'Partner 15', logo: '/Screenshot 2026-04-22 184011.png' },
  { name: 'Partner 16', logo: '/Screenshot 2026-04-22 184032.png' },
  { name: 'Partner 17', logo: '/544991702_122255303264221159_8618328637782892967_n.jpg' },
]

const VISIBLE_DEFAULT = 12

export default function Clients() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? clients : clients.slice(0, VISIBLE_DEFAULT)

  return (
    <section id="clients" className="relative py-24 overflow-hidden border-t border-white/5">
      {/* subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="ring-gradient" style={{ left: '-5%', top: '40%', opacity: 0.2 }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Partners & Clients
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Our Trusted <span className="gradient-text animate-shimmer">Clients</span>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto">
            We've partnered with leading brands to deliver exceptional digital experiences.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <AnimatePresence>
            {visible.map((client, i) => (
              <motion.div
                key={client.logo}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="group relative flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-pointer aspect-video"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-accent2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Logo */}
                <img
                  src={client.logo}
                  alt="Client logo"
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More */}
        {clients.length > VISIBLE_DEFAULT && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
            >
              {showAll ? 'Show Less' : `See All ${clients.length} Clients`}
              <motion.span animate={{ rotate: showAll ? 90 : 0 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}
