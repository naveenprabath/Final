import { Router } from 'express';
const router=Router();

const students=[];

//Create a new students
router.post('/pages',(req,res)=>{
    const {fullName,studentId,email,contactNumber,combination,password}=req.body;
    const newStudent = {fullName:fullName,studentId:studentId,email:email,contactNumber:contactNumber,combination:combination,password:password};
    students.push(newStudent);
    res.status(201).json(newStudent);
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

export default  router;
