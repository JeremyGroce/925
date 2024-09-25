import React from "react";
import { Link } from "react-router-dom";

import '../../styling/LandingNav.css';

function LandingNav() 
{
    return(
        <div className="landingNav-component">
                <div><Link className="landingNav-link" to="/about">About</Link></div>
                <div><Link className="landingNav-link" to="/contact">Contact</Link></div>
                <div><Link className="landingNav-link" to="/">Login</Link></div>
        </div>

    );
}

export default LandingNav;