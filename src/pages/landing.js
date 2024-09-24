import React from 'react';
import Login from '../components/landing/logIn'
import Register from '../components/landing/register'
import Nav from '../components/landing/landingNav'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Landing() {
    return(
        <>
        <Nav/>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </Router>
        </>
    );
    
}

export default Landing;