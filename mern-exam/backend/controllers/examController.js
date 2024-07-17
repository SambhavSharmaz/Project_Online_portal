const asyncHandler = require('express-async-handler');
const Exam = require('../models/examModel');

// @desc    Fetch all exams
// @route   GET /api/exams
// @access  Public
const getExams = asyncHandler(async (req, res) => {
  const exams = await Exam.find({});
  res.json(exams);
});

// @desc    Fetch single exam by ID
// @route   GET /api/exams/:id
// @access  Public
const getExamById = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.params.id);
  if (exam) {
    res.json(exam);
  } else {
    res.status(404);
    throw new Error('Exam not found');
  }
});

// @desc    Create a new exam
// @route   POST /api/exams
// @access  Private (example of protected route)
const createExam = asyncHandler(async (req, res) => {
  const { title, questions } = req.body;

  const exam = new Exam({
    title,
    questions,
  });

  const createdExam = await exam.save();
  res.status(201).json(createdExam);
});

module.exports = { getExams, getExamById, createExam };
