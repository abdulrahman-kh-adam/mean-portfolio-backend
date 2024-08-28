const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A skill must have a name'],
    unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'A skill must have an image'],
    trim: true,
  },
  category: {
    type: String,
    enum: ['FrontEnd', 'BackEnd', 'Other'],
    required: [true, 'A skill must have a category'],
    trim: true,
  },
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
