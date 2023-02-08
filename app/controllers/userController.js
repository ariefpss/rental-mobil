var User = require('../database/models/User');
var bcrypt = require('bcrypt');

module.exports = {
    
    vFormSignup (req, res) {
        res.render('users/v-form-signup', {title : "SorCar"});
    },

    createUser (req, res) {
        console.log(req.body.email);

        // User.create({
        //     username: req.body.username,
        //     email: req.body.email,
            // password: passwordHash

        // }).then( user => {
        //     console.log(user);

        // }).catch( (error) => {
        //     console.log(error);
        // });
    }
}