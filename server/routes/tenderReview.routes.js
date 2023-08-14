const ReviewController = require('../controllers/tenderReview.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
  app.post('/review', authenticate, ReviewController.createReview);
  app.get('/review/:username', authenticate,ReviewController.getAllReviews);
  //:username is a variable name/placeholder
  // app.get('/review/:id', ReviewController.getOneReview);
  app.get('/review/:username/:id', authenticate, ReviewController.getOneReview);
  // user._id, reviewID
  app.put('/review', authenticate, ReviewController.updateReview);
  app.delete('/review/:username/:id', authenticate, ReviewController.deleteReview,);
}