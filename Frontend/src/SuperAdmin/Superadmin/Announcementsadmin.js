import React, { useState } from 'react'

import { Button, Card, Col, Container,Dropdown, Form, Row, Stack } from 'react-bootstrap'
import MobilemenuNavbaradmin from '../SideNavbaradmin/MobilemenuNavbaradmin'
import Sidenavbaradmin from '../SideNavbaradmin/Sidenavbaradmin'
import TopBaradmin from '../SideNavbaradmin/TopBaradmin'
import { IoMdArrowDropdown } from 'react-icons/io'
const Announcementsadmin = () => {
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

                                <div class="dashboard-header px-md-4" > 
                            {/* <h1 class="h2">Dashboard</h1> */}
                            <Card className='addnewcard1'>

                                <Card.Body className='addstutnet1'>
                                    <img src='./imgs/252cab3115a181dbf74239c68afa5bf3.png' className='addstutnet34' />
                                    <h5 className='text-center mb-4 ' style={{ marginTop: "-20px" }}>You don't have any Announcements
</h5>
                                   
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg8 addnewdg11'>
                                    <span className='adggsh'> Add Announcements <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='menu87'>
                                   
                                        Add Announcements
                                   

                                </Dropdown.Menu>
                            </Dropdown>
                                </Card.Body>
                            </Card>

                        </div>


                                </Card>


                            </div>

                        </div>
                    </main>
                </div>



            </div>
        </div>
    )
}

export default Announcementsadmin
