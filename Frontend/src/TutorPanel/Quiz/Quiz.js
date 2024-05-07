import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  Container,
  Dropdown,
  Form,
  Navbar,
  Stack,
} from "react-bootstrap";
import TopBar from "../SideNavbar/TopBar";
import MobilemenuNavbar from "../SideNavbar/MobilemenuNavbar";
import Sidenavbar from "../SideNavbar/Sidenavbar";
import "../OnlineResources.css";
import "./Quiz.css";
import { useLocation, useNavigate } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { toast } from "react-toastify";
import AddedQuestion from "./AddedQuestion";
import { AddQuestionRouter } from "../../apicalls/Questions";
import SelectBatch from "../../BackendComp/SelectBatch";
import SelectDate from "../../BackendComp/SelectDate";
import Description from "./Description";
import { useDispatch, useSelector } from "react-redux";
import { quizesData, setActiveQuiz } from "../../redux/quizslice";
import QuestionCard from "./QuestionCard";

const Quiz = ({ userData }) => {
  const [questions, setQuestions] = useState([
    {
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      check: false,
    },
  ]);
  const dispatch = useDispatch();
  const data = useSelector(quizesData);
  console.log(data);

  const PUBLIC_URL = process.env.PUBLIC_URL;
  const [options, setOptions] = useState(["", "", "", ""]);
  const [checkedIndex, setCheckedIndex] = useState(-1);
  const [counter, setCounter] = useState(1);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    setQuizData({
      selectedBatch: data.activeQuiz.batch,
      selectedDate: data.activeQuiz.selectedDate,
      subject: data.activeQuiz.subject,
      description: data.activeQuiz.description,
       questions: data.activeQuiz.questions,
    });
  }, []);

  // const handleChange = (index, e) => {
  //     if (e.target.name === 'question') {
  //         setQuestion(e.target.value);
  //     } else if (e.target.name === 'option') {
  //         const newOptions = [...options];
  //         newOptions[index] = e.target.value;
  //         setOptions(newOptions);
  //     } else if (e.target.name === 'checkbox') {
  //         const newCheckedIndex = e.target.checked ? index : -1;
  //         setCheckedIndex(newCheckedIndex);
  //     }
  // };

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     console.log('Question:', question);
  //     console.log('Options:', options);
  //     console.log('Checked Index:', checkedIndex);
  //     console.log(selectedBatch, " ", selectedDate)
  //     if (question.length === 0 || options.length < 4 || checkedIndex === -1) {
  //         toast.info('Add all fields to save the question');
  //         return;
  //     }

  //     const data = {
  //         question: question,
  //         options: options,
  //         checked: checkedIndex,
  //         managedBy: sessionStorage.getItem('userId')
  //     }
  //     console.log(data)
  //     const response = await AddQuestionRouter(data);
  //     console.log(response);
  //     if (response.success === true) {
  //         toast.success(response.message);
  //         setCounter(prev => prev + 1);
  //     }

  //     // Clear state values
  //     setQuestion('');
  //     setOptions(['', '', '', '']);
  //     setCheckedIndex(-1);
  // };

  // const handleCancel = () => {
  //     setQuestion('');
  //     setOptions(['', '', '', '']);
  //     setCheckedIndex(-1);
  // }

  const location=useLocation();
  const [formData, setFormData] = useState({
    questions: Array(counter).fill({
      question: "",
      options: Array(4).fill(""),
      correctOption: -1,
    }),
  });

  const handleChange = (questionIndex, field, value) => {
    setFormData((prevState) => {
      const updatedQuestions = [...prevState.questions];
      const updatedQuestion = { ...updatedQuestions[questionIndex] };

      if (field === "question") {
        updatedQuestion.question = value;
      } else if (field.startsWith("option")) {
        const optionIndex = parseInt(field.split("-")[1]);
        updatedQuestion.options[optionIndex] = value;
      } else if (field.startsWith("checkbox")) {
        const optionIndex = parseInt(field.split("-")[1]);
        // Uncheck other options in the same question
        updatedQuestion.correctOption = optionIndex;
        updatedQuestion.options = updatedQuestion.options.map(
          (option, index) => {
            return index === optionIndex ? value : "";
          }
        );
      }

      updatedQuestions[questionIndex] = updatedQuestion;
      return { ...prevState, questions: updatedQuestions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can submit formData to your backend or perform other actions
  };

  const handleBatchSelect = (batch) => {
    setSelectedBatch(batch);
  };
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  const handleSubjectChange = (subject) => {
    setSubject(subject);
  };
  const handleDescriptionChange = (description) => {
    setDescription(description);
  };
  useEffect(() => {
    setFormData({
      questions: Array(counter).fill({
        question: "",
        options: Array(4).fill(""),
        correctOption: -1,
      }),
    });
  }, [counter]);

  const handleQuizChange = (value, name) => {
    console.log(value, name);
    setActiveQuiz((preveState) => {
      return { ...preveState, [name]: value };
    });
  };

  return (
    <>
      <MobilemenuNavbar userData={userData} />
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
            <div className="p-2">
              <img
                role="button"
                src={`${PUBLIC_URL}/img/backbtn.svg`}
                className="logoimgy"
                onClick={() => window.history.back()}
              />
              <div
                class="dashboard-header px-md-2"
                style={{ padding: "0px 0px 70px 0px" }}
              >
                {/* <h1 class="h2">Dashboard</h1> */}
                <div className="d-flex align-items-center">
                  <SelectBatch onBatchSelect={handleBatchSelect} />
                  <SelectDate onDateSelect={handleDateSelect} />
                </div>
                <Description
                  handleQuizChange={handleQuizChange}
                  quizData={quizData}
                  // onSubjectChange={handleSubjectChange}
                  // onDescriptionChange={handleDescriptionChange}
                />

                {/* THIS CARD SHOULD BE SHOWN WHEN WE ARE ROUTING TO /QUIZ/:ID */}

             

                {/* <Card className="addnewcard89">
                  <Card.Body className="addstutnet1 d-flex justify-content-between align-items-center ">
                    <AddedQuestion/>
                    <div className="d-flex flex-column">
                      {quizData?.questions?.map((question, i) => (
                        <QuestionCard data={question} index={i + 1} />
                      ))}

                      <Form onSubmit={handleSubmit}>
                        {formData.questions.map((question, questionIndex) => (
                          <div
                            key={questionIndex}
                            className="question-container"
                          >
                            <h5 style={{ fontSize: "20px", fontWeight: "600" }}>
                              Question {quizData.questions.length + 1}
                            </h5>
                            <Form.Group
                            className="mb-3"
                            controlId={`question-${questionIndex}`}
                          >
                            <Form.Control
                              type="text"
                              name={`question-${questionIndex}`}
                              value={question.question}
                              onChange={(e) =>
                                handleChange(
                                  questionIndex,
                                  "question",
                                  e.target.value
                                )
                              }
                              required
                              placeholder="Add question here"
                            />
                          </Form.Group>
                          {[0, 1, 2, 3].map((optionIndex) => (
                            <div key={optionIndex}>
                              <Stack direction="horizontal" gap={3}>
                                <label
                                  className="-p"
                                  htmlFor={`option${questionIndex}-${optionIndex}`}
                                >
                                  Option {optionIndex + 1}:
                                </label>
                                <div className="p-">
                                  <Form.Group
                                    className="mb-3"
                                    controlId={`option${questionIndex}-${optionIndex}`}
                                  >
                                    <Form.Control
                                      type="text"
                                      name={`option-${questionIndex}-${optionIndex}`}
                                      value={question.options[optionIndex]}
                                      onChange={(e) =>
                                        handleChange(
                                          questionIndex,
                                          `option-${optionIndex}`,
                                          e.target.value
                                        )
                                      }
                                      required
                                      placeholder="Add options here"
                                    />
                                  </Form.Group>
                                </div>
                                <div className="p-">
                                  <input
                                    type="checkbox"
                                    id={`checkbox${questionIndex}-${optionIndex}`}
                                    name={`checkbox-${questionIndex}-${optionIndex}`}
                                    checked={
                                      question.correctOption === optionIndex
                                    }
                                    onChange={() =>
                                      handleChange(
                                        questionIndex,
                                        `checkbox-${optionIndex}`,
                                        optionIndex
                                      )
                                    }
                                  />
                                </div>
                              </Stack>
                            </div>
                          ))}
                          </div>
                        ))}
                        <div className="button-container mt-5 d-flex gap-3">
                          <Button
                            onClick={() => setCounter((pre) => pre + 1)}
                            color="success"
                            className="grnext py-2 px-5"
                          >
                            + Add Question
                          </Button>
                          <Button
                            type="submit"
                            color="success"
                            className="grnext py-2 px-5"
                          >
                            Save
                          </Button>
                          <Button
                            onClick={() => setCounter((pre) => pre - 1)}
                            type="submit"
                            color="success"
                            className="grnext py-2 px-5"
                          >
                            Cancel
                          </Button>
                        </div>
                      </Form>
                    </div>

                    <div>
                      <img
                        src={`${PUBLIC_URL}/img/Quiz-1.png`}
                        className="Quiz4"
                        alt="Quiz"
                      />
                    </div>
                  </Card.Body>
                </Card> */}
                

              
                
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Quiz;
