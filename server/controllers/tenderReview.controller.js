const Review = require ("../models/tenderReview.models");

const createReview = (req,res) => {
  Review.create(req.body)
  .then (newReview => {
    console.log(newReview);
    res.json(newReview);
  })
  .catch(err => {
    console.log("error creating review", err);
    res.status(400).json(err);
  });
};

const getAllReviews = (req, res) => {
  const username = req.params.username;
  Review.find({createdBy: username}) // check this route
  .then(allReviews => {
    console.log(allReviews);
    res.json(allReviews);
  })
  .catch(err => {
    console.log("error getting all reviews", err);
    res.status(400).json(err);
  });
};

const getOneReview = (req, res) => {
  Review.findOne({_id:req.params.id})
  .then(oneReview => {
    console.log(oneReview);
    res.json(oneReview);
  })
  .catch(err => {
    console.log('error getting one review',err);
    res.json(400).json(err);
  });
};

const updateReview = (req, res) => {
  console.log(JSON.stringify(req.body, null, 2))
  Review.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
  .then(updatedReview =>{
    console.log(updatedReview);
    res.json(updatedReview);
  })
  .catch(err => {
    console.log("error updating review",err);
    res.json(400).json(err);
  });
};

const deleteReview = (req, res) => {
  Review.deleteOne({_id:req.params.id})
  .then(deletConfirmation => {
    console.log(deletConfirmation);
    res.json(deletConfirmation);
  })
  .catch(err => {
    console.log("error deleting review",err);
    res.json(400).json(err);
  });
};

module.exports = {
  createReview,
  getAllReviews,
  getOneReview,
  updateReview,
  deleteReview,
}