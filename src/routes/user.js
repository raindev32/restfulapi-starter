const express = require('express');

const router = express.Router();

const UserController = require('../controllers/userController');
const ResponseMiddleware = require('../middlewares/ResponseMiddleware');

router.get('/', UserController.all, ResponseMiddleware);
router.post('/create', UserController.post, ResponseMiddleware)

module.exports = router;
