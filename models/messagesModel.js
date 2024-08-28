const mongoose = require('mongoose');

const messageScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A message must have a name'],
  },
  email: {
    type: String,
    required: [true, 'A message must have an email'],
  },
  subject: {
    type: String,
    required: [true, 'A message must have a subject'],
  },
  body: {
    type: String,
    required: [true, 'A message must have a body'],
  },
});

const Message = mongoose.model('Message', messageScheme);

module.exports = Message;
