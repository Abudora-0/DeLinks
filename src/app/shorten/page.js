"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Shorten() {
  const [url, setUrl] = useState('')
  const [shorturl, setShorturl] = useState('')
  const [generated, setGenerated] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!url.trim() || !shorturl.trim()) {
      setError('Please fill in both fields.')
      return
    }
    setLoading(true)
    setError('')
    setGenerated('')

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, shorturl }),
      })
      const data = await res.json()

      if (data.success) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}${shorturl}`)
        setUrl('')
        setShorturl('')
      } else {
        setError(data.message || 'Something went wrong.')
      }
    } catch {
      setError('Failed to connect. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(generated)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* ignore */ }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="relative w-full max-w-lg">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block border-2 border-[#111] bg-[#ffd02f] px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0_#111] mb-5">
            ✂ The chopping block
          </div>
          <h1
            className="text-4xl md:text-5xl uppercase text-[#111] mb-3"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            Shorten a URL
          </h1>
          <p className="text-[#3d3a33] font-medium text-sm">
            Paste your long link, pick an alias, chop it down.
          </p>
        </div>

        {/* Card */}
        <div className="brut p-7">
          <div className="space-y-5">

            {/* URL input */}
            <div>
              <label className="block text-[11px] font-black text-[#111] mb-2 uppercase tracking-[0.15em]">
                01 — Original URL
              </label>
              <input
                type="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://very-long-website-url.com/some/path"
                className="brut-input"
              />
            </div>

            {/* Short alias input */}
            <div>
              <label className="block text-[11px] font-black text-[#111] mb-2 uppercase tracking-[0.15em]">
                02 — Custom Alias
              </label>
              <div className="flex border-[2.5px] border-[#111] bg-white focus-within:shadow-[4px_4px_0_#2323ff] transition-shadow">
                <span className="px-3 py-3 bg-[#ffd02f] text-[#111] text-xs border-r-[2.5px] border-[#111] flex items-center whitespace-nowrap font-mono font-bold">
                  delinks.app/
                </span>
                <input
                  type="text"
                  value={shorturl}
                  onChange={e => setShorturl(e.target.value)}
                  placeholder="my-link"
                  className="flex-1 px-3 py-3 bg-white text-[#111] placeholder-[#9a968a] text-sm focus:outline-none font-mono min-w-0"
                  onKeyDown={e => e.key === 'Enter' && handleGenerate()}
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="px-4 py-3 border-2 border-[#111] bg-[#ff90e8] text-[#111] text-sm font-bold flex items-center gap-2">
                <span>⚠</span> {error}
              </div>
            )}

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="brut-btn w-full bg-[#2323ff] text-white text-base py-4"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Chopping…
                </span>
              ) : (
                '✂ Chop it'
              )}
            </button>
          </div>

          {/* Success result */}
          {generated && (
            <div className="mt-6 p-4 border-[2.5px] border-[#111] bg-[#a8e6a1] shadow-[4px_4px_0_#111]">
              <p className="text-[10px] font-black text-[#111] uppercase tracking-[0.2em] mb-2">
                ✔ Fresh off the block
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={generated}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-[#111] hover:text-[#2323ff] font-mono text-sm truncate font-bold underline underline-offset-2 transition-colors"
                >
                  {generated}
                </a>
                <button
                  onClick={copy}
                  className="brut-btn flex-shrink-0 bg-[#111] text-[#ffd02f] text-xs px-3 py-1.5"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-[#3d3a33] text-xs font-semibold mt-6">
          By using DeLinks you agree to keep it respectful.{' '}
          <Link href="/about" className="text-[#2323ff] underline underline-offset-2">
            About
          </Link>
        </p>
      </div>
    </main>
  )
}
