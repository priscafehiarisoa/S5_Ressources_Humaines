import './Inscription.css'
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Inscription = () => {
    const navigate = useNavigate();
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");
    const [ville, setVille] = useState("Paris");
    const [motDePasse1, setMotDePasse1] = useState("");
    const [motDePasse2, setMotDePasse2] = useState("");

    const handleInscription = () => {
        if (motDePasse1 === motDePasse2) {
            // Les mots de passe correspondent, vous pouvez effectuer une action ici
            alert("Inscription réussie !");
            // Stockez les valeurs dans la localStorage
            localStorage.setItem("nom", nom);
            localStorage.setItem("prenom", prenom);
            localStorage.setItem("email", email);
            localStorage.setItem("adresse", adresse);
            localStorage.setItem("ville", ville);
            // Redirigez vers la page des langues après l'inscription réussie
            navigate("/langues");
        } else {
            alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
        }
    };

    return (
        <div>
            <h1>Inscription</h1>
            <form className="narrow-form">
                <div>
                    <label>Nom :</label>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Prénom :</label>
                    <input
                        type="text"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email :</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Adresse :</label>
                    <input
                        type="text"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ville :</label>
                    <select value={ville} onChange={(e) => setVille(e.target.value)}  className="form-select">
                        <option value="Paris">Paris</option>
                        <option value="Marseille">Marseille</option>
                        <option value="Lyon">Lyon</option>
                        {/* Ajoutez d'autres options ici */}
                    </select>
                </div>
                <div>
                    <label>Mot de passe :</label>
                    <input
                        type="password"
                        value={motDePasse1}
                        onChange={(e) => setMotDePasse1(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirmer le mot de passe :</label>
                    <input
                        type="password"
                        value={motDePasse2}
                        onChange={(e) => setMotDePasse2(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="button" onClick={handleInscription} className="form-button">
                        S'inscrire
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Inscription;

