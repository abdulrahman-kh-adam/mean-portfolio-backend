const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  mainTitle: {
    type: String,
    required: [true, 'Home must have a mainTitle'],
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'Home must have a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Home must have a email'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Home must have a location'],
    trim: true,
  },
  job: {
    type: String,
    required: [true, 'Home must have a job'],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, 'Home must have a desc'],
    trim: true,
  },
  langs: {
    type: Number,
    required: [true, 'Home must have langs'],
  },
  tools: {
    type: Number,
    required: [true, 'Home must have tools'],
  },
  years: {
    type: Number,
    required: [true, 'Home must have years'],
  },
  query: {
    type: String,
    default: 'homeInfo',
  },
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
