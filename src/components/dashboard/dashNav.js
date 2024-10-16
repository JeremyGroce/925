import {React, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";


import {ReactComponent as User_Icon} from '../../imgs/icon-user.svg'
import {ReactComponent as List_Icon} from '../../imgs/icon-list.svg'
import {ReactComponent as Watch_Icon} from '../../imgs/icon-watch.svg'
import {ReactComponent as Weight_Icon} from '../../imgs/icon-weight.svg'
import {ReactComponent as Logout_Icon} from '../../imgs/icon-logout.svg';
import {ReactComponent as Home_Icon} from '../../imgs/icon-home.svg'

import '../../styling/dashNav.css'

function DashNav()
{
    const navigate = useNavigate();
    const [burgerToggle, setBurgerToggle] = useState(false);
    const [currentUser, setCurrentUser] = useState('placeholder');

    // Toggles the burger menu being displayed or not
    const handleBurgerClick = async() =>
    {
        setBurgerToggle(!burgerToggle);
    }

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

            <div className="dashnav-bar">

                {/* Hamburger Menu Icon */}
                <div 
                    className={`dashnav-hamburger-menu-container ${burgerToggle ? 'open' : ''}`}
                    onClick={handleBurgerClick}
                >

                    <div className="bar1">
                    </div>
                    <div className="bar2">
                    </div>
                    <div className="bar3">
                    </div>
                </div>

                {/* profile container */}
                <div className="dashnav-profile">

                    {/* username */}
                    <div className="dashnav-profile-username">
                        {currentUser}
                        
                    </div>

                    {/* Profile Picture */}
                    <div className="dashnav-profile-pfp">
                        
                    </div>

                </div>

                {/* Logout Button */}
                <div>
                    <button
                        onClick={handleLogOut}
>
                        <Logout_Icon
                            height = "35px"
                            width  = "40px"
                            />
                    </button>
                </div>

            </div>

            {/* Toggled Menu options */}
            {burgerToggle ? (
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
                    </div>

                </div>
            ):null}

           
        </div>
    );
}

export default DashNav;