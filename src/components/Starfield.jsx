import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvas = useRef(null)

  useEffect(() => {
    const c = canvas.current
    const ctx = c.getContext('2d')
    let raf
    let stars = []
    const colors = ['#ffffff', '#00f0ff', '#ff2bd6', '#ffe600']

    const resize = () => {
      c.width = window.innerWidth
      c.height = window.innerHeight
      stars = Array.from({ length: Math.floor((c.width * c.height) / 9000) }, () => ({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        s: Math.random() < 0.85 ? 2 : 3,
        v: 0.2 + Math.random() * 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      for (const st of stars) {
        if (!reduce) {
          st.y += st.v
          if (st.y > c.height) { st.y = 0; st.x = Math.random() * c.width }
        }
        ctx.fillStyle = st.color
        ctx.globalAlpha = 0.35 + st.v / 2.5
        ctx.fillRect(Math.round(st.x), Math.round(st.y), st.s, st.s)
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvas} className="starfield" aria-hidden="true" />
}
