// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;



app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS to allow requests from your frontend


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(()=> console.log('MongoDB connected'))
.catch(err => console.error(err));


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// user Schema
const userSchema = new mongoose.Schema({
      username: {type: String, required: true, unique: true},
      email: { type: String, required: true},
      password: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);

// post route
app.post('/register',async(req,res)=> {
  const {username, email, password} = req.body;

  const newUser = new User({username, email, password});

  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      message: 'User registered successfully',
      user: {
          id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email,
      }
  });
    } catch(error)
  {
    res.status(500).json({message: error.message});
  }

 
});