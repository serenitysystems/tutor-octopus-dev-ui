import React, { useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { CiSettings, CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoMdNotificationsOutline } from 'react-icons/io'
import './Topbaradmin.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const TopBaradmin = () => {



  // //PANKAJ--->PAN---(0,3)
  // const navigate=useNavigate();
  // useEffect(()=>{
  //   if(!sessionStorage.getItem('token')){
  //     alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
  //     console.log("check")
  //     navigate('/Login')
  //     console.log("check")
      
  //   }

  // },[])

  const location=useLocation();
  console.log(location);
  // console.log(userData)
  return (
    <div>
      <Navbar className="bg-body-tertiaryb desktop1">
        <Container>
          <Navbar.Brand className='subscrip'>
         
          </Navbar.Brand>
      {/* <Home /> */}
          
         
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">

            <Navbar.Text>
            <IoMdNotificationsOutline className='share1' />

              <CiSettings className='share1' />
            </Navbar.Text>

            <Link to='/Subscription' ><img src='./imgs/39a7d9ce21adfb694c147ead4a70f001.png'
                                                style={{ width: "30px", height: "30px", borderRadius: "100%" }}/> </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default TopBaradmin
