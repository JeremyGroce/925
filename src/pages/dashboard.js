import React from "react";
import DashNav from '../components/dashboard/dashNav.js'

import {Outlet} from 'react-router-dom';


import '../styling/dashboard.css';

function Dashboard()
{
    return(
        <div className="dashboard-component">
            {/* Dashboard Navigation Bar */}
            <DashNav/>


            {/* All non-Dashnav screen space */}
            {/* <div className="dashboard-widget-outer-container"> */}
                
                {/* Container for Widgets  */}
                {/* <div className="dashboard-widget-inner-container"> */}
                        
                {/* </div> */}

            {/* </div> */}



            <Outlet/>
        </div>
        

    );
}

export default Dashboard;