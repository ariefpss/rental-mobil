var express = require('express');
var router = express.Router();
var indexController = require('../app/controllers/indexController');

/* GET home page. */
router.get('/', indexController.vIndex);

module.exports = router;
