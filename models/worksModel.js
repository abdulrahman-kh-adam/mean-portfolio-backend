const mongoose = require('mongoose');

const worksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  github: {
    type: String,
    unique: true,
  },
  preview: {
    type: String,
    unique: true,
  },
});

const Work = mongoose.model('Work', worksSchema);

module.exports = Work;
