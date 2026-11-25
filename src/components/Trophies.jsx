import { trophies } from '../data.js'
import { beep } from '../sound.js'

export default function Trophies() {
  return (
    <section id="trophies" className="section">
      <h2 className="section-title">
        <span className="stage">STAGE 5</span> ACHIEVEMENTS UNLOCKED
      </h2>
      <ul className="trophies">
        {trophies.map((t) => {
          const body = (
            <>
              <span className="trophy-icon" aria-hidden="true">{t.icon}</span>
              <span className="trophy-text">
                <span className={`trophy-title neon-${t.color}`}>{t.title}</span>
                <span className="trophy-meta">{t.issuer} · {t.date}</span>
              </span>
              {t.url && <span className="trophy-link">VER ▶</span>}
            </>
          )
          return (
            <li key={t.title} className={`trophy border-${t.color}`}>
              {t.url ? (
                <a href={t.url} target="_blank" rel="noreferrer" onClick={() => beep('powerup')}>
                  {body}
                </a>
              ) : (
                <div>{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
