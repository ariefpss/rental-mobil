var express = require('express');
var router = express.Router();

const userController = require('../app/controllers/userController');

// TODO: CRUD Users 
router.get('/signup', userController.vFormSignup);
router.post('/signup', userController.createUser);

module.exports = router;
