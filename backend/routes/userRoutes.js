const express = require('express');
const { registerUser, getPosts } = require('../controllers/userController');
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.post('/signup', registerUser);
router.get('/posts', protect, getPosts);

module.exports = router;
