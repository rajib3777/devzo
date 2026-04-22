import { useEffect, useMemo, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Features'
import Pricing from './components/Pricing'
import ProjectShowcase from './components/ProjectShowcase'
import AboutCompany from './components/AboutCompany'
import Clients from './components/Clients'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import MessageModal from './components/MessageModal'
import AboutPage from './pages/AboutPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutCompany />
        <Services />
        <ProjectShowcase />
        <Stats />
        <Clients />
        <Pricing />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

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
    <BrowserRouter>
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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <MessageModal />
      </div>
    </BrowserRouter>
  )
}
