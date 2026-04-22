import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'

type Plan = {
  name: string
  priceMonthly: number
  duration: string
  badge: string
  description: string
  perks: string[]
  featured?: boolean
  gradient: string
  shadow: string
}

const plans: Plan[] = [
  {
    name: 'Silver',
    priceMonthly: 15000,
    duration: '30 Days',
    badge: '🥈',
    description: 'Suitable for small businesses or new pages',
    gradient: 'from-slate-700 via-slate-600 to-slate-800',
    shadow: 'rgba(148,163,184,0.3)',
    perks: [
      'Free Facebook Ads Account',
      '2 Product Promotional Videos',
      '5 Attractive Graphic Designs',
      'Facebook Ads Run & Monitoring',
      'Business Consultancy Support',
    ],
  },
  {
    name: 'Gold',
    priceMonthly: 25000,
    duration: '30 Days',
    badge: '🥇',
    description: 'Suitable for small and medium businesses',
    gradient: 'from-accent via-accent2 to-purple-900',
    shadow: 'rgba(207,37,118,0.45)',
    featured: true,
    perks: [
      'Business Strategy Plan Preparation',
      'Landing Page Design',
      'Facebook Pixel Setup',
      'Free Facebook Ads Account',
      '5 Product Promo Videos',
      '10 Attractive Graphic Designs',
      'Logo & Cover Design',
      'Page Setup & Full Optimization',
      'Facebook Ads Scaling & Reporting',
    ],
  },
  {
    name: 'Platinum',
    priceMonthly: 40000,
    duration: '30 Days',
    badge: '💎',
    description: 'Suitable for medium to large businesses',
    gradient: 'from-amber-600 via-orange-700 to-amber-900',
    shadow: 'rgba(217,119,6,0.35)',
    perks: [
      '100% Sales Guarantee Service',
      'Advanced Business Strategy Plan',
      'Website & Landing Page Design',
      '10 Professional Video Making',
      'Logo & Cover Design',
      'Page Optimization & Management',
      'Facebook Ads + Pixel Setup',
      'Server Site Tracking Integration',
      'YouTube, TikTok & Google Ads Scaling',
      'Facebook Ads Scaling & Retargeting',
      'Competitor Analysis & Market Report',
    ],
  },
]

type CardPos = 'left' | 'center' | 'right'

function getPositions(centerIdx: number): Record<number, CardPos> {
  const positions: Record<number, CardPos> = {}
  positions[centerIdx] = 'center'
  positions[(centerIdx + 1) % 3] = 'right'
  positions[(centerIdx + 2) % 3] = 'left'
  return positions
}

const posVariants: Record<CardPos, object> = {
  center: {
    x: 0,
    rotateY: 0,
    scale: 1,
    z: 100,
    opacity: 1,
    zIndex: 20,
  },
  left: {
    x: '-58%',
    rotateY: 28,
    scale: 0.8,
    z: -60,
    opacity: 0.72,
    zIndex: 10,
  },
  right: {
    x: '58%',
    rotateY: -28,
    scale: 0.8,
    z: -60,
    opacity: 0.72,
    zIndex: 10,
  },
}

export default function Pricing() {
  const [center, setCenter] = useState(1)
  const positions = getPositions(center)

  const prev = () => setCenter((c) => (c + 2) % 3)
  const next = () => setCenter((c) => (c + 1) % 3)

  return (
    <section id="pricing" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ right: '-20%', top: '10%', opacity: 0.6 }} />
        <div className="arc-line" style={{ top: '68%' }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight"
          >
            Professional Marketing<br />
            <span className="text-white/40">Packages</span>
          </motion.h2>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            Choose the perfect digital marketing package to scale your brand and increase sales.
          </p>
        </div>

        {/* ── Mobile: 3 compact cards side by side ── */}
        <div className="mt-10 grid grid-cols-3 gap-3 md:hidden">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-2xl bg-gradient-to-b ${p.gradient} border border-white/10 p-3 flex flex-col relative overflow-hidden`}
              style={{ boxShadow: `0 10px 40px ${p.shadow}` }}
            >
              {p.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white/40 via-white to-white/40" />
              )}
              <div className="flex items-center gap-1 mb-2">
                <span className="text-base">{p.badge}</span>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/90 truncate">{p.name}</p>
              </div>
              <p className="text-lg font-bold text-white leading-tight">৳{(p.priceMonthly / 1000).toFixed(0)}K</p>
              <p className="text-[9px] text-white/50 mt-0.5 mb-3 leading-tight">{p.duration}</p>
              <ul className="space-y-1 flex-1">
                {p.perks.slice(0, 3).map((perk) => (
                  <li key={perk} className="flex items-start gap-1 text-[9px] text-white/70 leading-snug">
                    <Check className="w-2.5 h-2.5 mt-0.5 shrink-0 text-white/60" />
                    {perk}
                  </li>
                ))}
                {p.perks.length > 3 && (
                  <li className="text-[9px] text-white/40 pl-3.5">+{p.perks.length - 3} more</li>
                )}
              </ul>
              <button
                onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
                className="mt-3 w-full py-1.5 rounded-lg bg-white/15 hover:bg-white/25 border border-white/20 text-[10px] font-semibold text-white transition-colors"
              >
                Give Offer
              </button>
            </motion.div>
          ))}
        </div>

        {/* ── Desktop: 3D Card Carousel ── */}
        <div
          className="relative mt-20 mx-auto h-[620px] hidden md:block"
          style={{ perspective: '1200px', maxWidth: 480 }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            {plans.map((p, i) => {
              const pos = positions[i]
              const variant = posVariants[pos]
              return (
                <motion.div
                  key={p.name}
                  animate={variant as any}
                  transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                  className="absolute inset-0 w-full cursor-pointer select-none"
                  style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
                  onClick={() => pos !== 'center' && setCenter(i)}
                >
                  <div
                    className={`w-full h-full rounded-[2rem] bg-gradient-to-b ${p.gradient} border border-white/10 p-7 flex flex-col`}
                    style={{
                      boxShadow: `0 30px 80px ${p.shadow}, 0 0 0 1px rgba(255,255,255,0.06)`,
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{p.badge}</span>
                        <div>
                          <p className="text-sm font-bold tracking-widest uppercase text-white/90">{p.name}</p>
                          <p className="text-[10px] text-white/50">{p.duration}</p>
                        </div>
                      </div>
                      {p.featured && (
                        <span className="text-xs font-semibold rounded-full bg-white/20 px-3 py-1 text-white border border-white/20">
                          Most Popular
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="my-4">
                      <span className="text-5xl font-bold tracking-tight text-white">৳{p.priceMonthly.toLocaleString()}</span>
                      <p className="text-xs text-white/60 mt-1">{p.description}</p>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={(e) => { e.stopPropagation(); document.dispatchEvent(new CustomEvent('open-message-modal')) }}
                      className="w-full py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-sm font-semibold text-white transition-colors mb-5"
                    >
                      Give Offer
                    </motion.button>

                    {/* Features */}
                    <ul className="space-y-2 overflow-y-auto flex-1 pr-1" style={{ scrollbarWidth: 'none' }}>
                      {p.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2 text-[12px] text-white/80">
                          <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-white/60" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Nav arrows */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/12 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => setCenter(i)}
                className={`h-2 rounded-full transition-all duration-300 ${center === i ? 'w-8 bg-accent' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/12 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>{/* close desktop carousel + nav */}
      </div>
    </section>
  )
}
