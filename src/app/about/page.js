import Link from 'next/link'

export const metadata = {
  title: 'About — DeLinks',
}

const stack = [
  { name: 'Next.js 15', bg: 'bg-[#ffd02f]' },
  { name: 'React 19', bg: 'bg-[#ff90e8]' },
  { name: 'MongoDB', bg: 'bg-[#a8e6a1]' },
  { name: 'Tailwind CSS', bg: 'bg-[#8fd7ff]' },
  { name: 'Node.js', bg: 'bg-white' },
]

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border-2 border-[#111] bg-[#ff90e8] px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] shadow-[3px_3px_0_#111] mb-5">
            The fine print
          </div>
          <h1
            className="text-4xl md:text-5xl uppercase text-[#111] mb-3"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            About DeLinks
          </h1>
          <p className="text-[#3d3a33] font-medium text-lg">A simple, honest URL shortener.</p>
        </div>

        <div className="space-y-8">

          <div className="brut p-7">
            <h2 className="text-base font-black uppercase tracking-wide text-[#111] mb-3">
              ✂ What is DeLinks?
            </h2>
            <p className="text-[#3d3a33] text-sm leading-relaxed font-medium">
              DeLinks is a free, no-frills URL shortener. Paste a long URL, choose a short alias,
              and get a clean shareable link instantly. No account, no email, no credit card — just
              instant link shortening that works every time.
            </p>
          </div>

          <div className="brut p-7">
            <h2 className="text-base font-black uppercase tracking-wide text-[#111] mb-4">
              🛠 Built with
            </h2>
            <div className="flex flex-wrap gap-3">
              {stack.map(({ name, bg }) => (
                <span
                  key={name}
                  className={`px-3 py-1.5 border-2 border-[#111] text-xs font-black uppercase tracking-wide shadow-[2px_2px_0_#111] ${bg}`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="brut p-7">
            <h2 className="text-base font-black uppercase tracking-wide text-[#111] mb-3">
              ★ Open source
            </h2>
            <p className="text-[#3d3a33] text-sm leading-relaxed font-medium mb-6">
              DeLinks is an open-source project. Feel free to explore the code, fork it, or
              contribute to make it even better.
            </p>
            <a
              href="https://github.com/Abudora-0/DeLinks"
              target="_blank"
              rel="noopener noreferrer"
              className="brut-btn inline-flex items-center gap-2 bg-[#111] text-white text-sm px-5 py-3"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
          </div>

        </div>

        <div className="text-center mt-14">
          <Link href="/shorten" className="brut-btn inline-block bg-[#ffd02f] text-[#111] text-lg px-9 py-4">
            Start chopping →
          </Link>
        </div>
      </div>
    </main>
  )
}
