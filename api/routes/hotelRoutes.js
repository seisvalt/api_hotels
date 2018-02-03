var express = require('express');
var router = express.Router();
var hotels = require("../controllers/hotelController");

router.get('/', hotels.findAll);

router.post('/', hotels.create);

router.get('/:id', function(req, res){
  console.log(req.params)
  res.json({
    response: "a GET request for LOOKING at a special answer id: ${req.params.qID}"
  });
});


module.exports = router;