var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', (req, res, next) => {
  // var response = {};

  let user = models.User.build({
    id: 12,
    username: 'test',
    password: '123456789o8765432sdcvbnmnbvsfdsgdh',
    fName: 'fname',
    lName: 'lname',
    uadd: '123 test ln',
    ucity: 'FRED',
    ustate: 'NC',
    uzip: 234567,
    uphone: 9199199191,
    uemail: 'foo@bar.com',
    webjoin: new Date()
  });

  // res = response;
  //
  // res.setHeader('Content-Type', 'application/json');

  // verify credentials

  // get db call
  // return auth data
  user.save().then(() => res.json({
    foo: "bar"
  }))
  // res.send();
});


module.exports = router;
