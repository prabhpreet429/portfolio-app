import { useState, useEffect } from 'react'

export default function ImageSlideshow({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="h-40 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/25 to-[var(--color-secondary)]/25">
        <img 
          src={images[currentIndex]} 
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

