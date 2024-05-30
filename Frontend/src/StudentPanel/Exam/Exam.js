import React, { useEffect, useState } from 'react'
import { Card, Tab, Tabs } from 'react-bootstrap';
import Examplay from './Examplay';
import Examcard from './Examcard';
import { useDispatch, useSelector } from 'react-redux';
import { ReadQuiz } from '../../apicalls/Questions';
import { setQuizes } from '../../redux/quizslice';
import './Exam.css'
import ExamResult from './ExamResult';

const Exam = () => {

  
  const data = useSelector((state) => {
    return state.quiz.data;
  });
  const [activeTab, setActiveTab] = useState("Practice");
  const [loading, setLoading] = useState(false);

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
  }, []);
  return (
    <div class="dashboard-header px-md-4">
      <Tabs id="controlled-tab-example"
      activeKey={activeTab}
      onSelect={(k) => setActiveTab(k)}
      
      
      >
        <Tab eventKey="Practice" title="Practice">
          <div>
            <Card className="addnewcard">
            {data?.map((quiz, index) => (
                  <div className="col mb-3" key={index}>
                    <div className="card">
                      <Examcard data={quiz} quizType="Practice" />
                    </div>
                  </div>
                ))}
            </Card>
          </div>
        </Tab>
        <Tab eventKey="Mock" title="Mock">
          <div>
            <Card className="addnewcard">
              <div className="p-4 mb-1">
                <div className="w-100 d-flex align-items-center justify-content-end"></div>
              </div>
            </Card>
          </div>
        </Tab>
        <Tab eventKey="Exam" title="Exam">
          <div>
            <Card className="addnewcard">
              <div className="p-4 mb-1">
                <div className="w-100 d-flex align-items-center justify-content-end"></div>
              </div>
            </Card>
          </div>
        </Tab>
        <Tab eventKey="result" title="Result">
          <div>
            <Card className="addnewcard">
              <div className="p-4 mb-1">
                <div className="w-100 d-flex align-items-center justify-content-end">
                  <ExamResult/>
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
