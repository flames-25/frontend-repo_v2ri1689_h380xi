import React from 'react'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Company</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-gray-100">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="p-2 rounded-full hover:bg-gray-100">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
