import React from "react";
import DashNav from '../components/dashboard/dashNav.js'
import {Outlet} from 'react-router-dom';


import '../styling/dashboard.css';

function Dashboard()
{
    return(
        <div>
            <DashNav/>
            <Outlet/>
        </div>
        

    );
}

export default Dashboard;