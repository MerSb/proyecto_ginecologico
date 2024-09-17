import CrearPaciente from '../components/Pacientes/CrearPaciente';
import ListadoPacientes from '../components/Pacientes/ListadoPacientes';

const Pacientes = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Pacientes</h1>
      <CrearPaciente />
      <ListadoPacientes />
    </div>
  );
};

export default Pacientes;

