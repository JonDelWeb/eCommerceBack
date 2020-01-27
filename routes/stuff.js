const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer_config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', stuffCtrl.getAllStuff);
router.get('/account/myStuff', auth, stuffCtrl.getAllStuffByUser);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.put('/:id', auth, stuffCtrl.modifyRate);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;   