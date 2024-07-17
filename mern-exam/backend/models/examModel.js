const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [optionSchema],
  correctOption: { type: String, required: true }
});

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [questionSchema]
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
