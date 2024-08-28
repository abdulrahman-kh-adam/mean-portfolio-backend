const express = require('express');
const controller = require('../controllers/skillController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(controller.getAllSkills)
  .post(authController.protect, controller.createSkill);

router
  .route('/:id')
  .get(authController.protect, controller.getSkillById)
  .patch(authController.protect, controller.updateSkill)
  .delete(authController.protect, controller.deleteSkill);

module.exports = router;
