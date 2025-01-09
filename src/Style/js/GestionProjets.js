import React, { useState, useEffect } from "react";
// import '../css/GestionProjets.css'
const ProjectManager = () => {
    const [projects, setProjects] = useState([
        {
            projectName: "Nom du projet",
            startDate: "Date de début",
            endDate: "Date de fin",
            location: "Lieu",
            description: "Description",
        },
    ]);
    const [editingProject, setEditingProject] = useState(null);
    const [editFormData, setEditFormData] = useState({
        projectName: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
    });


    useEffect(() => {
        fetch("/api/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);


    const handleDelete = (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
            fetch(`/api/projects/${id}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.ok) {
                        setProjects(projects.filter((project) => project.id !== id));
                        alert("Le projet a été supprimé avec succès !");
                    }
                })
                .catch((error) => console.error("Error deleting project:", error));
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project.id);
        setEditFormData({
            projectName: project.projectName,
            startDate: project.startDate,
            endDate: project.endDate,
            location: project.location,
            description: project.description,
        });
    };


    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: value,
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/projects/${editingProject}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editFormData),
        })
            .then((response) => {
                if (response.ok) {
                    setProjects(
                        projects.map((project) =>
                            project.id === editingProject ? { ...project, ...editFormData } : project
                        )
                    );
                    setEditingProject(null);
                    alert("Le projet a été modifié avec succès !");
                }
            })
            .catch((error) => console.error("Error updating project:", error));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Gestion des projets</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Nom du projet</th>
                            <th>Date de début</th>
                            <th>Date de fin</th>
                            <th>Lieu</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.projectName}</td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                <td>{project.location}</td>
                                <td>{project.description}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => handleEdit(project)}
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(project.id)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editingProject && (
                <div className="edit-form mt-4">
                    <h3>Modifier le projet</h3>
                    <form onSubmit={handleEditSubmit} className="p-4 border rounded bg-light shadow">
                        <div className="form-group mb-3">
                            <label>Nom du projet:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="projectName"
                                value={editFormData.projectName}
                                onChange={handleEditChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Date de début:</label>
                            <input
                                type="date"
                                className="form-control"
                                name="startDate"
                                value={editFormData.startDate}
                                onChange={handleEditChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Date de fin:</label>
                            <input
                                type="date"
                                className="form-control"
                                name="endDate"
                                value={editFormData.endDate}
                                onChange={handleEditChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Lieu:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="location"
                                value={editFormData.location}
                                onChange={handleEditChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Description:</label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={editFormData.description}
                                onChange={handleEditChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Enregistrer les modifications
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary ms-2"
                            onClick={() => setEditingProject(null)}
                        >
                            Annuler
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ProjectManager;
