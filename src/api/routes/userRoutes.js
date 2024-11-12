// src/api/routes/userRoutes.js
const express = require('express');
const { validateUser, validate } = require('../../validators/userValidator');
const userController = require('../controllers/userController');

const router = express.Router();
router.post('/', validateUser, validate, userController.createUser);
router.put('/:id', validateUser, validate, userController.updateUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;