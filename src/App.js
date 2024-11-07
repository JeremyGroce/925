import {React} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './components/landing/AuthContext.js';
import Landing from './pages/landing.js';
import Login from './components/landing/login.js';
import About from './components/landing/About.js';
import Dashboard from './pages/dashboard.js';
import Contact from './components/landing/contact.js';
import Register from './components/landing/register.js';
import TaskTracker from './pages/taskTracker.js';


function App() {
  
  return (
    <AuthProvider>
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

          {/* Task Tracker Page */}
          <Route path='/task-tracker' element={<TaskTracker/>}>
            
          </Route>



        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
