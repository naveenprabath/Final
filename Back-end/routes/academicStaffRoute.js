const router = require("express").Router();
const academicStaff = require("../models/academicStaff");
let student = require("../models/student");

router.get("/", (req, res) => {
  academicStaff
    .find()
    .then((academicStaff) => res.json(academicStaff))
    .catch((err) => res.status(400).json("Error:" + err));
});



//User login
/*router.post('/pages/login',(req,res)=>{
    const {email,password} = req.body
    const student = studnets.find((u)=>u.email === email);
    if(!student ||studnet.password!==password){
        return res.status(401).json({error:'Invalid email or password'});
    }
    res.status(200).json({message:'Login sucessful',user});
})*/

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

  var newAcademicStaff = {
    fullName,
    studentId,
    email,
    contactNumber,
    combination,
    password,
  };

  console.log(newAcademicStaff)

  academicStaff
    .create(newAcademicStaff)
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
