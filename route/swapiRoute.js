const express = require('express');
const swapiCtrl = require('../controller/swapiCtrl');

const router = express.Router();

router.get('/swapi', swapiCtrl.swapi);



module.exports = router