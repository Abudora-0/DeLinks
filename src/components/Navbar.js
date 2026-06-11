"use client"
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const LockLogo = ({ size = 30 }) => (
  <div
    style={{ width: size, height: size }}
    className="rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center shadow-md shadow-violet-300 flex-shrink-0"
  >
    <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 20 22" fill="none">
      <path d="M5 9V6.5a5 5 0 0110 0V9" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <rect x="2" y="9" width="16" height="12" rx="3" fill="white"/>
      <circle cx="10" cy="15" r="2" fill="#7c3aed"/>
      <rect x="9.1" y="16.5" width="1.8" height="2.2" rx="0.9" fill="#7c3aed"/>
    </svg>
  </div>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shorten', label: 'Shorten' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <LockLogo size={32} />
          <span className="font-bold text-[1.1rem] text-slate-800 group-hover:text-violet-600 transition-colors">
            De<span className="text-violet-600">Links</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                path === href
                  ? 'text-violet-600'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/shorten"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold hover:from-violet-500 hover:to-pink-400 transition-all shadow-md shadow-violet-200"
          >
            Try Now →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-5 py-5 flex flex-col gap-4 shadow-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-slate-700 hover:text-violet-600 font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-violet-600 font-medium transition-colors"
          >
            GitHub
          </a>
          <Link
            href="/shorten"
            className="mt-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-pink-500 text-white text-sm font-semibold text-center shadow-md"
            onClick={() => setOpen(false)}
          >
            Try Now →
          </Link>
        </div>
      )}
    </nav>
  )
}
