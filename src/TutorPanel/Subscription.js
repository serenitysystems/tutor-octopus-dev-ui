import React from 'react'


import { Link } from 'react-router-dom'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { SiTypescript } from 'react-icons/si'
import { FaBars } from 'react-icons/fa6'
import './Subscription.css'
// import PricingCard from '../Components/PricingCard'

import App1 from '../App1'
import MobilemenuNavbar from './SideNavbar/MobilemenuNavbar'
import Sidenavbar from './SideNavbar/Sidenavbar'
import TopBar from './SideNavbar/TopBar'
const Subscription = ({userData}) => {
  return (
    <div>
     <MobilemenuNavbar userData={userData}/>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar/>
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData}/>
            <div class="dashboard-header px-md-4">
              {/* <h1 class="h2">Dashboard</h1> */}
              <p style={{ textAlign: "center" }}>Switch the toggle to change between Monthly and Annually </p>
              <App1 />


            </div>



          </main>
        </div>



      </div>
    </div>
  )
}
export default Subscription


