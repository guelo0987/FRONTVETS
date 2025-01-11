import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage.jsx' // Asegúrate de que la ruta sea correcta
import RegisterPage from './Pages/RegisterPage.jsx' // Asegúrate de que la ruta sea correcta
import HomePage from './Pages/HomePage.jsx'
import ServiciosPage from './Pages/ServiciosPage.jsx'
import CitaPage from './Pages/CitaPage.jsx'
import PagoPage from './Pages/PagoPage.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/app" element={
          <>
            <h1>Bienvenido a la aplicación</h1>
            <button onClick={() => setCount(count + 1)}>Contador: {count}</button>
          </>
        } />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/cita" element={<CitaPage />} />
        <Route path="/pago" element={<PagoPage />} />
      </Routes>
    </Router>
  )
}

export default App
