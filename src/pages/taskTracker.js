import {React, useEffect, useState} from "react";
import DashNav from "../components/dashboard/dashNav";

import '../styling/taskTracker.css';

function TaskTracker()
{
    // Arrays to translate server response from /current-date
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    // The day of the week the user clicked 
    const [select, setSelect] = useState(null);

    // data to orient the calendar
    const [month, setMonth] = useState(null);
    const [dayOfMonth, setDayOfMonth] = useState(null);
    const [dayOfWeek, setDayOfWeek] = useState(null);

    // Update selected Day upon click of day module
    const handleSelect = (day) => 
    {
        setSelect(day);
    }

    useEffect( ()=> 
    {
    }, [select]);

    // On initial mount, get current date data, translate data
    useEffect( () =>
    {
        const fetchDate = async () => 
        {
            const response = await fetch("http://localhost:5000/current-date",
                {
                    method: 'GET',
                    credentials: 'include',
                }
            );
            const data = await response.json();

            setMonth(months[data.month]);
            setDayOfWeek(days[data.dayOfWeek]);
            setDayOfMonth(data.dayOfMonth);

            // Set default selected module to today on page load
            handleSelect(days[data.dayOfWeek]);
        }

        // Execute GET
        fetchDate();

    }, []);

    return(
        <>
            <DashNav/>
            <div className="taskTracker-page">

                <div className="taskTracker-outer-container">
                    
                    {/* day of the week display */}
                    <div className="taskTracker-week-container">

                        <div className="taskTracker-month">
                            <h1>{month}</h1>
                        </div>
                        <div className="rows">
                        {/* Day modules */}
                        {days.map((days, index) => 
                        (
                            <div className={`taskTracker-week-day-module ${select === days ? 'selected' : ''}`}>

                                <div className="taskTracker-week-day-inner-container"
                                    onClick={() => handleSelect(days)}
                                >
                                    <h1>{dayOfMonth+index-1}</h1>
                                    <p>{days}</p>
                                    
                                </div>
                            </div>
                        ))}
                        </div>

                    </div>

                    {/* Daily-Weekly-Monthly Dask display */}
                    <div className="taskTracker-list-outer-container">
                        <h1>Daily Tasks</h1>
                        <p>Clean Room</p>
                        <p>Change Oil</p>
                        <p>PM Facial Routine</p>
                    </div>

                    

                    </div>
                </div>

        </>
    );
}

export default TaskTracker;