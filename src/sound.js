// Pequeños efectos de sonido chiptune con Web Audio (sin archivos)
let ctx

const SOUNDS = {
  coin: [[988, 0.08], [1319, 0.25]],
  select: [[660, 0.06]],
  start: [[523, 0.08], [659, 0.08], [784, 0.08], [1047, 0.2]],
  powerup: [[392, 0.07], [523, 0.07], [659, 0.07], [784, 0.07], [1047, 0.07], [1319, 0.25]],
}

export function beep(name = 'select') {
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)()
    let t = ctx.currentTime
    for (const [freq, dur] of SOUNDS[name] || SOUNDS.select) {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'square'
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.06, t)
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur)
      osc.connect(gain).connect(ctx.destination)
      osc.start(t)
      osc.stop(t + dur)
      t += dur * 0.9
    }
  } catch {
    /* audio no disponible */
  }
}
