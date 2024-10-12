import {React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";


import {ReactComponent as Icon_Lock} from '../../imgs/icon-lock.svg';
import {ReactComponent as Icon_User} from '../../imgs/icon-user.svg';

import '../../styling/login.css';

function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async() =>     
    {
        // e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login',
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: 
                    {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify({ username, password }),
                });

                const data = await response.json();

                if(response.ok)
                {
                    if(data.check)
                    {
                        console.log("successful login");
                        navigate("/dashboard");
                    }
                    else
                    {
                        console.log("unsuccessful login");
                    }
                }
                else 
                {
                    console.log("bad response");
                }
        } catch (error)
        {
            console.log("catch");
        }

        // post request
        // change .css elements to respond

        console.log(username);
        console.log(password);
    }

    return(
        // main container
        <div className="login-component">
            <div className="login-inner-container">
                <div className="login-title">
                    <h2>Login</h2>
                </div>

                <div>
                    <Icon_User
                    className="user-icon"
                    height  = "20px"
                    width   = "20px"
                    />
                    <input
                        type="text"
                        className={`login-input ${username ? 'username':'blank_user'}`}
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    <label className="login-username-label">username</label>
                    
                    
                </div>

                <div>
                    <Icon_Lock 
                    className="password-icon"
                    height = '20px'
                    width  = '20px'/>
                    <input
                    className={`login-input ${password ? 'password' : 'blank_pass'}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id = "login_password"
                    ></input>
                    
                    <label
                        className="login-password-label">password</label>
                </div>

                <div>
                    <a href="">Forgot Password?</a>
                </div>

                <div>
                    <button
                    className="login-submit-btn"
                    onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>

                <div>
                    <p>
                        Don't have an account? <Link to="/register">Register Now</Link>
                    </p>
                </div>
            </div>


        </div>

    );
}

export default Login;