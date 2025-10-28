export default function Education() {
  return (
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
  )
}
