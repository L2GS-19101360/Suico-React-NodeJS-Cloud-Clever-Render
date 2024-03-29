const express = require('express');
const router = express.Router();
const personController = require('../controllers/persons.controllers');

router.get('/', personController.findAll);
router.post('/', personController.create);
router.delete('/:id', personController.delete);

module.exports = router;