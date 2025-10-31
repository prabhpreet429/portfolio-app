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
      {/* Use a flexible container and `object-contain` so images keep their aspect ratio and don't get cropped */}
      <div className="h-40 sm:h-48 md:h-56 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/25 to-[var(--color-secondary)]/25 flex items-center justify-center p-2">
        <img 
          src={images[currentIndex]} 
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
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

