const express = require('express');
const router = express.Router();
const Exam = require('../models/examModel');

// Create a new exam
router.post('/', async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const newExam = new Exam({ title, description, questions });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create exam', error });
  }
});

// Fetch all exams
router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find();
    res.status(200).json(exams);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch exams', error });
  }
});

// Fetch a single exam by ID
router.get('/:id', async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    res.status(200).json(exam);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch exam', error });
  }
});

module.exports = router;
