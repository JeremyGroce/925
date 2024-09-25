import React from 'react';
import Login from '../components/landing/logIn';
import Register from '../components/landing/register';
import Nav from '../components/landing/landingNav';
import About from '../components/landing/About';
import Contact from '../components/landing/contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import '../styling/landing.css';

function Landing() {
    return(
        <Router>

        <div className='landing-page'>
            <Nav/>

                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
        </div>
        </Router>

    );
    
}

export default Landing;