const UserController = require('../controllers/user.controller')

module.exports = app => {
  app.post('/api/register', UserController.registerUser)
  //cannot use put, has to be post
  app.post('/api/login', UserController.loginUser)
  app.post('/api/logout', UserController.logout)
  app.get('',UserController.getUser)
  app.get('',UserController.getAllUsers)
  app.delete('',UserController.deleteUser)
}