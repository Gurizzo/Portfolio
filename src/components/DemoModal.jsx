import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { beep } from '../sound.js'

export default function DemoModal({ project: p, onClose }) {
  const [loaded, setLoaded] = useState(false)
  const closeBtn = useRef(null)

  useEffect(() => {
    closeBtn.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`arcade-cabinet border-${p.color}`}
        role="dialog"
        aria-modal="true"
        aria-label={`Demo de ${p.title}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cabinet-head">
          <span className={`neon-${p.color}`}>{p.title}</span>
          <button ref={closeBtn} className="btn close-btn" onClick={onClose} aria-label="Cerrar demo">
            ✕
          </button>
        </div>

        <div className="cabinet-screen">
          {!loaded && <span className="loading blink">LOADING...</span>}
          <img
            src={p.gif}
            alt={`Demo animada de ${p.title}`}
            onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? 1 : 0 }}
          />
        </div>

        <div className="cabinet-actions">
          {p.apk && (
            <a className="btn btn-primary" href={p.apk} onClick={() => beep('coin')}>
              ⬇ DESCARGAR APK
            </a>
          )}
          <a className="btn" href={p.demo} target="_blank" rel="noreferrer" onClick={() => beep('select')}>
            VER RELEASE
          </a>
          <a className="btn" href={p.code} target="_blank" rel="noreferrer" onClick={() => beep('select')}>
            {'</>'} CODE
          </a>
        </div>
        <p className="cabinet-hint">ESC PARA SALIR</p>
      </div>
    </div>,
    document.body,
  )
}
