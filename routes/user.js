const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/getUser', auth, userCtrl.getUser);
router.post('/getUserById', auth, userCtrl.getUserById);
router.post('/modifyUser/:id', auth, userCtrl.modifyUser);

module.exports = router;