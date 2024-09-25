import React, { useState } from "react";
import { Link } from "react-router-dom";

import {ReactComponent as Icon_Lock} from '../../imgs/icon-lock.svg';
import {ReactComponent as Icon_User} from '../../imgs/icon-user.svg';
import {ReactComponent as Icon_Email} from '../../imgs/icon-email.svg';

import '../../styling/register.css';

function Register() {

    // const [accountData, setAccountData] = useState(
    //     {
    //         username: '',
    //         email: '',
    //         password: '',
    //     });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async(e) =>
    {
        e.preventDefault(); // Stop page from reloading

        console.log("submit", {username, email, password});
        // const response = await fetch('http://localhost:5000/register', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({username, email, password }),
        //   });
          
        //   const data = await response.json();
        //   alert(data.message);

    }
    

    return(
        <div className="register-component">
            <div>
                <h2>Register Account</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="register-input-container">
                    <div className="register-input-inner-container">
                        <Icon_User
                            className = 'register-icon'
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}>
                        </input>
                    </div>
                    
                    <div className="register-input-inner-container">
                        <Icon_Lock
                            className = 'register-icon'
                        />

                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}>
                        </input>
                    </div> 
                    
                    <div className="register-input-inner-container">
                        <Icon_Email
                            className = 'register-icon'
                        />

                        <input
                            placeholder="Email"
                            type="text"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}>
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