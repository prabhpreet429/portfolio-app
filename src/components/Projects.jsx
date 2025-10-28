import ImageSlideshow from './ImageSlideshow'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "React • Tailwind • API",
      link: "#"
    },
    {
      id: 2,
      title: "Network Intrusion Detection System",
      description: "Python • WEKA GUI • Jupyter Notebook",
      link: "https://github.com/prabhpreet429/NetworkIntrusionDetection",
      details: [
        "Implemented preprocessing techniques on KDD Cup dataset to understand the data",
        "Used WEKA GUI software to perform feature selection on dataset",
        "Implemented K-Nearest Neighbor, Logistic Regression and Gaussian Naive Bayes classification algorithms from scratch",
        "Used Matplotlib in Python for the visualization of the dataset"
      ]
    },
    {
      id: 3,
      title: "HangMan Game (Word Guessing Game)",
      description: "C# • MSSQL • Visual Studio",
      link: "https://github.com/prabhpreet429/HangMan_CSharp",
      details: [
        "Developed a guessing game in Windows Form Application with user login functionality",
        "Implemented random word selection and alphabet guessing mechanics",
        "Computed scoring system based on alphabets guessed and chances used",
        "Used MSSQL database to store and display username and scores in descending order"
      ],
      images: ["/hangman/hangman-game-1.png", "/hangman/hangman-game-2.png", "/hangman/hangman-game-3.png"]
    },
    {
      id: 4,
      title: "Project 4",
      description: "React • Tailwind • API",
      link: "#"
    },
    {
      id: 5,
      title: "Project 5",
      description: "React • Tailwind • API",
      link: "#"
    },
    {
      id: 6,
      title: "Project 6",
      description: "React • Tailwind • API",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="container-prose">
      <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a key={project.id} href={project.link} target={project.link.startsWith('http') ? '_blank' : '_self'} rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform hover:-translate-y-1 hover:bg-white/10">
            {project.images ? (
              <ImageSlideshow images={project.images} title={project.title} />
            ) : (
              <div className="h-40 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/25 to-[var(--color-secondary)]/25" />
            )}
            <div className="mt-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-white/60">{project.description}</p>
              {project.details && (
                <ul className="mt-3 space-y-1 text-xs text-white/70">
                  {project.details.map((detail, index) => (
                    <li key={index}>• {detail}</li>
                  ))}
                </ul>
              )}
              <span className="mt-2 block text-xs text-white/60 group-hover:text-white/80">View →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
