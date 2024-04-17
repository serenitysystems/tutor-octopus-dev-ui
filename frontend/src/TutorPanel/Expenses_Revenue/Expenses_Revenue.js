
import { Link, useNavigate } from 'react-router-dom'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io'
import { Card, Container, Dropdown, Navbar } from 'react-bootstrap'
import '../OnlineResources.css'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'
import { useEffect } from 'react'

const Expenses_Revenue = ({userData}) => {

  // const navigate=useNavigate();
  // useEffect(()=>{
  //   if(!sessionStorage.getItem('token')){
  //     alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
  //     console.log("check")
  //     navigate('/Login')
  //     console.log("check")
      
  //   }

  // },[])
  return (
    <div>
      <MobilemenuNavbar userData={userData} />
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar/>
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
          <TopBar userData={userData} />
            <div class="dashboard-header px-md-4" style={{padding:"0px 0px 70px 0px"}}>
              {/* <h1 class="h2">Dashboard</h1> */}
              <Card className='addnewcard1'>

                <Card.Body className='addstutnet1'>
                  <img src='./img/laptop.png' className='addstutnet3' />
                  <h5 className='text-center text67 ' style={{ marginTop: "-20px" }}>You don't have any expenses or other revenue yet</h5>
                  <p className='text-center text67n'>Stay on top of your expenses and record all other sources of revenue here</p>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg8 addnewdg11'>
                      <span className='adggsh'>Add New  <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='menu87'>
                      <Link to="/" style={{
                        color: "black", marginLeft: "10px", textDecoration: "none"
                        , fontSize: "16px"
                      }}>Add New Student</Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Card>

            </div>



          </main>
        </div>



      </div>
    </div>
  )
}

export default Expenses_Revenue
