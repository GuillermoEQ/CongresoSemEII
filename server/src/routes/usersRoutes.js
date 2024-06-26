const express = require('express');
const userController = require('../controllers/usersController');
const router = express.Router();

router.get('/', userController.getAllUsers); // get all users
router.post('/login', userController.loginUser); // login user
router.post('/singup', userController.createUser); // create user
router.put('/:id', userController.updateUser); // update user
router.delete('/:id', userController.deleteUser); // delete user

module.exports = router;
