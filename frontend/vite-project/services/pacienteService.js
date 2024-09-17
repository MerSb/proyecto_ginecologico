// services/pacienteService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pacientes';

export const getAllPacientes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching pacientes:", error);
    throw error;
  }
};

export const createPaciente = async (pacienteData) => {
  try {
    const response = await axios.post(API_URL, pacienteData);
    return response.data;
  } catch (error) {
    console.error("Error creating paciente:", error);
    throw error;
  }
};
