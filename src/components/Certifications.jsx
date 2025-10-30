import { useState } from 'react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  
  const certifications = [
    {
      id: 0,
      title: 'OWASP Top 10',
      image: '/certifications/owasp.png'
    },
    {
      id: 1,
      title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
      image: '/certifications/bootstrap.png'
    },
    {
      id: 2,
      title: 'Data Structures',
      image: '/certifications/data.png'
    },
    {
      id: 3,
      title: 'Programming Foundations with JavaScript, HTML and CSS',
      image: '/certifications/javascript.png'
    },
    {
      id: 4,
      title: 'JavaScript: Getting Started',
      image: '/certifications/javascriptplural.png'
    },
    {
      id: 5,
      title: 'Hands-on JavaScript Project: JSON',
      image: '/certifications/json.png'
    },
    {
      id: 6,
      title: 'Python: The Big Picture',
      image: '/certifications/py.png'
    },
    {
      id: 7,
      title: 'Programming for Everybody (Getting Started with Python)2',
      image: '/certifications/python.png'
    }
  ];

  return (
    <section id="certifications" className="container-prose">
      <h2 className="mb-6 text-2xl font-semibold">Certifications</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div 
            key={cert.id} 
            className="rounded-2xl border border-white/10 bg-white/5 p-4 group overflow-hidden hover:bg-white/10 transition-all cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-auto object-contain mb-4 rounded-xl"
            />
            <div className="mt-2">
              <h3 className="font-semibold text-white/90">{cert.title}</h3>
              <span className="mt-2 block text-xs text-white/60 group-hover:text-white/80">Click to view →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#1a1a1a] rounded-2xl p-6 border border-white/10"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white/90">{selectedCert.title}</h2>
              <div className="rounded-xl overflow-hidden border border-white/10">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}