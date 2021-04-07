import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';


function Navbar() {
    return (
        
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/DailyWins"> Daily Wins </Link>
                    </li>
                    <li>
                        <Link to="/Affirmations">Affirmations</Link>
                    </li>
                </ul>

            </nav>
            
        
    )
}

export default Navbar
