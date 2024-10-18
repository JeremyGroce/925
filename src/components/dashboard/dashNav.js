import {React, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";


import {ReactComponent as User_Icon} from '../../imgs/icon-user.svg'
import {ReactComponent as List_Icon} from '../../imgs/icon-checkbox.svg'
import {ReactComponent as Watch_Icon} from '../../imgs/icon-watch.svg'
import {ReactComponent as Weight_Icon} from '../../imgs/icon-weight.svg'
import {ReactComponent as Logout_Icon} from '../../imgs/icon-logout.svg';
import {ReactComponent as Home_Icon} from '../../imgs/icon-home.svg'

import '../../styling/dashNav.css'

function DashNav()
{
    const navigate = useNavigate();
    const [menuToggle, setMenuToggle] = useState(true);
    const [currentUser, setCurrentUser] = useState('placeholder');



    // Handles the log out post request
    const handleLogOut = async() =>
    {
        // Redirect to the login page
        navigate("/login");

        // Log out the user 
        const response = await fetch('http://localhost:5000/logout', {
            method: 'POST',
            credentials: 'include',
        });
    }

    // Gets the current logged in user
    const getUsername = async() =>
    {
        // Get username of current session
        const response = await fetch('http://localhost:5000/current-username', 
            {
                method: 'GET',
                credentials: 'include',
            }
        );

        const data = await response.json();

        // Set the user for display
        setCurrentUser(data.currentUser);
    }

    // Apply when component mounts
    useEffect( ()=> {
        getUsername();
    })

    return(
        <div className="dashnav-component">

            {/* Holds the profile username, pfp, and options in the top right */}
            <div className="dashnav-bar">
                {/* profile container */}
                <div className="dashnav-profileContainer">

                    {/* username */}
                    <div className="dashnav-profile-username">
                        {currentUser}
                        
                    </div>

                </div>
            </div>

            {/* Toggled Menu options */}
            {menuToggle ? (
                <div className="dashnav-menu">

                    {/* Dashboard/Home */}
                    <div className="dashnav-menu-innerContainer">
                        <div className="dashnav-menu-option">
                            <Link to="/dashboard">
                                <Home_Icon
                                    height = "50px"
                                    width  = "50px"
                                />
                            </Link>
                        </div>

                        {/* Task-Tracker */}
                        <div className="dashnav-menu-option">
                            <Link to="/task-tracker">
                                <List_Icon
                                    height = "50px"
                                    width  = "50px"
                                />
                            </Link>
                        </div>

                        {/* Time-Tracker */}
                        <div className="dashnav-menu-option">
                            <Watch_Icon
                                height = "50px"
                                width  = "50px"
                            />
                        </div>

                        {/* Logout Button */}
                        <div className="dashNav-menu-option" id="dashnav-menu-option-logout">
                            <button
                                onClick={handleLogOut}
        >
                                <Logout_Icon
                                    height = "50px"
                                    width  = "50px"
                                    />
                            </button>
                        </div>


                    </div>

                </div>
            ):null}

           
        </div>
    );
}

export default DashNav;