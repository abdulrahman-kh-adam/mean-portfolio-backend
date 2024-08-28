const Skill = require('../models/skillModel');

exports.getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json({
      status: 'success',
      count: skills.length,
      data: {
        skills,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        skill,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const newSkill = await Skill.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        newSkill,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: 'success',
      data: {
        updatedSkill,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'Skill deleted successfully',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
