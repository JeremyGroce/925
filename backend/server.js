// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS to allow requests from your frontend

let dataStorage = []; // Array to store incoming data

// Route to handle POST requests
app.post('/submit', (req, res) => {
  const { date, time, activity } = req.body; // Destructure incoming data

  console.log('Received input:', { date, time, activity });
  
  // Add data to storage
  dataStorage.push({ date, time, activity });
  console.log('Stored Data:', dataStorage);


  res.send(`Received input: ${date}, ${time}, ${activity}`);
});

app.get('/data', (req, res) => {
    console.log('hit');
    res.json(dataStorage);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
