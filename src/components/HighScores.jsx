import { highScores } from '../data.js'

const colors = ['yellow', 'cyan', 'pink', 'green']

export default function HighScores() {
  return (
    <section id="scores" className="section">
      <h2 className="section-title">
        <span className="stage">STAGE 4</span> HIGH SCORES
      </h2>
      <div className="scoreboard pixel-border">
        <div className="score-row score-head">
          <span>RANK</span><span>SCORE</span><span>NAME</span>
        </div>
        {highScores.map((h, i) => (
          <div className={`score-row neon-${colors[i % colors.length]}`} key={h.name}>
            <span>{h.rank}</span>
            <span>{h.score}</span>
            <span>
              {h.name}
              <small>{h.role}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
