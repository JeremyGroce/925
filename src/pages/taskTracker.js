import {React, useEffect, useState} from "react";
import DashNav from "../components/dashboard/dashNav";

import '../styling/taskTracker.css';

function TaskTracker()
{
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    // The day of the week the user clicked 
    const [select, setSelect] = useState(null);

    // fetch current date from server
    // getMonthNum () => {fetch(/get-week-date)}

    // Update selected Day upon click of day module
    const handleSelect = (day) => 
    {
        setSelect(day);
    }

    useEffect( ()=> 
    {
        console.log("|",select);
    }, [select]);


    return(
        <div>
            <DashNav/>
            <div className="taskTracker-page">

                <div className="taskTracker-outer-container">
                    
                    {/* day of the week display */}
                    <div className="taskTracker-week-container">

                        <div className="taskTracker-month">
                            <h1>October, 2024</h1>
                        </div>
                        <div className="rows">
                        {/* Day modules */}
                        {days.map((days, index) => 
                        (
                            <div className={`taskTracker-week-day-module ${select === days ? 'selected' : ''}`}>

                                <div className="taskTracker-week-day-inner-container"
                                    onClick={() => handleSelect(days)}
                                >
                                    <h1>{index+14}</h1>
                                    <p>{days}</p>
                                    
                                </div>
                            </div>
                        ))}
                        </div>

                    </div>

                    {/* Daily-Weekly-Monthly Dask display */}
                    


                    </div>
                </div>

        </div>
    );
}

export default TaskTracker;