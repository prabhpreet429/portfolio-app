export default function Footer() {
  return (
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
  )
}
