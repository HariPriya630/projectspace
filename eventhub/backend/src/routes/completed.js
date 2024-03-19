const express = require('express');
const completedcontroller =require('../controllers/completed')
const router = express.Router();
router.post('/api/addpastevent', completedcontroller.addEvent); 
router.get('/api/getusers', completedcontroller.GetUserData);
router.get('/api/getuser/:id', completedcontroller.UserDataById);
router.put('/api/updateuser/:id',completedcontroller.UpdateSingleUser);
router.delete("/api/deleteuser/:id", completedcontroller.DeleteUserData);
module.exports = router;