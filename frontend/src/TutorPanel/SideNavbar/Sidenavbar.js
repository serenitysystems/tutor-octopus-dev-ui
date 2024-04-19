import React,{useState} from 'react'

import { Link,useNavigate } from 'react-router-dom'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';

const Sidenavbar = () => {
    const navigate = useNavigate();
  const [showModalLogout, setShowModalLogout] = useState(false);
    const handleLogout = () => {
        setShowModalLogout(true);
      };
    
      const handleClose = () => {
        setShowModalLogout(false);
      };
    
      const handleConfirmLogout = () => {
        // Handle logout here
        setShowModalLogout(false);
        sessionStorage.clear();
        navigate('/Login')
    
      };

      // useEffect(()=>{
      //   if(!sessionStorage.getItem('token')){
      //     navigate('/Login')
      //   }
    
      // },[])
    return (
        <div>
            <div class="sidebar-sticky">
                <ul class="nav flex-column text-white">
                    <li className="nav-item">
                        <Link to="/Home" className="navlinkjh nav-link mb-4"> <img src='./img/tutordash.png' className="logoimgy " /><span className='tutorl0go'>Tutor Octopus</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Home" className="navlinkjh nav-link"><img src="./img/home.png" className="logoimgy1 " />Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Student" className="navlinkjh nav-link"><img src="./img/Student1.png" className="logoimgy1 " />Student</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Attendence" className="navlinkjh nav-link"><img src="./img/Student1.png" className="logoimgy1 " />Attendence</Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link to="/Event_Calendar" className="navlinkjh nav-link"> <img src="./img/Calendar.png" className="logoimgy1 " />Calendar</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/OnlineResources" className="navlinkjh nav-link"><img src="./img/OnlineMaterial.png" className="logoimgy1 " /> Online Material</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Expenses_Revenue" className="navlinkjh nav-link"><img src="./img/Expenses.png" className="logoimgy1 " />Expenses & Revenue</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Quiz" className="navlinkjh nav-link"><img src="./img/Quiz.png" className="logoimgy1 " />Quiz</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/ExamFeatures" className="navlinkjh nav-link"><img src="./img/ExamFeatures.png" className="logoimgy1 " />Exam Features</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Announcements" className="navlinkjh nav-link"><img src="./img/Announcements.png" className="logoimgy1 " />Announcements</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Website" className="navlinkjh nav-link"><img src="./img/Website.png" className="logoimgy1 " /> Website</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Business_Report" className="navlinkjh nav-link"><img src="./img/BusinessReport.png" className="logoimgy1 " />Business Report</Link>
                    </li>
                    <li className="nav-item">
                     <button onClick={handleLogout} className="navlinkjh nav-link"><img src="./img/Logout.png" className="logoimgy1 " />Log-Out</button>
                   </li>
               
                </ul>

                <Modal show={showModalLogout} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want to log out?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                    <Button variant="primary" onClick={handleConfirmLogout}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Sidenavbar
