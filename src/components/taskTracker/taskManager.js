import {React, useState} from "react";

import '../../styling/taskManager.css'

function TaskManager()
{
    const Tasks = ['Daily', 'Weekly', 'Monthly'];

    const [header, setHeader] = useState('Daily');

    // Select Daily/Weekly/Monthly Tasks to Display; Daily Tasks set default true
    const [selected1, handleSelected1] = useState(true);
    const [selected2, handleSelected2] = useState(false);
    const [selected3, handleSelected3] = useState(false);



    // displays Daily/Weekly/Monthly and selects the cooresponding bubble
    const handleHeader = async(num) =>
    {
        setHeader(Tasks[num]);

        switch(num)
        {
            case 0:
                handleSelected1(true);
                handleSelected2(false);
                handleSelected3(false);
                break;

            case 1:
                handleSelected2(true);
                handleSelected1(false);
                handleSelected3(false);
                break;
            case 2:
                handleSelected3(true);
                handleSelected1(false);
                handleSelected2(false);
                break;
        }
        
    }

    return (
        <div className="taskManager-component">

            {/* Task Displays & Time Select */}
            <div className="taskManager-List">
                {/* Selects between daily, weekly, and monthly tasks  */}
                <div className="taskManager-timeSelect"> 
                    <div className={`taskManager-timeSelect-circle ${selected1 ? 'select' : ''}`}
                        onClick={() => handleHeader(0)}
                    >
                    </div>
                    <div className={`taskManager-timeSelect-circle ${selected2 ? 'select' : ''}`}
                        onClick={() => handleHeader(1)}
                    >

                    </div>
                    <div className={`taskManager-timeSelect-circle ${selected3 ? 'select' : ''}`}
                        onClick={() => handleHeader(2)}
                    >
                    </div>
                </div>

                {/* Button to create a new task */}
                {/* <div className="taskManager-newTask">
                </div> */}


                {/* Exterior Module Container */}
                <div className="taskManager-outer-container">
                    <h2>{header} Tasks</h2>
                    <div className="taskManager-linebreak"></div>

            </div>
            {/* Interior Module Container */}


            </div>

            {/* Button Container for add, calendar, and stats */}
            {/* <div className="taskManager-buttons-container">
                <div className="taskManager-button">

                </div>

                <div className="taskManager-button">

                </div>

                <div className="taskManager-button">

                </div>
            </div> */}

            {/* Display for Add Menu, Calendar, and Statistics */}
            <div className="taskManager-generalDisplay">

            </div>


        </div>
    );
}

export default TaskManager;