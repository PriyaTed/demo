var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name: 'S.Mohana Priya',
    email:'priya@gmail.com',
    contact:'9843272038',
    fatherName: 'K.R.Senbakaraman',
    dob:'26,Sep,2000',
    age: 22,
    bloodGroup: 'B+',
    
  });
});

module.exports = router;
