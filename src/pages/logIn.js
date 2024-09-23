import {React, useState} from "react";
import {Link} from 'react-router-dom';

import {ReactComponent as Icon_Lock} from '../imgs/icon-lock.svg';
import {ReactComponent as Icon_User} from '../imgs/icon-user.svg';


import '../styling/login.css';

function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e) => {
        console.log("Logging in");
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
                        className="login-input"
                        placeholder="username"
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                    
                    
                </div>

                <div>
                    <Icon_Lock 
                    className="password-icon"
                    height = '20px'
                    width  = '20px'/>
                    <input
                    className="login-input"
                    placeholder="password"
                    type="password"
                    ></input>
                    
                </div>

                <div>
                    <a href="">Forgot Password?</a>
                </div>

                <div>
                    <button
                    className="login-submit-btn"
                    >
                        Login
                    </button>
                </div>

                <div>
                    <h5>
                        Don't have an account? <Link to="/register">Register Now</Link>
                    </h5>
                </div>
            </div>
        </div>

    );
}

export default Login;