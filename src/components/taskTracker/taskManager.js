import {React, useState} from "react";

import '../../styling/taskManager.css'
import {ReactComponent as Stats_Icon} from '../../imgs/icon-stats.svg';
import {ReactComponent as Add_Icon} from '../../imgs/icon-add.svg';
import {ReactComponent as Calendar_Icon} from '../../imgs/icon-calendar.svg';

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

            {/* Display Container for Add Menu, Calendar, Statistics, and relevant buttons */}
            <div className="taskmanager-generalDisplay-outerContainer">

                {/* Display */}
                <div className="taskManager-generalDisplay">

                    {/* Display -> Add New Task */}
                    <form>
                        <div className="taskManager-generalDisplay-addTask">
                            
                            {/*Task Name*/}
                            <label>
                                Task Name
                                <br/>
                                <input 
                                    type="text" 
                                    name="task"
                                    placeholder="Run, Code, Read..."/>
                            </label>

                            {/* Category */}
                            <label>
                                Category
                                <br/>
                                <select>
                                    <option>Fitness</option>
                                    <option>School</option>
                                    <option>Work</option>
                                    <option>Facial Routine</option>
                                </select>
                                <button>[+]</button>
                            </label>

                            {/* Icon */}
                            <label>
                                Icon 
                                <button>Click</button>    
                                                          
                            </label>


                            {/* Reoccuring || Event */}
                            <label>
                                <p
                                    id="addTask-reoccuring"
                                    style={{display: 'inline'}}
                                >Reoccuring</p>
                                <> | </>
                                <p
                                    id="addTask-event"
                                    style={{display: 'inline'}}
                                >
                                    Event
                                </p>
                                <div className="addTask-timescale" >
                                    component...
                                </div>
                            </label>

                            {/* Submit New Task Button */}
                            <button
                                className="addTask-submitBtn"
                            >
                                Submit
                            </button>
                            
                        </div> 
                   </form>



                    {/* Display -> View Calendar */}

                    {/* Display -> See Stats */}
                </div>

                {/* Buttons */}
                <div className="taskManager-buttons-container">

                    <div className="taskManager-button" id="add">
                        <Add_Icon
                            height = "70px"
                            width  = "70px"
                        />

                    </div>

                    <div className="taskManager-button" id="calendar">
                        <Calendar_Icon
                            height = "45px"
                            width  = "45px"
                        />
                    </div>

                    <div className="taskManager-button" id="stats">
                        <Stats_Icon
                            height = "45px"
                            width  = "45px"
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default TaskManager;