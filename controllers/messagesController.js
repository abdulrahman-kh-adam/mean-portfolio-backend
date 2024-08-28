const Message = require('../models/messagesModel');

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      status: 'success',
      data: {
        messages,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        message,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'Message deleted successfully',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
