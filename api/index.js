var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'You have connected'
      });
});


//////////////////////
// Postgres queries
//////////////////////

var db = require('./queries');

router.get('/resa/', db.getAllResaData);
router.get('/resa/:id', db.getResaData);
router.get('/stager/', db.getAllStagerData);
router.get('/stager/:id', db.getStagerData);
router.post('/stager/', db.createStagerData);
router.put('/stager/:id', db.updateStagerData);
// router.delete('/stager/:id', db.removeStagerData);
router.get('/resastatistics', db.resaStatistics);
router.get('/stagerstatistics', db.stagerStatistics);
router.get('/date',db.date);


module.exports = router;
