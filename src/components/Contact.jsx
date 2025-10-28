export default function Contact() {
  return (
    <section id="contact" className="container-prose">
      <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
        <div>
          <h3 className="text-lg font-semibold">Let's build something great</h3>
          <p className="text-sm text-white/70">Open to freelance and full-time opportunities.</p>
        </div>
        <a href="mailto:prabhpreet429@gmail.com" className="rounded-xl bg-[var(--color-secondary)] px-5 py-2 text-sm font-semibold text-black hover:opacity-90">Email me</a>
      </div>
    </section>
  )
}
