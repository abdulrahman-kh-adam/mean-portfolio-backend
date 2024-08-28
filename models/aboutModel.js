const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'About must have a description'],
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'About must have an image'],
    trim: true,
  },
  query: {
    type: String,
    default: 'aboutInfo',
  },
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
