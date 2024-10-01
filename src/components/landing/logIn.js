import {React, useState} from "react";

import {ReactComponent as Icon_Lock} from '../../imgs/icon-lock.svg';
import {ReactComponent as Icon_User} from '../../imgs/icon-user.svg';

import '../../styling/login.css';
import { Link } from "react-router-dom";

function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async() =>     
    {
        // e.preventDefault();
        
        console.log(username);
        console.log(password);
        // change .css elements to respond
        // dsjiofjdsfijsfsiojd
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