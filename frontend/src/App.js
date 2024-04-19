
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

// import About from './Components/Features';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Subscription from './TutorPanel/Subscription';

import Testings from './Testings';
import Home from './TutorPanel/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Student from './TutorPanel/Student';
import { useEffect, useState } from 'react';
// import Calendar from './TutorPanel/Calendar';
import AddNewStudent from './TutorPanel/AddNewStudent';
import OnlineResources from './TutorPanel/OnlineResources';
import UploadFiles from './TutorPanel/UploadFiles';
import BusinessTutor from './BusinessTutor/BusinessTutor';
import Student_Redirect from './TutorPanel/Student_Redirect/Student_Redirect';
import Expenses_Revenue from './TutorPanel/Expenses_Revenue/Expenses_Revenue';
import ExamFeatures from './TutorPanel/ExamFeatures/ExamFeatures';
import TopBar from './TutorPanel/SideNavbar/TopBar';
import Landing from './Components/Landing';
import Quiz from './TutorPanel/Quiz/Quiz';
import { BrowserRouter } from 'react-router-dom';
import Announcements from './TutorPanel/Announcements/Announcements';
import Website from './TutorPanel/Announcements/Website';
import Business_Report from './TutorPanel/Business_Report/Business_Report';
import Event_Calendar from './TutorPanel/Event_Calendar/Event_Calendar';
import StudentList from './TutorPanel/StudentList/StudentList';
import TermsofService from './Components/TermsOfConditions/TermsofService';
import PrivacyPolicy from './Components/TermsOfConditions/PrivacyPolicy';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import OTP from './Components/ForgetPassword/OTP';
import NewPassword from './Components/ForgetPassword/NewPassword';
import Attendance from './TutorPanel/Attendance/Attendance';


function App() {


  const [userData, setUserData] = useState({
    user:"",
    token:"",
    firstName:"",
    lastName:""

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
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/About' element={<About />} /> */}
        <Route path='/Login' element={<Login onLogin={handleLogin}/>} />
        <Route path='/Signup' element={<Signup />} />
        {userData && <Route path='/Subscription'  element={<Subscription userData={userData}/> } />}
        {userData &&<Route path='/Profile' element={<Student_Redirect userData={userData}/>}/>}
         {userData &&  <Route path='/Expenses_Revenue' element={<Expenses_Revenue userData={userData}/>}/>}
         {userData &&  <Route path='/ExamFeatures' element={<ExamFeatures userData={userData}/>}/>}
         {userData &&  <Route path='/Quiz' element={<Quiz userData={userData}/>}/>}
         {userData && <Route path='/Home'  element={<Home userData={userData} />} />}
         {userData && <Route path='/Announcements' element={<Announcements userData={userData} />} />}
         {userData && <Route path='/Website' element={<Website userData={userData} />} />}
        {userData && <Route path='/Business_Report' element={<Business_Report userData={userData} />} />}
        {userData && <Route path='/Event_Calendar' element={<Event_Calendar userData={userData}/>} />}

        {/* <Route path='/TutorHome'  element={<TutorHome />} /> */}
          {userData &&<Route path='/Student' element={<Student userData={userData}/>} />}
        {/* <Route path='/Calendar' element={<Calendar/>} /> */}
        {userData && <Route path='/AddNewStudent' element={<AddNewStudent userData={userData}/>} />}
          {userData &&<Route path='/OnlineResources' element={<OnlineResources userData={userData}/>} />}
          {userData &&  <Route path='/Attendence' element={<Attendance userData={userData}/>} />}
           <Route path='/UploadFiles' element={<UploadFiles/>}/>
            {<Route path='/TopBar' element={<TopBar/>}/>}

        <Route path='/Testings' element={<Testings />} />
        <Route path='/TermsofService' element={<TermsofService/>} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
         <Route path='/OTP' element={<OTP />} />
         <Route path='/NewPassword' element={<NewPassword />} />
        {/* <div>
        <topnavbar/>
        <Routes>....</Routes>
        </div> */}
          
        
          
         
         <Route path='/BusinessTutor' element={<BusinessTutor/>}/>
        {userData && <Route path='/StudentList' element ={<StudentList userData={userData}/>}/>}
        
          
      </Routes>
      
      
      
      
      
      
      </BrowserRouter>
      
      <ToastContainer/>


    </div>
  );
}

export default App;
