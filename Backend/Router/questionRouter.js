// Import necessary modules
const express = require('express');
const router = express.Router();
// const Quiz = require('../Models/Question');
const QuizController=require('../Controllers/Question')
// Route to create a new quiz with questions
router.post('/create',QuizController.createQuiz);
router.get('/read',QuizController.getAllQuiz);
router.post('/addQuestion',QuizController.addQuestions);
router.patch('/updateQuestion',QuizController.updateQuestions);
router.post('/deleteQuiz',QuizController.deleteQuiz);
router.post('/submitQuiz',QuizController.submitQuiz);
router.get('/recordQuiz',QuizController.getQuizRecord);
router.post('/reallowQuiz',QuizController.removesubmitQuiz);
//reallowQuiz


// Export the router
module.exports = router;
