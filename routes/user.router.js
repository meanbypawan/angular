const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { body } = require('express-validator');
router.post("/signup",
 body('email').isEmail(),
 body('password').notEmpty(),
 userController.signup);

 module.exports = router;