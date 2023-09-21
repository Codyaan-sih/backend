const express = require('express');
const checkAuthenticated = require('./auth').checkAuthenticated;
const mongoose = require('mongoose');

const User = require('../model/userSchema');
const Employee = require('../model/employeeSchema');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Fuck you");
});   

router.get('/user',checkAuthenticated,(req,res)=>{
    res.send('ho gya login user');
});

router.get('/employee',checkAuthenticated,async(req,res)=>{
    try{
        const id = req.user.id;
        const employee = await Employee.findById(id);
        console.log(employee);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
