import React, { useEffect, useState } from 'react'
import { Card, Tab, Tabs } from 'react-bootstrap';
import Examplay from './Examplay';
import Examcard from './Examcard';
import { useDispatch, useSelector } from 'react-redux';
import { ReadQuiz } from '../../apicalls/Questions';
import { setQuizes } from '../../redux/quizslice';
import './Exam.css'
import ExamResult from './ExamResult';
import { useLocation } from 'react-router-dom';

const Exam = () => {

  
  const data = useSelector((state) => {
    return state.quiz.data;
  });
  const [activeTab, setActiveTab] = useState("practice");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { resultData = {}, active = activeTab } = location.state || {};

  useEffect(() => {
    if (resultData) {
      setActiveTab(active);
    }
  }, [resultData, active, setActiveTab]);


  const dispatch=useDispatch();
  const fetchData = async () => {
    setLoading(true);
    const Quizes = await ReadQuiz({
      userId:sessionStorage.getItem("userId"),
      role:"Student",
      quizType: activeTab,
  });
    dispatch(setQuizes(Quizes));
  };

  useEffect(() => {
    fetchData();
  }, [activeTab]);
  return (
    <div class="dashboard-header px-md-4">
      <Tabs id="controlled-tab-example"
      activeKey={activeTab}
      onSelect={(k) => setActiveTab(k)}
      
      
      >
        {/* CSS FOR TAB IS PRESENT IN TUTOTPANEL-->Student.css */}
        <Tab eventKey="practice" title="Practice">
          <div>
            <Card className="addnewcard">
            <div className="p-4 mb-1">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
            {data?.map((quiz, index) => (
                  <div className="col mb-3" key={index}>
                    <div className="card">
                      <Examcard data={quiz} quizType="Practice" />
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
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
              {data?.map((quiz, index) => (
                  <div className="col mb-3" key={index}>
                    <div className="card">
                      <Examcard data={quiz} quizType="Mock" />
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
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
              {data?.map((quiz, index) => (
                  <div className="col mb-3" key={index}>
                    <div className="card">
                      <Examcard data={quiz} quizType="Exam" />
                    </div>
                  </div>
                ))}
                  
                </div>
              </div>
            </Card>
          </div>
        </Tab>
        <Tab eventKey="result" title="Result">
          <div>
            <Card className="addnewcard">
              <div className="p-4 mb-1">
                <div className="w-100 d-flex align-items-center justify-content-end">
                  {
                    Object.keys(resultData).length>0?(
                      <ExamResult data={resultData} />
                    ):(
                      <div>No recent result to show</div>
                    )
                  }
                  
                </div>
              </div>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Exam
