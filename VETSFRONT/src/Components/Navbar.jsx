import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
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
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                  JP
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/perfil"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mi Perfil
                  </Link>
                  <Link
                    to="/perfil#reservas"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mis Reservas
                  </Link>
                  <hr className="my-1" />
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Cerrar Sesión
                  </Link>
                </div>
              )}
            </div>
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

