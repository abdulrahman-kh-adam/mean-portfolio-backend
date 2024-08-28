const WorksCategory = require('../models/worksCategoryModel');

exports.getWorksCategories = async (req, res) => {
  try {
    const worksCategories = await WorksCategory.find();
    res.status(200).json({
      status: 'success',
      data: {
        worksCategories,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getWorksCategory = async (req, res) => {
  try {
    const worksCategory = await WorksCategory.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        worksCategory,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createWorksCategory = async (req, res) => {
  try {
    const worksCategory = await WorksCategory.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        worksCategory,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.editWorksCategory = async (req, res) => {
  try {
    const worksCategory = await WorksCategory.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      status: 'success',
      data: {
        worksCategory,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteWorksCategory = async (req, res) => {
  try {
    await WorksCategory.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
