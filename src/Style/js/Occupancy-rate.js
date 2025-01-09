import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import '../css/Occupancy-rate.css';

function Occupancy() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      const filteredData = jsonData.filter((row) => row["Travaux"] !== "Études");

      setData(filteredData);
    };

    reader.readAsBinaryString(file);
  };

  const handleShowValues = (row) => {
    alert(`Valeurs sélectionnées: ${JSON.stringify(row, null, 2)}`);
  };

  return (
    <div style={{ padding: '20px', direction: 'rtl', textAlign: 'right' }}>
      <h1>Progrès des Travaux</h1>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ marginBottom: '20px' }}
      />
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', background: '#4CAF50', color: 'white' }}>Travaux</th>
            <th style={{ padding: '10px', background: '#4CAF50', color: 'white' }}>Progrès des Travaux</th>
            <th style={{ padding: '10px', background: '#4CAF50', color: 'white' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', textAlign: 'center' }}>{row["Travaux"]}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{row["Progrès des Travaux"] || "0%"}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                <button
                  onClick={() => handleShowValues(row)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Voir les valeurs
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Occupancy;
