export default function Skills() {
  return (
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
  )
}

