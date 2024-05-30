import React, { useEffect, useState } from "react";
import { constants } from "../../utils";
import StudentSideNavBar from "../../TutorPanel/SideNavbar/StudentSideBar";
import { useSelector } from "react-redux";
import { quizesData } from "../../redux/quizslice";
import { Form, Button, Stack, Modal } from "react-bootstrap";
import QuizTime from "./QuizTime";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { submitQuiz } from "../../apicalls/Questions";

const QuizPlay = () => {
  const data = useSelector(quizesData);
  const navigate=useNavigate();
  const [subjectiveAnswer,setsubjectiveAnswer]=useState({});
  const[showResult,setShowResult]=useState(false); 
  const[ resultCard,setResultCard]=useState();
  const [timeRemaining, setTimeRemaining] = useState(
    (data.activeQuiz.totalQuizTime.match(/\d+/g).map(Number)[0] * 3600)
             + (data.activeQuiz.totalQuizTime.match(/\d+/g).map(Number)[1] * 60)
  );

  
  const [allAnswers, setAllAnswers] = useState([]);
  const [isTabVisible, setIsTabVisible] = useState(true);  // State for tracking tab visibility

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setIsTabVisible(true);
        console.log('Tab is now active');
        // Perform any actions needed when the tab becomes active again
      } else {
        setIsTabVisible(false);
        console.log('Tab is now inactive');
        // Perform any actions needed when the tab is inactive
        toast.warning('You have switched tabs. Please stay on the quiz tab.');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  const handleCloseModal = () => {
    setShowResult(false);
    navigate('/student/student-quiz');  // Navigate to the desired page
  };

  const handleFormSubmit =async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const answers = [];

    data.activeQuiz?.questions.forEach((question, questionIndex) => {
      if (question.questionType === "objective") {
        const selectedOptions = [];
        question.options.forEach((option, optionIndex) => {
          if (formData.getAll(`correctOption-${questionIndex}`).includes(option)) {
            selectedOptions.push(option);
          }
        });
        answers.push(selectedOptions);
      }

      if (question.questionType === "T/F") {
        const selectedTF = formData.get(`correctOption.${questionIndex}.correctOption[0]`);
        answers.push([selectedTF]);
      }

      if (question.questionType === "Arrange the following") {
        const arrangedOptions = question.options.map((_, optionIndex) =>
          formData.get(`option-position-${questionIndex}-${optionIndex}`)
        );
        answers.push(arrangedOptions);
      }
    });

    setAllAnswers(answers);
    console.log('All Answers:', answers);
    // Call the original handleSubmit function with the collected answers if needed
    // handleSubmit(answers);
    const payload={
      quizId:data.activeQuiz._id,
      studentId:sessionStorage.getItem('userId'),
      answers:answers
    }
    try {
      const response = await submitQuiz(payload);
      console.log(response);
      setResultCard(response.dataNew);  // Assuming response.data contains the quiz result
      setShowResult(true);
    

    } catch (error) {
      console.error("Failed to submit quiz", error);
      toast.error("Failed to submit quiz");
    }
  
   
   // console.log(response);
    //navigate('/student/student-quiz')
    //AFTER THIS I WANT TO OPEN A MODAL HAVING QUIZ RESULT .
  };
  return (
    <div className="container-fluid">
      <div
        className="dashboard-header px-md-4"
        style={{ padding: "0px 0px 70px 0px" }}
      >
        <QuizTime
          timeRemaining={timeRemaining}
          setTimeRemaining={setTimeRemaining}
        />
           <Form onSubmit={handleFormSubmit}>
      {data.activeQuiz?.questions?.map((question, questionIndex) => (
        <div key={questionIndex} className="question-container">
          <h5 style={{ fontSize: "20px", fontWeight: "600" }}>
            Question {questionIndex + 1}
          </h5>
          <Form.Group className="mb-3">
          <Form.Control
          type="text"
          className="fw-bold border border-success"
          value={" Instruction to be given "}
          />
            <Form.Label>Question Type</Form.Label>
            <Form.Control
              value={question.questionType}
              readOnly
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId={`question-${questionIndex}`}
          >
             <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              name={`question-${questionIndex}`}
              readOnly
              value={question.question.text}
            />
            {question.question.image && (
              <img
                src={question.question.image}
                alt={`Question ${questionIndex + 1}`}
                className="img-fluid mx-auto d-block"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: "300px",
                }}
              />
            )}
          </Form.Group>


          {question.questionType === "objective" &&
            question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <Stack direction="horizontal" gap={3}>
                  <label
                    className="p-"
                    htmlFor={`option${questionIndex}-${optionIndex}`}
                  >
                    Option {optionIndex + 1}:
                  </label>
                  <Form.Group
                    className="d-flex flex-row gap-2"
                    controlId={`option${questionIndex}-${optionIndex}`}
                  >
                    <Form.Label>{option}</Form.Label>
                    <Form.Check
                      type="checkbox"
                      name={`correctOption-${questionIndex}`}
                      value={option}
                    />
                  </Form.Group>
                </Stack>
              </div>
            ))}

          {question.questionType === "T/F" && (
            <>
              <div className="d-flex flex-row gap-5">
                <Form.Label>True</Form.Label>
                <Form.Check
                  type="radio"
                  id={`question-${questionIndex}-true`}
                  name={`correctOption.${questionIndex}.correctOption[${0}]`}
                  value="true"
                />
              </div>
              <div className="d-flex flex-row gap-5">
                <Form.Label>False</Form.Label>
                <Form.Check
                  type="radio"
                  id={`question-${questionIndex}-false`}
                  name={`correctOption.${questionIndex}.correctOption[${0}]`}
                  value="false"
                />
              </div>
            </>
          )}

          {question.questionType === "Arrange the following" && (
            <>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-">
                      <Form.Group
                        className="mb-3"
                        controlId={`option${questionIndex}-${optionIndex}`}
                      >
                        <Form.Control
                          className="mb-2"
                          type="text"
                          name={`option-${questionIndex}-${optionIndex}`}
                          value={option}
                          readOnly
                        />
                        {/* <p>Enter the correct position number of this item</p> */}
                        <Form.Control
                          type="text"
                          name={`option-position-${questionIndex}-${optionIndex}`}
                          style={{
                            width: "60px",
                            border: "1px solid black",
                          }}
                        />
                      </Form.Group>
                    </div>
                  </Stack>
                </div>
              ))}
            </>
          )}
        </div>
      ))}

      <div className="button-container mt-5 d-flex gap-3">
        <Button type="submit" className="py-2 px-5 btn-theme-secondary">
          Submit Answers
        </Button>
      </div>
    </Form>

       
      </div>
      <Modal show={showResult} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {resultCard ? (
            <div>
              {/* Render the quiz result here */}
              <h5>Score: {resultCard.score}</h5>
              <h5>Percentage: {resultCard.percentage}</h5>
              <h5>TotalMarks {resultCard.totalMarks}</h5>
              {/* Add more result details as needed */}
            </div>
          ) : (
            <p>Loading result...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QuizPlay;
