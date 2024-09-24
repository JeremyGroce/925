import {React, useState} from "react";

import {ReactComponent as Icon_add} from '../imgs/icon-add.svg';

import '../styling/addMenu.css';

function Add_Menu()
{  
    const [activeTab, setActiveTab] = useState('add');


    const [activity, setActivity] = useState("");

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    } 

    // send activity to drop down menu on timer
    const handleSubmit = async () => {
        // if activity isn't blank
        if(activity === "")
        {
            console.log("empty string");
        }
        else
        {
            const trimActivity = activity.trim();
            
            // submit to server with POST

                // create Data Object

                const data = {
                    activity: trimActivity,
                }

                // Post

                try {
                    // Send a POST request to the backend
                    const response = await fetch('http://localhost:5000/submit', {
                      method: 'POST', // Specify the request method
                      headers: {
                        'Content-Type': 'application/json', // Set the content type to JSON
                      },
                      body: JSON.stringify(data), // Convert the data object to a JSON string
                    });
              
                    const result = await response.text(); // Read the response text from the server
                    console.log(result); // Log the response from the server
              
                  } catch (error) {
                    console.error('Error sending data to the server:', error); // Log any errors
                  }

                //   check for duplicates in the server
                //  else
                setActivity("");
                


            
        }
    }

    return(
        <div className="add-menu-component">

            {/* tabs */}
            <div className="add-menu-tabs">
                <div 
                    className={`add-menu-tab ${activeTab==='add'?'active':'inactive'}`}
                    onClick={()=>handleTabSelect('add')}
                >
                    Add
                </div>
                <div 
                    className={`add-menu-tab ${activeTab==='edit'?'active':'inactive'}`}
                    onClick={() => handleTabSelect('edit')}
                >
                    Edit
                </div>
            </div>

            {activeTab==='add' ?(
                <div className="add-menu-add-body">
                <div className="add-menu-module">
                    <div className="add-menu-module-title">
                        Category
                    </div>
                    <div className="add-menu-module-body">
                        <select
                        
                        className="add-menu-category-select">

                        </select>
                        <button
                        className="add-menu-category-add-btn">
                        </button>


                    </div>

                    

                </div>
                <div className="add-menu-module">
                    <div className="add-menu-module-title">
                        Activity
                    </div>
                    <div className="add-menu-module-body">
                        <input
                            className="add-menu-add-activity-input"/>
                    </div>
                    
                </div>

                <button
                    className="add-menu-add-submit-btn">
                        submit
                </button>

            </div>): null}
                        
            
        </div>
    );
}

export default Add_Menu;