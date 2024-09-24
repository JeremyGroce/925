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

    const [username, setUsername] = useState('PooPooMan');
    const [password, setPassword] = useState('aaaa');
    const [email, setEmail] = useState('aaa@aaa.com');

    const handleSubmit = async(e) =>
    {
        e.preventDefault(); // Stop page from reloading
        console.log("submit");
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
    

    return(
        <div className="register-component">
            <div>
                <h2>Register Account</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="register-input">
                    <div>
                        <Icon_User
                            height = "20px"
                            width  = "20px"
                        />
                        <input
                            placeholder="Username">
                        </input>
                    </div>
                    
                    <div>
                        <Icon_Lock
                            height = "20px"
                            width  = "20px"
                        />

                        <input
                            placeholder="Password">
                        </input>
                    </div> 
                    
                    <div>
                        <Icon_Email
                            height = "20px"
                            width  = "20px"
                        />

                        <input
                            placeholder="Email">
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