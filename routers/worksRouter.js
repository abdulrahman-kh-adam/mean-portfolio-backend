const express = require('express');
const controller = require('../controllers/worksController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(controller.getAllWorks)
  .post(authController.protect, controller.createWork);

router
  .route('/:id')
  .get(authController.protect, controller.getWorkById)
  .patch(authController.protect, controller.updateWork)
  .delete(authController.protect, controller.deleteWork);

module.exports = router;
