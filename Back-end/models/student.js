const bcrypt = require('bcrypt');
const hash = bcrypt.hash; 

const validator = require('validator');
const isEmail = validator.isEmail; 


const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    fulllName:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:[isEmail,'invalid email']
    },
    contactNumber:{
        type:String,
        required:false
    },
    combination:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

studentSchema.pre('save',async function (next){
    const student =this;
    if(studentSchema.isModified('password')){
        studentSchema.password = await
        hash(student.password,10);
    }
    next();
})

const student = model('student',studentSchema);
module.exports = student;
