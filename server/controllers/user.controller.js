const User = require('../models/user.models')
const secret = process.env.SECRET_KEY; //need to match to .env
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  registerUser: async (req,res) => {
    //checking if email is in database
    try{
      const potentialUser = await User.findOne({email:req.body.email})
      if(potentialUser){
        res.status(400).json({message: 'That email already exists, please login'})
      }else{
        // create user
        const newUser = await User.create(req.body);
        // generate user token
        const userToken = jwt.sign({_id: newUser._id, email:newUser.email}, secret,{expiresIn:'2h'}) //expires in will have a string like 1m, 4h, or 2d
        // send data back to the client
        res.status(201).cookie('userToken', userToken, {httpOnly:true, maxAge:2*60*60*1000}).json({newUser});
      }
    }
    catch(err){
      res.status(400).json({error:err})
    }
  },
  loginUser: async(req,res) =>{
    try{
      //checking if user already exist
      const user = await User.findOne({email:req.body.email})
      if(user){
        //check to see if password entered matches password in DB for that email (the hash)
        const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
        if(passwordsMatch){
          //generate user token
          const userToken = jwt.sign({_id: user._id, email:user.email}, secret,{expiresIn:'2h'})
          // log the user in
          res.status(201).cookie('userToken', userToken, {httpOnly:true, maxAge:2*60*60*1000}).json({user});
        }
        else{
          //if email exists but password does not match
          res.status(400).json({message:'Invalid email or password'})
        }
      }
      //if user does not exist
      else{
        res.status(400).json({message:'Invalid email or password'})
      }
    }
    catch(err){
      res.status(400).json({error:err})
    }
  },
  logout: (req,res) => {
    res.clearCookie('userToken').json({message:'You are logged out'})
  }
};