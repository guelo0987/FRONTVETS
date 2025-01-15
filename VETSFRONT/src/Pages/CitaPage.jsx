import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

// Array de servicios disponibles
const serviciosDisponibles = [
  {
    categoria: "Salud Animal",
    servicios: [
      {
        id: "consulta-medica",
        titulo: "Consultas Médicas",
        descripcion: "Atención veterinaria personalizada para tu mascota",
        precio: "Desde $30"
      },
      {
        id: "vacunacion",
        titulo: "Vacunación",
        descripcion: "Programa completo de vacunación para perros y gatos",
        precio: "Desde $25"
      },
      {
        id: "control-parasitario",
        titulo: "Control Antiparasitario",
        descripcion: "Protección integral contra parásitos internos y externos",
        precio: "Desde $20"
      }
    ]
  },
  {
    categoria: "Cirugías",
    servicios: [
      {
        id: "esterilizacion",
        titulo: "Esterilización",
        descripcion: "Procedimiento seguro realizado por expertos",
        precio: "Desde $150"
      },
      {
        id: "cirugias-especializadas",
        titulo: "Cirugías Especializadas",
        descripcion: "Intervenciones quirúrgicas con tecnología avanzada",
        precio: "Consultar"
      }
    ]
  }
]

export default function CitaPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fecha: '',
    servicio: '',
    mascota: '',
    notas: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos de la cita:', formData)
    navigate('/pago', { state: formData })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-12">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mx-4">
          <h1 className="text-3xl font-bold text-center mb-6">Reserva tu Cita</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Servicio
              </label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Selecciona un servicio</option>
                {serviciosDisponibles.map((categoria) => (
                  <optgroup key={categoria.categoria} label={categoria.categoria}>
                    {categoria.servicios.map((servicio) => (
                      <option key={servicio.id} value={servicio.id}>
                        {servicio.titulo} - {servicio.precio}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de la Mascota
                </label>
                <input
                  type="text"
                  name="mascota"
                  value={formData.mascota}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notas Adicionales
              </label>
              <textarea
                name="notas"
                value={formData.notas}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}