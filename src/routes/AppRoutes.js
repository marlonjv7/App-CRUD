import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import List from '../containers/List'
import Registro from '../containers/Registro'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            {/* Rutas publicas */}
            <Route path="/" element={<Registro />} />
            <Route path="/list" element={<List />} />

            {/* Redireccionamiento */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes