import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Pacientes from './pages/Pacientes';
import Citas from './pages/Citas';
import CrearCita from './components/Citas/CrearCita';
import Historiales from './pages/Historiales';
import Header from './components/ui/Header';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <main className="p-4">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/crear-cita" element={<CrearCita />} />
        <Route path="/historiales" element={<Historiales />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

