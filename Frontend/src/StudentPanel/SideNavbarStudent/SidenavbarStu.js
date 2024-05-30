import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import './Sidenavbar.css'
const SidenavbarStu = () => {
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
    sessionStorage.removeItem('token');
    navigate('/Login')

  };
  return (
    <div>
      <div class="sidebar-sticky">
        <ul class="nav flex-column text-white">
          <li className="nav-item">
            <Link to="/Home" className="navlinkjh nav-link mb-"> <img src='./imgs/logo6.png' className="logoimgy2 " />
              <span className='tutorl0go nnloh'> Tushar Sharma</span></Link>

          </li>
          <hr></hr>
          <li className="nav-item">
            <ul className='maruil'> 
              <li ><p style={{fontSize:"12px"}}>Roll No - RK20TRB98 (Term:423242)</p> </li>
              <li> <p style={{fontSize:"12px"}}>Group - 2 (Section:K20TR)</p></li>
              <li><p style={{fontSize:"12px"}}> Programme - P132-ND::Dual . - Computer <br></br>Science & Engineering</p></li>
            </ul>

          </li>
          <hr></hr>
          <li className="nav-item">
            <Link to="/Home" className="navlinkjh nav-link"><img src="./imgs/session.png" className="logoimgy1 " />Today’s Session</Link>
          </li>
          <li className="nav-item">
            <Link to="/Student" className="navlinkjh nav-link"><img src="./imgs/FeeTransactions.png" className="logoimgy1 " />Fee Transactions </Link>
          </li>
          <li class="nav-item">
            <Link to="/Event_Calendar" className="navlinkjh nav-link"> <img src="./imgs/Timetable.png" className="logoimgy1 " />Timetable</Link>
          </li>
          <li class="nav-item">
            <Link to="/OnlineResources" className="navlinkjh nav-link"><img src="./imgs/Attendance.png" className="logoimgy1 " /> Attendance</Link>
          </li>
          <li class="nav-item">
            <Link to="/Expenses_Revenue" className="navlinkjh nav-link"><img src="./imgs/Assignmen.png" className="logoimgy1 " />Assignment & Test </Link>
          </li>
          <li class="nav-item">
            <Link to="/Quiz" className="navlinkjh nav-link"><img src="./imgs/Quiz1.png" className="logoimgy1 " />Quiz</Link>
          </li>
          <li class="nav-item">
            <Link to="/ExamFeatures" className="navlinkjh nav-link"><img src="./imgs/Annocement1.png" className="logoimgy1 " />Annocement</Link>
          </li>
          <li class="nav-item">
            <Link to="/Announcements" className="navlinkjh nav-link"><img src="./imgs/Subscription.png" className="logoimgy1 " />Subscription</Link>
          </li>
         
         
          <li class="nav-item">
            <a className="navlinkjh nav-link" href='#'><img src="./img/logout.webp" className="logoimgy1 " />Log-Out</a>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default SidenavbarStu
