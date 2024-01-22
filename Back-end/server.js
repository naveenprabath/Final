const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Connection to database checking
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
});

app.get('/', (req, res) => {
  res.send("HEllo")
  // Render your home page component here
  // res.render('Home'); // Assuming you have a 'home' component
});


//---------------------------------------------------------------------------------------------------

// Import your user model
//const student = require('./models/student').default; // Assuming your model is in a models folder

const studentRouter = require('./routes/studentRoute');
//const academicStaffRouter = require('./routes/academicStaffRoute');


app.use('/student',studentRouter);
//app.use('/academicStaff',academicStaffRouter);


//-----------------------------------------------------------
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});