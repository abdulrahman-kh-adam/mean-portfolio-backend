const mongoose = require('mongoose');

const worksCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const WorksCategory = mongoose.model('WorksCategory', worksCategorySchema);

module.exports = WorksCategory;
