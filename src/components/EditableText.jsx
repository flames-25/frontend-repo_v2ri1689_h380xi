import React, { useEffect, useState } from 'react'

export default function EditableText({
  tag = 'div',
  className = '',
  placeholder = 'Click to edit',
  storageKey,
  defaultValue = ''
}) {
  const Tag = tag
  const [value, setValue] = useState('')

  useEffect(() => {
    const saved = storageKey ? localStorage.getItem(storageKey) : null
    setValue(saved !== null ? saved : defaultValue)
  }, [storageKey, defaultValue])

  const handleInput = (e) => {
    const text = e.currentTarget.innerText
    setValue(text)
    if (storageKey) localStorage.setItem(storageKey, text)
  }

  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      className={`outline-none focus:ring-2 focus:ring-blue-400/40 rounded-sm ${className}`}
    >
      {value || placeholder}
    </Tag>
  )
}
