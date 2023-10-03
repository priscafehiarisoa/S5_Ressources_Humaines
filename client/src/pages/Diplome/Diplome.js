import './Diplome.css'
import React, { useState, useEffect } from "react";
import Inscription from "../Inscription";
import Popup from "../Popup";
import { Link, useNavigate } from "react-router-dom";

const Diplome = () => {
    const [niveau, setNiveau] = useState("debutant");


    const valider = () => {
        // Sauvegarder la liste des compétences linguistiques dans localStorage
        localStorage.setItem("niveau", niveau);


    };

    return(
        <form action="">
            <div>
                <h1>
                    Diplomes
                </h1>
                <div className='row'>
                    <label>Niveau :</label>
                    <div className=" offset-2 col-3">   <label>CEPE</label>
                        <input
                            type="radio"
                            id="cepe"
                            name="niveau"
                            value="cepe"
                            checked={niveau === "cepe"}
                            onChange={() => setNiveau("cepe")}
                            required
                        /></div>
                   <div className="col-3">
                       <label>BEPC</label>
                       <input
                           type="radio"
                           id="bepc"
                           name="niveau"
                           value="bepc"
                            checked={niveau === "bepc"}
                           onChange={() => setNiveau("bepc")}
                       />
                   </div>
                    <div className="col-3">
                        <label>BACC</label>
                        <input
                            type="radio"
                            id="bacc"
                            name="niveau"
                            value="bacc"
                           checked={niveau === "bacc"}
                            onChange={() => setNiveau("bacc")}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <Popup type="diplome" />
                        <Popup type="formation" />
                        <Popup type="experience" />
                    </div>
                </div>
                <div className="bout">
                    <button type="button" onClick={valider}>
                        Valider
                    </button>
                </div>
            </div>
        </form>


    );

};
export default Diplome;
