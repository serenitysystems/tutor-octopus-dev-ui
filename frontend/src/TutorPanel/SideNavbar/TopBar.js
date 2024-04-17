import React, { useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import './Topbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import Top from './Top'
// import Home from '../Home'

const TopBar = ({userData}) => {

  // console.log(sessionStorage.getItem('firstName').charAt[0])
  // console.log(sessionStorage.getItem('lastName')).charAt(0);


  let profilename=sessionStorage.getItem('firstName').charAt(0)+sessionStorage.getItem('lastName').charAt(0);



  //PANKAJ--->PAN---(0,3)
  const navigate=useNavigate();
  useEffect(()=>{
    if(!sessionStorage.getItem('token')){
      alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
      console.log("check")
      navigate('/Login')
      console.log("check")
      
    }

  },[])

  const location=useLocation();
  console.log(location);
  console.log(userData)
  return (
    <div>
      <Navbar className="bg-body-tertiaryb desktop1">
        <Container>
          <Navbar.Brand className='subscrip'>
            {location.pathname.slice(1)}
          </Navbar.Brand>
      {/* <Home /> */}
          
         
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Navbar.Text>
              <CiShare2 className='share1' /> <IoIosNotificationsOutline className='share1' />

              {/* <Link to='/Profile'><span className='tst'>{userData.firstName[0]+userData.lastName[0]}</span></Link> */}
              <Link to='/Profile'><span className='tst'>{profilename}</span></Link>
            </Navbar.Text>

            <Link to='/Subscription' className='Subscribe'>Subscribe </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default TopBar
