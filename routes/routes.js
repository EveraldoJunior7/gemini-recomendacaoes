const express = require('express');
const router = express.Router();
const inicialController = require('../controllers/inicialController');

router.get('/', inicialController.renderizarChat);

module.exports = router;