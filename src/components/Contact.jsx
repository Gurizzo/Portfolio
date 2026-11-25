import { useEffect, useRef, useState } from 'react'
import { player } from '../data.js'
import { beep } from '../sound.js'

export default function Contact({ onCoin }) {
  const ref = useRef(null)
  const [count, setCount] = useState(9)
  const [active, setActive] = useState(false)
  const [continued, setContinued] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0.4 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!active || continued || count === 0) return
    const t = setTimeout(() => setCount((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [active, continued, count])

  const handleContinue = () => {
    beep('coin')
    onCoin()
    setContinued(true)
  }

  return (
    <section id="continue" className="section contact" ref={ref}>
      {!continued ? (
        <>
          <h2 className="continue-title neon-pink">CONTINUE?</h2>
          <div className={`countdown ${count === 0 ? 'game-over' : ''}`}>
            {count === 0 ? 'GAME OVER' : count}
          </div>
          <button className="insert-coin" onClick={handleContinue}>
            {count === 0 ? 'TRY AGAIN' : 'YES! CONTÁCTAME'}
          </button>
        </>
      ) : (
        <>
          <h2 className="continue-title neon-green">PLAYER 2 HAS JOINED!</h2>
          <p className="dialog contact-dialog">
            ¿Tienes un proyecto en mente o quieres formar equipo? ¡Envíame un mensaje!
          </p>
          <a className="btn btn-primary big" href={`mailto:${player.email}`}>
            ✉ {player.email}
          </a>
          <ul className="socials">
            {player.socials.map((s) => (
              <li key={s.label}>
                <a className="btn" href={s.url} target="_blank" rel="noreferrer" onClick={() => beep('select')}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
