import React, { useEffect, useState } from "react";
import '../styling/stopWatch.css';
import {ReactComponent as Icon_add} from '../imgs/icon-add.svg';
import {ReactComponent as Icon_play} from '../imgs/icon-play.svg';
import {ReactComponent as Icon_pause} from '../imgs/icon-pause.svg';
import {ReactComponent as Icon_reset} from '../imgs/icon-reset.svg';
import {ReactComponent as Icon_settings} from '../imgs/icon-settings.svg';

function StopWatch({toggle_addbtn})
{
    // overlay begin
    const [visible, setVisible] = useState(false);

    // Stop watch
    const [isRunning, setIsRunning] = useState(false);  // on/off switch; default off
    const [elapTime, setElapTime]   = useState(0);      // elapsed time once timer is on; default 0
    const [timer, setTimer]         = useState(null);   // save interval ID to start/stop time increment

    // When Paused
    const [isPaused, setIsPaused]   = useState(false);
    const [pause_elapTime, setPause_elapTime] = useState(0);
    const [pause_timer, setPause_timer] = useState(null);

    const [pauseToken, setPauseToken] = useState(0);

    // Option Select
    const [activity, setActivity] = useState('');


    // ****NOTE**** switch from seconds to milliseconds b/c if you stop the clock mid-second, it restarts the loop, possibly creating less accurate time

    useEffect(()=>
    {
        // if the timer is set on, acquire a second every 1000 ms
        if(isRunning)
        {
            setPauseToken(1);

            const newTimer = setInterval(() =>
            {
                setElapTime(prevTime => prevTime+1);
            }, 1000);
            setTimer(newTimer);
            console.log(elapTime);

            return () => clearInterval(newTimer);

        }
        else
        {
            clearInterval(timer);
            
            if(pauseToken == 1)
            {
                const newPauseTimer = setInterval(() => {
                    setPause_elapTime(prevTime => prevTime+1)
                }, 1000);
                setPause_timer(newPauseTimer);
                console.log(pause_elapTime);
                return () => clearInterval(newPauseTimer);

            }

        }
           
    }, [isRunning])

    const handleClick = async () => {
        setIsRunning(!isRunning);
    }

    const handleReset = async () => {
        setElapTime(0);
        setPause_elapTime(0);
        setPauseToken(0);
        setIsRunning(false);
        clearInterval(pause_timer);
        setVisible(!visible);
    }

    const submitTime = async () => {
        console.log("here");


        console.log("Activity: ", activity);
        console.log("Stopwatch: ", elapTime);
        console.log("Pausewatch: ", pause_elapTime);
        // POST request

    }

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds/3600); 
        const min   = Math.floor((seconds % 3600) / 60);
        const sec   = seconds % 60;
        return `${String(hours).padStart(2, '0')}h ${String(min).padStart(2, '0')}m ${String(sec).padStart(2, '0')}s`;

        
    }

    // toggle visibility of stopwatch
    const visibility = () => {
        setVisible(!visible);
        console.log("Overlay: ", visible);

    }

    const handle_stop_resume = () => {
        
    }


    return(
        <div className="stopWatch-component">

            {/* Select Activity and Click Begin */}
            {!visible && (
                <div className="stopWatch-outer-container-begin">
                <button
                onClick={visibility}>
                    begin
                </button>
                
                
                <select>
                <option>test1</option>
                <option>test2</option>
                <option>test3</option>
                </select>
                

            </div>
            )}
            

            {/* Stop Watch */}

            <div className="stopWatch-outer-container">

                <div className="left-container">
                                            

                    <div className="timeDisplay-play">{formatTime(elapTime)}
                    </div>
                    <div className="timeDisplay-pause">--{formatTime(pause_elapTime)}--</div>
                        
                    
                    {/* Stop, Submit, Edit buttons */}
                    <div className="left-container-btns-container">
                        {/* stop activity || resume activity */}
                        <div>
                            <button
                            className="left-container-stop-resume-btn"
                            onClick={handle_stop_resume()}
                            >
                            Stop Activity
                            </button>
                        </div>
                        {/* submit and edit in row format */}
                        <div className="left-container-submit-edit-btns">
                            <button
                                className="left-container-btn"
                                onClick={submitTime}>
                                    Submit
                            </button>
                            <button
                            className="left-container-btn">
                                Edit

                            </button>
                        </div>
                        
                    </div>

                </div>

                <div className="right-container">
                    {/* Play-Pause Toggle */}
                    <button 
                            className={`btn ${isRunning ? 'on' : 'off'}`} // Apply class based on state
                            onClick={handleClick}
                        >
                            {isRunning ? <Icon_pause width="24px" height="24px"/> : <Icon_play width="24px" height = "24px"/>} {/* Display the current shape */}   
                    </button>

                    {/* Reset Timer */}
                    <button
                        className="btn-reset"
                        onClick={handleReset}
                    >
                            {/* <Icon_reset 
                            width="24px" height="24px"/> */}
                    </button>
                </div>

            </div>

            <div className="side-btns-container">
                <button
                className="add-btn"
                onClick={toggle_addbtn}>
                    <div className="add-btn-container">
                        <Icon_add/>
                    </div>
                </button>
                <div className="settings-btn-container">
                    <Icon_settings
                    className="icon"
                    />

                </div>
            </div>

        
        {/* <div className="pause-btn" onClick={handleSubmit}></div> */}
    
    </div>
    )
}

export default StopWatch;