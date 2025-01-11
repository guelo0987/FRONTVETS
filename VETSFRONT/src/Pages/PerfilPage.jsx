import { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function PerfilPage() {
  const [usuario, setUsuario] = useState({
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    telefono: '+51 123 456 789',
    direccion: 'Av. Principal 123, Lima',
    mascotas: [
      { nombre: 'Max', especie: 'Perro', raza: 'Labrador', edad: 3 },
      { nombre: 'Luna', especie: 'Gato', raza: 'Siamés', edad: 2 }
    ]
  })

  const [reservas, setReservas] = useState([
    {
      id: 1,
      fecha: '2024-03-25',
      servicio: 'Consulta Médica',
      estado: 'Confirmada',
      mascota: 'Max'
    },
    {
      id: 2,
      fecha: '2024-04-01',
      servicio: 'Vacunación',
      estado: 'Pendiente',
      mascota: 'Luna'
    }
  ])

  const [editando, setEditando] = useState(false)
  const [datosEditados, setDatosEditados] = useState(usuario)

  const handleChange = (e) => {
    setDatosEditados({
      ...datosEditados,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsuario(datosEditados)
    setEditando(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Perfil Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {usuario.nombre.charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{usuario.nombre}</h1>
                  <p className="text-gray-600">{usuario.email}</p>
                </div>
                <button
                  onClick={() => setEditando(!editando)}
                  className="ml-auto bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  {editando ? 'Cancelar' : 'Editar Perfil'}
                </button>
              </div>
            </div>

            {/* Formulario de Edición */}
            {editando && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Editar Información</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      value={datosEditados.nombre}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                      type="text"
                      name="telefono"
                      value={datosEditados.telefono}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Dirección</label>
                    <input
                      type="text"
                      name="direccion"
                      value={datosEditados.direccion}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Guardar Cambios
                  </button>
                </form>
              </div>
            )}

            {/* Mascotas */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Mis Mascotas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {usuario.mascotas.map((mascota, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold">{mascota.nombre}</h3>
                    <p className="text-gray-600">{mascota.especie} - {mascota.raza}</p>
                    <p className="text-gray-600">{mascota.edad} años</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reservas */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Mis Reservas</h2>
              <div className="space-y-4">
                {reservas.map((reserva) => (
                  <div key={reserva.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{reserva.servicio}</h3>
                        <p className="text-gray-600">Fecha: {reserva.fecha}</p>
                        <p className="text-gray-600">Mascota: {reserva.mascota}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        reserva.estado === 'Confirmada' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {reserva.estado}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 