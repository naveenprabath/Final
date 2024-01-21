const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Connection to database checking
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
});

app.get('/', (req, res) => {
  // Render your home page component here
  res.render('Home'); // Assuming you have a 'home' component
});


//---------------------------------------------------------------------------------------------------

// Import your user model
const student = require('./models/student').default; // Assuming your model is in a models folder
/*student.findOne({ email:  }).then(() => {
  // Handle user data
});*/

// User signup POST method
app.post('/Signup', async (req, res) => {
  try {
    // Extract user information from the request body
    const { fullName,
      studentId,
      email,
      contactNumber,
      combination,
      password} = req.body;

    // Create a new user object
     student = new student({  fullName,
      studentId,
      email,
      contactNumber,
      combination,
      password });

    // Save the user to the database
    await student.save();

    // Send a success response
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    // Handle any errors that occur during signup
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});