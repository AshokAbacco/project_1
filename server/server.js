const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const signupRoute = require('./routes/signup');
const signinRoute = require('./routes/signin');

const app = express();
const port = 3000;

// ✅ Middlewares (should come before routes)
app.use(cors());
app.use(bodyParser.json());

// ✅ Routes
app.use('/signup', signupRoute);
app.use('/signin', signinRoute);

// ✅ MongoDB Connection
mongoose.connect('mongodb://localhost:27017/userdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
