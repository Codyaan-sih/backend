const express = require('express');
const checkAuthenticated = require('./auth').checkAuthenticated;
const mongoose = require('mongoose');

const User = require('../model/userSchema');
const Employee = require('../model/employeeSchema');
const router = express.Router();

const bank_name = require('../extraAsset/bank');
router.get('/', (req, res) => {
    res.render('index',{bank_name:bank_name});
});   

router.get('/user',checkAuthenticated,(req,res)=>{
    res.send('ho gya login user');
});

router.get('/employee',checkAuthenticated,async(req,res)=>{
    try{
        const id = req.user.id;
        const employee = await Employee.findById(id);
        res.status(200).json({"messoge":"success","employee":employee});
        console.log(employee);
    }catch(err){
        console.log(err);
    }
});


module.exports = router;
