const express = require('express');
const controller = require('../controllers/homeController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(controller.getHomeInfo)
  .patch(authController.protect, controller.updateHomeInfo);

module.exports = router;
