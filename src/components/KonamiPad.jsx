import { beep } from '../sound.js'

// Botones B y A que aparecen en táctil al completar ↑↑↓↓←→←→
export default function KonamiPad({ onPress }) {
  const tap = (key) => () => {
    beep('select')
    navigator.vibrate?.(25)
    onPress(key)
  }

  return (
    <div className="konami-pad" role="group" aria-label="Botones B y A">
      <button className="pad-btn pad-b" onClick={tap('b')} aria-label="Botón B">B</button>
      <button className="pad-btn pad-a" onClick={tap('a')} aria-label="Botón A">A</button>
    </div>
  )
}
