import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/landing.js';

// import './styling/app.css';

function App() {
  // const [toggleMenu, setToggleMenu] = useState(false);

  // const handle_menuToggle = () => {
  //   setToggleMenu(!toggleMenu);
  // }
  return (
      <Landing/>
    // <div className='dashboard'>
    //   <div className='top'>
    //     <StopWatch toggle_addbtn = {handle_menuToggle}/>
    //     {toggleMenu && <Add_Menu/>}
    //   </div>

    // </div>
  );
}

export default App;
