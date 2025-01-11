import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const slides = [
  {
    title: "Cuidado Médico Integral",
    description: "Atención veterinaria de calidad para tu mascota",
    image: "img/perro1.jpeg"
  },
  {
    title: "Vacunas y Desparasitación",
    description: "Mantén a tu mascota protegida y saludable",
    image: "img/perro2.jpeg"
  },
  {
    title: "Estética y Spa para Mascotas",
    description: "Dale a tu mascota el cuidado que merece",
    image: "img/perro3.jpeg"
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <Link
                  to="/servicios"
                  className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors inline-block"
                >
                  Explora Nuestros Servicios
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
