import React from "react";
import DashNav from "../components/dashboard/dashNav";

import '../styling/taskTracker.css';

function TaskTracker()
{
    return(
        <div>
            <DashNav/>
            

            <div className="taskTracker-page">

                <div className="taskTracker-outer-container">
                    
                    {/* day of the week display */}
                    <div className="taskTracker-week-container">

                        {/* Day modules */}
                        <div className="taskTracker-week-day-container">

                        </div>

                        <div className="taskTracker-week-day-container">

                        </div>

                        <div className="taskTracker-week-day-container">

                        </div>

                        <div className="taskTracker-week-day-container">

                        </div>

                        <div className="taskTracker-week-day-container">

                        </div>

                        <div className="taskTracker-week-day-container">

                        </div>

                        <div className="taskTracker-week-day-container">

                        </div>
                        

                    </div>

                    {/* Daily-Weekly-Monthly Dask display */}



                    </div>
                </div>

        </div>
    );
}

export default TaskTracker;