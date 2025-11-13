import React from 'react'
import EditableText from '../components/EditableText'

function Card({ i, title }) {
  return (
    <div className="rounded-xl border p-6 bg-white text-center space-y-3">
      <div className="w-12 h-12 rounded-lg border border-dashed border-gray-300 bg-gray-50 mx-auto flex items-center justify-center text-gray-400">
        <EditableText tag="div" className="text-xs" storageKey={`${title}_logo_${i}`} defaultValue="Logo" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <EditableText tag="p" className="text-gray-600" storageKey={`${title}_text_${i}`} defaultValue={`Add ${title.toLowerCase()} details here.`} />
      <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
        <EditableText tag="span" storageKey={`${title}_btn_${i}`} defaultValue={`${title} Button`} />
      </button>
    </div>
  )
}

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div className="grid md:grid-cols-3 gap-6">
        <Card i={0} title="Call" />
        <Card i={0} title="Email" />
        <Card i={0} title="Address" />
      </div>

      <div className="rounded-2xl border p-8 bg-white space-y-4">
        <EditableText tag="h3" className="text-xl font-bold" storageKey="contact_big_heading" defaultValue="Ready to Get in Touch?" />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <label key={i} className="flex items-center gap-3 text-gray-700">
              <input type="checkbox" className="w-5 h-5" />
              <EditableText tag="span" storageKey={`contact_check_${i}`} defaultValue={`Checklist point ${i+1}`} />
            </label>
          ))}
        </div>
        <button className="px-5 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
          <EditableText tag="span" storageKey="contact_submit" defaultValue="Contact Us" />
        </button>
      </div>
    </div>
  )
}
