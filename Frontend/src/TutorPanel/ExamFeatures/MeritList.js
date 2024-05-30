import React from 'react'

import { Card, Form, Stack } from 'react-bootstrap'
import '../OnlineResources.css'
import './ExamFeatures.css'

// import Chart from 'chart.js/auto'
import { GoDotFill } from 'react-icons/go'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'
import PieChart from './PieChart'
import './Upload.css'
import Upload from './Upload'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MeritList = ({userData}) => {


    const students = [
        { studentName: 'John', rank: 1, marksPercentage: 85,status:"pass" },
        { studentName: 'Alice', rank: 2, marksPercentage: 78 ,status:"pass"},
        { studentName: 'Bob', rank: 3, marksPercentage: 92,status:"pass" },
        // Add more student data as needed
      ];

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
            <div className="dashboard-header px-md-4" style={{ padding: "0px 0px 70px 0px" }}>
              {/* <h1 className="h2">Dashboard</h1> */}
              <Card className='addnewcard899'>

                <Card.Body className='addstutnet1'>
                <table className="table">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Rank</th>
          <th>Marks Percentage</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.studentName}</td>
            <td>{student.rank}</td>
            <td>{student.marksPercentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>


                

                </Card.Body>
              </Card>

            </div>



          </main>
        </div>



      </div>
    </div>
  )
}

export default MeritList
