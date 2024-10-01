import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/landing.js';
import Login from './components/landing/login.js';
import About from './components/landing/About.js';
import Dashboard from './pages/dashboard.js';
import NavBar from './components/landing/landingNav.js'
import Contact from './components/landing/contact.js';
import Register from './components/landing/register.js';

// import './styling/app.css';

function App() {
  // const [toggleMenu, setToggleMenu] = useState(false);

  // const handle_menuToggle = () => {
  //   setToggleMenu(!toggleMenu);
  // }
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path='/' element={<Landing/>}>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/projects' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      
        {/* Dashboard Page */}
        <Route path='/dashboard' element={<Dashboard/>}>

        </Route>



      </Routes>
    </Router>
  );
}

export default App;
