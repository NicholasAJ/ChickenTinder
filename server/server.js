const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const cookieParser = require('cookie-parser')

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
require('./config/mongoose.config');
require('dotenv').config();

app.use(express.json(), express.urlencoded({extended:true}));
// require('./routes/review.routes')(app);
const UserRoutes = require('./routes/user.routes');
UserRoutes(app);
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );