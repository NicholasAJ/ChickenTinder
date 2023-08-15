const UserController = require('../controllers/user.controller')

const Users = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
  // app.post("/api/register", Users.register);
  // app.post("/api/login", Users.login);
  // this route now has to be authenticated
  app.get("/api/users", authenticate, Users.getAll);
}

module.exports = app => {
  app.post('/api/register', UserController.registerUser)
  //cannot use put, has to be post
  app.post('/api/login', UserController.loginUser)
  app.post('/api/logout', UserController.logout)
  app.get('',UserController.getUser)
  app.get('',UserController.getAllUsers)
  app.put('/api/user/update/:username', authenticate, UserController.updateUser)
  app.delete('/api/user/:username',UserController.deleteUser)
  // get logged user route, verify or decode in JWT library, cadens lecture videos
}