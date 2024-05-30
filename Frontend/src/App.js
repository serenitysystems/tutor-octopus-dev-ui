import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

// import About from './Components/Features';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Subscription from "./TutorPanel/Subscription";

import Testings from "./Testings";
import Home from "./TutorPanel/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Student from "./TutorPanel/Student";
import React, { useEffect, useState } from "react";
// import Calendar from './TutorPanel/Calendar';
import AddNewStudent from "./TutorPanel/AddNewStudent";
import OnlineResources from "./TutorPanel/OnlineResources";
import UploadFiles from "./TutorPanel/UploadFiles";
import BusinessTutor from "./BusinessTutor/BusinessTutor";
import Student_Redirect from "./TutorPanel/Student_Redirect/Student_Redirect";
import Expenses_Revenue from "./TutorPanel/Expenses_Revenue/Expenses_Revenue";
import ExamFeatures from "./TutorPanel/ExamFeatures/ExamFeatures";
import TopBar from "./TutorPanel/SideNavbar/TopBar";
import Landing from "./Components/Landing";
import Quiz from "./TutorPanel/Quiz/Quiz";
import { BrowserRouter } from "react-router-dom";
import Announcements from "./TutorPanel/Announcements/Announcements";
import Website from "./TutorPanel/Announcements/Website";
import Business_Report from "./TutorPanel/Business_Report/Business_Report";
import Event_Calendar from "./TutorPanel/Event_Calendar/Event_Calendar";
import StudentList from "./TutorPanel/StudentList/StudentList";
import TermsofService from "./Components/TermsOfConditions/TermsofService";
import PrivacyPolicy from "./Components/TermsOfConditions/PrivacyPolicy";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import OTP from "./Components/ForgetPassword/OTP";
import NewPassword from "./Components/ForgetPassword/NewPassword";
import QuizMain from "./TutorPanel/Quiz/QuizMain";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginRole from "./Components/Login_Signup_Role";
import MeritList from "./TutorPanel/ExamFeatures/MeritList";
import ResultCard from "./TutorPanel/ExamFeatures/ResultCard";
import StudentHome from "./StudentPanel/StudentHome";
import TodaySessions from "./StudentPanel/TodaySessions";
import StudentAssignment from "./StudentPanel/StudentAssignment";
import StudentQuiz from "./StudentPanel/Quiz/StudentQuiz";
import QuizCard from "./StudentPanel/Quiz/QuizCard";
import QuizPlay from "./StudentPanel/Quiz/QuizPlay";
import Courses from "./TuitionPanel/Courses/Courses";
import AddCourses from "./TuitionPanel/Courses/AddCourses";
import Department from "./TuitionPanel/Department/Department";
import Event_Calendar_Student from "./StudentPanel/Event_Calendar/TimeTable";
import TodaySession from "./StudentPanel/TodaySession/TodaySession";
import Attendencelist from "./TutorPanel/StudentList/AttendenceList";
import Layout from "./Components/Layout";
import FeeTransactions from "./StudentPanel/FeeTransactions/FeeTransactions";
import TimeTable from "./StudentPanel/Event_Calendar/TimeTable";
import AddAllFaculties from "./TuitionPanel/Faculties/AddAllFaculties";
import QuizRecord from "./TutorPanel/Quiz/QuizRecord";
import ExamPractice from "./TutorPanel/ExamFeatures/ExamPractice";
import Exam from "./StudentPanel/Exam/Exam";
import Examplay from "./StudentPanel/Exam/Examplay";

// Define components for each route

// const Subscription = () => {
//   return <div>Subscription Page</div>;
// };

