const express = require('express');
const router = express.Router();
const personController = require('../controllers/persons.controllers');

router.get('/', personController.findAll);
router.post('/', personController.create);

module.exports = router;