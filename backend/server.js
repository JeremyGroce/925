// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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

// Check if username is already taken
app.get('/check-username',async(req, res) =>
{
  const {username} = req.query;

  try{
    const user = await User.findOne({username});
    if(user)
    {
        return res.json({taken:true});  
    }
    return res.json({taken:false});
  }
  catch(error)
  {
    console.error(error);
    return res.status(500).json({message: 'Server Error in /check-username'});
  }
});

// Create new User w/ Password
app.post('/register',async(req,res)=> {
  const {username, email, password} = req.body;

  const newUser = new User({username, email, password});

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({username, email, password: hashedPass});
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

app.post('/login', async(req,res)=>
{
  const {username, password} = req.body;
  try {
    const user = await User.findOne({ username });
    if(!user)
    {
      // username wrong
      return res.status(401).json({check: false});
    }

    const pass = await bcrypt.compare(password, user.password);
    console.log(pass);
    if(!pass)
    {
      // passwords don't match
      return res.status(401).json({check: false});
    }

    // otherwise successful login
    res.status(200).json({check: true});
  } catch(error)
  {
    console.error(error);
    res.status(500).json({message: 'server error' });
  }
});