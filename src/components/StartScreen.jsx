import { useEffect } from 'react'
import { player } from '../data.js'

export default function StartScreen({ onStart }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onStart()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onStart])

  return (
    <div className="start-screen">
      <div className="marquee">
        <p className="small blink-slow">★ ARCADE PORTFOLIO ★</p>
        <h1 className="title glitch" data-text={player.name}>
          {player.name}
        </h1>
        <p className="subtitle">{player.role.toUpperCase()}</p>
      </div>

      <div className="invaders" aria-hidden="true">
        <span>👾</span><span>👾</span><span>👾</span><span>👾</span><span>👾</span>
      </div>

      <button className="insert-coin blink" onClick={onStart}>
        INSERT COIN
      </button>
      <p className="hint">PULSA ENTER O HAZ CLIC PARA EMPEZAR</p>

      <ul className="menu-hint">
        <li>1 PLAYER</li>
        <li>CREDITS 00</li>
      </ul>
    </div>
  )
}
