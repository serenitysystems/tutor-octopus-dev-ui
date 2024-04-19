import React, { useEffect, useState } from 'react'


import { Col, Container, Row, Modal, Button } from 'react-bootstrap'

import { Dropdown, Navbar } from 'react-bootstrap'

import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaBars } from 'react-icons/fa'

import './Dash.css'
import App1 from '../App1';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidenavbar from './SideNavbar/Sidenavbar';
import TopBar from './SideNavbar/TopBar';
import MobilemenuNavbar from './SideNavbar/MobilemenuNavbar';


const Home = ({userData}) => {

  const navigate=useNavigate();
  
  
  
  useEffect(()=>{
    if(!sessionStorage.getItem('token')){
      navigate('/Login')
    }

  },[])
    
  
  



  // const location = useLocation();
  // // Accessing the data passed during navigation
  // const userData = location.state;
  // const firstName = userData && userData.firstName ? userData.firstName : '';
  // const lastName = userData && userData.lastName ? userData.lastName : '';
  //console.log(userData);
  // console.log(userData.name[0])
  //  const IconName = userData && userData.name && userData.name.length > 0 ? userData.name[0] : '';
  // const navigate = useNavigate();
  // const [showModalLogout, setShowModalLogout] = useState(false);

  // const handleLogout = () => {
  //   setShowModalLogout(true);
  // };

  // const handleClose = () => {
  //   setShowModalLogout(false);
  // };

  // const handleConfirmLogout = () => {
  //   // Handle logout here
  //   setShowModalLogout(false);
  //   sessionStorage.removeItem('token');
  //   navigate('/Login')

  // };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US');
  //console.log(formattedDate);
//   const userDataString = sessionStorage.getItem('userData');
// if (userDataString) {
//     var userData1 = JSON.parse(userDataString);
//     console.log(userData1)
//     // Now you can use userId as needed
// } 
// else {
    
// }



  return (
    <div>
      {sessionStorage.getItem('token') && <MobilemenuNavbar userData={userData}/>}
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          {sessionStorage.getItem('token') && <Sidenavbar/>}  
          </nav>

          <main role="main" className="col-md-9 col-lg-10 ">
          {sessionStorage.getItem('token') &&<TopBar userData={userData}/>}

            <div className="dashboard-header px-md-4">
              <h4 className="">Lets get Started BUDDY, {userData.firstName}</h4>



              <Row>

                <Col sm={12}>
                  <div className="container bnnbcon scrollb">
                    <div className="progress-container ">
                      <div className="progress" id="progress"></div>
                      <div ><img src='./img/createAccount.png' className="circle1 active" width={0} /> <span className='create5'>Create Account</span></div>

                      <div ><Link to='/AddNewStudent'><img src='./img/des1.png' className="circle nn" width={90} />  <span className='create5'>Add Student</span> </Link></div>
                      <div ><a href='https://meet.google.com/'><img src='./img/des2.png' className="circle " width={90} /> <span className='create5'>Schedule Event</span> </a></div>
                      <div ><img src='./img/des3.png' className="circle " width={90} /> <span className='create5'> You have got it</span> </div>

                    </div>

                  </div>

                </Col>

              </Row>


              <div className="container bkkcon">

                <div className="row mt-5 mt-md-3 row-cols-2 row-cols-sm-1 row-cols-md-4 justify-content-center">
                  <div className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src='./img/Calendar.png' className='imhhg' />
                      </div><h5 className='text-center text-white my-3'>0</h5>
                      <p className='text-center text-white'>
                        Events left this<br></br> week
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src='./img/mon.png' className='imhhg1' />
                      </div><h5 className='text-center text-white my-3'>0</h5>
                      <p className='text-center text-white'>
                        Payment received<br></br> this month
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src='./img/price.png' className='imhhg2' />
                      </div><h5 className='text-center text-white my-3'>RS.00.0</h5>
                      <p className='text-center text-white'>
                        Projected Revenue<br></br> this month
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src='./img/user.png' className='imhhg3' />
                      </div><h5 className='text-center text-white my-3'>0</h5>
                      <p className='text-center text-white'>
                        Active Students
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              <hr></hr>
              <div>
                <img src='./img/Calendar.png' className='calender5' />
                <p className='text-center my-4' style={{ color: "black", fontWeight: "700" }}>There's nothing on your schedule for {formattedDate}</p>
              </div>



            </div>



          </main>
        </div>



      </div>

    </div>

  )
}

export default Home