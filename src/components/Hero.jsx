export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[var(--color-primary)]/25 blur-[120px]" />
        <div className="absolute top-40 left-10 h-56 w-56 rounded-full bg-[var(--color-secondary)]/20 blur-[80px]" />
      </div>
      <div className="container-prose grid gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Full-Stack Software Developer
          </h1>
          <p className="text-white/70 max-w-prose">
            A passionate Full Stack Developer with a strong background in delivering high-quality software solutions across front-end and back-end, following Agile methodologies.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15">View Projects</a>
            <a href="#contact" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium hover:bg-white/05">Get in touch</a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/10 to-white/0 blur-xl" />
            <img src="/profile.jpg" alt="Prabhpreet Singh" className="h-48 w-48 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl sm:h-56 sm:w-56" />
          </div>
        </div>
      </div>
    </header>
  )
}
