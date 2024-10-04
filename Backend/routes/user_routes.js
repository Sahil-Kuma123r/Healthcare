const Router = require('express').Router();
const {registerUser,login} = require('../controllers/user_controller.js')
const {istokenValid} = require('../controllers/isValid.js')

Router.route('/register').post(registerUser)
Router.route('/login').post(login)
Router.route('/valid').post(istokenValid)

module.exports = Router