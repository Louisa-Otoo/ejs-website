const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
const path = require('path');
const authenticationIsSuccessful = require('./auth');


// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure session
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Create a middleware function to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.authenticated) {
    return next(); 
  } else {
    res.redirect('/login'); 
  }
}


// view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));


const staffMembers = require('./staffData'); // Import the staff data module


// Define the text you want to display on the image
const pageTitle = 'Welcome to Cuisine Cafe';
const pageDescription = 'Discover the finest flavors in town.';


 // Route for the login page (set as the index page)
app.get('/', (req, res) => {
  res.render('index');
});


app.post('/login', (req, res) => {
  if (authenticationIsSuccessful(req.body.username, req.body.password)) {
    req.session.authenticated = true;

    res.redirect('/home');
  } else {
    res.redirect('/login'); 
  }
});




  

app.use(router);

const PORT = process.env.PORT || 5433

app.listen(PORT , () => console.log(`Server is running on port ${PORT}`));