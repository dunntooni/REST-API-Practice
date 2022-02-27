const express = require('express');

const profController = require('../controllers/prof'); //Get the prof controller

const router = express.Router();

router.get('/professional', profController.getProf); //Get the JSON data specified from the controller

module.exports = router;
