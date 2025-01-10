import React, { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({ projectName: "", startDate: "", endDate: "", location: "", description: "", projectImage: null });
  
  const handleChange = (e) => { const { name, value } = e.target; setFormData({...formData, [name]: value }); };
  
  const handleFileChange = (e) => { setFormData({ ...formData, projectImage: e.target.files[0] }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("projectName", formData.projectName);
    data.append("startDate", formData.startDate);
    data.append("endDate", formData.endDate);
    data.append("location", formData.location);
    data.append("description", formData.description);
    if (formData.projectImage) {
      data.append("projectImage", formData.projectImage);
    }

    fetch("/api/projects", {
        method: "POST",
        body: data,
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Project saved successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to save project.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4 text-primary">Ajouter un nouveau projet</h2>
          <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow-lg">
            <div className="form-group mb-3">
              <label className="form-label">Nom du projet :</label>
              <input type="text" className="form-control form-control-lg" name="projectName" value={formData.projectName} onChange={handleChange} required />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Date de début :</label>
              <input type="date" className="form-control form-control-lg" name="startDate" value={formData.startDate} onChange={handleChange} required />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Date de fin :</label>
              <input type="date" className="form-control form-control-lg" name="endDate" value={formData.endDate} onChange={handleChange} required />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Localisation du projet :</label>
              <input type="text" className="form-control form-control-lg" name="location" value={formData.location} onChange={handleChange} required />
            </div>

            {/* <div className="form-group mb-3">
              <label className="form-label">Description du projet :</label>
              <textarea className="form-control form-control-lg" name="description" value={formData.description} onChange={handleChange} required></textarea>
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Image du projet :</label>
              <input type="file" className="form-control form-control-lg" accept="image/*" onChange={handleFileChange} />
            </div> */}

            <button type="submit" className="btn btn-primary btn-lg w-100">Enregistrer le projet</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
