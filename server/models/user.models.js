const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
  username: {
    type:String,
    required:[true, 'Username is required']
  },
  email: {
    type:String,
    required:[true, 'Email is required'],
    validate:[isEmail, 'Invalid Email']
  },
  password:{
    type:String,
    required:[true],
    minLength: [8, 'Password must be at least 8 characters'],
  },
  name: {
    type:String,
    required:[true],
  }
}, {timestamps:true})

// *Middleware
UserSchema.virtual('confirmPassword')
  .get(() => this.confirmPassword)
  .set(value => this.confirmPassword = value)

UserSchema.pre('validate', function(next){
  if(this.password !== this.confirmPassword){
    this.invalidate('confirmPassword', 'Passwords do not match')
  }
  next();
})

UserSchema.pre('save', function(next){
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password=hash
      next();
    });
});

module.exports = mongoose.model('User',UserSchema);
