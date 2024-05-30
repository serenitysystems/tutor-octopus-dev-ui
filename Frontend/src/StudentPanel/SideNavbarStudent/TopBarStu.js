import React, { useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { CiCircleQuestion, CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import './TopbarStu.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import Top from './Top'
// import Home from '../Home'

const TopBarStu = () => {



  //PANKAJ--->PAN---(0,3)
  const navigate=useNavigate();


  const location=useLocation();
  console.log(location);
  
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
            <CiCircleQuestion className='share1' /> <IoIosNotificationsOutline className='share1' />

              {/* <Link to='/Profile'><span className='tst'></span></Link> */}
            </Navbar.Text>

          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default TopBarStu
