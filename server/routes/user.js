import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';

//signup api 


router.post('/signup',async(req,res)=>{
    const{username,email,password}= req.body;
   const user=await User.findOne({email})
   if(user){
   return res.json({message:"user already exists"});
   }
   const hashPassword = await bcrypt.hash(password,10);
   const newUser = new User({
    username,
    email,
    password:hashPassword
   });
   await newUser.save();
   return res.json({status:true, message: "registered"});
});

// login api 


router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const user = await User.findOne({email});
    if(!email || !password){
        return res.json({message:"enter full details"});
    }
    if (!user) {
       return res.json({message:"user not registered!"})
    }
    const validPassword = await bcrypt.compare(password,user.password);
    if (!validPassword) {
        return res.json({message:"password or email is incorect!"})
    }
   const token = jwt.sign({username:user.username},process.env.KEY,{expiresIn:'1h'});
   res.cookie('token',token,{httpOnely:true, maxAge:360000});
   return res.json({status:true,message:"loggedin successfull"})
});


export {router as UserRouter}