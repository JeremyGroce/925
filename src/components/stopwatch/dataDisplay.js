import React, { useEffect, useState } from 'react';
import "../styling/dataDisplay.css";

// src/components/DisplayData.js


function DisplayData() {
  const [data, setData] = useState([]); // State to hold the data

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/data'); // Fetch data from the backend
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Check for errors
        }
        const result = await response.json(); // Parse JSON response
        setData(result); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div>
      <h1>Data from Server</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{`Date: ${item.date}, Time: ${item.time}, Activity: ${item.activity}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayData;

