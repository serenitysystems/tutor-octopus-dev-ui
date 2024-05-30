import React, { useEffect, useState } from 'react';
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar';
import Sidenavbar from '../SideNavbar/Sidenavbar';
import TopBar from '../SideNavbar/TopBar';
import { useLocation } from 'react-router-dom';
import { fetchStudentQuizDetails } from '../../apicalls/Questions';
import CombineCharts from './CombineCharts';
import QuizRecordsTable from './QuizRecordTable';
import { Button } from 'react-bootstrap';

const QuizRecord = ({ userData }) => {
  const location = useLocation();
  const [resultData, setResultData] = useState(null); // Ensure initial state is null to check loading state
  const { id, batch, managedBy } = location.state || {};
  console.log('-----------------------', id, batch, managedBy);

  const fetchStudentDetails = async () => {
    const payload = {
      quizId: id,
      batch: batch,
      managedBy: managedBy,
    };
    const result = await fetchStudentQuizDetails(payload);
    console.log(result);
    setResultData(result);
  };

  useEffect(() => {
    fetchStudentDetails(); // Call the function correctly
  }, []); // Empty dependency array to call once on mount

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
            <div
                class="dashboard-header px-md-2"
                style={{ padding: "0px 0px 70px 0px" }}
              >
            {resultData ? (
              <>
               <div
                class="dashboard-header px-md-2"
                style={{ padding: "0px 0px 70px 0px" }}
              >
                
              </div>
                <CombineCharts recordData={resultData} />
                <div className="d-flex justify-content-end mt-4">
                  <Button variant="primary">Send Reminder to Students</Button>
                </div>
                <QuizRecordsTable data={resultData.student_scores} quizId={id} />
              </>
            ) : (
              <p>Loading...</p> // Display loading state while data is being fetched
            )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default QuizRecord;
