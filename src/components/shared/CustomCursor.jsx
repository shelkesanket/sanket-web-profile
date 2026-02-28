import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hoveringLink, setHoveringLink] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setTimeout(() => setTrail({ x: e.clientX, y: e.clientY }), 80)
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      const isInteractive = el.closest('a, button, [role="button"]')
      setHoveringLink(!!isInteractive)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  // Only show on desktop
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: clicking ? 0.5 : 1,
          width: hoveringLink ? 0 : 8,
          height: hoveringLink ? 0 : 8,
          background: '#E8FF47',
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
        style={{ width: 8, height: 8, background: '#E8FF47' }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border"
        animate={{
          x: trail.x - (hoveringLink ? 20 : 14),
          y: trail.y - (hoveringLink ? 20 : 14),
          width: hoveringLink ? 40 : 28,
          height: hoveringLink ? 40 : 28,
          borderColor: hoveringLink ? 'rgba(232,255,71,0.8)' : 'rgba(232,255,71,0.3)',
          scale: clicking ? 0.9 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        style={{ width: 28, height: 28, borderColor: 'rgba(232,255,71,0.3)', borderWidth: 1 }}
      />
    </>
  )
}
