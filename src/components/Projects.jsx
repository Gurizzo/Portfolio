import { projects } from '../data.js'
import { beep } from '../sound.js'

export default function Projects({ onPlay }) {
  return (
    <section id="levels" className="section">
      <h2 className="section-title">
        <span className="stage">STAGE 3</span> LEVEL SELECT
      </h2>
      <div className="cartridges">
        {projects.map((p) => (
          <article key={p.title} className={`cartridge border-${p.color}`}>
            <div className="cartridge-top">
              <span className="world">WORLD {p.stage}</span>
              <span className="difficulty" title={`Dificultad ${p.difficulty}/5`}>
                {'★'.repeat(p.difficulty)}
                <span className="dim">{'★'.repeat(5 - p.difficulty)}</span>
              </span>
            </div>
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
                onClick={() => { beep('start'); onPlay() }}
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
    </section>
  )
}
