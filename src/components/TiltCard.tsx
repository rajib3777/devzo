import { PropsWithChildren, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Props = PropsWithChildren<{
  className?: string
  maxRotate?: number
}>

export default function TiltCard({ children, className, maxRotate = 10 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const sx = useSpring(rx, { stiffness: 200, damping: 22 })
  const sy = useSpring(ry, { stiffness: 200, damping: 22 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rotY = (px - 0.5) * (maxRotate * 2)
    const rotX = -(py - 0.5) * (maxRotate * 2)
    ry.set(rotY)
    rx.set(rotX)
  }

  const onLeave = () => {
    ry.set(0)
    rx.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: sx, rotateY: sy, transformStyle: 'preserve-3d' }}
      className={className}
      data-interactive="true"
    >
      <div style={{ transform: 'translateZ(22px)' }}>{children}</div>
    </motion.div>
  )
}
