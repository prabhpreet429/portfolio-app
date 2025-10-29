export default function WorkExperience() {
  return (
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
  )
}

