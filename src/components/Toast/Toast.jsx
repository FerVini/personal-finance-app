import { useEffect, useRef, useState } from 'react';
import { CheckCircle, XCircle, Info, X, Undo2 } from 'lucide-react';
import './Toast.css';

const ICONS = {
  success: CheckCircle,
  error: XCircle,
  info: Info
}

export default function Toast({
  message,
  type = 'success',
  duration = 3000,
  actionLabel,
  onAction,
  onClose
}) {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef(null)

  const Icon = ICONS[type] || Info

  useEffect(() => {
    if (!message) return

    setVisible(true)

    timerRef.current = setTimeout(() => {
      handleClose()
    }, duration)

    return () => clearTimeout(timerRef.current)
  }, [message, duration])

  function handleClose() {
    setVisible(false)

    // espera a animação antes de remover
    setTimeout(() => {
      onClose?.()
    }, 300)
  }

  function handleAction() {
    clearTimeout(timerRef.current)
    onAction?.()
    handleClose()
  }

  if (!message) return null

  return (
    <div className={`toast ${type} ${visible ? 'show' : 'hide'}`}>

      <div className="toast-content">
        <Icon size={18} />
        <span>{message}</span>
      </div>

      <div className="toast-actions">
        {actionLabel && (
          <button className="action" onClick={handleAction}>
            <Undo2 size={14} />
            {actionLabel}
          </button>
        )}
        <button
          className="close"
          onClick={handleClose}
          aria-label='Fechar notificação'
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
