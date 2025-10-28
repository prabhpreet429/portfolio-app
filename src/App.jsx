export default function App() {
  return (
    <div className="min-h-dvh">
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
        <section id="education" className="container-prose">
          <h2 className="mb-6 text-2xl font-semibold">Education</h2>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-semibold">Master of Engineering, Software Engineering</h3>
                <span className="text-xs text-white/60">Jan 2018 – Apr 2020</span>
              </div>
              <p className="text-white/70 text-sm">Concordia University, Montreal, Canada</p>
              <p className="text-white/70 text-sm mt-2">Current GPA: 3.57/4.3</p>
              <p className="text-white/70 text-sm mt-3">
                <span className="text-white">Relevant Courses:</span> Advanced Database, Software Architecture, Advanced Programming Practices, Software Comprehension and Maintenance, Data Mining, Software Design Methodologies, Software Engineering Processes
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-semibold">Bachelor of Engineering, Computer Engineering</h3>
                <span className="text-xs text-white/60">Aug 2013 – May 2017</span>
              </div>
              <p className="text-white/70 text-sm">Chandigarh University, India</p>
              <p className="text-white/70 text-sm mt-2">Cumulative GPA: 8.6/10</p>
              <p className="text-white/70 text-sm mt-3">
                <span className="text-white">Relevant Courses:</span> C, C++, Java, Data Structure, Operating System, Compiler Design, Computer Hardware
              </p>
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
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold text-[var(--color-primary)]">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "C#", "PHP 8", "SQL"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">{skill}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold text-[var(--color-secondary)]">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML 5", "CSS 3", "JavaScript", "TypeScript", "AngularJS", "Angular 8", "Vue.js", "Bootstrap 4", "React"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">{skill}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 text-lg font-semibold text-green-500">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["ASP .NET", "Microsoft SQL Server", "MySQL", "GIT", "JSON", "AJAX", "REST API", "Entity Framework", "Postman", "Google Firebase", "JUnit", "PMD", "Sonar Lint", "WordPress", "Cursor AI"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">{skill}</span>
                ))}
              </div>
            </div>
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
              <h3 className="text-lg font-semibold">Let's build something great</h3>
              <p className="text-sm text-white/70">Open to freelance and full-time opportunities.</p>
            </div>
            <a href="mailto:prabhpreet429@gmail.com" className="rounded-xl bg-[var(--color-secondary)] px-5 py-2 text-sm font-semibold text-black hover:opacity-90">Email me</a>
          </div>
        </section>
      </main>

      <footer className="container-prose py-10 text-sm text-white/60">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <a href="https://maps.google.com/?q=Edmonton,AB,Canada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/20">
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Address</p>
              <p className="text-xs text-white/60">Edmonton, AB, Canada</p>
            </div>
          </a>
          <a href="tel:+15145686633" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-secondary)]/20">
              <svg className="h-5 w-5 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Phone</p>
              <p className="text-xs text-white/60">+1 (514) 568-6633</p>
            </div>
          </a>
          <a href="mailto:prabhpreet429@gmail.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
              <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <p className="text-xs text-white/60">prabhpreet429@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/prabhpreet-s/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
              <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">LinkedIn</p>
              <p className="text-xs text-white/60">prabhpreet-s</p>
            </div>
          </a>
        </div>
        <div className="text-center">
          © {new Date().getFullYear()} Prabhpreet Singh
        </div>
      </footer>
    </div>
  )
}
