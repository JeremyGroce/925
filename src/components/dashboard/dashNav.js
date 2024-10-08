import {React, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";


import {ReactComponent as User_Icon} from '../../imgs/icon-user.svg'
import {ReactComponent as List_Icon} from '../../imgs/icon-list.svg'
import {ReactComponent as Watch_Icon} from '../../imgs/icon-watch.svg'
import {ReactComponent as Weight_Icon} from '../../imgs/icon-weight.svg'

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
        navigate('/login');
    }

    // Gets the current logged in user
    const getUsername = async() =>
    {
        try 
        {
            // get request to route /current-user
            const response = await fetch('http://localhost:5000/current-user',
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );

            // evaluate response
            if(response.ok)
            {
                const data = await response.json();
                setCurrentUser(data.username);
            }
            else
            {
                setCurrentUser("guest");
            }

        }
        catch
        {
            console.error("Error fetching username");
        }
    }

    // Apply when component mounts
    useEffect( ()=> {
        getUsername();
    })


    return(
        <>
            <div className="dashnav-bar">

                {/* Hamburger Menu Icon */}
                <div 
                    className="dashnav-hamburger-menu-container"
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
                    
                    {/* profile picture */}
                    <div className="dashnav-profile-pfp">
                        <User_Icon
                            height = "25px"
                            width  = "25px"
                        />
                    </div>

                </div>

                {/* Logout Button */}
                <div>
                    <button
                    onClick={handleLogOut}>
                        LOG OUT
                    </button>
                </div>

            </div>

            {burgerToggle ? (
                <div className="dashnav-menu">
                    <div>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                    <div>
                        <Weight_Icon
                            height = "20px"
                            width  = "20px"
                        />
                        Fitness Tracker
                    </div>

                    <div>
                        <List_Icon
                            height = "20px"
                            width  = "20px"
                        />
                        Daily Tasks
                    </div>

                    <div>
                        <Watch_Icon
                            height = "20px"
                            width  = "20px"
                        />
                        Stop Watch Tracker
                    </div>
                </div>


            ):null}

           
        </>
    );
}

export default DashNav;