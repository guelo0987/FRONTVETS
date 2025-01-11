import { useState } from 'react'
import { jsPDF } from 'jspdf'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function PagoPage() {
  const [paymentData, setPaymentData] = useState({
    nombre: 'Juan Pérez',
    email: 'juan.perez@example.com',
    servicio: 'Consulta Médica',
    monto: 30,
    fecha: new Date().toLocaleDateString(),
  })

  const handlePayment = () => {
    const doc = new jsPDF()
    doc.setFontSize(18)
    doc.text('VetCare Inc.', 20, 20)
    doc.setFontSize(12)
    doc.text('Recibo de Pago', 20, 30)
    doc.text(`Fecha: ${paymentData.fecha}`, 20, 40)
    doc.text(`Nombre: ${paymentData.nombre}`, 20, 50)
    doc.text(`Email: ${paymentData.email}`, 20, 60)
    doc.text(`Servicio: ${paymentData.servicio}`, 20, 70)
    doc.text(`Monto: $${paymentData.monto}`, 20, 80)
    doc.text('Gracias por confiar en nosotros.', 20, 100)
    doc.save('recibo_pago.pdf')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Completa tu Pago</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <p className="mt-1 text-gray-600">{paymentData.nombre}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <p className="mt-1 text-gray-600">{paymentData.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Servicio</label>
              <p className="mt-1 text-gray-600">{paymentData.servicio}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Monto a Pagar</label>
              <p className="mt-1 text-gray-600">${paymentData.monto}</p>
            </div>
            <button
              onClick={handlePayment}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Pagar y Descargar Recibo
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 