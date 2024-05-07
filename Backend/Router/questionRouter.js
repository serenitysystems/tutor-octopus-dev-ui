// Import necessary modules
const express = require('express');
const router = express.Router();
const Quiz = require('../Models/Question');
const QuizController=require('../Controllers/Question')
// Route to create a new quiz with questions
router.post('/create',QuizController.quizDetails);

// Export the router
module.exports = router;
