import {React, useState} from "react";

import {ReactComponent as User_Icon} from '../../imgs/icon-user.svg'

import '../../styling/dashNav.css'

function DashNav()
{
    const [username, setUsername] = useState('username');


    return(
        <div className="dashnav-component">
            <div className="dashnav-hamburger-menu">

            </div>

            <div className="dashnav-profile">
                <div className="dashnav-profile-username">
                    Admin
                </div>
                {/* username */}
                
                {/* profile picture */}
                <div className="dashnav-profile-pfp">
                    <User_Icon
                        height = "25px"
                        width  = "25px"
                    />
                </div>
            </div>

        </div>
    );
}

export default DashNav;