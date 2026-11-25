import { player } from '../data.js'

export default function PlayerSelect() {
  return (
    <section id="player" className="section">
      <h2 className="section-title">
        <span className="stage">STAGE 1</span> SELECT YOUR PLAYER
      </h2>
      <div className="player-card pixel-border">
        <div className="avatar-frame">
          <div className="avatar">{player.avatar}</div>
          <span className="selected blink">▶ SELECTED</span>
        </div>
        <div className="player-info">
          <h3 className="neon-yellow">{player.name}</h3>
          <dl className="player-meta">
            <div><dt>CLASS</dt><dd>{player.role}</dd></div>
            <div><dt>LEVEL</dt><dd>{player.level}</dd></div>
            <div><dt>WORLD</dt><dd>{player.location}</dd></div>
          </dl>
          <p className="dialog">
            <span className="dialog-name">{player.tag}:</span> {player.bio}
          </p>
        </div>
      </div>
    </section>
  )
}
