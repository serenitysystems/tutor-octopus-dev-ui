import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Dropdown,
  Form,
  Stack,
  Tab,
  Tabs,
} from "react-bootstrap";
import TopBar from "../SideNavbar/TopBar";
import MobilemenuNavbar from "../SideNavbar/MobilemenuNavbar";
import SelectBatch from "../../BackendComp/SelectBatch";
import SelectDate from "../../BackendComp/SelectDate";
import Description from "./Description";
import Sidenavbar from "../SideNavbar/Sidenavbar";
import QuizCard from "./QuizCard";
import QuizRecordsTable from "./QuizRecordTable";
import "../OnlineResources.css";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { quizesData, setActiveQuiz, setQuizes } from "../../redux/quizslice";
import { ReadQuiz, fetchStudentQuizDetails } from "../../apicalls/Questions";
import { IoMdArrowDropdown } from "react-icons/io";
import { DUMMYQUIZRESULTS } from "../../utils/constants.utils";
import CombineCharts from "./CombineCharts";
import BatchList from "../../BackendComp/BatchList";
import CommonTable from "../../Components/Common/commonTable";
import Lazyloading from "../../BackendComp/Lazy";

export const QUIZESDATA = [
  {
    name: "Maths - 1",
    id: "1",
    batch: "2023",
    date: "25-12-2023",
    subject: "maths quiz for chapter 1",
    description: "covers trigometry topics",
    questions: [
      {
        question: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
      {
        question: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
      {
        question: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
    ],
    userId: sessionStorage.getItem("user"),
  },
  {
    name: "Maths - 2",
    id: "2",
    batch: "2023",
    date: "25-12-2023",
    subject: "maths quiz for chapter 1",
    description: "covers trigometry topics",
    questions: [
      {
        question: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
      {
        question: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
      {
        question: "What's sin90+cos90",
        options: [1, 0, 1, 0],
      },
    ],
  },
];

const QuizMain = ({ userData }) => {
  const [counter, setCounter] = useState(1);
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [updatedQuizState, setUpdatedQuizState] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [recordData, setRecordData] = useState([]);
  const [loading,setloading]=useState(false)

  const date = new Date();
  const [selectedBatch, setSelectedBetch] = useState("");
  const formatDate = (date) => 
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

 
  const formattedDate = formatDate(date);

  const previousQuiz = useSelector((state) => {
    return state.quiz.data.filter((item) => item.date<formattedDate );
  });
  const UpcomingQuiz = useSelector((state) => {
    return state.quiz.data.filter((item) => item.date>=formattedDate );
  });

  const dataQuiz = useSelector((state) => {
    return state.quiz.data;
  });

  const fetchData = async () => {
    setloading(true)
    const Quizes = await ReadQuiz({
      userId: sessionStorage.getItem("userId"),
      role: "Teacher",
      quizType:"Quiz"
    });
    if(Quizes){
      setloading(false);
    }
    dispatch(setQuizes(Quizes));
  };

  const handleSelectedQuiz = (id) => {
    // console.log(e);
    // console.log(e.target.value, "selected quiz");

    setSelectedQuiz(id);
    // console.log(selectedBatch)
    // getStudentReadBatchData()
  };

  const fetchStudentDetails = async (id) => {
    // if (dataRecord.length > 0) {
    //   const findQuiz = dataRecord?.find((item) => item?._id === id);
    //   console.log(findQuiz);
    //   const payload = {
    //     quizId: findQuiz._id,
    //     batch: findQuiz.batch,
    //     managedBy: sessionStorage.getItem("userId"),
    //   };
    //   const result = await fetchStudentQuizDetails(payload);
    //   console.log(result);
    //   setRecordData(result);
    // }
  };

 

  useEffect(() => {
    if (selectedQuiz) fetchStudentDetails(selectedQuiz);
  }, [selectedQuiz]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <MobilemenuNavbar userData={userData} />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
            {/* THIS IS A CREATE-QUIZ TAB */}
           <div class="dashboard-header px-md-4">
           <Tabs
              id="controlled-tab-example"
              // className="mt-4"
              // activeKey={key}
              // onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="home" title="Quiz">
                <div>
                  <Card className="addnewcard">
                    <div className="p-4 mb-1">
                      <div className="w-100 d-flex align-items-center justify-content-end">
                        <Button
                          className="rounded-sm py-2 px-4 mb-4 d-flex align-items-center"
                          onClick={() => {
                            dispatch(setActiveQuiz({}));
                            navigate("/Quiz/new-quiz");
                          }}
                        >
                          + Add new Quiz
                        </Button>
                      </div>

                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                        {dataQuiz?.map((quiz, index) => (
                          <div className="col mb-3" key={index}>
                            <div className="card">
                              <QuizCard data={quiz} quizType="Quiz"/>
                            </div>
                          </div>
                        ))}
                      </div>

                      {dataQuiz.length === 0 && (
                        <div className="text-center fw-bold text-2 fs-2">
                          No Quiz to Show
                        </div>
                      )}
                      {
                        loading===true &&
                        <Lazyloading/>

                      }
                    </div>
                  </Card>
                </div>
              </Tab>
              <Tab eventKey="batch" title="Quiz-Record">
                <div className=" mt-4">
                  <Tabs id="controlled-tab-example">
                    <Tab eventKey="home" title="Previous-Quiz" >
                      <Card className="addnewcard">
                        {/* <Card.Header className="header56"> */}
                          {/* <h2>Quiz Results</h2> */}

                          {/* <Card.Body
                            class="manu"
                            style={{ margin: 0, marginBottom: "2rem" }}
                          >
                            <div className="d-flex flex-row justify-content-evenly gap-2">
                              <select
                                className="batch89 mt-1 "
                                id="batch"
                                onChange={(e) => {
                                  setSelectedBetch(e.target.value);
                                }}
                              >
                                <option value="">Select Batch</option>
                                <BatchList />

                                 <option value="Add_New_Batch" onClick={handleAddNewBatch}>Add New Batch</option> 
                              </select>
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="success"
                                  id="dropdown-basic"
                                  className="addnewdg"
                                  style={{
                                    width: "fit-content",
                                    borderRadius: "0.2rem",
                                  }}
                                >
                                  {selectedQuiz
                                    ? updatedQuizState
                                    : "Select Quiz"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ margin: "0" }}>
                                  {dataRecord?.length > 0 ? (
                                    dataRecord.map((item) => (
                                      <Dropdown.Item
                                        key={item._id}
                                        value={selectedQuiz}
                                        onClick={() => {
                                          handleSelectedQuiz(item._id);
                                          setUpdatedQuizState(
                                            `${item.batch} ${item.date} ${item.subject}`
                                          );
                                        }}
                                        className="dropdown-item"
                                      >
                                        {`${item.batch} ${item.date} ${item.subject}`}
                                      </Dropdown.Item>
                                    ))
                                  ) : (
                                    <p className="text-center fw-bold">
                                      No quiz
                                    </p>
                                  )}
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                           
                          </Card.Body> */}
                          
                        {/* </Card.Header> */}
                        <Card.Body>
                        <CommonTable
                           head={['quiz-Details','description','passingCriteria','Questions','Appeared','Action']} 
                            data={previousQuiz} type='previous' date={formattedDate} />
                          {/* {Object.keys(recordData).length > 0 && (
                            <>
                              <CombineCharts recordData={recordData} />
                              <div className="d-flex justify-content-end mt-4">
                                <Button variant="primary">
                                  send Reminder to Students
                                </Button>
                              </div>
                              <QuizRecordsTable
                                data={recordData.student_scores}
                                // data={DUMMYQUIZRESULTS?.student_scores}
                              />
                            </>
                          )} */}
                       
                        </Card.Body>

                        {/* <StudentList /> */}
                      </Card>
                    </Tab>
                    <Tab eventKey="batch" title="Upcoming-Quiz">
                      <Card className="addnewcard">
                        
                      <CommonTable head={['quiz-Details','description','passingCriteria','Questions','Appeared','Action']} 
                            data={UpcomingQuiz} type='upcoming' />
                        {/* <StudentList /> */}
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
            </Tabs>
           </div>

            {/* THIS IS A QUIZ-RESULT TAB */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default QuizMain;
