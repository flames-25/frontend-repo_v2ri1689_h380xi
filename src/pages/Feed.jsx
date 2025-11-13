import React, { useState } from 'react'
import EditableText from '../components/EditableText'

export default function Feed() {
  const [showPhone, setShowPhone] = useState(false)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <EditableText tag="h1" className="text-3xl font-bold" storageKey="feed_heading" defaultValue="Insights & Updates" />
      <EditableText tag="p" className="text-gray-600" storageKey="feed_points" defaultValue="Use this space for quick bullet-like points about your latest blogs or news." />

      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <EditableText tag="h4" className="text-lg font-semibold" storageKey={`feed_q_${i}`} defaultValue={`Question ${i+1}`} />
            <EditableText tag="p" className="text-gray-600" storageKey={`feed_a_${i}`} defaultValue="Answer goes here. Provide a helpful explanation or tip." />
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowPhone(true)}
        className="px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
      >
        <EditableText tag="span" storageKey="feed_cta" defaultValue="Schedule A Free Consulting Call" />
      </button>

      {showPhone && (
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
          <p className="font-medium">Schedule A Free Consulting Call With Representatives.</p>
          <EditableText tag="p" className="text-blue-700" storageKey="feed_number" defaultValue="Office Number: (555) 123-4567" />
        </div>
      )}
    </div>
  )
}
