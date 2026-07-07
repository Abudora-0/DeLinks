"use client"
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const ChainLogo = ({ size = 34 }) => (
  <div
    style={{ width: size, height: size }}
    className="bg-[#ffd02f] border-2 border-[#111] shadow-[3px_3px_0_#111] flex items-center justify-center flex-shrink-0"
  >
    <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 32 32" fill="none">
      <path d="M13.5 18.5a4.2 4.2 0 006 0l3.5-3.5a4.2 4.2 0 00-6-6l-1.6 1.6" stroke="#111" strokeWidth="2.6" strokeLinecap="square"/>
      <path d="M18.5 13.5a4.2 4.2 0 00-6 0L9 17a4.2 4.2 0 006 6l1.6-1.6" stroke="#2323ff" strokeWidth="2.6" strokeLinecap="square"/>
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
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#f2f0e9] border-b-[2.5px] border-[#111]">
      <div className="max-w-6xl mx-auto h-full px-5 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <ChainLogo />
          <span
            className="font-black text-xl tracking-tight text-[#111] uppercase"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            De<span className="text-[#2323ff]">Links</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                path === href
                  ? 'bg-[#111] text-[#ffd02f]'
                  : 'text-[#111] hover:bg-[#ffd02f]'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/Abudora-0/DeLinks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-[#111] hover:bg-[#ffd02f] transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/shorten"
            className="brut-btn bg-[#2323ff] text-white text-sm px-5 py-2"
          >
            Chop a link
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-10 h-10 border-2 border-[#111] bg-white shadow-[3px_3px_0_#111] flex items-center justify-center text-[#111]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
            {open
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#f2f0e9] border-b-[2.5px] border-[#111] px-5 py-5 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-bold uppercase tracking-wide text-[#111] hover:text-[#2323ff] transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/Abudora-0/DeLinks"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold uppercase tracking-wide text-[#111] hover:text-[#2323ff] transition-colors"
          >
            GitHub
          </a>
          <Link
            href="/shorten"
            className="brut-btn bg-[#2323ff] text-white text-sm px-5 py-2.5 text-center mt-1"
            onClick={() => setOpen(false)}
          >
            Chop a link
          </Link>
        </div>
      )}
    </nav>
  )
}
