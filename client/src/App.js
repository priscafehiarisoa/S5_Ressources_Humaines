
import './App.css';
import './pages/Inscription'
import Inscription from "./pages/Inscription";
import Langues from "./pages/Langues";
import Diplome from "./pages/Diplome";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inscription />} />
                <Route path="/langues" element={<Langues />} />
                <Route path="/diplome" element={<Diplome/>}/>
            </Routes>
        </Router>
    );
};

export default App;

