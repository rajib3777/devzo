import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Video, Share2, Megaphone, Camera, MonitorSmartphone, PenTool } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    subtitle: '& Motion Graphics',
    desc: 'High-impact video content, reels, TikToks, and animated motion graphics tailored for maximum engagement.',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.5)',
  },
  {
    icon: Share2,
    title: 'Social Media',
    subtitle: 'Management',
    desc: 'Full page management, content scheduling, community engagement, and monthly performance reports.',
    color: 'from-violet-500 to-purple-700',
    glow: 'rgba(139,92,246,0.5)',
  },
  {
    icon: Megaphone,
    title: 'Ad Campaign',
    subtitle: '& Run',
    desc: 'Data-driven Facebook, Google, and TikTok ad campaigns with pixel tracking, scaling, and ROI reports.',
    color: 'from-orange-400 to-orange-600',
    glow: 'rgba(251,146,60,0.5)',
  },
  {
    icon: Camera,
    title: 'Product Shoot',
    subtitle: 'Photography & Video',
    desc: 'Professional indoor & outdoor product shoots and promotional videos that elevate your brand image.',
    color: 'from-cyan-400 to-blue-600',
    glow: 'rgba(34,211,238,0.5)',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web Development',
    subtitle: '& Landing Page',
    desc: 'Fast, responsive websites and high-converting landing pages optimized for SEO and sales.',
    color: 'from-emerald-400 to-teal-600',
    glow: 'rgba(52,211,153,0.5)',
  },
  {
    icon: PenTool,
    title: 'Graphics Designing',
    subtitle: 'Brand Identity',
    desc: 'Premium logos, brand identity, ad creatives, social media posts, and cover designs.',
    color: 'from-yellow-400 to-amber-600',
    glow: 'rgba(251,191,36,0.5)',
  },
]

// The orbit math:
// WRAPPER = total div size in px
// CENTER  = exact pixel center of the div
// Cards are positioned: left = 50% + cos(angle)*R, top = 50% + sin(angle)*R
// SVG circle cx=CENTER cy=CENTER r=ORBIT_RADIUS is therefore EXACTLY aligned.
const ORBIT_RADIUS = 240
const WRAPPER      = ORBIT_RADIUS * 2 + 200   // 680px
const CENTER       = WRAPPER / 2              // 340px
const TOTAL        = services.length

