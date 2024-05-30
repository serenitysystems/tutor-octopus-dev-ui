import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { quizesData } from '../../redux/quizslice';
import { useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Examplay = () => {
  const data = useSelector(quizesData);
  const location = useLocation();
  const { questionLength } = location.state;
  const questions = data?.activeQuiz.questions.slice(0, questionLength);

  console.log(questions);
  const [answers, setAnswers] = useState([]);
  const [reviewedQuestions, setReviewedQuestions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (Qindex, type, option) => {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      let answerObj = updatedAnswers.find(answer => answer.Qindex === Qindex);

      if (!answerObj) {
        answerObj = { Qindex, type, correctOption: type === 'mcq' ? [] : [''] };
        updatedAnswers.push(answerObj);
      }

      if (type === 'mcq') {
        const optionIndex = answerObj.correctOption.indexOf(option);
        if (optionIndex > -1) {
          answerObj.correctOption.splice(optionIndex, 1);
        } else {
          answerObj.correctOption.push(option);
        }
      } else if (type === 'Fill') {
        answerObj.correctOption[0] = option; // Assuming single fill-in-the-blank for simplicity
      }

      return updatedAnswers;
    });

    console.log(answers);

    setReviewedQuestions(prevReviewedQuestions => {
      const updatedReviewedQuestions = { ...prevReviewedQuestions };
      if (updatedReviewedQuestions[Qindex]) {
        delete updatedReviewedQuestions[Qindex];
      }
      return updatedReviewedQuestions;
    });
  };

  const handleClearAnswer = questionId => {
    setAnswers(prevAnswers =>
      prevAnswers.filter(answer => answer.Qindex !== questionId)
    );
  };

  const handleMarkForReview = questionId => {
    setReviewedQuestions(prevReviewedQuestions => ({
      ...prevReviewedQuestions,
      [questionId]: true
    }));
  };

  const handleSave = () => {
    alert('Answers saved!');
  };

  const handleSubmit = () => {
    setSubmitted(true);
    alert('Test submitted!');
  };

  const handleQuestionChange = (index, type) => {
    if (type === 'numbering-button') {
      setCurrentQuestionIndex(index);
    } else if (type === 'next') {
      setCurrentQuestionIndex((prev) =>
        prev === questions.length - 1 ? 0 : prev + 1
      );
    } else if (type === 'prev') {
      setCurrentQuestionIndex((prev) =>
        prev === 0 ? questions.length - 1 : prev - 1
      );
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="row">
      {/* QUESTION SECTION */}
      <div className="col-lg-9 col-md-8 col-sm-12">
        <div className="p-3">
          <h5>{`Q${currentQuestionIndex + 1} of ${questions.length}`}</h5>
          <p className='fs-5'>{currentQuestion.text}</p>
          {currentQuestion.subText && <p>{currentQuestion.subText}</p>}
          {currentQuestion.questionType === 'objective' && (
            <>
              <div className="mb-3">
                <strong>Choose one from below options</strong>
              </div>
              <div className="list-group mb-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={option.id}
                    className={`list-group-item list-group-item-action ${answers.find(answer => answer.Qindex === currentQuestionIndex && answer.correctOption.includes(option)) ? 'active border border-dark' : ''}`}
                    onClick={() => handleOptionClick(currentQuestionIndex, currentQuestion.questionType, option)}
                  >
                    {index + 1}. {option}
                  </button>
                ))}
              </div>
            </>
          )}
          {currentQuestion.questionType === 'Fill' && (
            <Form.Control
              className='mt-2'
              placeholder='fill up here'
              type="text"
              style={{ width: "100px" }}
              onChange={e => handleOptionClick(currentQuestionIndex, 'Fill', e.target.value)}
            />
          )}
          <div className="mt-3">
            <button className="btn btn-outline-danger me-2" onClick={() => handleClearAnswer(currentQuestionIndex)}>
              Clear Answer
            </button>
            <button className="btn btn-outline-warning" onClick={() => handleMarkForReview(currentQuestionIndex)}>
              Mark for Review
            </button>
          </div>
          <div className="d-flex gap-3 mt-3">
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <button className="btn btn-primary" onClick={() => handleQuestionChange('', 'next')}>Next</button>
            <button className="btn btn-primary" onClick={() => handleQuestionChange('', 'prev')}>Previous</button>
          </div>
        </div>
      </div>
      {/* ANSWER STATUS SECTION */}
      <div className="col-lg-3 col-md-4 col-sm-12 ">
        <div className="p-4">
          <h5>{`${Object.keys(answers).length}/${questions.length} Answered`}</h5>
          <div className="d-flex flex-wrap">
            {questions.map((question, index) => (
              <button
                key={question.id}
                className={`btn btn-sm m-1 ${answers.find(answer => answer.Qindex === index) ? 'btn-outline-primary' : reviewedQuestions[index] ? 'btn-outline-warning' : 'btn-outline-secondary'}`}
                onClick={() => handleQuestionChange(index, "numbering-button")}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <div className="d-flex justify-content-between text-success">
              <span>Answered</span>
              <span>{answers.length}</span>
            </div>
            <div className="d-flex justify-content-between text-dark">
              <span>Not Answered</span>
              <span>{questions.length - answers.length}</span>
            </div>
            <div className="d-flex justify-content-between text-warning">
              <span>Marked for Review</span>
              <span>{Object.keys(reviewedQuestions).length}</span>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn btn-danger" onClick={handleSubmit}>Finish Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examplay;
