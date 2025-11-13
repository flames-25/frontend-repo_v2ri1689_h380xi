import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Assist from './pages/Assist'
import Feed from './pages/Feed'
import Contact from './pages/Contact'
import HoverRoute from './components/HoverRoute'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-slate-50">
      <Header />

      {/* Hover-to-open stripes (optional on desktop, accessible via nav too) */}
      <div className="hidden sm:grid grid-cols-4 gap-2 max-w-6xl mx-auto px-4 mt-4">
        <HoverRoute to="/about"><div className="h-2 rounded bg-blue-100" /></HoverRoute>
        <HoverRoute to="/assist"><div className="h-2 rounded bg-purple-100" /></HoverRoute>
        <HoverRoute to="/feed"><div className="h-2 rounded bg-pink-100" /></HoverRoute>
        <HoverRoute to="/contact"><div className="h-2 rounded bg-green-100" /></HoverRoute>
      </div>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/assist" element={<Assist />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
