import React from 'react'

import { Card, Col, Form, Row, Stack } from 'react-bootstrap'
import '../OnlineResources.css'
import './Business_Report.css'

// import Chart from 'chart.js/auto'
import { GoDotFill } from 'react-icons/go'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'
import PieChart from './PieChart'


const Business_Report = ({ userData }) => {

  return (
    <div>
      <MobilemenuNavbar userData={userData} />
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
            <div className="dashboard-header px-md-4" style={{ padding: "0px 0px 70px 0px" }}>
              {/* <h1 className="h2">Dashboard</h1> */}
              <Card className='addnewcard899098'>

                <Card.Body className='addstutnet1'>


                  <div className="wrapper34">


                    <section className="columns1">

                      <div className="column1">
                        <div className="box209901">
                          <img src='./img/stu.png' className='imgpy010' />
                          <p className='text-center type3'>Students Report</p>
                        </div>
                      </div>
                      <div className="column1">
                        <div className="box20999">
                          <img src='./img/invoce.png' className='imgpy01' />
                          <p className='text-center type3'>Student Invoice</p>
                        </div>
                      </div>

                      <div className="column1">
                        <div className="box2099010">
                          <img src='./img/PayrollReport.png' className='imgpy01' />
                          <p className='text-center type3'>Payroll Report</p>
                        </div>
                      </div>

                    </section>



                  </div>
                  <div className="wrapper34">
                    <section className="columns1">
                      <div className="column1">
                        <div className="box209901n">
                          <p style={{ textAlign: "center" }}><input className="inputNumber" type="number" min="0" max="100" value="70" /></p>
                          <p style={{ textAlign: "center" }}><input className="inputRange" type="range" min="0" max="100" value="70" /></p>
                          <p style={{ textAlign: "center" }}>Invoice Report</p>

                          
                        </div>
                      </div>
                      <div className="column1">
                        <div className="box209901n">
                          <p style={{ textAlign: "center" }}><input className="inputNumber" type="number" min="0" max="100" value="50" /></p>
                          <p style={{ textAlign: "center" }}><input className="inputRange1" type="range" min="0" max="100" value="50" /></p>
                          <p style={{ textAlign: "center" }}>Income Report</p>
                        </div>
                      </div>
                    </section>
                  </div>









                  <div className="wrapperp34 ncnhjcx p-4">
                    <section className="columns1">
                      <div className="column1">
                        <div className="box2098290">
                          <Stack direction="horizontal" className="gap0" gap={3}>
                            <div className="p-"> <PieChart style={{ padding: "50px" }} /></div>
                            <div className="p- bsfrse">  <p style={{ fontSize: "15px", margin: "3px 0px 0px 0px" }}><GoDotFill style={{ fontSize: "30px", color: "#5CB9B1" }} /> Teacher Attendance</p>
                              <p style={{ fontSize: "15px", margin: "0px" }} ><GoDotFill style={{ fontSize: "30px", color: "#58bdff" }} />Teacher Absent </p>
                            </div>
                          </Stack>
                        </div>
                      </div>
                      <div className="column1">
                        <div className="box209823">
                          <Card className='carduploadresult23'  >
                            <img src='./img/FeeReport.png' className='siund4' />
                            <p className='text-center type3'> Fee Report</p>
                          </Card>
                        </div>
                      </div>
                    </section>
                  </div>

                </Card.Body>
              </Card>

            </div>



          </main>
        </div>



      </div>
    </div>
  )
}

export default Business_Report
