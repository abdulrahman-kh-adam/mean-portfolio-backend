const express = require('express');
const controller = require('../controllers/worksCategoryController');
const router = express.Router();
const authController = require('../controllers/authController');

router
  .route('/')
  .get(controller.getWorksCategories)
  .post(authController.protect, controller.createWorksCategory);

router
  .route('/:id')
  .get(authController.protect, controller.getWorksCategory)
  .patch(authController.protect, controller.editWorksCategory)
  .delete(authController.protect, controller.deleteWorksCategory);

module.exports = router;
