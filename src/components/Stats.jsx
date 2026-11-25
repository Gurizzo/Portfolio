import { useEffect, useRef, useState } from 'react'
import { stats, powerUps } from '../data.js'

export default function Stats() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section id="stats" className="section" ref={ref}>
      <h2 className="section-title">
        <span className="stage">STAGE 2</span> PLAYER STATS
      </h2>
      <div className="stats-grid pixel-border">
        {stats.map((s, i) => (
          <div className="stat" key={s.name}>
            <div className="stat-head">
              <span>{s.name}</span>
              <span className={`neon-${s.color}`}>{s.value}</span>
            </div>
            <div className="bar">
              <div
                className={`bar-fill bg-${s.color}`}
                style={{ width: visible ? `${s.value}%` : 0, transitionDelay: `${i * 120}ms` }}
              />
            </div>
            {s.note && <span className="stat-note">{s.note}</span>}
          </div>
        ))}
      </div>

      <h3 className="sub-title">POWER-UPS DESBLOQUEADOS</h3>
      <ul className="powerups">
        {powerUps.map((p) => (
          <li key={p} className="powerup">★ {p}</li>
        ))}
      </ul>
    </section>
  )
}
