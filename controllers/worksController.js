const express = require('express');
const Work = require('../models/worksModel');

exports.getAllWorks = async (req, res) => {
  try {
    const works = await Work.find();
    res.status(200).json({
      status: 'success',
      count: works.length,
      data: {
        works,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getWorkById = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        work,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createWork = async (req, res) => {
  try {
    const newWork = await Work.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        newWork,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateWork = async (req, res) => {
  try {
    const updatedWork = await Work.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        updatedWork,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteWork = async (req, res) => {
  try {
    await Work.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'Work deleted successfully',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
