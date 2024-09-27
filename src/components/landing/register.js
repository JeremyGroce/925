import React, { useState } from "react";
import { Link } from "react-router-dom";

import {ReactComponent as Icon_Lock} from '../../imgs/icon-lock.svg';
import {ReactComponent as Icon_User} from '../../imgs/icon-user.svg';
import {ReactComponent as Icon_Email} from '../../imgs/icon-email.svg';
import {ReactComponent as Icon_Circle1} from '../../imgs/icon-circle1.svg';
import {ReactComponent as Icon_Circle2} from '../../imgs/icon-circle2.svg';



import '../../styling/register.css';

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [taken, setTaken] = useState(false);

    // For password comparison
    const [firstPass, setFirstPass] = useState('');
    const [secondPass, setSecondPass] = useState('');
    const [passMatch, setPassMatch] = useState('');


    const editUsername = async (user) => 
    {
        setUsername(user);

        const free = await checkTaken(user);
        setTaken(free);

        if(free)
        {
            console.log(free);
        }
        else
        {
            console.log(free);
        }
    }

    const checkTaken = async (username) =>
    {
        const response = await fetch(`http://localhost:5000/check-username?username=${username}`);
        const data = await response.json();
        return data.taken;
    }

    const handleSubmit = async(e) =>
    {
        e.preventDefault(); // Stop page from reloading

        console.log("submit", {username, email, password});
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password }),
          });
          
          const data = await response.json();
          alert(data.message);

    }
    
    const comparePasswords = async(second_password) =>
    {   
        setSecondPass(second_password);
        if(firstPass === second_password)
        {
            console.log("match");
            setPassMatch(true);
        }
        else
        {
            console.log("no match");
            setPassMatch(false);
        }
    }


    return(
        <div className="register-component">
            <div>
                <h2>Register Account</h2>
            </div>


            {/* Input Fields */}
            <form onSubmit={handleSubmit}>

                {/* Enter username */}
                <div className="register-input-container">
                    <div className="register-input-inner-container">
                        <Icon_User
                            className = 'register-icon'
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e)=>editUsername(e.target.value)}>
                        </input>
                    </div>
                    
                    {taken && (
                        <div className="register-username-authenticate">username taken</div>
                    )}
                    
                    {/* Enter Email */}
                    <div className="register-input-inner-container">
                        <Icon_Email
                            className = 'register-icon'
                        />

                        <input
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}>
                        </input>
                    </div>
                    
                    {/* Enter Password 1 */}
                    <div className="register-input-inner-container">
                        <Icon_Lock
                            className = 'register-icon'
                        />

                        <input
                            placeholder="Password"
                            type="password"
                            value={firstPass}
                            onChange={(e)=>setFirstPass(e.target.value)}>
                        </input>
                    </div> 

                    {/* Confirm Password */}
                    <div className="register-input-inner-container">
                        {passMatch ? (
                            <Icon_Circle2
                            className = 'register-icon'
                        />
                        ) : (
                            <Icon_Circle1
                            className = 'register-icon'
                        />
                        )}
                        
                        <input
                            placeholder="Confirm Password"
                            type="password"
                            value={secondPass}
                            onChange={(e)=>comparePasswords(e.target.value)}
                            >
                        </input>
                    </div>
                    
                    

                    
                    <div className="register-upload-pfp">
                    Upload Profile Picture...
                    </div>
                    
                        <button>Create</button>

                </div>
            </form>

            <p>Already have an account? <Link to="/">Login</Link></p>
            
        </div>
    ); 
}

export default Register;