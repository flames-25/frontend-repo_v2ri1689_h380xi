import React from 'react'
import EditableText from '../components/EditableText'

function Stars() {
  return (
    <div className="flex gap-1 text-yellow-500" aria-label="rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      {/* Top section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-[4/5] w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
          <EditableText tag="div" className="text-sm" storageKey="about_img_1" defaultValue="About page image (left) — paste an image URL or description" />
        </div>
        <EditableText tag="p" className="text-gray-700 leading-relaxed" storageKey="about_para_1" defaultValue="We are a forward-thinking office focused on quality, service, and lasting relationships." />
      </section>

      {/* Second section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <EditableText tag="p" className="order-2 md:order-1 text-gray-700 leading-relaxed" storageKey="about_para_2" defaultValue="Our team blends creativity and technology to solve real business challenges." />
        <div className="order-1 md:order-2 aspect-[4/5] w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
          <EditableText tag="div" className="text-sm" storageKey="about_img_2" defaultValue="About page image (right) — paste an image URL or description" />
        </div>
      </section>

      {/* Reviews */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border p-4 bg-white">
              <Stars />
              <EditableText tag="p" className="mt-2 text-gray-600" storageKey={`cust_rev_txt_${i}`} defaultValue="Wonderful experience working with this team!" />
              <div className="mt-3 aspect-square w-full max-w-[120px] rounded-full border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
                <EditableText tag="div" className="text-xs" storageKey={`cust_rev_img_${i}`} defaultValue="Profile Image" />
              </div>
              <EditableText tag="p" className="mt-2 font-bold" storageKey={`cust_rev_name_${i}`} defaultValue="Customer Name" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Team Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border p-4 bg-white">
              <Stars />
              <EditableText tag="p" className="mt-2 text-gray-600" storageKey={`team_rev_txt_${i}`} defaultValue="Proud to be part of this amazing team!" />
              <div className="mt-3 aspect-square w-full max-w-[120px] rounded-full border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400">
                <EditableText tag="div" className="text-xs" storageKey={`team_rev_img_${i}`} defaultValue="Profile Image" />
              </div>
              <EditableText tag="p" className="mt-2 font-bold" storageKey={`team_rev_name_${i}`} defaultValue="Team Member" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
