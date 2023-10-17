const router = require('express').Router();

// Import the staff data module
const staffMembers = require('./staffData');


// route for the home page 
router.get('/home', (req, res) => {
  const pageTitle = 'Cuisine Cafe';
  const pageDescription = 'Discover the finest flavors in town.'
  res.render('home', { pageTitle, pageDescription })
});



// route for the about page
router.get('/about', (req, res) => {
    const pageTitle = 'About Cuisine Cafe';
    const pageDescription = 'Lorem20'
    res.render('about', { pageTitle, pageDescription })
});


// route for the menu page
router.get('/menu', (req, res) => {
    // You can fetch menu data from a database or other source here
    const pageTitle = 'Ready To enjoy?';
    const menuItems =  []; /* initialise menuItems as an emty array */
    res.render('menu', { pageTitle, menuItems });
});



router.post('/login', (req, res) => {
    if (authenticationIsSuccessful(req.body.username, req.body.password)) {
      req.session.authenticated = true;

      res.redirect('/home');
    } else {
      res.redirect('/login'); 
    }
  });


// router for the staff page 
router.get('/staff', (req, res) => {
    const pageTitle = 'Meet Our Team';
    res.render('staff', { pageTitle, staffMembers });
});    


module.exports = router;



