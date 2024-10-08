import {React, useState} from "react";

import {ReactComponent as User_Icon} from '../../imgs/icon-user.svg'
import {ReactComponent as List_Icon} from '../../imgs/icon-list.svg'
import {ReactComponent as Watch_Icon} from '../../imgs/icon-watch.svg'
import {ReactComponent as Weight_Icon} from '../../imgs/icon-weight.svg'

import '../../styling/dashNav.css'

function DashNav()
{
    const [burgerToggle, setBurgerToggle] = useState(false);

    const handleBurgerClick = async() =>
    {
        setBurgerToggle(!burgerToggle);
    }


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
                        [username]
                    </div>
                    
                    {/* profile picture */}
                    <div className="dashnav-profile-pfp">
                        <User_Icon
                            height = "25px"
                            width  = "25px"
                        />
                    </div>

                </div>

            </div>

            {burgerToggle ? (
                <div className="dashnav-menu">
                    <div>
                        ===Dashboard===
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
                        To Do List
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