import { useState } from 'react'
import { projects } from '../data.js'
import { beep } from '../sound.js'
import DemoModal from './DemoModal.jsx'

const KIND_LABEL = { android: '📱 ANDROID DEMO', web: '🌐 WEB DEMO' }

export default function Projects({ onPlay }) {
  const [playing, setPlaying] = useState(null)

  const play = (p) => (e) => {
    beep('start')
    onPlay()
    if (p.gif) {
      e.preventDefault()
      setPlaying(p)
    }
  }

  return (
    <section id="levels" className="section">
      <h2 className="section-title">
        <span className="stage">STAGE 3</span> LEVEL SELECT
      </h2>
      <div className="cartridges">
        {projects.filter((p) => !p.hidden).map((p, i) => (
          <article key={p.title} className={`cartridge border-${p.color}`}>
            <div className="cartridge-top">
              <span className="world">WORLD {Math.floor(i / 2) + 1}-{(i % 2) + 1}</span>
              <span className="difficulty" title={`Dificultad ${p.difficulty}/5`}>
                {'★'.repeat(p.difficulty)}
                <span className="dim">{'★'.repeat(5 - p.difficulty)}</span>
              </span>
            </div>
            {p.kind && <span className={`demo-badge bg-${p.color}`}>{KIND_LABEL[p.kind]}</span>}
            <h3 className={`neon-${p.color}`}>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="cartridge-actions">
              <a
                className="btn btn-primary"
                href={p.demo || p.code}
                target="_blank"
                rel="noreferrer"
                onClick={play(p)}
              >
                {p.demo ? '▶ PLAY' : '▶ VER REPO'}
              </a>
              {p.demo && (
                <a className="btn" href={p.code} target="_blank" rel="noreferrer" onClick={() => beep('select')}>
                  {'</>'} CODE
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {playing && <DemoModal project={playing} onClose={() => setPlaying(null)} />}
    </section>
  )
}
