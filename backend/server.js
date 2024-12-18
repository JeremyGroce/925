// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();
const port = 5000;


// MiddleWare
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors({
  origin: 'http://localhost:3000', // Specify your frontend URL
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
// Configure Session
app.use(session({
  secret: 'mySuperSecretKey12345!', //Temp Key for development
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 1000 * 60 * 60 } // Optional: set a max age for the cookie
}))


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

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ check: false });
    }

    const pass = await bcrypt.compare(password, user.password);
    console.log(`Password match: ${pass}`);
    if (!pass) {
      console.log('Password does not match');
      return res.status(401).json({ check: false });
    }

    req.session.userId = user._id;
    req.session.username = user.username;

    console.log("---login route---");
    console.log("|",req.session.userId);
    console.log("|",req.session.username);

    res.status(200).json({ check: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'server error' });
  }
});

// log out user upon request
// -> add try-catch block
app.post('/logout', async (req,res) => {
  console.log('---Logout Route---');
  req.session.destroy();
  res.clearCookie('connect.sid');
});

// Get username of currently logged in user
// -> add check of username being present
app.get('/current-username', async (req,res) =>
{
  res.status(200).json({ currentUser: req.session.username});
});

// get month, day of week, and day of month
app.get('/current-date', async(req,res) =>
{
  console.log("| current-date");
  const currentDate = new Date();

  // get current month (ie. October)
  const month = currentDate.getMonth();

  // number between 0-6 to determine Sun-Sat
  const dayOfWeek = currentDate.getDay();

  // day of the month (ie. 14th, 17th)
  const dayOfMonth = currentDate.getDate();

  res.json({
    month: month,
    dayOfWeek: dayOfWeek,
    dayOfMonth: dayOfMonth,
  })
});

// ----Create Category, Get Category, create task ----
const taskSchema = new mongoose.Schema(
  {
    taskName: {type: String, required: true},
    categoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  }
);

const categorySchema = new mongoose.Schema(
  {
    categoryName: {type: String, required: true},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
  }
);

const Category = mongoose.model('Category', categorySchema);

// Create category
app.post('/create-category', async(req,res) =>
{
  const categoryName = req.body.name;
  const currUser = req.session.userId;

  // prevent lack of user validation and prevent empty category
  if (!categoryName) return res.status(401).json({message: "Error - empty"});
  if (!currUser) return res.status(400).json({message: "Unauthorized - no user"});


  // uncomment after you get the frontend accessible only by authorized users 

  // try 
  // {
  //   const savedCategory = await Category.create({categoryName, userID});
  //   res.status(200).json({message: "|New category created"})
  // }
  // catch(error)
  // {
  //   res.status(500).json({message: "|Error creating category"});
  // }

});

// get existing category list
app.get('/current-categories', async(req,res) =>
{

});

// submit the task name, category, and general data
app.post('/create-task', async(req,res) =>
{

});

// 
