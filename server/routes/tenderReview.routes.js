const ReviewController = require('../controllers/tenderReview.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
  app.post('/review', authenticate, ReviewController.createReview);
  app.get('/review', authenticate,ReviewController.getAllReviews);
  // app.get('/review/:id', ReviewController.getOneReview);
  app.get('/review/:username/:id', authenticate, ReviewController.getOneReview);
  app.put('/review', authenticate, ReviewController.updateReview);
  app.delete('/review/:username/:id', authenticate, ReviewController.deleteReview,);
}