function App() {
  const [userData, setUserData] = useState({
    user: "",
    token: "",
    firstName: "",
    lastName: "",
  });

  // Function to receive response data from Login component
  const handleLogin = (data) => {
    setUserData(data);
  };
  // const Tutor_auth_path=['Home','Quiz','Subscription','OnlineResources','Expenses_Revenue','ExamFeatures'];
  // const location=useLocation().pathname;
  // if(Tutor_auth_path.includes(location)){

  // }

  // if(sessionStorage.)

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path='/About' element={<About />} /> */}
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login_Role" element={<LoginRole />} />
            {userData && (
              <Route
                path="/Subscription"
                element={<Subscription userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="/Profile"
                element={<Student_Redirect userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="/Expenses_Revenue"
                element={<Expenses_Revenue userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="ExamFeatures"
                element={<ExamFeatures userData={userData} />}
              ></Route>
            )}
            {userData && (
              <Route
                path="/ExamFeatures/result-card/:id"
                element={<ResultCard userData={userData} />}
              />
            )}
            {userData && (
              <Route path="/ExamFeatures/Merit" element={<MeritList />} />
            )}
            {/* {userData && <Route path='/Quiz' element={<Quiz userData={userData} />} />} */}
            {userData && (
              <Route
                path="/Quiz"
                element={<QuizMain userData={userData} />}
              ></Route>
            )}
            {userData && (
              <Route path="/Quiz/:id" element={<Quiz userData={userData} />} />
            )}
            {userData && (
              <Route
                path="/Quiz/new-quiz"
                element={<Quiz userData={userData} />}
              />
            )}
             {userData && (
              <Route
                path="/QuizRecord"
                element={<QuizRecord userData={userData} />}
              />
            )}
            {/* Exam Features tutor */}
            {userData && (
              <Route
                path="/ExamFeatures/new/:id"
                 element={<ExamPractice userData={userData} />}
              />
            )}
             {userData && (
              <Route
                path="/ExamFeatures/:id"
                 element={<ExamPractice userData={userData} />}
              />
            )}






            {userData && (
              <Route path="/Home" element={<Home userData={userData} />} />
            )}
            {userData && (
              <Route
                path="/Announcements"
                element={<Announcements userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="/Website"
                element={<Website userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="/Business_Report"
                element={<Business_Report userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="/Event_Calendar"
                element={<Event_Calendar userData={userData} />}
              />
            )}
            {/* <Route path='/TutorHome'  element={<TutorHome />} /> */}
            {userData && (
              <Route
                path="/Student"
                element={<Student userData={userData} />}
              />
            )}
            {/* <Route path='/Calendar' element={<Calendar/>} /> */}
            {userData && (
              <Route
                path="/AddNewStudent"
                element={<AddNewStudent userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="/OnlineResources"
                element={<OnlineResources userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="/Attendence"
                element={<Attendencelist userData={userData} />}
              />
            )}
            {userData && (
              <Route
                path="/StudentList"
                element={<StudentList userData={userData} />}
              />
            )}
            <Route path="/UploadFiles" element={<UploadFiles />} />
            {<Route path="/TopBar" element={<TopBar />} />}
            <Route path="/Testings" element={<Testings />} />
            <Route path="/TermsofService" element={<TermsofService />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
            <Route path="/OTP" element={<OTP />} />
            <Route path="/NewPassword" element={<NewPassword />} />
            {/* <div>
        <topnavbar/>
        <Routes>....</Routes>
        </div> */}
            {/* HERE WE WILL USE ROUTES RELATED TO BUSINESS TUTOR */}
            {/* <Route path="/BusinessTutor" element={<BusinessTutor />} /> */}
            <Route path="/BusinessTutor" element={<AddAllFaculties />} />

            {/* HERE WE WILL USE ROUTES RELATED TO STUDENT-DASHBOARD */}

            <Route
              path="/Student/Home"
              element={
                //use the layout here.
                <Layout>
                  <StudentHome />
                </Layout>
              }
            />

            <Route path="/student/today-sessions" element={ <Layout><TodaySession /></Layout>} />
            <Route
              path="/student/fee-transactions"
              element={ <Layout><FeeTransactions /></Layout>}
            />
            <Route path="/student/timetable" element={<Layout><TimeTable /></Layout>} />
            {/* <Route
              path="/student/student-attendance"
              element={<Attendance />}
            /> */}
            <Route
              path="/student/student-exam"
              element={<Layout><Exam/></Layout>}
            />
             <Route
              path="/student/student-exam/:id"
              element={<Layout><Examplay/></Layout>}
            />
            <Route path="/student/student-quiz" element={<Layout><StudentQuiz /></Layout>} />
            <Route path="/student/student-quizcard" element={<Layout><QuizCard /></Layout>} />
            <Route
              path="/student/:id"
              element={<Layout><QuizPlay userData={userData} /></Layout>}
            />
            <Route
              path="/student/student-announcement"
              element={<StudentAssignment />}
            />
            <Route
              path="/student/subscription"
              element={<Event_Calendar_Student />}
            />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
