import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ¿Listo para darle a tu mascota el mejor cuidado?
          </h2>
          <Link
            to="/cita"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Reserva tu cita ahora
          </Link>
        </div>
      </div>
  )
}
