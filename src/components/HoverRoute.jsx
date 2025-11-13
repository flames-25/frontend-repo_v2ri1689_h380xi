import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Wrap a section that should navigate on hover
export default function HoverRoute({ to, children }) {
  const navigate = useNavigate()
  const [armed, setArmed] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const onMouseEnter = () => {
    // Slight delay to avoid accidental triggers
    timerRef.current = setTimeout(() => {
      if (!armed) {
        setArmed(true)
        navigate(to)
      }
    }, 120)
  }

  const onMouseLeave = () => {
    clearTimeout(timerRef.current)
  }

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
}
