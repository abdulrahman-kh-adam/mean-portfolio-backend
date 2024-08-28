const express = require('express');
const controller = require('../controllers/aboutController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(controller.getAboutInfo)
  .patch(authController.protect, controller.updateAboutInfo);

module.exports = router;
