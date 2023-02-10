var bcrypt = require('bcrypt');
var Sequelize = require('sequelize');

var User = require('../database/models').users;

module.exports = {
    
    vFormSignup (req, res) {
        res.render('users/v-form-signup', {title : "SorCar"});
    },

    createUser (req, res) {
        var salt = bcrypt.genSaltSync(10);
        var passwordHash = bcrypt.hashSync(req.body.password, salt);

        var user = {
            username: req.body.username,
            email: req.body.email,
            password: passwordHash
        }

        User.create(user)
            .then(data => { res.send(data); })
            .catch(err => {
                res.status(400).send(err);
            });
    }
}