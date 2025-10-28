export default function Projects() {
  return (
    <section id="projects" className="container-prose">
      <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <a key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform hover:-translate-y-1 hover:bg-white/10">
            <div className="h-40 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/25 to-[var(--color-secondary)]/25" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Project {i + 1}</h3>
                <p className="text-sm text-white/60">React • Tailwind • API</p>
              </div>
              <span className="text-xs text-white/60 group-hover:text-white/80">View →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
