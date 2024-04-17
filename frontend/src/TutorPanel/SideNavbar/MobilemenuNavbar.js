import React, { useState } from 'react'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap';

const MobilemenuNavbar = ({userData}) => {
    const navigate = useNavigate();
    const location=useLocation();
    
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
      <div className='desktop13'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light debhh fixed-top" >
                    <a className="navbar-brand" >{location.pathname.substring(1)}</a>

                    <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />
                    <Link to='/Profile'><span className='tst'>{userData.firstName[0]}</span></Link>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <Link to="/Home" className="nav-link nav-link1">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Subscription" className="nav-link nav-link1">Subscribe</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Student" className="nav-link nav-link1">Student</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Attendence" className="nav-link nav-link1">Attendence</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Event_Calendar" className="nav-link nav-link1">Calendar</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/OnlineResources" className="nav-link nav-link1"> Online Material</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Expenses_Revenue" className="nav-link nav-link1">Expenses & Revenue</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Quiz" className="nav-link nav-link1">Quiz</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/ExamFeatures" className="nav-link nav-link1">Exam Features</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Announcements" className="nav-link nav-link1">Announcements</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Website"className="nav-link nav-link1"> Website</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Business_Report" className="nav-link nav-link1">Business Report</Link>
                            </li>
                            <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link nav-link1">Log-Out</button>
                </li>
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
                        </ul>
                    </div>
                </nav>
            </div>
    </div>
  )
}

export default MobilemenuNavbar