export default function Services() {
  const [angle, setAngle] = useState(0)
  const [active, setActive] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)
  const [orbitScale, setOrbitScale] = useState(1)
  const raf  = useRef<number>()
  const last = useRef<number>(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const speed = 0.3

  // Compute responsive scale so orbit fits its container
  useEffect(() => {
    const update = () => {
      const w = sectionRef.current?.offsetWidth ?? window.innerWidth
      setOrbitScale(w < WRAPPER ? w / WRAPPER : 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const tick = (ts: number) => {
      if (!paused) {
        const dt = ts - last.current
        setAngle((a) => (a + speed * (dt / 16)) % 360)
      }
      last.current = ts
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current!)
  }, [paused])

  return (
    <section id="features" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ring-gradient" style={{ left: '-10%', top: '-20%', opacity: 0.5 }} />
        <div className="ring-gradient" style={{ right: '-10%', bottom: '-20%', opacity: 0.5 }} />
      </div>

      <div className="mx-auto max-w-6xl px-5 relative" ref={sectionRef}>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Our Professional Services<br />
            <span className="text-white/40">to grow your brand with <span className="text-accent">360 degree services.</span></span>
          </h2>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            We offer top-notch content creation, digital marketing, and web development services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.dispatchEvent(new CustomEvent('open-message-modal'))}
            className="mt-8 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium border border-white/10 bg-gradient-to-r from-accent to-accent2 shadow-glow"
          >
            Give Offer
          </motion.button>
        </motion.div>

        {/* Responsive orbit scale container */}
        <div
          style={{
            width: '100%',
            height: WRAPPER * orbitScale,
            display: 'flex',
            justifyContent: 'center',
            overflow: 'visible',
          }}
        >
        <div
          className="relative flex-shrink-0"
          style={{
            width: WRAPPER,
            height: WRAPPER,
            transform: `scale(${orbitScale})`,
            transformOrigin: 'top center',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { setPaused(false); setActive(null) }}
        >

          {/* ── SVG animated orbit ring — perfectly aligned ── */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={WRAPPER}
            height={WRAPPER}
            viewBox={`0 0 ${WRAPPER} ${WRAPPER}`}
          >
            <defs>
              {/* Animated colour gradient */}
              <linearGradient id="orbitGrad" x1="0" y1="0" x2={WRAPPER} y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8E23E2">
                  <animate attributeName="stop-color"
                    values="#8E23E2;#CF2576;#FFD000;#8E23E2" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#CF2576">
                  <animate attributeName="stop-color"
                    values="#CF2576;#FFD000;#8E23E2;#CF2576" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#FFD000">
                  <animate attributeName="stop-color"
                    values="#FFD000;#8E23E2;#CF2576;#FFD000" dur="6s" repeatCount="indefinite" />
                </stop>
              </linearGradient>

              {/* Glow filter */}
              <filter id="orbitGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Soft glow ring */}
            <circle cx={CENTER} cy={CENTER} r={ORBIT_RADIUS}
              stroke="url(#orbitGrad)" strokeWidth="8" fill="none"
              opacity="0.25" filter="url(#orbitGlow)" />

            {/* Dashed animated ring */}
            <circle cx={CENTER} cy={CENTER} r={ORBIT_RADIUS}
              stroke="url(#orbitGrad)" strokeWidth="1.5" fill="none"
              opacity="0.9" strokeDasharray="14 8">
              <animateTransform attributeName="transform" type="rotate"
                from={`0 ${CENTER} ${CENTER}`}
                to={`360 ${CENTER} ${CENTER}`}
                dur="25s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* ── Center hub ── */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-56 h-56 rounded-full bg-gradient-to-br from-accent to-accent2 p-[3px] shadow-glow"
            >
              <div className="w-full h-full rounded-full bg-bg flex flex-col items-center justify-center text-center px-4">
                <span className="text-2xl font-black text-accent uppercase tracking-[0.2em] leading-tight">Rana IT</span>
                <div className="h-px w-12 bg-white/20 my-2" />
                <span className="text-base font-bold text-white/80 uppercase tracking-widest">360° Services</span>
              </div>
            </motion.div>
          </div>

          {/* ── Orbit items ── */}
          {services.map((svc, i) => {
            const baseAngleDeg = (i * 360) / TOTAL
            const totalDeg    = baseAngleDeg + angle
            const rad         = (totalDeg * Math.PI) / 180
            const cx          = Math.cos(rad) * ORBIT_RADIUS
            const cy          = Math.sin(rad) * ORBIT_RADIUS
            const isActive    = active === i
            const Icon        = svc.icon

            return (
              <motion.div
                key={svc.title}
                className="absolute"
                style={{
                  left: `calc(50% + ${cx}px)`,
                  top:  `calc(50% + ${cy}px)`,
                  translateX: '-50%',
                  translateY: '-50%',
                  zIndex: isActive ? 20 : 10,
                }}
                animate={{ scale: isActive ? 1.18 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                onMouseEnter={() => setActive(i)}
              >
                <motion.div
                  className="relative w-36 h-36 rounded-2xl border border-white/10 bg-bg/80 backdrop-blur-xl cursor-pointer flex flex-col items-center justify-center gap-2 p-3 text-center"
                  style={{
                    boxShadow: isActive
                      ? `0 0 40px 8px ${svc.glow}, 0 0 0 1px rgba(255,255,255,0.08)`
                      : '0 0 0 1px rgba(255,255,255,0.06)',
                  }}
                  onClick={() => setActive(isActive ? null : i)}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-white leading-tight">{svc.title}</p>
                  <p className="text-[10px] text-white/50">{svc.subtitle}</p>
                </motion.div>

                {/* Tooltip popup */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.92 }}
                      transition={{ duration: 0.22 }}
                      className="absolute z-30 w-56 rounded-2xl border border-white/10 bg-bg/95 backdrop-blur-xl p-4 text-left"
                      style={{
                        top:     cy > 0 ? 'auto' : '110%',
                        bottom:  cy > 0 ? '110%' : 'auto',
                        left:    '50%',
                        translateX: '-50%',
                        boxShadow: `0 0 30px 4px ${svc.glow}`,
                      }}
                    >
                      <div className={`text-xs font-bold mb-2 bg-gradient-to-r ${svc.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                        {svc.title} {svc.subtitle}
                      </div>
                      <p className="text-[11px] text-white/70 leading-relaxed">{svc.desc}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          document.dispatchEvent(new CustomEvent('open-message-modal'))
                        }}
                        className={`mt-3 w-full text-[11px] font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${svc.color} text-white`}
                      >
                        Give Offer →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        </div>{/* close scroll wrapper */}

      </div>
    </section>
  )
}
