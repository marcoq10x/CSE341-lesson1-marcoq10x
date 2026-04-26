const express = require('express');
const router = express.Router();

const myController = require('../controllers');

router.get('/', myController.awesomeFunction);

module.exports = router;