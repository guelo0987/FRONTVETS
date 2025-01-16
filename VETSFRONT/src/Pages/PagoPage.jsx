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

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handlePaymentClick = () => {
    setShowConfirmation(true)
  }

  const handleConfirmPayment = () => {
    setShowConfirmation(false)
    setIsProcessing(true)

    // Simulamos el procesamiento del pago
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentSuccess(true)
      handlePayment() // Genera el PDF
      
      // Ocultar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setPaymentSuccess(false)
      }, 5000)
    }, 2000)
  }

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
              onClick={handlePaymentClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Pagar y Descargar Recibo
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Confirmación */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Confirmar Pago</h3>
            <p className="text-gray-600 mb-6">¿Estás seguro de que deseas realizar el pago de ${paymentData.monto}?</p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmPayment}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Procesamiento */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-green-600 border-t-transparent"></div>
            <p className="text-lg">Procesando pago...</p>
          </div>
        </div>
      )}

      {/* Notificación de Éxito */}
      {paymentSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-8 py-4 rounded-md shadow-lg z-50 flex items-center space-x-2">
          <svg 
            className="h-6 w-6 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>¡Pago realizado con éxito! Tu recibo ha sido descargado.</span>
        </div>
      )}

      <Footer />
    </div>
  )
} 