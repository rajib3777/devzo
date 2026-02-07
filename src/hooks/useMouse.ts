import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

export function useMouse() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return { x, y }
}
