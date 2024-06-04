import React, { useState } from 'react'

import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import MobilemenuNavbaradmin from '../SideNavbaradmin/MobilemenuNavbaradmin'
import Sidenavbaradmin from '../SideNavbaradmin/Sidenavbaradmin'
import TopBaradmin from '../SideNavbaradmin/TopBaradmin'

const Files = () => {
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

                                    <Row style={{ padding: "20px 30px" }}>
                                        <Col sm={4}>
                                            <Card className='cardevent67 ' style={{ background: '#FFD5CF' }}>
                                                
                                                <Stack direction="horizontal" gap={0}>
                                                    <div className="p-"> <img src='./imgs/1b0cf7c16d2cf3112e6f08bb38de2aed.png' width={90} /></div>
                                                    <div className="p"><h5 className='text' style={{ marginLeft: "30px", marginRight: "auto", display: "block" }}>
                                                    Total tutor</h5> 
                                                         <h3 className='text-center ml-0 mr-0'
                                                     style={{ marginLeft: "30px", marginRight: "auto", display: "block" }}>57</h3>

                                                    </div>
                                                </Stack>
                                               
                                            </Card>
                                            <Card className='cardevent67 ' style={{ background: '#CFFFD1' }}>
                                            <Stack direction="horizontal" gap={0}>
                                                    <div className="p-"> <img src='./imgs/299a40c5f05008b536c5759548b7863e.png' width={90} /></div>
                                                    <div className="p"><h5 className='text' style={{ marginLeft: "30px", marginRight: "auto", display: "block" }}>
                                                    Active users</h5> 
                                                         <h3 className='text-center ml-0 mr-0'
                                                     style={{ marginLeft: "30px", marginRight: "auto", display: "block" }}>77</h3>

                                                    </div>
                                                </Stack>
                                            </Card>
                                        </Col>
                                        <Col sm={4}>
                                            <Card className='cardevent67 ' style={{ background: '#A2B4FC' }}>
                                            <Stack direction="horizontal" gap={0}>
                                                    <div className="p-"> <img src='./imgs/8a2924b8ce7fad9b5b0fa696cfb244ee.png' width={90} /></div>
                                                    <div className="p"><h5 className='text' style={{ marginLeft: "30px", marginRight: "auto", display: "block" }}>
                                                    Total institutes  </h5> 
                                                         <h3 className='text-center ml-0 mr-0'
                                                     style={{ marginLeft: "30px", marginRight: "auto", display: "block" }}>22</h3>

                                                    </div>
                                                </Stack>
                                            </Card>
                                            <Card className='cardevent67 ' style={{ background: '#FFDF7D' }}>
                                            <Stack direction="horizontal" gap={0}>
                                                    <div className="p-"> <img src='./imgs/stu.png' width={90} /></div>
                                                    <div className="p"><h5 className='text' style={{ marginLeft: "30px", marginRight: "auto", display: "block" }}>
                                                    Total students</h5> 
                                                         <h3 className='text-center ml-0 mr-0'
                                                     style={{ marginLeft: "30px", marginRight: "auto", display: "block" }}>222</h3>

                                                    </div>
                                                </Stack>
                                            </Card>
                                        </Col>
                                        <Col sm={4}>
                                            <Card className='cardevent67 '  >
                                            <img src='./imgs/299a40c5f05008b536c5759548b7863e.png'  style={{marginTop:"-60px"}}/>

                                                <h4 className='text-center ' style={{marginTop:"-30px"}}>Student’s fee Transactions </h4>
                                                <Button className='text-center '>Check here </Button>

                                              
                                            </Card>
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

export default Files
