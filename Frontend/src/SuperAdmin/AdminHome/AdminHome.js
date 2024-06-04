

import { Card, Stack } from 'react-bootstrap'
import MobilemenuNavbaradmin from '../SideNavbaradmin/MobilemenuNavbaradmin'
import Sidenavbaradmin from '../SideNavbaradmin/Sidenavbaradmin'
import TopBaradmin from '../SideNavbaradmin/TopBaradmin'
import './AdminHome.css'
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const data = [
  { name: 'January', projects: 2400, amt: 2400 },
  { name: 'February', projects: 1398, amt: 2210 },
  { name: 'March', projects: 9800, amt: 2290 },
  { name: 'April', projects: 3908, amt: 2000 },
  { name: 'May', projects: 4800, amt: 2181 },
  { name: 'June', projects: 3800, amt: 2500 },
  { name: 'July', projects: 4300, amt: 2100 },
  { name: 'August', projects: 4300, amt: 2100 },
  { name: 'September', projects: 4300, amt: 2100 },
  { name: 'October', projects: 4300, amt: 2100 },
  { name: 'November', projects: 4300, amt: 2100 },
  { name: 'December', projects: 4300, amt: 2100 },
];
const AdminHome = () => {
  // Use state to manage the selected date
  const [date, setDate] = useState(new Date());

  // Define a function to handle date change
  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div>
      <MobilemenuNavbaradmin />
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbaradmin />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
          
            <div class="dashboard-header px-md-4" >
              <h1 class="h5">Home</h1>
              <Card className='cardevent'>

                <section class="card-container">

                  <div class="">
                    <Stack direction="horizontal" gap={3}>
                      <div className="p-"> <PiStudentBold className='homeicon' style={{ background: '#569AF5' }} /> </div>
                      <div className="p"> <p><b>Student</b></p>
                        <p>932</p>
                      </div>
                    </Stack>
                  </div>

                  <div class="">
                    <Stack direction="horizontal" gap={3}>
                      <div className="p-"> <FaChalkboardTeacher className='homeicon' style={{ background: "#ECC95B" }} /> </div>
                      <div className="p"> <p><b>Tutors</b></p>
                        <p>132</p>
                      </div>
                    </Stack>
                  </div>

                  <div class="">
                    <Stack direction="horizontal" gap={3}>
                      <div className="p-"> <BiSolidSchool className='homeicon' style={{ background: "#FA8A8A" }} /> </div>
                      <div className="p"> <p><b>Institutes</b></p>
                        <p>32</p>
                      </div>
                    </Stack>
                  </div>

                  <div class="">
                    <Stack direction="horizontal" gap={3}>
                      <div className="p-"> <MdEvent className='homeicon' style={{ background: "#7FC88B" }} /> </div>
                      <div className="p"> <p><b>Events</b></p>
                        <p>32</p>
                      </div>
                    </Stack>
                  </div>



                </section>

              </Card>


              <div class="wrapper">



                <section class="colus">

                  <div className="colu">
                    <Card className="cardevent6">

                      <Stack direction="horizontal" gap={3}>
                        <div className="p-2"><b>Tutor Octopus Overview </b></div>
                        <div className="p-2"><p>Week</p></div>
                        <div className="p-2">Month</div>
                        <div className="p-2">Year</div>
                        <div className="p-2">All</div>
                      </Stack>
                      <BarChart
                        width={1005}
                        height={300}
                        data={data}
                        margin={{
                          top: 5, right: 0, left: 0, bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />

                        <Tooltip />
                        <Legend />

                        <Bar dataKey="projects" fill="#8884d8" />
                        <Bar dataKey="Number of projects" fill="#82ca9d" />
                        <Bar dataKey="Number of projects" fill="#E82828" />
                      </BarChart>
                    </Card>
                  </div>



                </section>


              </div>



            </div>
            <section class="card-container1">

              <div class="">
                <Card className='cardevent67'>
                  <Calendar
                    onChange={onChange}
                    value={date}
                    style={{ width: "2000px" }} />
                  <button className='my-2' style={{ border: "2px solid black ", padding: '5px', borderRadius: '10px' }}>Finish Meetings</button>
                  <button style={{ border: "2px solid black ", padding: '5px', borderRadius: '10px' }}>Updating Meetings</button>

                </Card>
              </div>

              <div class="">
                <Card className='cardevent67'>
                  <p className='text-center'>Total Tutors</p>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-"> <img src='./imgs/iuser.png' width={50} /></div>
                    <div className="p"> <h3 className='text-center ml-0 mr-0' style={{ marginLeft: "40px", marginRight: "auto", display: "block" }}>0</h3>

                    </div>
                  </Stack>
                  <p className='text-center'>0% Increased </p>
                </Card>
                <Card className='cardevent67'>
                <p style={{ textAlign: "center" }}><input className="inputNumber" type="number" min="0" max="100" value="70" /></p>
                          <p style={{ textAlign: "center" }}><input className="inputRange" type="range" min="0" max="100" value="70" /></p>
                          <p style={{ textAlign: "center" }}>Invoice Report</p>
                </Card>
              </div>

              <div class="">
                <Card className='cardevent67'>
                  <p className='text-center'>Total Students</p>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-"> <img src='./imgs/stu.png' width={50} /></div>
                    <div className="p"> <h3 className='text-center ml-0 mr-0' style={{ marginLeft: "40px", marginRight: "auto", display: "block" }}>0</h3>

                    </div>
                  </Stack>
                  <p className='text-center'>0% Increased </p>
                </Card>

                <Card className='cardevent67'>
                <p style={{ textAlign: "center" }}><input className="inputNumber" type="number" min="0" max="100" value="50" /></p>
                          <p style={{ textAlign: "center" }}><input className="inputRange1" type="range" min="0" max="100" value="50" /></p>
                          <p style={{ textAlign: "center" }}>Income Report</p>
                </Card>
              </div>

              <div class="">
                <Card className='cardevent67'>
                  <p className='text-center'>Total Files</p>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-"> <img src='./imgs/ecdeb6909ee86b7bb9cbaa983d507dfc.png' width={50} /></div>
                    <div className="p"> <h3 className='text-center ml-0 mr-0' style={{ marginLeft: "40px", marginRight: "auto", display: "block" }}>0</h3>

                    </div>
                  </Stack>
                  <p className='text-center'>0% Increased </p>
                </Card>

                <Card className='cardevent67'>
                  <p className='text-center'>Total Tutors</p>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-"> <img src='./imgs/iuser.png' width={50} /></div>
                    <div className="p"> <h3 className='text-center ml-0 mr-0' style={{ marginLeft: "40px", marginRight: "auto", display: "block" }}>0</h3>

                    </div>
                  </Stack>
                  <p className='text-center'>0% Increased </p>
                </Card>
              </div>



            </section>


          </main>
        </div>



      </div>
    </div>
  )
}

export default AdminHome
