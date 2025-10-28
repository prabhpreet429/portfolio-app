export default function Navbar() {
  return (
    <nav className="container-prose sticky top-0 z-50 py-4">
      <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
        <a href="#home" className="text-lg font-bold tracking-tight">Prabhpreet Singh</a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#work" className="hover:text-[var(--color-secondary)] transition-colors">Work Experience</a>
          <a href="#education" className="hover:text-[var(--color-secondary)] transition-colors">Education</a>
          <a href="#projects" className="hover:text-[var(--color-secondary)] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[var(--color-secondary)] transition-colors">Skills</a>
          <a href="#about" className="hover:text-[var(--color-secondary)] transition-colors">About</a>
          <a href="#contact" className="hover:text-[var(--color-secondary)] transition-colors">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/25 hover:opacity-90">Hire me</a>
      </div>
    </nav>
  )
}
