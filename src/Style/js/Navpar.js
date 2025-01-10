import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navpar() {
  return (
    <div className="d-flex flex-column vh-100 p-3 bg-light border-end">
      <h4 className="text-center mb-4 text-primary">Existant</h4>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/alerie" className="nav-link">Projets d'exposition</Link>
        </li>
        <li className="nav-item">
          <Link to="/ajouterprojet" className="nav-link">Ajouter un projet</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Liste des projets</Link>
        </li>
        <li className="nav-item">
          <Link to="/occupancyrate" className="nav-link">Occupancy Rate</Link>
        </li>
        <li className="nav-item">
          <Link to="/AjouterUser" className="nav-link">Ajouter user</Link>
        </li>
        <li className="nav-item">
          <Link to="/utilisateurs" className="nav-link">Liste utilisateurs</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navpar;
