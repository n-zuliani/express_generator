var express = require('express'); 
var router = express.Router(); 
var country = require('countryjs');


router.get('/info/US', function(req, res, next) {
 res.send(country.info('US'));  
});

router.get('/info/:state/', function(req, res, next){ 
 res.send(country.info(req.params));
})

module.exports = router; 