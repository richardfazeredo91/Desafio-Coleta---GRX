const express = require('express');
const FormDataController = require('../controllers/FormDataController');

const router = express.Router();
const data = new FormDataController();

router.post('/add', data.addData);

module.exports = router;
