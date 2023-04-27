import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <form>
                <label htmlFor="Nom">Nom</label>
                <input type="Nom" name="Nom" id="Nom" />
                <label htmlFor="Date">Date</label>
                <input type="Date" name="date" id="Date" />
                <button type="submit">Submit</button>
            </form>
            <Link to="/users">Tous les Étudiants</Link>
        </div>
    );
};

export default Home;