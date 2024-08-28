const express = require('express');
const controller = require('../controllers/messagesController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(controller.getAllMessages).post(controller.createMessage);
router.route('/:id').delete(authController.protect, controller.deleteMessage);

module.exports = router;
