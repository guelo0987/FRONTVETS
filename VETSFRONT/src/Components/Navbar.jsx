import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)




    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-white/95 shadow-md' : 'py-4 bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/home" className="text-2xl font-bold text-green-600">
            VetCare
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-gray-600 hover:text-green-600 transition-colors">Inicio</Link>
            <Link to="/servicios" className="text-gray-600 hover:text-green-600 transition-colors">Servicios</Link>
            <Link to="/contacto" className="text-gray-600 hover:text-green-600 transition-colors">Contacto</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Iniciar Sesión
            </Link>
            <Link
              to="/cita"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Reservar Cita
            </Link>
          </div>

          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

