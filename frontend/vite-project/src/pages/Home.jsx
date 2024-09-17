import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

const Home = () => {
  const navigate = useNavigate();  // Inicializa useNavigate

  const handleReservarCita = () => {
    navigate('/crear-cita');  // Redirige a la página de crear cita
  };

  return (
    <div className="container mx-auto text-center p-8">
      <p className="text-lg text-gray-600 mb-8">
        Bienvenido a nuestra plataforma. Gestione sus citas médicas fácilmente con solo unos clics.
      </p>
      <button
        onClick={handleReservarCita}  // Llama a la función cuando se hace clic
        className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
      >
        Reservar Cita
      </button>
    </div>
  );
};

export default Home;



