import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';

const Sidenavbaradmin = () => {
    const navigate = useNavigate();
    const [showModalLogout, setShowModalLogout] = useState(false);
    const handleLogout = () => {
        setShowModalLogout(true);
    };

    const handleClose = () => {
        setShowModalLogout(false);
    };

    // const handleConfirmLogout = () => {
    //   // Handle logout here
    //   setShowModalLogout(false);
    //   sessionStorage.removeItem('token');
    //   navigate('/Login')

    // };
    return (
        <div>
            <div class="sidebar-sticky">
                <ul class="nav flex-column text-white">
                    <li className="nav-item">
                        <Link to="/AdminHome" className="navlinkjh nav-link mb-4"> <img src='./img/tutordash.png' className="logoimgy " /><span className='tutorl0go'>Tutor Octopus</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AdminHome" className="navlinkjh nav-link"><img src="./img/home.png" className="logoimgy1 " />Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AdminStudent" className="navlinkjh nav-link"><img src="./img/Student1.png" className="logoimgy1 " />Student</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Tutors" className="navlinkjh nav-link"> <img src="./imgs/1b0cf7c16d2cf3112e6f08bb38de2aed.png" className="logoimgy1 " />Tutors</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/AllExpenses" className="navlinkjh nav-link"><img src="./img/OnlineMaterial.png" className="logoimgy1 " /> All Expenses</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Files " className="navlinkjh nav-link"><img src="./imgs/3ed6d6307bef6994e77e486872810cf6.png" className="logoimgy1 " />Files </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Settings" className="navlinkjh nav-link"><img src="./img/Quiz.png" className="logoimgy1 " />Settings</Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/Announcementsadmin" className="navlinkjh nav-link"><img src="./img/Announcements.png" className="logoimgy1 " />Announcements</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Website" className="navlinkjh nav-link"><img src="./img/Website.png" className="logoimgy1 " /> Website</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Business_Report" className="navlinkjh nav-link"><img src="./img/BusinessReport.png" className="logoimgy1 " />Business Report</Link>
                    </li>
                    <li class="nav-item">

                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidenavbaradmin
