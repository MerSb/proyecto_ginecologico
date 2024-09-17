import ListadoCitas from '../components/Citas/ListadoCitas';
import CrearCita from '../components/Citas/CrearCita';

const Citas = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Citas</h1>
      <CrearCita />
      <ListadoCitas />
    </div>
  );
};

export default Citas;

