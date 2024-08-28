const About = require('../models/aboutModel');

exports.getAboutInfo = async (req, res) => {
  try {
    const aboutInfo = await About.find();
    res.status(200).json({
      status: 'success',
      data: {
        aboutInfo,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.updateAboutInfo = async (req, res) => {
  try {
    const aboutInfo = req.body;
    const id = await About.findOne({ query: 'aboutInfo' }).select('_id').lean();
    const newAboutInfo = await About.findByIdAndUpdate(id._id, aboutInfo, {
      new: true,
      runValidators: true,
      upsert: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        newAboutInfo,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
