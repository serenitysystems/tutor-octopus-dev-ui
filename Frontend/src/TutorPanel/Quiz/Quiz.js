import React, { useEffect } from 'react'


import { Card, Container, Dropdown, Form, Navbar, Stack } from 'react-bootstrap'
import TopBar from '../SideNavbar/TopBar'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import '../OnlineResources.css'
import './Quiz.css'
import { useNavigate } from 'react-router-dom'
const Quiz = ({userData}) => {
//     const navigate=useNavigate();
//   useEffect(()=>{
//     if(!sessionStorage.getItem('token')){
//       alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
//       console.log("check")
//       navigate('/Login')
//       console.log("check")
      
//     }

//   },[])
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
                        <div class="dashboard-header px-md-4" style={{ padding: "0px 0px 70px 0px" }}>
                            {/* <h1 class="h2">Dashboard</h1> */}
                            <Card className='addnewcard89'>

                                <Card.Body className='addstutnet1'>
                                    <h5 style={{ fontSize: "20px", fontWeight: "600" }} >Question 1</h5>
                                    <p style={{ fontWeight: "600", fontSize: "17px" }}>What is the largest country in South America?</p>
                                    <Form>
                                        <Stack direction="horizontal" gap={3}>
                                            <div className="p-">A.</div>
                                            <div className="p-">
                                                <Form.Group className="p-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Argentina" style={{ fontWeight: "600", fontSize: "17px" }} />
                                                </Form.Group>
                                            </div>

                                        </Stack>
                                        <Stack direction="horizontal" gap={3}>
                                            <div className="p-">B.</div>
                                            <div className="p-">
                                                <Form.Group className="p-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Brazil (Bubble)" style={{ fontWeight: "600", fontSize: "17px" }} />
                                                </Form.Group>
                                            </div>

                                        </Stack>



                                        <Stack direction="horizontal" gap={3}>
                                            <div className="p-">C.</div>
                                            <div className="p-">
                                                <Form.Group className="p-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Colombia" style={{ fontWeight: "600", fontSize: "17px" }} />
                                                </Form.Group>
                                            </div>

                                        </Stack>

                                        <Stack direction="horizontal" gap={3}>
                                            <div className="p-">D.</div>
                                            <div className="p-">
                                                <Form.Group className="p-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Peru" style={{ fontWeight: "600", fontSize: "17px" }} />
                                                </Form.Group>
                                            </div>

                                        </Stack>






                                        <main class="menu7h">
                                            <article class="artcal5">
                                                <h5 style={{ fontSize: "20px", fontWeight: "600", margin: "30px 0px 10px 0px" }} >Question 1</h5>
                                                <p style={{ fontWeight: "600", fontSize: "17px" }}>What is the capital of France?</p>

                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="p-">A.</div>
                                                    <div className="p-">
                                                    <Form.Group className="p-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="London" style={{ fontWeight: "600", fontSize: "17px" }} />
                                                </Form.Group>
                                                    </div>

                                                </Stack>
                                               
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="p-">B.</div>
                                                    <div className="p-">
                                                    <Form.Group className="p-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Paris (Bubble)" style={{ fontWeight: "600", fontSize: "17px" }} />
                                                </Form.Group>
                                                    </div>

                                                </Stack>
                                               
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="p-">C.</div>
                                                    <div className="p-">
                                                    <Form.Group className="p-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Rome" style={{ fontWeight: "600", fontSize: "17px" }} />
                                                </Form.Group>
                                                    </div>

                                                </Stack>
                                               
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="p-">D.</div>
                                                    <div className="p-">
                                                    <Form.Group className="p-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Berlin" style={{ fontWeight: "600", fontSize: "17px" }} />
                                                </Form.Group>
                                                    </div>

                                                </Stack>
                                               

                                            </article>
                                            <article class="artcal5">
                                                <img src='./img/Quiz1.png' className='Quiz4' />
                                            </article>

                                        </main>




                                    </Form>
                                </Card.Body>
                            </Card>

                        </div>



                    </main>
                </div>



            </div>
        </div>
    )
}

export default Quiz
