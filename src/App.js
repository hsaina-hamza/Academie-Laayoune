import Login from './Style/js/login';
import ProjectForm from './Style/js/ProjectForm';
import GestionProjets from './Style/js/GestionProjets';
import Navpar from './Style/js/Navpar';
import OccupancyRate from './Style/js/Occupancy-rate';
import Gallery from './Style/js/TousProjets'
import './Style/css/index.css';
import {  Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <div className="main-container">
      <Navpar />
      <div className="page">
      <Routes>
        <Route path="/" element={<GestionProjets />} />
        <Route path="/alerie" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ajouterprojet" element={<ProjectForm />} />
        <Route path="/occupancyrate" element={<OccupancyRate />} />
      </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
