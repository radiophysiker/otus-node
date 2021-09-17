const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  name: String,
  description: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = {
  Course,
};
