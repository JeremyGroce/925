import {React, useState} from "react";

import '../../styling/addCategory.css'
// Small window that opens up for users to create new categories
function AddCategory()
{
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = async () => 
    {
        console.log("ping");
        //POST Request

        if(categoryName.trim() !== '')
        {
            fetch('http://localhost:5000/create-category',
                {
                    method: 'POST',
                    headers: 
                    {
                        'Content-Type': 'application/json',
                    },
                        body: JSON.stringify({name: categoryName}),
                }
            );
        }
        else
        {
            console.log("Whoops!");
        }
        
        
    }

    return(
        <div className="addCategory-component"> 

            <h5>Name</h5>
            <input
                type="text"
                value={categoryName}
                onChange={(e)=> setCategoryName(e.target.value)}
                />

            
            <button
                className="addCategory-submitBtn"
                onClick={handleSubmit}
            >
                Create
            </button>
        </div>
    );
    

}

export default AddCategory;