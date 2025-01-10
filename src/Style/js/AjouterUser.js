import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserForm({ userId }) {
    const [name, setName] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [poste, setPoste] = useState('');

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:3010/users/${userId}`)
                .then(res => {
                    setName(res.data.nom_employe);
                    setPrenom(res.data.Prenom);
                    setEmail(res.data.login);
                    setPwd(res.data.pwd);
                    setPoste(res.data.emolpoyer_post);
                })
                .catch(err => {
                    console.error('Erreur lors du chargement des données de l’utilisateur', err);
                });
        }
    }, [userId]);

    function handleSubmit(e) {
        e.preventDefault();
        const user = { 
            nom_employe: name, 
            Prenom: prenom, 
            login: email, 
            pwd: pwd, 
            emolpoyer_post: poste 
        };

        if (userId) {
            axios.put(`http://localhost:3010/users/update/${userId}`, user)
                .then(res => {
                    alert(res.data.message);
                })
                .catch(err => {
                    alert('Erreur lors de la mise à jour');
                });
        } else {
            axios.post("http://localhost:3010/users/add", user)
                .then(res => {
                    alert(res.data.message);
                    setName('');
                    setPrenom('');
                    setEmail('');
                    setPwd('');
                    setPoste('');
                })
                .catch(err => {
                    alert('Erreur lors de l’ajout');
                });
        }
    }

    return (
        <div className='container'>
            <center>
                <form
                    onSubmit={handleSubmit}
                    className="border p-4 rounded shadow"
                    style={{
                        width: "500px",
                    }}
                >
                    <h2 className="mb-4 text-center">{userId ? 'Modifier les informations' : 'Ajouter un utilisateur'}</h2>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom</label>
                        <input
                            id="name"
                            placeholder='Nom'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="prenom" className="form-label">Prénom</label>
                        <input
                            id="prenom"
                            placeholder='Prénom'
                            className='form-control'
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            type="text"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            id="email"
                            placeholder='Email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mot de passe</label>
                        <input
                            id="password"
                            placeholder='Mot de passe'
                            className='form-control'
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            type="password"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="poste" className="form-label">Poste</label>
                        <input
                            id="poste"
                            placeholder='Poste'
                            className='form-control'
                            value={poste}
                            onChange={(e) => setPoste(e.target.value)}
                            type="text"
                        />
                    </div>

                    <div className="text-center">
                        <button className='btn btn-success' type="submit">
                            {userId ? 'Modifier' : 'Ajouter'}
                        </button>
                    </div>
                </form>
            </center>
        </div>
    );
}
