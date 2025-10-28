export default function App() {
  return (
    <div className="min-h-dvh">
      <nav className="container-prose sticky top-0 z-50 py-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#home" className="text-lg font-bold tracking-tight">Prabhpreet Singh</a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-[var(--color-secondary)] transition-colors">Work Experience</a>
            <a href="#projects" className="hover:text-[var(--color-secondary)] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[var(--color-secondary)] transition-colors">Skills</a>
            <a href="#about" className="hover:text-[var(--color-secondary)] transition-colors">About</a>
            <a href="#contact" className="hover:text-[var(--color-secondary)] transition-colors">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[var(--color-primary)]/25 hover:opacity-90">Hire me</a>
        </div>
      </nav>

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
              <img src="/vite.svg" alt="Avatar" className="h-48 w-48 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl sm:h-56 sm:w-56" />
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-24 pb-24">
        <section id="work" className="container-prose">
          <h2 className="mb-6 text-2xl font-semibold">Work Experience</h2>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-semibold">Software Developer</h3>
                <span className="text-xs text-white/60">May 2021 - Present</span>
              </div>
              <p className="text-white/70 text-sm mb-4">Sparklit Networks | Victoria, BC</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Transformed PHP front-end to Vue.js, creating reusable components that reduced developer workload by 30%</li>
                <li>• Led migration from PHP 7.4 to PHP 8, ensuring compatibility and efficient coding practices</li>
                <li>• Created optimized API endpoints with proper data validations and comprehensive documentation</li>
                <li>• Established HTML Ad template gallery following IAB guidelines, reducing support tickets by 20%</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-semibold">Junior Full-Stack Developer</h3>
                <span className="text-xs text-white/60">Sep 2020 - Apr 2021</span>
              </div>
              <p className="text-white/70 text-sm mb-4">Uxpertise | Montreal, QC</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Developed e-learning web application front-end using AngularJS with statistics and interactive dashboard</li>
                <li>• Implemented database queries and stored procedures using Microsoft SQL Server, reducing page load time by 30%</li>
                <li>• Crafted back-end repositories using C# and Entity Framework for efficient data handling</li>
                <li>• Managed work items using Azure DevOps while following Agile methodology</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-semibold">Software Engineer Intern</h3>
                <span className="text-xs text-white/60">May 2020 - Sep 2020</span>
              </div>
              <p className="text-white/70 text-sm mb-4">Flinks Technology | Montreal, QC</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Contributed to Open Banking web application development using C#, Angular 8, and Google Firebase</li>
                <li>• Collaborated with 8-member team in Agile environment, ensuring timely sprint completion</li>
                <li>• Conducted 20+ code reviews on GitHub, reducing post-deployment defects by 20%</li>
                <li>• Integrated front-end services to call Web API methods and improved code quality standards</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-semibold">Java Trainee</h3>
                <span className="text-xs text-white/60">May 2015 - Jul 2015</span>
              </div>
              <p className="text-white/70 text-sm mb-4">Piford Technologies | Mohali, Punjab</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Developed projects using Java and Oracle database management system in NetBeans IDE</li>
                <li>• Created 2D Car Race Game using Java Graphics class with scoring system</li>
                <li>• Implemented SQL queries to store user scores and usernames in Oracle database</li>
              </ul>
            </div>
          </div>
        </section>
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

        <section id="skills" className="container-prose">
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Tailwind", "Node.js", "Vite", "Framer Motion"].map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{skill}</span>
            ))}
      </div>
        </section>

        <section id="about" className="container-prose">
          <h2 className="mb-4 text-2xl font-semibold">About</h2>
          <div className="max-w-prose space-y-4 text-white/70">
            <p>
              A passionate Full Stack Developer with a strong background in working on various projects and following Agile methodologies.
            </p>
            <p>
              With a proven track record of delivering high-quality software solutions, I bring a diverse skill set to the table. My deep understanding of both front-end and back-end development allows me to contribute effectively to the entire software development lifecycle.
        </p>
      </div>
        </section>

        <section id="contact" className="container-prose">
          <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
            <div>
              <h3 className="text-lg font-semibold">Let’s build something great</h3>
              <p className="text-sm text-white/70">Open to freelance and full-time opportunities.</p>
            </div>
            <a href="mailto:prabhpreet429@gmail.com" className="rounded-xl bg-[var(--color-secondary)] px-5 py-2 text-sm font-semibold text-black hover:opacity-90">Email me</a>
          </div>
        </section>
      </main>

      <footer className="container-prose py-10 text-sm text-white/60">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <h4 className="font-semibold text-white">Address</h4>
            <p>Edmonton, AB, Canada</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Phone</h4>
            <p><a href="tel:+15145686633" className="hover:text-white">+1 (514) 568-6633</a></p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Email</h4>
            <p><a href="mailto:prabhpreet429@gmail.com" className="hover:text-white">prabhpreet429@gmail.com</a></p>
          </div>
        </div>
        <div className="mt-6 text-center">
          © {new Date().getFullYear()} Prabhpreet Singh
        </div>
      </footer>
    </div>
  )
}
