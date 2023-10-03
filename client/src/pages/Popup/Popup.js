import './Popup.css';
import React, { useState } from 'react';

const Popup = ({ type }) => {
    const [showForm, setShowForm] = useState(false);
    const [niveau, setNiveau] = useState('');
    const [institution, setInstitution] = useState('');
    const [domaine, setDomaine] = useState('');
    const [description, setDescription] = useState('');

    // Options spécifiques pour chaque type
    const optionsNiveau = {
        diplome: ['ajouter un diplome','License', 'Master', 'Doctorat'],
        formation: ['ajouter une formation','Formation 1', 'Formation 2', 'Formation 3'],
        experience: ['ajouter une experience','Expérience 1', 'Expérience 2', 'Expérience 3'],
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const ajouterElement = () => {
        const data = {
            niveau: niveau,
            institution: institution,
            domaine: domaine,
            description: description,
        };

        const existingData = JSON.parse(localStorage.getItem(type)) || [];

        existingData.push(data);

        localStorage.setItem(type, JSON.stringify(existingData));

        setNiveau('');
        setInstitution('');
        setDomaine('');
        setDescription('');
        setShowForm(false);
    };

    return (
        <div>
            <button onClick={toggleForm}>
                {type === 'diplome'
                    ? 'Ajouter Diplôme'
                    : type === 'formation'
                        ? 'Ajouter Formation'
                        : 'Ajouter Expérience'}
            </button>

            {showForm && (
                <div>
                    <form>
                        <label htmlFor={`${type}_niveau`}>Niveau de {type}:</label>
                        <select
                            id={`${type}_niveau`}
                            name={`${type}_niveau`}
                            value={niveau}
                            onChange={(e) => setNiveau(e.target.value)}
                        >
                            {optionsNiveau[type].map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <label htmlFor={`${type}_institution`}>Institution:</label>
                        <select
                            id={`${type}_institution`}
                            name={`${type}_institution`}
                            value={institution}
                            onChange={(e) => setInstitution(e.target.value)}
                        >
                            {/* Options d'institution spécifiques à chaque type */}
                        </select>

                        <label htmlFor={`${type}_domaine`}>Domaine:</label>
                        <select
                            id={`${type}_domaine`}
                            name={`${type}_domaine`}
                            value={domaine}
                            onChange={(e) => setDomaine(e.target.value)}
                        >
                            {/* Options de domaine spécifiques à chaque type */}
                        </select>

                        <label htmlFor={`${type}_description`}>Description:</label>
                        <input
                            type="text"
                            id={`${type}_description`}
                            name={`${type}_description`}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <button type="button" onClick={ajouterElement}>
                            Ajouter
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Popup;
