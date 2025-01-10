import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/users')
            .then(res => {
                setUsers(res.data); 
            })
            .catch(err => {
                console.error('Erreur lors de la récupération des utilisateurs', err);
            });
    }, []);

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:3010/users/delete/${userId}`)
            .then(res => {
                alert(res.data.message); 
            
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch(err => {
                alert('Erreur lors de la suppression');
            });
    };

    const editUser = (userId) => {
        
        console.log(`Modification de l'utilisateur avec l'ID : ${userId}`);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Tableau de bord de l'administrateur</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Nom de l'utilisateur</th>
                        <th scope="col">Email</th>
                        <th scope="col">Poste</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.nom_employe}</td>
                            <td>{user.login}</td>
                            <td>{user.emolpoyer_post}</td>
                            <td>
                                <button 
                                    className="btn btn-warning mx-2" 
                                    onClick={() => editUser(user.id)}
                                >
                                    Modifier
                                </button>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
