import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ConstructionProgress() {

  const data = {
    fondation: 15,
    élévation: 25,
    étanchéité: 5,
    filerie: 5,
    lustrerie: 5,
    conduites: 3,
    appareils: 3,
  };


  const [selectedSection, setSelectedSection] = useState("");

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Suivi de l'avancement des travaux</h1>

      <div className="mb-4">
        <h2>Résumé des données</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Section</th>
              <th>Action</th>
              <th>Valeur Sélectionnée</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Travaux de fondation (FONDATION)</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleClick("fondation")}
                >
                  Voir les détails
                </button>
              </td>
              <td>
                {selectedSection === "fondation" && (
                  <span>{data.fondation}%</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Travaux d'élévation (ÉLÉVATION)</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleClick("élévation")}
                >
                  Voir les détails
                </button>
              </td>
              <td>
                {selectedSection === "élévation" && (
                  <span>{data.élévation}%</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Étanchéité (ÉTANCHÉITÉ)</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleClick("étanchéité")}
                >
                  Voir les détails
                </button>
              </td>
              <td>
                {selectedSection === "étanchéité" && (
                  <span>{data.étanchéité}%</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Câblage électrique (FILERIE)</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleClick("filerie")}
                >
                  Voir les détails
                </button>
              </td>
              <td>
                {selectedSection === "filerie" && <span>{data.filerie}%</span>}
              </td>
            </tr>
            <tr>
              <td>Matériel électrique (LUSTERIE)</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleClick("lustrerie")}
                >
                  Voir les détails
                </button>
              </td>
              <td>
                {selectedSection === "lustrerie" && (
                  <span>{data.lustrerie}%</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Réseau de conduites (CONDUITES)</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleClick("conduites")}
                >
                  Voir les détails
                </button>
              </td>
              <td>
                {selectedSection === "conduites" && (
                  <span>{data.conduites}%</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Appareils sanitaires (APPAREILS SANITAIRES)</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleClick("appareils")}
                >
                  Voir les détails
                </button>
              </td>
              <td>
                {selectedSection === "appareils" && (
                  <span>{data.appareils}%</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConstructionProgress;
