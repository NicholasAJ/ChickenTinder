const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
    minlength: 3,
    message: 'Restaurant name must be at least 3 characters long'
  },
  price: {
    type: Number,
    required: true,
    message: "Price is required"
  },
  crispiness: {
    type: Number,
    required: true,
    message: "please select a number 1-5"
  },
  flavor: {
    type: Number,
    required: true,
    message: "please select a number 1-5"
  },
  size: {
    type: Number,
    required: true,
    message: "please select a number 1-5"
  },
  comments: {
    type: String,
    required:true,
    message: "Please leave a comment"
  },
  createdBy: {
    type:String,
  },
})

module.exports =mongoose.model('Review',ReviewSchema);