import React from "react";

import {ReactComponent as Icon_Lock} from '../imgs/icon-lock.svg';
import {ReactComponent as Icon_User} from '../imgs/icon-user.svg';

import '../styling/login.css';

function Login()
{
    return(
        // main container
        <div className="login-component">
            <div className="login-inner-container">
                <div>
                    <h2>Login</h2>
                </div>

                <div>
                    <Icon_User
                    className="user-icon"
                    height  = "20px"
                    width   = "20px"
                    />
                    <input
                    className="login-input"
                    placeholder="username"
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
                    <p>
                        Don't have an account? <a href="">Register Now</a>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Login;