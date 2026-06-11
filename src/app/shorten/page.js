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
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-16">

      {/* Top color bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 z-[60]" />

      <div className="relative w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-500 shadow-lg shadow-violet-200 mb-4">
            <svg width="26" height="26" viewBox="0 0 20 22" fill="none">
              <path d="M5 9V6.5a5 5 0 0110 0V9" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <rect x="2" y="9" width="16" height="12" rx="3" fill="white"/>
              <circle cx="10" cy="15" r="2" fill="#7c3aed"/>
              <rect x="9.1" y="16.5" width="1.8" height="2.2" rx="0.9" fill="#7c3aed"/>
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Shorten a URL</h1>
          <p className="text-slate-500 text-sm">Paste your long link and create a custom short alias.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-7 shadow-xl shadow-violet-100 border border-violet-100">
          <div className="space-y-4">

            {/* URL input */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                Original URL
              </label>
              <input
                type="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://very-long-website-url.com/some/path"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
              />
            </div>

            {/* Short alias input */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                Custom Alias
              </label>
              <div className="flex rounded-xl overflow-hidden border border-slate-200 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100 transition-all">
                <span className="px-3 py-3 bg-slate-100 text-slate-400 text-xs border-r border-slate-200 flex items-center whitespace-nowrap font-mono">
                  delinks.app/
                </span>
                <input
                  type="text"
                  value={shorturl}
                  onChange={e => setShorturl(e.target.value)}
                  placeholder="my-link"
                  className="flex-1 px-3 py-3 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none font-mono"
                  onKeyDown={e => e.key === 'Enter' && handleGenerate()}
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
                <span>⚠️</span> {error}
              </div>
            )}

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold text-sm hover:from-violet-500 hover:to-pink-400 transition-all shadow-lg shadow-violet-200 hover:shadow-violet-300 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 duration-200"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Generating…
                </span>
              ) : (
                '🔗 Generate Short Link'
              )}
            </button>
          </div>

          {/* Success result */}
          {generated && (
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-200">
              <p className="text-[10px] font-bold text-violet-500 uppercase tracking-widest mb-2">
                ✅ Your short link is ready!
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={generated}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-violet-700 hover:text-pink-600 font-mono text-sm truncate font-semibold transition-colors"
                >
                  {generated}
                </a>
                <button
                  onClick={copy}
                  className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-pink-500 text-white text-xs font-bold transition-all"
                >
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-slate-400 text-xs mt-5">
          By using DeLinks you agree to keep it respectful.{' '}
          <Link href="/about" className="text-violet-500 hover:text-violet-700 underline transition-colors">
            About
          </Link>
        </p>
      </div>
    </main>
  )
}
