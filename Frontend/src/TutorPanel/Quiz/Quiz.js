import React, { useCallback, useEffect, useState } from "react";
import '../../Components/Common/common.css'

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
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { toast } from "react-toastify";

import { AddUpdateQuesitons, CreateQuiz } from "../../apicalls/Questions";
import SelectBatch from "../../BackendComp/SelectBatch";
import SelectDate from "../../BackendComp/SelectDate";
import Description from "./Description";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRightLong } from "react-icons/fa6";

import {
  addQuiz,
  quizesData,
  setActiveQuiz,
  updateQuiz,
} from "../../redux/quizslice";
import { set, useForm } from "react-hook-form";
import Time from "./Time";
import CloudinaryUploadWidget from "../../Components/UploadImage";

const Quiz = ({ userData }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector(quizesData);
  console.log(data);

  const [optionsIndexes, setoptionIndexes] = useState([0, 1, 2, 3]);
  const [optionsIndexesMcqs, setoptionIndexesMcqs] = useState([0, 1, 2, 3]);
  const [checkedIndex, setCheckedIndex] = useState(-1);
  const [counter, setCounter] = useState(1);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const today2 = new Date();
  const [quizData, setQuizData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [startTime, setstartTime] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [calenderDate, setcalenderDate] = useState(today2);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quizType, setquizType] = useState("");
  const userId = sessionStorage.getItem("userId");
  const BATCH = ["Batch-1", "Batch-2", "Batch-3", "Batch-4", "Batch-5"];
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const totalQuizTime = data?.activeQuiz?.totalQuizTime?.split(" ");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setValue,
    clearErrors,
  } = useForm({
    defaultValues: {
      batch: data?.activeQuiz?.batch || BATCH[0],
      date: data?.activeQuiz?.date || formattedDate,
      time: data?.activeQuiz?.time,
      subject: data?.activeQuiz?.subject,
      description: data?.activeQuiz?.description,
      questions: data?.activeQuiz?.questions || [],
      hours: parseInt(totalQuizTime?.[0]),
      minutes: parseInt(totalQuizTime?.[1]),
      passingCriteria: data?.activeQuiz.passingCriteria,
    },
  });
  const formDatanew = watch(); // Watching all form fields

  useEffect(() => {
    setQuizData({
      batch: data?.activeQuiz?.batch,
      date: data?.activeQuiz?.batch,
      time: data?.activeQuiz?.time,
      subject: data.activeQuiz.subject,
      description: data.activeQuiz.description,
      questions: data.activeQuiz.questions,
      passingCriteria: data.activeQuiz.passingCriteria,
      userId,
    });
  }, []);

  const location = useLocation();
  //const match = matchPath(location.pathname, "/Quiz/:id");

  const counterQuestion = Array(counter).fill({
    question: "",
    options: [],
    correctOption: [""],
    time: "",
  });
  const activeQuizQuestions = data?.activeQuiz?.questions || [];
  console.log(activeQuizQuestions);
  const [formData, setFormData] = useState({
    questions: [...activeQuizQuestions, ...counterQuestion],
    editMode: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleAddQuestion = () => {
    const newQuestionIndex = formDatanew?.questions?.length;
    const newQuestion = {
      question: {
        text: "",
        image: "",
      },
      options: ["", "", "", ""],
      questionType: "objective",
      correctOption: [],
      marks: 0, // Initially set to empty string
    };
    // setoptionIndexes([])
    setValue(`questions[${newQuestionIndex}]`, newQuestion);
    console.log("-----------", formDatanew);
  };

  const handleRemoveQuestion = (questionIndex) => {
    const updatedQuestions = formDatanew?.questions?.filter(
      (_, index) => index !== questionIndex
    );
    setValue("questions", updatedQuestions);
  };

  const handleEditModeToggle = () => {
    setFormData((prevState) => ({
      ...prevState,
      editMode: !prevState.editMode,
    }));
  };

  const onSubmit = async () => {
    console.log("check");
    let optionError = false;
    if (Array.isArray(formDatanew?.questions)) {
      formDatanew?.questions?.forEach((question, questionIndex) => {
        if (
          (!question.hasOwnProperty("correctOption") ||
            question.correctOption.length === 0) &&
          question.questionType === "objective"
        ) {
          optionError = true;
          setError(`questions[${questionIndex}].correctOption`, {
            type: "manual",
            message: "At least one correct option must be selected",
          });
        } else {
          clearErrors(`questions[${questionIndex}].correctOption`);
        }
      });
    }

    if (Object.keys(errors).length === 0 && !optionError) {
      const hours = parseInt(formDatanew.hours);
      const mins = parseInt(formDatanew.minutes);
      delete formDatanew.hours;
      delete formDatanew.minutes;
      const totalQuizTime = `${hours}h ${mins}mins`;
      let newFormData = {
        ...formDatanew,
        totalQuizTime: totalQuizTime,
      };
      console.log(newFormData);

      if (data.activeQuiz._id) {
        const payload = {
          ...newFormData,
          quizId: location.pathname.split("/Quiz/")[1],
        };
        const response = await AddUpdateQuesitons(payload);
        if (response.success === true) {
          toast.success(response.message);
          dispatch(updateQuiz(response.data));
          setFormData((prevState) => ({
            ...prevState,
            editMode: false,
          }));
          navigate("/Quiz");
        } else {
          toast.info(response.message);
        }
      } else {
        const payload = {
          userId: sessionStorage.getItem("userId"),
          quizType:"Quiz",
          ...newFormData,
        };

        const response = await CreateQuiz(payload);

        if (response.success === true) {
          toast.success(response.message);
          dispatch(updateQuiz(response.data));
          setFormData((prevState) => ({
            ...prevState,
            editMode: false,
          }));
          navigate("/Quiz");
        } else {
          toast.info(response.message);
        }
      }
    }
  };

  const uploadPhoto = (url, questionIndex) => {
    // Modify formDatanew using the provided URL and questionIndex
    formDatanew.questions[questionIndex].question.image = url;
    console.log("===========", formDatanew);
  };

 const handleAddNewOption=(questionIndex,optionIndex)=>{
  //formDatanew.questions[questionIndex].options.push('')
  setValue(`questions[${questionIndex}].options[${optionIndex}]`,'');
 }

 const handleRemoveNewOption=(questionIndex,optionIndex)=>{
 // prevArr.slice(0, -1)
  formDatanew.questions[questionIndex].options.pop()
  setValue(`questions[${questionIndex}].options`,formDatanew.questions[questionIndex].options);
 }

//  const handleAddNewOption=(questionIndex,optionIndex)=>{
//   //formDatanew.questions[questionIndex].options.push('')
//   setValue(`questions[${questionIndex}].options[${optionIndex}]`,'');
//  }

  // const handleRadioButton = (questionIndex, field, value, optionIndex) => {
  //   if (field === "correctOption") {
  //     const currentCorrectOptions = formDatanew.questions[questionIndex].correctOption || [];
  //     const updatedCorrectOptions = currentCorrectOptions.includes(value)
  //       ? currentCorrectOptions.filter(opt => opt !== value)
  //       : [...currentCorrectOptions, value];

  //     setValue(`questions[${questionIndex}].correctOption`, updatedCorrectOptions);
  //     clearErrors(`questions[${questionIndex}].correctOption`);
  //   }
  // };

  const handleCheckboxChange = (questionIndex, optionIndex) => {
    const currentCorrectOptions =
      formDatanew.questions[questionIndex].correctOption || [];
    const optionValue =
      formDatanew.questions[questionIndex].options[optionIndex];
    const updatedCorrectOptions = currentCorrectOptions.includes(optionValue)
      ? currentCorrectOptions.filter((opt) => opt !== optionValue)
      : [...currentCorrectOptions, optionValue];

    setValue(
      `questions[${questionIndex}].correctOption`,
      updatedCorrectOptions
    );
    clearErrors(`questions[${questionIndex}].correctOption`);
  };

  const handleDropdownChange = (questionIndex, field, value) => {
    setValue(`questions.${questionIndex}.${field}`, value);
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
                src={`/img/backbtn.svg`}
                className="logoimgy"
                onClick={() => navigate("/Quiz")}
              />
              <div
                class="dashboard-header px-md-2"
                style={{ padding: "0px 0px 70px 0px" }}
              >
                <div className="d-flex gap-2 flex-column">
                  <div className="d-flex gap-2 flex-column">
                    <div className="d-flex align-items-center mb-2 gap-2">
                      <SelectBatch BATCH={BATCH} register={register} />
                      <SelectDate register={register} />
                    </div>
                    <Time
                      register={register}
                      errors={errors}
                      clearErrors={clearErrors}
                    />
                    <div>
                      <Form.Label>Passing Criteria</Form.Label>
                      <Form.Control
                        type="number"
                        min={0}
                        style={{ width: "60px" }}
                        {...register("passingCriteria", {
                          required: "This is required",
                        })}
                      />
                    </div>

                    <Description
                      inputValue={inputValue}
                      setInputValue={setInputValue}
                      textareaValue={textareaValue}
                      setTextareaValue={setTextareaValue}
                      startTime={startTime}
                      setstartTime={setstartTime}
                      register={register}
                      quizType={quizType}
                      setQuizType={setquizType}
                      errors={errors}
                    />
                  </div>
                  <Card className="mt-2 p-1">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-column">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                          {formDatanew?.questions?.map(
                            (question, questionIndex) => (
                              <div
                                key={questionIndex}
                                className="question-container"
                              >
                                <h5
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Question {questionIndex + 1}
                                </h5>
                                <Form.Group className="mb-3">
                                  <Form.Label>Question Type</Form.Label>
                                  <Form.Control
                                    as="select"
                                    value={question.questionType}
                                    onChange={(e) =>
                                      handleDropdownChange(
                                        questionIndex,
                                        "questionType",
                                        e.target.value
                                      )
                                    }
                                  >
                                   
                                    <option value="objective">Objective</option>
                                    <option value="T/F">T/F</option>
                                    <option value="Arrange the following">
                                      Arrange the following
                                    </option>
                                  </Form.Control>
                                </Form.Group>

                                <Form.Group
                                  className="mb-3"
                                  controlId={`question-${questionIndex}`}
                                >
                                  <div className="d-flex flex-row gap-2">
                                    <Form.Control
                                      type="text"
                                      name={`question-${questionIndex}`}
                                      placeholder="Add question here"
                                      readOnly={!formData.editMode}
                                      {...register(
                                        `questions.${questionIndex}.question.text`,
                                        {
                                          required: "This is required",
                                          validate: (value) =>
                                            value.trim() !== "" ||
                                            "Option cannot be empty",
                                        }
                                      )}
                                    />
                                    <CloudinaryUploadWidget
                                      setImage={(url) =>
                                        uploadPhoto(url, questionIndex)
                                      }
                                    />
                                  </div>
                                  {errors.questions?.[questionIndex]
                                    ?.question && (
                                    <Form.Text className="text-danger">
                                      {
                                        errors.questions[questionIndex].question
                                          .message
                                      }
                                    </Form.Text>
                                  )}
                                  {errors.questions?.[questionIndex]
                                    ?.correctOption && (
                                    <Form.Text className="text-danger">
                                      {
                                        errors.questions[questionIndex]
                                          .correctOption.message
                                      }
                                    </Form.Text>
                                  )}
                                </Form.Group>

                                {/* <img src={formDatanew.questions.question.image}></img> */}

                                {formDatanew?.questions[questionIndex]
                                  .questionType === "objective" &&
                                  formDatanew?.questions[
                                    questionIndex
                                  ]?.options.map((optionIndex, i) => {
                                    const isChecked = formDatanew.questions[
                                      questionIndex
                                    ].correctOption.includes(
                                      formDatanew.questions[questionIndex]
                                        .options[i]
                                    );
                                    return (
                                      <div key={i}>
                                        <Stack direction="horizontal" gap={3}>
                                          <label
                                            className="-p"
                                            htmlFor={`option${questionIndex}-${i}`}
                                          >
                                            Option {i + 1}:
                                          </label>
                                          <div className="p-">
                                            <Form.Group
                                              className="mb-3"
                                              controlId={`option${questionIndex}-${i}`}
                                            >
                                              <Form.Control
                                                type="text"
                                                name={`option-${questionIndex}-${i}`}
                                                placeholder="Add options here"
                                                {...register(
                                                  `questions.${questionIndex}.options.${i}`,
                                                  {
                                                    required:
                                                      "This is required",
                                                    validate: (value) =>
                                                      value.trim() !== "" ||
                                                      "Option cannot be empty",
                                                  }
                                                )}
                                                readOnly={!formData.editMode}
                                              />
                                              {errors.questions?.[questionIndex]
                                                ?.options?.[i] && (
                                                <Form.Text className="text-danger">
                                                  {
                                                    errors.questions[
                                                      questionIndex
                                                    ].options[i].message
                                                  }
                                                </Form.Text>
                                              )}
                                            </Form.Group>
                                          </div>
                                          {formData.editMode && (
                                            <div className="p-">
                                              <input
                                                type="checkbox"
                                                name={`correctOption-${questionIndex}`}
                                                checked={isChecked}
                                                onChange={() =>
                                                  handleCheckboxChange(
                                                    questionIndex,
                                                    i
                                                  )
                                                }
                                              />
                                            </div>
                                          )}
                                        </Stack>
                                      </div>
                                    );
                                  })}

                                {formDatanew?.questions[questionIndex]
                                  .questionType === "T/F" && (
                                  <>
                                    <div className="d-flex flex-row gap-5">
                                      <Form.Label>True</Form.Label>
                                      <Form.Check
                                        type="radio"
                                        id={`question-${questionIndex}-true`}
                                        name={`questions.${questionIndex}.correctOption[${0}]`}
                                        value="true"
                                        readOnly={!formData.editMode}
                                        {...register(
                                          `questions.${questionIndex}.correctOption[${0}]`,
                                          {
                                            required: "This is required",
                                            validate: (value) =>
                                              value.trim() !== "" ||
                                              "Answer cannot be empty",
                                          }
                                        )}
                                      />
                                    </div>
                                    <div className="d-flex flex-row gap-5">
                                      <Form.Label>False</Form.Label>
                                      <Form.Check
                                        type="radio"
                                        id={`question-${questionIndex}-false`}
                                        name={`questions.${questionIndex}.correctOption[${0}]`}
                                        value="false"
                                        readOnly={!formData.editMode}
                                        {...register(
                                          `questions.${questionIndex}.correctOption[${0}]`,
                                          {
                                            required: "This is required",
                                            validate: (value) =>
                                              value.trim() !== "" ||
                                              "Answer cannot be empty",
                                          }
                                        )}
                                      />
                                    </div>
                                    {errors.questions?.[questionIndex]
                                      ?.correctAnswer && (
                                      <Form.Text className="text-danger">
                                        {
                                          errors.questions[questionIndex]
                                            .correctAnswer.message
                                        }
                                      </Form.Text>
                                    )}
                                  </>
                                )}
                                {formDatanew?.questions[questionIndex]
                                  .questionType === "Arrange the following" &&
                                  optionsIndexes.map((optionIndex,i) => (
                                    <div key={i}>
                                      <Stack direction="horizontal" gap={3}>
                                        {/* <label
                                          className="-p"
                                          htmlFor={`option${questionIndex}-${optionIndex}`}
                                        >
                                          element-1 {optionIndex + 1}:
                                        </label> */}
                                        <div className="p-">
                                          <Form.Group
                                            className="mb-3"
                                            controlId={`option${questionIndex}-${optionIndex}`}
                                          >
                                            <Form.Control
                                              type="text"
                                              name={`option-${questionIndex}-${optionIndex}`}
                                              placeholder="Add elements here"
                                              {...register(
                                                `questions.${questionIndex}.options.${optionIndex}`,
                                                {
                                                  required: "This is required",
                                                  validate: (value) =>
                                                    value.trim() !== "" ||
                                                    "Elements cannot be empty",
                                                }
                                              )}
                                              readOnly={!formData.editMode}
                                            />

                                            {errors.questions?.[questionIndex]
                                              ?.options?.[optionIndex] && (
                                              <Form.Text className="text-danger">
                                                {
                                                  errors.questions[
                                                    questionIndex
                                                  ].options[optionIndex].message
                                                }
                                              </Form.Text>
                                            )}
                                          </Form.Group>
                                        </div>

                                        {formData.editMode && (
                                          <div className="p-">
                                            <div className="d-flex flex-row gap-2  ">
                                              <Form.Label>
                                              <FaArrowRightLong />
                                              </Form.Label>

                                              <Form.Control
                                                type="text"
                                                style={{
                                                  width: "60px",
                                                  border: "1px solid black",
                                                }}
                                                readOnly={!formData.editMode}
                                                {...register(
                                                  `questions.${questionIndex}.correctOption.${i}`,
                                                  {
                                                    required: "This is required",
                                                    validate: (value) =>
                                                      value.trim() !== "" ||
                                                      "Option cannot be empty",
                                                  }
                                                )}
                                              />
                                            </div>
                                          </div>
                                        )}
                                      </Stack>
                                    </div>
                                  ))}
                                {formDatanew?.questions[questionIndex]
                                  .questionType === "objective" && (
                                  <div className="d-flex gap-2">
                                    <button
                                      type="button"
                                      onClick={ 
                                       ()=> handleAddNewOption(questionIndex,formDatanew.questions[questionIndex].options.length)
                                      //   debugger;
                                      //  setValue( formDatanew.questions[questionIndex].options.push(''))
                                       }
                                      // onClick={
                                      //   formDatanew.questions[questionIndex]
                                      //     .questionType ===
                                      //   "Arrange the following"
                                      //     ? () =>
                                      //         setoptionIndexes((prevArr) => [
                                      //           ...prevArr,
                                      //           optionsIndexes.length,
                                      //         ])
                                      //     : () =>
                                      //       formDatanew.questions[questionIndex].options.push('')
                                              // setoptionIndexesMcqs(
                                              //   (prevArr) => [
                                              //     ...prevArr,
                                              //     optionsIndexesMcqs.length,
                                              //   ]
                                              // )
                                      // }
                                      className="btn btn-primary "
                                    >
                                      Add More Option
                                    </button>

                                    <button
                                      type="button"
                                      onClick={
                                    ()=> handleRemoveNewOption(questionIndex,formDatanew.questions[questionIndex].options.length)
                                      }
                                      className="btn btn-primary"
                                    >
                                      Remove Option
                                    </button>
                                  </div>
                                )}

                                <div>
                                  <Form.Label>marks </Form.Label>
                                  <Form.Control
                                    name={`marks-${questionIndex}`}
                                    type="number"
                                    min={0}
                                    style={{ width: "60px" }}
                                    {...register(
                                      `questions.${questionIndex}.marks`,
                                      // {
                                      //   // required: "This is required",
                                      //   validate: (value) =>
                                      //     (typeof value === "string"
                                      //       ? value.trim() !== ""
                                      //       : false) || "cannot be empty",
                                      // }
                                    )}
                                  />
                                </div>

                                {formData.editMode && (
                                  <Button
                                    variant="danger"
                                    className="mt-2"
                                    onClick={() =>
                                      handleRemoveQuestion(questionIndex)
                                    }
                                  >
                                    Remove Question
                                  </Button>
                                )}
                              </div>
                            )
                          )}
                          {formData.editMode && (
                            <Button
                              onClick={handleAddQuestion}
                              className="mt-3 btn-theme-secondary"
                            >
                              + Add Question
                            </Button>
                          )}
                          <div className="button-container mt-3  d-flex gap-3">
                            <Button
                              onClick={handleEditModeToggle}
                              className="py-2 px-5 btn-theme-primary"
                              style={{fontSize:"14px"}}
                            >
                              {formData.editMode
                                ? "Exit Edit Mode"
                                : "Enter Edit Mode"}
                            </Button>
                            <Button
                              type="submit"
                              className="py-2 px-5 btn-theme-secondary"
                            >
                              Submit
                            </Button>
                            {formData.editMode && (
                              <>
                                <Button
                                  onClick={handleEditModeToggle}
                                  className="py-2 px-5 btn-theme-ternary"
                                >
                                  Cancel
                                </Button>
                              </>
                            )}
                          </div>
                        </Form>
                      </div>
                      <div className="ms-3">
                        <img
                          src={`/img/Quiz-1.png`}
                          className="Quiz4"
                          alt="Quiz"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Quiz;
