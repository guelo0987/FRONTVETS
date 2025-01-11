import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200 p-4">
      <div className="w-full max-w-sm space-y-6 bg-white rounded-lg p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-900">Crea una cuenta</h1>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <input
              id="username"
              placeholder="Nombre de usuario"
              required
              type="text"
              className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <input
              id="email"
              placeholder="Correo electrónico"
              required
              type="email"
              className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <input
              id="password"
              placeholder="Contraseña"
              required
              type="password"
              className="w-full px-3 py-2 border border-green-200 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            Registrarse
          </button>
        </form>
        <div className="text-center text-sm">
          <span className="text-gray-600">¿Ya tienes una cuenta? </span>
          <Link 
            to="/" 
            className="text-green-600 hover:text-green-700 underline-offset-4 hover:underline"
          >
            Inicia sesión
          </Link>
        </div>
        <div className="pt-6 text-center text-xs text-gray-600 border-t border-gray-200">
          <div className="flex items-center justify-center gap-4">
            <span>©2025 VetCare Inc.</span>
            <Link to="/contact" className="hover:underline">
              Contáctanos
            </Link>
            <button 
              className="text-xs hover:bg-gray-100 px-3 py-1 rounded-md"
            >
              Español
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
