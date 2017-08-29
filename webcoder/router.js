var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/public'));

// define the home page route
router.get('/', function(req, res) {
  res.send("hi");
});

module.exports = router;
