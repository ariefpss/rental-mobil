var express = require('express');
const userController = require('../app/controllers/userController');
var router = express.Router();

//* Get view form signup
router.get('/signup', userController.vFormSignup);

module.exports = router;
