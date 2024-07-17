const express = require('express');
const router = express.Router();
const { authUser, registerUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Define routes
router.post('/login', authUser);
router.post('/register', registerUser);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
