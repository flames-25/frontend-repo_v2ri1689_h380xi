import React from 'react'
import EditableText from '../components/EditableText'

function Frame({ i }) {
  return (
    <div className="rounded-xl border p-6 bg-white flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-lg border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
        <EditableText tag="div" className="text-xs" storageKey={`assist_logo_${i}`} defaultValue="Logo" />
      </div>
      <EditableText tag="p" className="mt-3 text-gray-600" storageKey={`assist_text_${i}`} defaultValue="Describe this assistance feature." />
    </div>
  )
}

export default function Assist() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <EditableText tag="h1" className="text-3xl font-bold" storageKey="assist_heading" defaultValue="How We Assist" />
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Frame key={i} i={i} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Frame key={i+3} i={i+3} />
        ))}
      </div>
    </div>
  )
}
