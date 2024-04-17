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

const ExamFeatures = ({userData}) => {
  // const chartRef = useRef(null);
  // const chartInstance = useRef(null);

  // useEffect(() => {
  //   if (chartInstance.current) {
  //     chartInstance.current.destroy();
  //   }
  //   const myChartRef = chartRef.current.getContext("2d");

  //   chartInstance.current = new Chart(myChartRef, {
  //     type: 'doughnut',
  //     data: {
  //       // labels: [
  //       //     'Fail',
  //       //     'Pass'

  //       // ],

  //       datasets: [{

  //         data: [40, 80],
  //         backgroundColor: [
  //           '#5CB9B1',
  //           '#F56954'

  //         ],
  //       }
  //       ]

  //     }

  //   });
  //   return () => {
  //     if (chartInstance.current) {
  //       chartInstance.current.destroy();

  //     }
  //   }


  // }, [])
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


                  <div className="wrapper34">


                    <section className="columns1">

                      <div className="column1">
                        <div className="box2098">
                          <p><b>Select Exam</b></p>
                          <Form.Select aria-label="Default select example">
                            <option>Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select> </div></div>

                      <div className="column1">
                        <div className="box2099">
                          <img src='./img//check1.png' className='imgpy' />
                          <p className='text-center type3'>Merit list</p>
                        </div>
                      </div>

                      <div className="column1">
                        <div className="box20999">
                          <img src='./img/imgy.png' className='imgpy' />
                          <p className='text-center type3'>Result Card</p>
                        </div>
                      </div>

                    </section>



                  </div>

                  {/* <div className="wrapper34">


                    <section className="columns1">

                      <div className="column1">
                        <div className="box20888">
                          <div className="wrapper2">


                            <section className="columns2 ">



                              <div className="column2 cbn">
                                <h5 className='examfinal1'>Exam Final<br></br> Result</h5>

                              </div>

                              <div className="column2 cbn">
                                <img src='./img/examfinal.png' className='examfinal' />
                                 </div>

                            </section>



                          </div>

                        </div></div>

                      <div className="column1">
                        <div className="box208888">
                          <div className="wrapper2">


                            <section className="columns2">



                              <div className="column2">
                                <h5 className='examfinal1'>Check merit <br></br>list here</h5>

                              </div>

                              <div className="column2">
                                <img src='./img/check1.png' className='examfinal' /> </div>

                            </section>



                          </div>
                        </div>
                      </div>


                    </section>



                  </div> */}


                  <div className="wrapper34">


                    <section className="columns1">

                      <div className="column1">
                        <div className="box20982">
                          {/* <h5>Result</h5> */}
                          {/* <canvas ref={chartRef} style={{ width: "10px", height: "50px" }} /> */}
                          <div className='piechart'>
                            <PieChart />
                          </div>
                          <Stack direction="horizontal" gap={3}>
                            <div className="bnnnui">
                              <p style={{ fontSize: "18px", margin: "0px" }}><b style={{ fontSize: "25px" }}>55</b> Pass</p>
                              <p style={{ fontSize: "18px" }}><b style={{ fontSize: "25px" }}>33</b> Fail</p>
                            </div>

                            <div className="bnnnuib">
                              <p style={{ fontSize: "18px", margin: "0px" }} ><GoDotFill style={{ fontSize: "30px", color: "#F56954" }} /> Fail</p>
                              <p style={{ fontSize: "18px", margin: "3px 0px 0px 0px" }}><GoDotFill style={{ fontSize: "30px", color: "#5CB9B1" }} /> Pass</p>
                            </div>
                          </Stack>

                        </div>
                      </div>

                      <div className="column1">

                      
                        <div className="box209823 my-3">
                        <Card className='carduploadresult '  >
                          <div >
                            <Upload />
                          </div>


                          {/* <img src='./img/sound.png' className='siund4' /> */}

                        </Card>
                        <Card className='carduploadresult2 my-3'  >
                          <img src='./img/sound.png' className='siund4' />
                          <ul>
                            <li>Results declared on 24th March</li>
                            <li>Marks have been sent to your register E-mail ID</li>
                            <li>Complete results have been shared Via SMS and Mail</li>
                          </ul>


                          {/* <img src='./img/sound.png' className='siund4' /> */}

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

export default ExamFeatures
