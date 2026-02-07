import { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  // Custom cursor
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)
  const dx = useSpring(mx, { stiffness: 700, damping: 45 })
  const dy = useSpring(my, { stiffness: 700, damping: 45 })
  const rx = useSpring(mx, { stiffness: 200, damping: 22 })
  const ry = useSpring(my, { stiffness: 200, damping: 22 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  useEffect(() => {
    const handler = (e: Event) => {
      const el = e.target as HTMLElement | null
      if (!el) return
      const interactive = !!el.closest('[data-interactive="true"]')
      setIsHoveringInteractive(interactive)
    }
    window.addEventListener('mouseover', handler, true)
    return () => window.removeEventListener('mouseover', handler, true)
  }, [])

  const ringSize = useMemo(() => (isHoveringInteractive ? 66 : 46), [isHoveringInteractive])

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <div className="noise" />
      <motion.div
        className="cursor-dot"
        style={{ x: dx, y: dy, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: rx,
          y: ry,
          width: ringSize,
          height: ringSize,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
