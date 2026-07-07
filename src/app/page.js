import Link from "next/link"

const features = [
  {
    icon: "⚡",
    bg: "bg-[#ffd02f]",
    title: "Instant Generation",
    desc: "Create a short link in under a second. No delays, no waiting around.",
  },
  {
    icon: "🔓",
    bg: "bg-[#ff90e8]",
    title: "No Account Needed",
    desc: "Zero friction. Paste your URL, pick an alias, and done. No signup ever.",
  },
  {
    icon: "✏️",
    bg: "bg-[#8fd7ff]",
    title: "Custom Aliases",
    desc: "Choose your own memorable short URL instead of random characters.",
  },
  {
    icon: "💸",
    bg: "bg-[#a8e6a1]",
    title: "Free Forever",
    desc: "No premium tiers, no usage limits, no credit card. Always free.",
  },
]

const steps = [
  { num: "01", bg: "bg-[#ffd02f]", title: "Paste your URL", desc: "Drop any long link into the input field." },
  { num: "02", bg: "bg-[#ff90e8]", title: "Choose an alias", desc: "Pick a short, memorable name for your link." },
  { num: "03", bg: "bg-[#8fd7ff]", title: "Share it", desc: "Copy your new short link and share anywhere." },
]

const tickerItems = "PASTE IT ✂ CHOP IT ✂ SHARE IT ✂ NO SIGNUP ✂ FREE FOREVER ✂ "

export default function Home() {
  return (
    <main className="min-h-screen pt-16">

      {/* ── Hero ── */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up inline-block border-2 border-[#111] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] shadow-[3px_3px_0_#111] mb-8">
            ✂ Free URL shortener — no signup needed
          </div>

          <h1
            className="animate-fade-in-up-delay text-[2.7rem] leading-[1.02] sm:text-6xl md:text-[5.2rem] uppercase text-[#111] mb-8"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            Long links are<br />
            <span className="hl-pink">ugly.</span> <span className="text-[#2323ff]">Chop</span><br />
            <span className="hl-yellow">them short.</span>
          </h1>

          <p className="animate-fade-in-up-delay-2 text-lg md:text-xl max-w-xl mb-10 font-medium text-[#3d3a33]">
            DeLinks turns monstrous URLs into clean, custom short links in one
            second flat. Paste, chop, share. That&apos;s the whole product.
          </p>

          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-5">
            <Link href="/shorten" className="brut-btn bg-[#2323ff] text-white text-lg px-8 py-4">
              Chop a link →
            </Link>
            <Link href="/about" className="brut-btn bg-white text-[#111] text-lg px-8 py-4">
              What is this?
            </Link>
          </div>
        </div>
      </section>

      {/* ── Ticker strip ── */}
      <div className="ticker select-none" aria-hidden="true">
        <div className="ticker-track font-black uppercase tracking-[0.2em] text-sm text-[#111]">
          {tickerItems.repeat(4)}{tickerItems.repeat(4)}
        </div>
      </div>

      {/* ── Features ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-5xl uppercase text-[#111] mb-12"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            Why <span className="text-[#2323ff]">DeLinks?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="brut brut-hover p-7">
                <div className={`w-12 h-12 border-2 border-[#111] ${f.bg} flex items-center justify-center text-2xl mb-5`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide text-[#111] mb-2">{f.title}</h3>
                <p className="text-[#3d3a33] text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 md:py-24 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-5xl uppercase text-[#f2f0e9] mb-12"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            Three steps.<br /><span className="text-[#ffd02f]">That&apos;s it.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className={`border-[2.5px] border-[#f2f0e9] ${s.bg} p-7 shadow-[6px_6px_0_#f2f0e9]`}>
                <div
                  className="text-5xl text-[#111] mb-4"
                  style={{ fontFamily: 'var(--font-display), sans-serif' }}
                >
                  {s.num}
                </div>
                <h3 className="font-black uppercase tracking-wide text-[#111] mb-2">{s.title}</h3>
                <p className="text-[#111]/80 text-sm leading-relaxed font-semibold">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl md:text-6xl uppercase text-[#111] mb-6"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            Ready to <span className="hl-yellow">chop?</span>
          </h2>
          <p className="text-[#3d3a33] font-medium text-lg mb-10">
            Takes one second. Costs nothing. Requires nobody&apos;s email.
          </p>
          <Link href="/shorten" className="brut-btn bg-[#ffd02f] text-[#111] text-xl px-10 py-5">
            Get started — it&apos;s free
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t-[2.5px] border-[#111] py-8 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="font-black uppercase text-[#111]"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            De<span className="text-[#2323ff]">Links</span>
          </span>
          <p className="text-[#3d3a33] text-xs font-semibold uppercase tracking-wide">
            © {new Date().getFullYear()} DeLinks — free URL shortener for everyone
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-xs font-bold uppercase tracking-wide text-[#111] hover:text-[#2323ff] transition-colors">About</Link>
            <a href="https://github.com/Abudora-0/DeLinks" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wide text-[#111] hover:text-[#2323ff] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
