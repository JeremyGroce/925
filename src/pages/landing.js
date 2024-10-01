import React from 'react';
import Login from '../components/landing/login';
import Register from '../components/landing/register';
import Nav from '../components/landing/landingNav';
import About from '../components/landing/About';
import Contact from '../components/landing/contact';
import { BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';

import '../styling/landing.css';

function Landing() {
    return(
        <div className='landing-page'>
            <Nav/>

            <Outlet/>
        </div>

    );
    
}

export default Landing;