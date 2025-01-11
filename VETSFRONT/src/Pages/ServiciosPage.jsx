import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const servicios = [
  {
    categoria: "Salud Animal",
    items: [
      {
        titulo: "Consultas Médicas",
        descripcion: "Atención veterinaria personalizada para tu mascota",
        icono: "🏥",
        precio: "Desde $30"
      },
      {
        titulo: "Vacunación",
        descripcion: "Programa completo de vacunación para perros y gatos",
        icono: "💉",
        precio: "Desde $25"
      },
      {
        titulo: "Control Antiparasitario",
        descripcion: "Protección integral contra parásitos internos y externos",
        icono: "🦠",
        precio: "Desde $20"
      }
    ]
  },
  {
    categoria: "Cirugías",
    items: [
      {
        titulo: "Esterilización",
        descripcion: "Procedimiento seguro realizado por expertos",
        icono: "⚕️",
        precio: "Desde $150"
      },
      {
        titulo: "Cirugías Especializadas",
        descripcion: "Intervenciones quirúrgicas con tecnología avanzada",
        icono: "🔬",
        precio: "Consultar"
      }
    ]
  },
  // Más categorías...
]

const testimonios = [
  {
    nombre: "María García",
    mascota: "Luna",
    comentario: "Excelente atención para mi gatita. El personal es muy profesional.",
    imagen: "/img/testimonio1.jpg"
  },
  // Más testimonios...
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nuestros Servicios para el Cuidado de tu Mascota
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cuidamos la salud y bienestar de tus mejores amigos con amor y profesionalismo
            </p>
          </div>
        </div>
      </div>

      {/* Servicios Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {servicios.map((categoria, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{categoria.categoria}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categoria.items.map((servicio, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{servicio.icono}</div>
                    <h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
                    <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                    <p className="text-green-600 font-semibold mb-4">{servicio.precio}</p>
                    <Link
                      to="/cita"
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      Reservar Cita
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonios */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonio.nombre}</h3>
                    <p className="text-gray-600">Mascota: {testimonio.mascota}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonio.comentario}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 