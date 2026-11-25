import { useEffect, useState } from 'react'
import StartScreen from './components/StartScreen.jsx'
import Hud from './components/Hud.jsx'
import PlayerSelect from './components/PlayerSelect.jsx'
import Stats from './components/Stats.jsx'
import Projects from './components/Projects.jsx'
import HighScores from './components/HighScores.jsx'
import Trophies from './components/Trophies.jsx'
import Contact from './components/Contact.jsx'
import Starfield from './components/Starfield.jsx'
import { beep } from './sound.js'

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export default function App() {
  const [started, setStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [coins, setCoins] = useState(0)
  const [godMode, setGodMode] = useState(false)

  const addScore = (n) => setScore((s) => s + n)

  // Código Konami → modo arcoíris
  useEffect(() => {
    let i = 0
    const onKey = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      i = key === KONAMI[i] ? i + 1 : key === KONAMI[0] ? 1 : 0
      if (i === KONAMI.length) {
        i = 0
        setGodMode((g) => !g)
        addScore(9999)
        beep('powerup')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Puntos por hacer scroll a nuevas secciones
  useEffect(() => {
    if (!started) return
    const seen = new Set()
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting && !seen.has(en.target.id)) {
            seen.add(en.target.id)
            addScore(500)
          }
        }),
      { threshold: 0.35 },
    )
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [started])

  const start = () => {
    setCoins((c) => c + 1)
    beep('coin')
    setStarted(true)
  }

  return (
    <div className={`crt ${godMode ? 'god-mode' : ''}`}>
      <Starfield />
      {!started ? (
        <StartScreen onStart={start} />
      ) : (
        <>
          <Hud score={score} coins={coins} godMode={godMode} />
          <main>
            <PlayerSelect />
            <Stats />
            <Projects onPlay={() => addScore(1000)} />
            <HighScores />
            <Trophies />
            <Contact onCoin={() => { setCoins((c) => c + 1); addScore(100) }} />
          </main>
          <footer className="footer">
            © {new Date().getFullYear()} · HECHO CON REACT · ↑↑↓↓←→←→BA
          </footer>
        </>
      )}
    </div>
  )
}
