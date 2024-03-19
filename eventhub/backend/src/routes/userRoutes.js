const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/UserController')

//User Routes

Router.post('/api/login-user', UserController.addUser);
Router.get('/api/getuse', UserController.GetUserData);
Router.delete('/api/deluser/:id', UserController.DeleteUserData); // Note: Added :id parameter
module.exports = Router;
