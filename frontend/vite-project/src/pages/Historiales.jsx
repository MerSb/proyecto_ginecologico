import CrearHistorial from '../components/Historiales/CrearHistorial';
import ListadoHistoriales from '../components/Historiales/ListadoHistoriales';

const Historiales = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">Historiales Médicos</h1>
      <CrearHistorial />
      <ListadoHistoriales />
    </div>
  );
};

export default Historiales;

