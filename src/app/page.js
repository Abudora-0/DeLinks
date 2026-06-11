import Link from "next/link"

const features = [
  {
    emoji: "⚡",
    color: "bg-yellow-50 border-yellow-200",
    iconBg: "bg-yellow-100 text-yellow-600",
    title: "Instant Generation",
    desc: "Create a short link in under a second. No delays, no waiting around.",
  },
  {
    emoji: "🔓",
    color: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-100 text-violet-600",
    title: "No Account Needed",
    desc: "Zero friction. Paste your URL, pick an alias, and done. No signup ever.",
  },
  {
    emoji: "✏️",
    color: "bg-pink-50 border-pink-200",
    iconBg: "bg-pink-100 text-pink-600",
    title: "Custom Aliases",
    desc: "Choose your own memorable short URL instead of random characters.",
  },
  {
    emoji: "💸",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100 text-green-600",
    title: "Free Forever",
    desc: "No premium tiers, no usage limits, no credit card. Always free.",
  },
]

const steps = [
  { num: "01", color: "text-violet-600", title: "Paste your URL", desc: "Drop any long link into the input field." },
  { num: "02", color: "text-pink-500",   title: "Choose an alias", desc: "Pick a short, memorable name for your link." },
  { num: "03", color: "text-orange-500", title: "Share it",        desc: "Copy your new short link and share anywhere." },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-purple-600 to-pink-500 pt-32 pb-28 px-6 text-white text-center">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white/90 text-sm mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
            Free URL Shortener — No signup needed
          </div>

          <h1 className="animate-fade-in-up-delay text-5xl md:text-[4.5rem] font-extrabold leading-[1.1] mb-6 tracking-tight">
            Shorten Links,<br />
            <span className="text-yellow-300">Amplify</span> Your Reach
          </h1>

          <p className="animate-fade-in-up-delay-2 text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            DeLinks makes it effortless to create clean, custom short URLs in seconds.
            No account, no hassle — just paste, shorten, and share.
          </p>

          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shorten"
              className="px-8 py-4 rounded-xl bg-white text-violet-700 font-bold text-lg hover:bg-yellow-50 transition-all shadow-xl hover:-translate-y-1 duration-300"
            >
              Shorten a Link →
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl bg-white/15 border border-white/30 text-white font-bold text-lg hover:bg-white/25 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-sm mx-auto">
            {[
              { value: "10K+", label: "Links Shortened" },
              { value: "99.9%", label: "Uptime" },
              { value: "Free", label: "Always" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-yellow-300">{s.value}</div>
                <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Why <span className="gradient-text">DeLinks?</span>
            </h2>
            <p className="text-slate-500">Everything you need. Nothing you don't.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className={`vibrant-card rounded-2xl p-6 border hover:-translate-y-1 transition-all duration-300 group ${f.color}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${f.iconBg}`}>
                  {f.emoji}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1.5">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              How it <span className="gradient-text">works</span>
            </h2>
            <p className="text-slate-500">Three steps. That's it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative vibrant-card rounded-2xl p-8 text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-slate-300 text-xl z-10">→</div>
                )}
                <div className={`text-5xl font-black mb-3 ${s.color}`}>{s.num}</div>
                <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to shorten?</h2>
          <p className="text-white/75 mb-8 text-lg">Join thousands who trust DeLinks every day.</p>
          <Link
            href="/shorten"
            className="inline-block px-9 py-4 rounded-xl bg-white text-violet-700 font-bold text-lg hover:bg-yellow-50 transition-all shadow-2xl hover:-translate-y-1 duration-300"
          >
            Get Started — It's Free
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6 bg-gradient-to-r from-violet-700 via-purple-600 to-pink-500">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 20 22" fill="none">
                <path d="M5 9V6.5a5 5 0 0110 0V9" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <rect x="2" y="9" width="16" height="12" rx="3" fill="white"/>
                <circle cx="10" cy="15" r="2" fill="#7c3aed"/>
              </svg>
            </div>
            <span className="font-bold text-white text-sm">De<span className="text-yellow-300">Links</span></span>
          </div>
          <p className="text-white/60 text-xs">© {new Date().getFullYear()} DeLinks. Free URL shortener for everyone.</p>
          <div className="flex gap-5">
            <Link href="/about" className="text-white/60 hover:text-white text-xs transition-colors">About</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-xs transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
