const Home = require('../models/homeModel');

exports.getHomeInfo = async (req, res) => {
  try {
    const homeInfo = await Home.find();
    res.status(200).json({
      status: 'success',
      data: {
        homeInfo,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.updateHomeInfo = async (req, res) => {
  try {
    const homeInfo = req.body;
    const id = await Home.findOne({ query: 'homeInfo' }).select('_id').lean();
    const newHomeInfo = await Home.findByIdAndUpdate(id._id, homeInfo, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        newHomeInfo,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
