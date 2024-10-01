import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Icon_logo} from '../../imgs/logo-placeholder.svg';

import '../../styling/LandingNav.css';

function LandingNav() 
{
    return(
        <div className="landingNav-component">
                <div className="landingNav-logo">
                    <Icon_logo
                        height = '90px'
                        width  = '90px'
                    />
                </div>

                <div><Link className="landingNav-link" to="/about">About</Link></div>
                <div><Link className="landingNav-link" to="/contact">Contact</Link></div>
                <div><Link className="landingNav-link" to="/login">Login</Link></div>
                <div><Link className="landingNav-link" to="/">My Projects</Link></div>
        </div>

    );
}

export default LandingNav;