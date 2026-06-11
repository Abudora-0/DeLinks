import Link from 'next/link'

export const metadata = {
  title: 'About — DeLinks',
}

const stack = [
  { name: 'Next.js 15', color: 'bg-slate-100 text-slate-700 border-slate-200' },
  { name: 'React 19',   color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { name: 'MongoDB',    color: 'bg-green-50 text-green-700 border-green-200' },
  { name: 'Tailwind CSS', color: 'bg-sky-50 text-sky-700 border-sky-200' },
  { name: 'Node.js',    color: 'bg-lime-50 text-lime-700 border-lime-200' },
]

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 px-6">

      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-500 shadow-lg shadow-violet-200 mb-5">
            <svg width="30" height="30" viewBox="0 0 20 22" fill="none">
              <path d="M5 9V6.5a5 5 0 0110 0V9" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              <rect x="2" y="9" width="16" height="12" rx="3" fill="white"/>
              <circle cx="10" cy="15" r="2" fill="#7c3aed"/>
              <rect x="9.1" y="16.5" width="1.8" height="2.2" rx="0.9" fill="#7c3aed"/>
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">About DeLinks</h1>
          <p className="text-slate-500 text-lg">A simple, honest URL shortener.</p>
        </div>

        <div className="space-y-5">

          <div className="bg-white rounded-2xl p-7 border border-violet-100 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="text-violet-500">🔗</span> What is DeLinks?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              DeLinks is a free, no-frills URL shortener. Paste a long URL, choose a short alias,
              and get a clean shareable link instantly. No account, no email, no credit card — just
              instant link shortening that works every time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-pink-100 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-pink-500">🛠️</span> Built With
            </h2>
            <div className="flex flex-wrap gap-2">
              {stack.map(({ name, color }) => (
                <span
                  key={name}
                  className={`px-3 py-1 rounded-full border text-xs font-semibold ${color}`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-green-100 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="text-green-500">💚</span> Open Source
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              DeLinks is an open-source project. Feel free to explore the code, fork it, or
              contribute to make it even better.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
          </div>

        </div>

        <div className="text-center mt-10">
          <Link
            href="/shorten"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white font-bold text-lg hover:from-violet-500 hover:to-pink-400 transition-all shadow-xl shadow-violet-200 hover:-translate-y-1 duration-300"
          >
            Start Shortening →
          </Link>
        </div>
      </div>
    </main>
  )
}
