import { Link } from 'react-router-dom';


function Navpar() {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/alerie">Projets d'exposition</Link></li>
          <li><Link to="/ajouterprojet">Ajouter un projet</Link></li>
          <li><Link to="/">Liste des projets</Link></li>
          <li><Link to="/occupancyrate">Occupancy Rate</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navpar;
