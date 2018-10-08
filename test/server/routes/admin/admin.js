var express = require('express');
var router = express.Router();



var admin_login = require('./admin_login');
router.use('/login', admin_login);
var admin_logout = require('./admin_logout');
router.use('/logout', admin_logout);
var add_admin = require('./add_admin');
router.use('/add', add_admin);


module.exports=router;