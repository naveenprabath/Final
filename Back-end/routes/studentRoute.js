const router = require("express").Router();
let student = require("../models/student");

router.get("/", (req, res) => {
  student
    .find()
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error:" + err));
});

// //Create a new students
// router.post('/pages',(req,res)=>{
//     const {fullName,studentId,email,contactNumber,combination,password}=req.body;
//     const newStudent = {fullName:fullName,studentId:studentId,email:email,contactNumber:contactNumber,combination:combination,password:password};
//     newStudent.save;
//     res.status(201).json(newStudent);
// });

//User login
/*router.post('/pages/login',(req,res)=>{
    const {email,password} = req.body
    const student = studnets.find((u)=>u.email === email);
    if(!student ||studnet.password!==password){
        return res.status(401).json({error:'Invalid email or password'});
    }
    res.status(200).json({message:'Login sucessful',user});
})*/
//Signup...............................................................
router.route("/Signup").post((req, res) => {
  // const fullName =req.body.fullName;
  // const studentId = req.body.studentId;
  // const email =req.body.email;
  // const contactNumber = req.body.contactNumber;
  // const combination = req.body.combination;
  // const password=req.body.password;
  // const newStudent = new studentModel({fullName,studentId,email,contactNumber,combination,password});

  const { fullName, studentId, email, contactNumber, combination, password } =
    req.body;

  var newStudent = {
    fullName,
    studentId,
    email,
    contactNumber,
    combination,
    password,
  };

  console.log(newStudent)

  student
    .create(newStudent)
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
