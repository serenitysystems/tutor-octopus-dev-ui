const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionName: String,
  options: [String],
  correct:String||Number
});

const quizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  batch: String,
  date: { type: Date, required: true },
  subject: String,
  description: String,
  questions: [questionSchema],
  userId: { type: String, required: true }
});

module.exports = mongoose.model('Quiz', quizSchema);
