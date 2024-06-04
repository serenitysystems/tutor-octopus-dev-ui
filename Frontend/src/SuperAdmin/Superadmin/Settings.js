import React, { useState } from 'react'

import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import MobilemenuNavbaradmin from '../SideNavbaradmin/MobilemenuNavbaradmin'
import Sidenavbaradmin from '../SideNavbaradmin/Sidenavbaradmin'
import TopBaradmin from '../SideNavbaradmin/TopBaradmin'

const Settings = () => {
    return (
        <div>
            <MobilemenuNavbaradmin />
            <div class="container-fluid">
                <div class="row">
                    <nav class="col-md-3 d-none d-md-block bg-light sidebar">
                        <Sidenavbaradmin />
                    </nav>
                    <main role="main" class="col-md-8 col-lg-9 sidebar5">
                        <TopBaradmin />
                        <div class="dashboard-header px-md-4" >

                            <Card className='cardevent'>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2"><Form.Control
                                        type="text"
                                        placeholder="Search here..."
                                        className=" mr-sm-2"
                                    /></div>
                                    <div className="p-2 ms-auto"></div>
                                    <div className="p-2"><Button>+ New Student</Button> </div>
                                </Stack>



                            </Card>
                            <br></br><div className=''>

                                <Card className="cardevent mjj" >

                                    <Row style={{padding:"10px 20px"}}>
                                        <Col sm={2}>
                                            <img src='./imgs/39a7d9ce21adfb694c147ead4a70f001.png'
                                                style={{ width: "100px", height: "100px", borderRadius: "100%" }} />
                                        </Col>
                                        <Col sm={5} style={{borderRight:"1px solid #90A6FF"}}>
                                            <Form>
                                                <Row>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>First Name</Form.Label>
                                                            <Form.Control type="text" placeholder="pooja" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>Last Name</Form.Label>
                                                            <Form.Control type="text" placeholder="Sharma" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Bio</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>E-mail Address</Form.Label>
                                                            <Form.Control type="email" placeholder="E-mail Address" />
                                                        </Form.Group>
                                                <Button variant="primary btn-26"  type="submit">
                                                Change Email
                                                </Button>
                                            </Form>

                                            <Form>
                                                

                                                <Form.Group className="mb-3 my-5" controlId="formBasicPassword">
                                                            <Form.Label>Password</Form.Label>
                                                            <Form.Control type="password" placeholder="Password" />
                                                        </Form.Group>
                                                <Button variant="primary btn-26"  type="submit">
                                                Change Password
                                                </Button>
                                            </Form>
                                        </Col>
                                        <Col sm={5}>
                                        <Form>
                                            

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>Website</Form.Label>
                                                            <Form.Control type="text" placeholder="Website" />
                                                        </Form.Group>
                                                        <br></br>
                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                            <Form.Label>Social Profile</Form.Label>
                                                            <Form.Control type="text" placeholder="" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                                          
                                                            <Form.Control type="text" placeholder="" />
                                                        </Form.Group>
                                                     Account
                                                <Button variant="primary btn-26"  type="submit">
                                                Delete Account
                                                </Button>
                                            </Form>
                                        </Col>
                                    </Row>


                                </Card>


                            </div>

                        </div>
                    </main>
                </div>



            </div>
        </div>
    )
}

export default Settings
