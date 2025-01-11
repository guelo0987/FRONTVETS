import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage.jsx' // Asegúrate de que la ruta sea correcta
import RegisterPage from './Pages/RegisterPage.jsx' // Asegúrate de que la ruta sea correcta
import HomePage from './Pages/HomePage.jsx'
import ServiciosPage from './Pages/ServiciosPage.jsx'
import CitaPage from './Pages/CitaPage.jsx'
import PagoPage from './Pages/PagoPage.jsx'
import ContactoPage from './Pages/ContactoPage.jsx'
import PerfilPage from './Pages/PerfilPage.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/cita" element={<CitaPage />} />
        <Route path="/pago" element={<PagoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
      </Routes>
    </Router>
  )
}

export default App
