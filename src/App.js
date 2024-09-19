import {React, useEffect, useState} from 'react';
import GetInput    from './components/userInput.js';
import DisplayData from './components/dataDisplay.js';
import StopWatch   from './components/stopWatch.js';
import Calendar    from './components/calendar.js';
import Add_Menu    from './components/add-menu.js';

import Login       from './pages/logIn.js';

// import './styling/app.css';

function App({userToggleMenu}) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handle_menuToggle = () => {
    setToggleMenu(!toggleMenu);
  }
  return (
    
    <div>
      <Login/>
    </div>
    // <div className='dashboard'>
    //   <div className='top'>
    //     <StopWatch toggle_addbtn = {handle_menuToggle}/>
    //     {toggleMenu && <Add_Menu/>}
    //   </div>

    // </div>
  );
}

export default App;
