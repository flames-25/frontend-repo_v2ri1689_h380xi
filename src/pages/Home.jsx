import React from 'react'
import Spline from '@splinetool/react-spline'
import EditableText from '../components/EditableText'

export default function Home() {
  return (
    <div>
      {/* Hero with Spline and editable title/paragraph */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center max-w-3xl px-4">
          <EditableText tag="h1" className="text-3xl sm:text-4xl font-bold text-gray-900" storageKey="home_heading" defaultValue="Your Company — Modern Solutions for Modern Work" />
          <EditableText tag="p" className="mt-3 text-gray-600" storageKey="home_sub" defaultValue="We turn complex office workflows into delightful, efficient experiences." />
        </div>
      </section>

      {/* Intro section with image frame and paragraph */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-video w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
          <EditableText tag="div" className="text-sm text-gray-500" storageKey="home_image_frame" defaultValue="Click here and paste an image URL or note: This is your editable image frame." />
        </div>
        <EditableText tag="p" className="text-gray-700 leading-relaxed" storageKey="home_side_para" defaultValue="Write a short description about your office, mission, or recent achievements. This paragraph is fully editable." />
      </section>

      {/* Our Services */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
              <div className="aspect-video w-full rounded-lg border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
                <EditableText tag="div" className="text-sm" storageKey={`service_img_${i}`} defaultValue={`Service Image ${i+1} — paste image URL or description`} />
              </div>
              <EditableText tag="p" className="mt-3 text-gray-600" storageKey={`service_text_${i}`} defaultValue={`Describe service ${i+1} here. This text is editable.`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
