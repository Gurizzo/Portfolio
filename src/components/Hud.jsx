import { player } from '../data.js'
import { beep } from '../sound.js'

const links = [
  ['#player', 'PLAYER'],
  ['#stats', 'STATS'],
  ['#levels', 'LEVELS'],
  ['#scores', 'SCORES'],
  ['#continue', 'CONTACT'],
]

export default function Hud({ score, coins, godMode }) {
  return (
    <header className="hud">
      <div className="hud-left">
        <span className="hud-label">{player.tag}</span>
        <span className="hud-score">{String(score).padStart(7, '0')}</span>
      </div>
      <nav className="hud-nav">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => beep('select')}>
            {label}
          </a>
        ))}
      </nav>
      <div className="hud-right">
        {godMode && <span className="god-badge">GOD MODE</span>}
        <span className="hud-label">CREDIT</span>
        <span className="hud-score">{String(coins).padStart(2, '0')}</span>
      </div>
    </header>
  )
}
