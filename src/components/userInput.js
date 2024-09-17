import React, { useState } from 'react';
import '../styling/userInput.css';

function GetInput() {
  // set default null user inputs
  const [inputDate, setDate] = useState('');
  const [inputTime, setTime] = useState('');
  const [inputAct, setAct] = useState('');

  // set states, submit to server (For now)
  const handleSubmit = async () => {
    // data object
    const data = {
      date: inputDate,
      time: inputTime,
      activity: inputAct,
    };

    console.log(inputDate);
    console.log(inputTime);
    console.log(inputAct);

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

      // reset the input boxes
      setDate('');
      setTime('');
      setAct('');
    } catch (error) {
      console.error('Error sending data to the server:', error); // Log any errors
    }
  };

  return (
    <div className='user-input-component'>
      <div className='date-input-outer-container'>
        <div className='date-input-inner-container'>
          <div className='row'>
            <p>date</p>
            <input
              id='date-inputBox'
              value={inputDate}
              onChange={(e) => setDate(e.target.value)}
              placeholder='MM-DD-YY'
            />
          </div>
        </div>
      </div>

      <div className='time-input-outer-container'>
        <div className='time-input-inner-container'>
          <div className='row'>
            <p>time</p>
            <input
              id='time-inputBox'
              value={inputTime}
              onChange={(e) => setTime(e.target.value)}
              placeholder='mins'
            />
          </div>
        </div>
      </div>

      <div className='activity-input-outer-container'>
        <div className='activity-input-inner-container'>
          <div className='row'>
            <p>activity</p>
            <input
              id='act-inputBox'
              value={inputAct}
              onChange={(e) => setAct(e.target.value)}
              placeholder='activity'
            />
          </div>
        </div>
      </div>

      <button className='submit-input-btn' onClick={handleSubmit}>
        submit
      </button>
    </div>
  );
}

export default GetInput;
