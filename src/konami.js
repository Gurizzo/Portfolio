import { useCallback, useEffect, useRef, useState } from 'react'

const SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
const ARROWS_DONE = 8 // posición tras ↑↑↓↓←→←→
const PAD_TIMEOUT = 8000 // ms que se muestran los botones B/A

// Swipe rápido y corto = flecha (para no confundirlo con un scroll normal)
const SWIPE_MIN = 40 // px
const SWIPE_MAX_TIME = 450 // ms

const isTouch = () => window.matchMedia('(pointer: coarse)').matches

/**
 * Código Konami con teclado (↑↑↓↓←→←→BA) o en táctil:
 * deslizar para las flechas y, al completarlas, aparecen los botones B y A.
 */
export function useKonami(onUnlock) {
  const index = useRef(0)
  const hideTimer = useRef(null)
  const [padVisible, setPadVisible] = useState(false)
  const unlockRef = useRef(onUnlock)
  unlockRef.current = onUnlock

  const hidePad = useCallback(() => {
    clearTimeout(hideTimer.current)
    setPadVisible(false)
  }, [])

  const press = useCallback((key) => {
    const i = index.current
    if (key === SEQUENCE[i]) index.current = i + 1
    else if (key === 'ArrowUp') index.current = i === 2 ? 2 : 1 // ↑↑↑ sigue valiendo
    else index.current = 0

    if (index.current === ARROWS_DONE && isTouch()) {
      setPadVisible(true)
      clearTimeout(hideTimer.current)
      hideTimer.current = setTimeout(() => {
        index.current = 0
        setPadVisible(false)
      }, PAD_TIMEOUT)
    } else if (index.current < ARROWS_DONE) {
      hidePad()
    }

    if (index.current === SEQUENCE.length) {
      index.current = 0
      hidePad()
      navigator.vibrate?.([60, 40, 120])
      unlockRef.current()
    }
  }, [hidePad])

  useEffect(() => {
    const onKey = (e) => press(e.key.length === 1 ? e.key.toLowerCase() : e.key)

    let start = null
    const onTouchStart = (e) => {
      if (e.touches.length !== 1 || e.target.closest?.('.konami-pad')) return (start = null)
      const t = e.touches[0]
      start = { x: t.clientX, y: t.clientY, time: Date.now() }
    }
    const onTouchEnd = (e) => {
      if (!start) return
      const t = e.changedTouches[0]
      const dx = t.clientX - start.x
      const dy = t.clientY - start.y
      const quick = Date.now() - start.time < SWIPE_MAX_TIME
      start = null
      if (!quick || Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE_MIN) return
      // Dedo hacia arriba = ↑ (aunque la página haga scroll hacia abajo)
      if (Math.abs(dx) > Math.abs(dy)) press(dx > 0 ? 'ArrowRight' : 'ArrowLeft')
      else press(dy < 0 ? 'ArrowUp' : 'ArrowDown')
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      clearTimeout(hideTimer.current)
    }
  }, [press])

  return { padVisible, press }
}
