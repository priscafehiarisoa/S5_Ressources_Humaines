import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Langues.css";

const Langues = () => {
    const navigate = useNavigate();
    const [langue, setLangue] = useState("");
    const [niveau, setNiveau] = useState("debutant");
    const [listeLangues, setListeLangues] = useState([]);
    const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);

    useEffect(() => {
        // Charger les données depuis localStorage lors du chargement initial
        const savedListeLangues = localStorage.getItem("listeLangues");
        if (savedListeLangues) {
            setListeLangues(JSON.parse(savedListeLangues));
            setIsLocalStorageLoaded(true);
        }
    }, []);

    useEffect(() => {
        // Sauvegarder les données dans localStorage lorsque la liste de langues change
        if (isLocalStorageLoaded) {
            localStorage.setItem("listeLangues", JSON.stringify(listeLangues));
        }
    }, [listeLangues, isLocalStorageLoaded]);

    const ajouterLangue = () => {
        // Vérifiez si la langue n'est pas déjà présente dans la liste
        if (!listeLangues.some(item => item.langue === langue)) {
            // Créez un nouvel objet langue avec les valeurs actuelles
            const nouvelleLangue = { langue, niveau };

            // Ajoutez la nouvelle langue à la liste des langues
            setListeLangues([...listeLangues, nouvelleLangue]);

            // Réinitialisez les champs du formulaire
            setLangue("");
            setNiveau("debutant");
        }
    };

    const valider = () => {
        // Sauvegarder la liste des compétences linguistiques dans localStorage
        localStorage.setItem("listeLangues", JSON.stringify(listeLangues));
        navigate("/diplome");


        // Vous pouvez également effectuer d'autres actions ou redirections ici
        alert("Compétences linguistiques enregistrées avec succès !");
    };


    return (
        <div>
            <h1>Ajouter des Compétences Linguistiques</h1>
            <form>
                <div>
                    <label>Langue :</label>
                    <select
                        value={langue}
                        onChange={(e) => setLangue(e.target.value)}
                        required
                    >
                        <option value="anglais">Anglais</option>
                        <option value="francais">Français</option>
                        <option value="espagnol">Espagnol</option>
                        {/* Ajoutez d'autres langues ici */}
                    </select>
                </div>
                <div>
                    <label>Niveau :</label>
                    <label>Débutant</label>
                    <input
                        type="radio"
                        id="debutant"
                        name="niveau"
                        value="debutant"
                        checked={niveau === "debutant"}
                        onChange={() => setNiveau("debutant")}
                        required
                    />
                    <label>Intermédiaire</label>
                    <input
                        type="radio"
                        id="intermediaire"
                        name="niveau"
                        value="intermediaire"
                        checked={niveau === "intermediaire"}
                        onChange={() => setNiveau("intermediaire")}
                    />
                    <label>Avancé</label>
                    <input
                        type="radio"
                        id="avance"
                        name="niveau"
                        value="avance"
                        checked={niveau === "avance"}
                        onChange={() => setNiveau("avance")}
                    />
                </div>
                <div className="row">
                    <button type="button" onClick={ajouterLangue}>
                        Ajouter
                    </button>
                </div>
                <div className="bout">
                    <button type="button" onClick={valider}>
                        Valider
                    </button>
                </div>
            </form>

            <h2>Compétences Linguistiques Ajoutées :</h2>
            <ul>
                {listeLangues.map((item, index) => (
                    <li key={index}>
                        {item.langue} (Niveau: {item.niveau})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Langues;
