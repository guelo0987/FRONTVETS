import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el correo de recuperación
    setEnviado(true)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-200 p-4">
      <div className="w-full max-w-sm space-y-6 bg-white rounded-lg p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">¿Olvidaste tu contraseña?</h1>
          <p className="text-gray-600 text-sm">
            {!enviado 
              ? "Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecerla."
              : "Se han enviado las instrucciones a tu correo electrónico."
            }
          </p>
        </div>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                required
                className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Enviar instrucciones
            </button>
          </form>
        ) : (
          <div className="text-center">
            <svg 
              className="mx-auto h-12 w-12 text-green-600" 
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
          </div>
        )}

        <div className="text-center text-sm">
          <Link 
            to="/" 
            className="text-green-600 hover:text-green-700 underline-offset-4 hover:underline"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  )
} 