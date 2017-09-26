var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {

  res.setHeader('Content-Type', 'application/json');

  // verify credentials

  // get db call
  // return auth data
  // res.json({
  //   "foo": "bar"
  // });
  res.send({
    "test": "test"
  });
  console.log(res);
});

console.log(router);

module.exports = router;
