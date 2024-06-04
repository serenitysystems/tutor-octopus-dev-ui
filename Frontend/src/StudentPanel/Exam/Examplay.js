import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { quizesData } from '../../redux/quizslice';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Stack } from 'react-bootstrap';
import { submitQuiz } from '../../apicalls/Questions';
import { toast } from 'react-toastify';

const Examplay = () => {
  const data = useSelector(quizesData);
  const location = useLocation();
  const navigate = useNavigate();
  const questionLength = location.state?.questionLength || data.activeQuiz.length;
  const questions = data?.activeQuiz.questions.slice(0, questionLength);

  const [answers, setAnswers] = useState([]);
  const [reviewedQuestions, setReviewedQuestions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [questionTime, setQuestionTime] = useState({});
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const timerRef = useRef(null);

  const handleClearAnswer = (currentQuestionIndex) => {
    setAnswers((prevAnswers) =>
      prevAnswers.filter((answer) => answer.questionIndex !== currentQuestionIndex)
    );
  };

  const handleOptionClick = (questionIndex, questionType, option) => {
    setAnswers((prevAnswers) => {
      const existingAnswer = prevAnswers.find((answer) => answer.questionIndex === questionIndex);

      if (questionType === 'objective') {
        if (existingAnswer) {
          const updatedAnswer = {
            ...existingAnswer,
            answer: existingAnswer.answer.includes(option)
              ? existingAnswer.answer.filter((ans) => ans !== option)
              : [...existingAnswer.answer, option],
          };
          return prevAnswers.map((answer) =>
            answer.questionIndex === questionIndex ? updatedAnswer : answer
          );
        } else {
          return [...prevAnswers, { type: questionType, answer: [option], questionIndex }];
        }
      }

      if (questionType === 'T/F') {
        const updatedAnswer = { type: questionType, answer: [option], questionIndex };
        return existingAnswer
          ? prevAnswers.map((answer) =>
              answer.questionIndex === questionIndex ? updatedAnswer : answer
            )
          : [...prevAnswers, updatedAnswer];
      }

      return prevAnswers;
    });
  };

  const handleTextInput = (questionIndex, questionType, value) => {
    setAnswers((prevAnswers) => {
      let existingAnswer = prevAnswers.find((answer) => answer.questionIndex === questionIndex);
      let updatedAnswer = {};
      if (questionType === 'Arrange the following' && existingAnswer) {
        updatedAnswer = { type: questionType, answer: [...existingAnswer.answer, value], questionIndex };
      } else {
        updatedAnswer = { type: questionType, answer: [value], questionIndex };
      }

      return existingAnswer
        ? prevAnswers.map((answer) =>
            answer.questionIndex === questionIndex ? updatedAnswer : answer
          )
        : [...prevAnswers, updatedAnswer];
    });
  };

  const handleMarkForReview = (currentQuestionIndex) => {
    setReviewedQuestions((prevReviewedQuestions) => ({
      ...prevReviewedQuestions,
      [currentQuestionIndex]: true,
    }));
  };

  const handleSave = (currentQuestionIndex, minutes, seconds) => {
    setQuestionTime((prev) => ({
      ...prev,
      [currentQuestionIndex]: `${minutes}m ${seconds}s`,
    }));
    if (currentQuestionIndex === questionLength - 1) {
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    saveCurrentTime();
    const payload = {
      quizId: data.activeQuiz._id,
      studentId: sessionStorage.getItem('userId'),
      answers: answers,
      questionTime:questionTime
    };
    if(payload.answers.length>0){
      const response = await submitQuiz(payload);
      if (response.success === true) {
        navigate(`/student/student-exam`, {
          state: { resultData: response.data, active: "result" },
        });
      }
      console.log(questionTime);
    }
    else{
      toast.info('Cannot submit Quiz . Give at least one answer')
    }
   
  };

  const handleQuestionChange = (index, type) => {
    saveCurrentTime();
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

  const saveCurrentTime = () => {
    setQuestionTime((prev) => ({
      ...prev,
      [currentQuestionIndex]: { minutes, seconds },
    }));
  };

  useEffect(() => {
    clearInterval(timerRef.current);

    const savedTime = questionTime[currentQuestionIndex] || { minutes: 0, seconds: 0 };
    setMinutes(savedTime.minutes);
    setSeconds(savedTime.seconds);

    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="row">
      {/* QUESTION SECTION */}
      <div className="col-lg-7 col-md-6 col-sm-12">
        <h5 className='mt-2'>Question Timer: {minutes}m {seconds}s</h5>
        <div className="p-3">
          <h5>{`Q${currentQuestionIndex + 1} of ${questions.length}`}</h5>
          <p className='fs-5'>{currentQuestion.question.text}</p>
          {currentQuestion.subText && <p>{currentQuestion.subText}</p>}
          {currentQuestion.questionType === 'objective' && (
            <>
              <div className="mb-3">
                <strong>Choose one or more options from below options</strong>
              </div>
              <div className="list-group mb-3">
                {currentQuestion.options.map((option, index) => (
                  <div className="row align-items-center mb-3" key={index}>
                    <label className="col-8 form-label">
                      {option}
                    </label>
                    <div className="col-4">
                      <input
                        type="checkbox"
                        value={option}
                        checked={
                          answers.find(
                            (answer) =>
                              answer.questionIndex === currentQuestionIndex &&
                              answer.answer.includes(option)
                          )
                        }
                        onChange={() =>
                          handleOptionClick(currentQuestionIndex, 'objective', option)
                        }
                        className="form-check-input border border-dark"
                      />
                    </div>
                  </div>
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
              onChange={e =>
                handleTextInput(currentQuestionIndex, 'Fill', e.target.value)
              }
              value={
                (answers.find(
                  (answer) => answer.questionIndex === currentQuestionIndex
                ) || { answer: [''] }).answer[0]
              }
            />
          )}
          {currentQuestion.questionType === 'Short' && (
            <Form.Control
              className='mt-2'
              placeholder='Write Answer here in short'
              type="text"
              onChange={e =>
                handleTextInput(currentQuestionIndex, 'Short', e.target.value)
              }
            />
          )}
          {currentQuestion.questionType === 'Arrange the following' && (
            <>
              {currentQuestion.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-">
                      <Form.Group
                        className="mb-3"
                        controlId={`option${currentQuestionIndex}-${optionIndex}`}
                      >
                        <Form.Control
                          className="mb-2"
                          type="text"
                          name={`option-${currentQuestionIndex}-${optionIndex}`}
                          value={option}
                          readOnly
                        />
                        <Form.Control
                          type="text"
                          name={`option-position-${currentQuestionIndex}-${optionIndex}`}
                          style={{ width: "60px", border: "1px solid black" }}
                          onChange={e =>
                            handleTextInput(
                              currentQuestionIndex,
                              'Arrange the following',
                              e.target.value
                            )
                          }
                        />
                      </Form.Group>
                    </div>
                  </Stack>
                </div>
              ))}
            </>
          )}
          {currentQuestion.questionType === 'T/F' && (
            <>
              <div className="d-flex flex-row gap-5">
                <Form.Label>True</Form.Label>
                <Form.Check
                  type="radio"
                  id={`question-${currentQuestionIndex}-true`}
                  name={`correctOption.${currentQuestionIndex}`}
                  value="true"
                  checked={
                    answers.find(
                      (answer) =>
                        answer.questionIndex === currentQuestionIndex &&
                        answer.answer[0] === 'true'
                    )
                  }
                  onChange={() =>
                    handleOptionClick(currentQuestionIndex, 'T/F', 'true')
                  }
                />
              </div>
              <div className="d-flex flex-row gap-5">
                <Form.Label>False</Form.Label>
                <Form.Check
                  type="radio"
                  id={`question-${currentQuestionIndex}-false`}
                  name={`correctOption.${currentQuestionIndex}`}
                  value="false"
                  checked={
                    answers.find(
                      (answer) =>
                        answer.questionIndex === currentQuestionIndex &&
                        answer.answer[0] === 'false'
                    )
                  }
                  onChange={() =>
                    handleOptionClick(currentQuestionIndex, 'T/F', 'false')
                  }
                />
              </div>
            </>
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
            <button className="btn btn-primary" onClick={() => handleSave(currentQuestionIndex, minutes, seconds)}>Save</button>
            <button className="btn btn-primary" onClick={() => handleQuestionChange('', 'next')}>Next</button>
            <button className="btn btn-primary" onClick={() => handleQuestionChange('', 'prev')}>Previous</button>
          </div>
        </div>
      </div>
      {/* ANSWER STATUS SECTION */}
      <div className="col-lg-5 col-md-6 col-sm-12 border-start">
        <div className="p-4">
          <h5>{`${answers.length}/${questions.length} Answered`}</h5>
          <div className="d-flex flex-wrap">
            {questions.map((question, index) => (
              <button
                key={index}
                className={`btn btn-sm m-1 ${answers.find((answer) => answer.questionIndex === index) ? 'btn-outline-primary' : reviewedQuestions[index] ? 'btn-outline-warning' : 'btn-outline-secondary'}`}
                onClick={() => handleQuestionChange(index, "numbering-button")}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="mt-3 fw-bold">
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
