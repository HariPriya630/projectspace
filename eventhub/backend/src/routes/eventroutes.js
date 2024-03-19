const express = require('express');
const eventsController = require('../controllers/past_event'); // Adjust the path as necessary
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      callback(null, Date.now()+"_"+file.originalname)
    }
});
const upload = multer({ storage: storage });

// Apply Multer middleware to the specific route
router.post('/api/addevent', upload.single('myfile'), eventsController.event); 
// router.post('/api/addevent',  eventsController.event)
// Other routes
router.get('/api/get-users', eventsController.GetUserData);
router.get('/api/get-user/:id', eventsController.UserDataById);
router.put('/api/update-user/:id', eventsController.UpdateSingleUser);
router.delete("/api/delete-user/:id", eventsController.DeleteUserData);

module.exports = router;
