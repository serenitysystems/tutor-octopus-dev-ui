import React, { useState, useEffect } from "react";
import MobilemenuNavbar from "../SideNavbar/MobilemenuNavbar";
import Sidenavbar from "../SideNavbar/Sidenavbar";
import TopBar from "../SideNavbar/TopBar";
import { Button, Card, Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setActiveQuiz, setQuizes } from "../../redux/quizslice";
import { useDispatch, useSelector } from "react-redux";
import { ReadQuiz } from "../../apicalls/Questions";
import QuizCard from "../Quiz/QuizCard";

const ExamFeatures = ({ userData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Practice");
  const [loading, setLoading] = useState(false);
  const dataQuiz = useSelector((state) => {
    return state.quiz.data;
  });

  const fetchData = async () => {
   // console.log(activeTab)
    setLoading(true);
    const Quizes = await ReadQuiz({
      userId: sessionStorage.getItem("userId"),
      role: "Teacher",
      quizType: activeTab,
    });
    if (Quizes) {
      setLoading(false);
    }
    dispatch(setQuizes(Quizes));
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  return (
    <div>
      <MobilemenuNavbar userData={userData} />
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar />
          </nav>
          <main role="main" className="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
            {/* THIS IS A CREATE-QUIZ TAB */}
            <div className="dashboard-header px-md-4">
              <Tabs
                id="controlled-tab-example"
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
              >
                <Tab eventKey="practice" title="Practice">
                  <div>
                    <Card className="addnewcard">
                      <div className="p-4 mb-1">
                        <div className="w-100 d-flex align-items-center justify-content-end">
                          <Button
                            className="rounded-sm py-2 px-4 mb-4 d-flex align-items-center"
                            onClick={() => {
                              dispatch(setActiveQuiz({}));
                              navigate("/ExamFeatures/new/Practice");
                            }}
                          >
                            + Add Practice Test
                          </Button>
                        </div>
                          
                          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                            {dataQuiz?.map((quiz, index) => (
                              <div className="col mb-3" key={index}>
                                <div className="card">
                                  <QuizCard data={quiz} quizType="Practice" />
                                </div>
                              </div>
                            ))}
                          </div>
                        
                      </div>
                    </Card>
                  </div>
                </Tab>
                <Tab eventKey="mock" title="Mock">
                  <div>
                    <Card className="addnewcard">
                      <div className="p-4 mb-1">
                        <div className="w-100 d-flex align-items-center justify-content-end">
                          <Button
                            className="rounded-sm py-2 px-4 mb-4 d-flex align-items-center"
                            onClick={() => {
                              dispatch(setActiveQuiz({}));
                              navigate("/ExamFeatures/new/Mock");
                            }}
                          >
                            + Add Mock Test
                          </Button>
                        </div>
                          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                            {dataQuiz?.map((quiz, index) => (
                              <div className="col mb-3" key={index}>
                                <div className="card">
                                  <QuizCard data={quiz} quizType="Mock" />
                                </div>
                              </div>
                            ))}
                          </div>
                       
                      </div>
                    </Card>
                  </div>
                </Tab>
                <Tab eventKey="exam" title="Exam">
                  <div>
                    <Card className="addnewcard">
                      <div className="p-4 mb-1">
                        <div className="w-100 d-flex align-items-center justify-content-end">
                          <Button
                            className="rounded-sm py-2 px-4 mb-4 d-flex align-items-center"
                            onClick={() => {
                              dispatch(setActiveQuiz({}));
                              navigate("/ExamFeatures/new/Exam");
                            }}
                          >
                            
                            + Add New Exam
                          </Button>
                        </div>
                          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                            {dataQuiz?.map((quiz, index) => (
                              <div className="col mb-3" key={index}>
                                <div className="card">
                                  <QuizCard data={quiz} quizType="Exam" />
                                </div>
                              </div>
                            ))}
                          </div>
                       
                      </div>
                    </Card>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ExamFeatures;
