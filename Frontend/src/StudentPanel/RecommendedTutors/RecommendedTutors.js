import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import './RecommendedTutors.css'
import { Button, Col, Container, Dropdown, Form, FormLabel, Row, Stack, Tab, Tabs } from 'react-bootstrap'
import { IoIosArrowDown, IoIosPlay, IoMdNotifications } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../../Footer';
const RecommendedTutors = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slidesToSlide: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='recbg'>
                <Container>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">

                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                        <span style={{ color: "#1177FE", fontSize: "18px" }}>Find a Tutor <IoIosArrowDown /></span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='menu8d6'>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div> </div>
                        <div className="p-2">
                            <div className='searhcbyn'>
                                <CgSearch />    <input placeholder='Search' className='searhcbynn' />
                            </div>
                        </div>

                        <div className="p-2 ms-auto">Get Help Now</div>
                        <div className="p-2">  <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                <span style={{ color: "#1177FE", fontSize: "18px" }}>Tushar <IoIosArrowDown /></span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='menu8d6'>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></div>
                        <div className="p-2">
                            <IoMdNotifications style={{ fontSize: "30px" }} />

                        </div>
                    </Stack>

                    <div className='mnsdnh5'>
                        <h5 className='text-center'>Enter your question to connect with a tutor instantly:</h5>

                        <Stack direction="horizontal" gap={3} className='scrtt'>
                            <div className="p-2">What are you looking for help with?</div>
                            <div className="p-2 ms-auto">

                                <Button style={{ borderRadius: "30px", padding: "8px 50px 8px 50px" }}>Next</Button>
                            </div>

                        </Stack>
                    </div>

                    <Tabs
                        defaultActiveKey="tutors"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >

                        <Tab eventKey="schedule" title="Schedule" className='mah'>
                            <section class="columnsstudent">

                                <div class="columnstudent ">
                                    <h5 className='my-3'>LIVE SESSIONS</h5>
                                    <p>You have no active sessions.</p>
                                    <h5>UPCOMING  SESSIONS</h5>
                                    <p>You have no scheduled sessions.</p>

                                    <Button className='seragc' >Search for a Tutor</Button>
                                    <h5>PANDING REQUESTS </h5>
                                    <p>You have no scheduled sessions.</p>

                                </div>
                                <div class="columnstudent">


                                    <img src='./imgs/img9.png' />
                                </div>

                            </section>
                        </Tab>

                        <Tab eventKey="tutors" title="Tutors" className='mah' >
                            <div className='gradebm'>
                                <Button className='grade'>Grade Level</Button>
                                <Button className='grade'>Filter by Subject</Button>
                            </div>
                            <br></br>  <br></br>
                            <div className='mabn'>


                                <Container >
                                    <h4 className='mamsk'> RECOMMENDED TUTORS</h4>
                                    <Carousel responsive={responsive} >
                                        <div>
                                            <div className='cardstudent190'>
                                                <img src='/imgs/img7.jpeg' className='studentimagenn' />
                                                <p className='palnshh text-white'>Cathy</p>
                                                <img src='/imgs/start.jpeg' className='studentimagennn mb-3' />
                                                <p className='text-center text-white'>Subjects: ACT, ACT English...</p>
                                                <Button className='btn btngethourss' onClick={handleShow}><IoIosPlay /> Start now</Button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='cardstudent1900'>
                                                <img src='/imgs/Cristina.jpeg' className='studentimagenn' />
                                                <p className='palnshh text-white'>Cristina</p>
                                                <img src='/imgs/start.jpeg' className='studentimagennn mb-3' />
                                                <p className='text-center text-white'>Subjects: ACT, ACT English...</p>
                                                <Button className='btn btngethourss1' onClick={handleShow}><IoIosPlay /> Start now</Button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='cardstudent19000'>
                                                <img src='/imgs/Charles.jpeg' className='studentimagenn' />
                                                <p className='palnshh text-white'>Charles</p>
                                                <img src='/imgs/start.jpeg' className='studentimagennn mb-3' />
                                                <p className='text-center text-white'>Subjects: ACT, ACT English...</p>
                                                <Button className='btn btngethourss2'  onClick={handleShow}><IoIosPlay /> Start now</Button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='cardstudent190000'>
                                                <img src='/imgs/Eliza.jpeg' className='studentimagenn' />
                                                <p className='palnshh text-white'>Eliza</p>
                                                <img src='/imgs/start.jpeg' className='studentimagennn mb-3' />
                                                <p className='text-center text-white'>Subjects: ACT, ACT English...</p>
                                                <Button className='btn btngethourss3'  onClick={handleShow}><IoIosPlay /> Start now</Button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='cardstudent190'>
                                                <img src='/imgs/img7.jpeg' className='studentimagenn' />
                                                <p className='palnshh text-white'>Cathy</p>
                                                <img src='/imgs/start.jpeg' className='studentimagennn mb-3' />
                                                <p className='text-center text-white'>Subjects: ACT, ACT English...</p>
                                                <Button className='btn btngethourss'><IoIosPlay /> Start now</Button>
                                            </div>
                                        </div>
                                    </Carousel>
                                </Container>
                            </div>
                        </Tab>
                        <Tab eventKey="activity" title="Activity" className='mah'>
                            <h5 className='text-center mvnv'>You have no schedule sessions  </h5>
                            <Button className='seragc1' >Search for a Tutor</Button>
                            <img src='./imgs/img10.png' className='imghy' />

                        </Tab>
                        <Tab eventKey="message" title="Message" className='mah'>


                            <div style={{
                                backgroundImage:
                                    "url('./imgs/img10.png')", backgroundSize: "",
                                backgroundRepeat: "no-repeat", padding: "160px 0px 0px 0px"
                            }} className='mcbfb956'>
                                <p style={{ marginTop: "-90px" }}>Recent Tutors </p>
                                <Form className='fpknf8 my-5'>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Inbox</Form.Label>
                                        <Form.Control as="textarea" rows={5} />
                                    </Form.Group>
                                </Form>
                            </div>
                            <h5 className='text-center my-5'>You have no schedule sessions  </h5>
                            <Button className='seragc1' >Search for a Tutor</Button>

                        </Tab>

                    </Tabs>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>

                            </Modal.Title>
                        </Modal.Header>
                        <Form className=''>
                            <Modal.Body>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">
                                        <img src='/imgs/img7.jpeg' width={100} />
                                    </div>
                                    <div className="p-2"><h4>Cathy</h4>
                                        <p style={{ fontSize: "16px", fontWeight: "400" }}>Subjects: ACT, ACT English...</p>
                                    </div>

                                </Stack>
                                <hr></hr>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Your Subject" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Grade level</Form.Label>
                                    <Form.Control type="text" placeholder="Select a grade level" />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Type" />

                                </Form.Group>

                            </Modal.Body>


                            <Button variant="primary" className='ndsh67343' onClick={handleClose}>
                            Start Session
                            </Button>
                        </Form>
                    </Modal>
                </Container>
            </div>
            <div style={{ backgroundColor: "#1d3748" }} className='bg76'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h5 style={{ color: "white" }}>Keep up to date — Get e-mail updates</h5>
                            <p style={{ color: "white" }}>Stay tuned for the latest company news.</p>
                        </Col>
                        <Col sm={6}>
                            <Form >

                                <div className="d-flex my-2">
                                    <Form.Control type="text" className='form1' placeholder='Enter e-mail Address' />

                                    <Button variant="" className='btn809' type="button">
                                        Subscribe Now
                                    </Button>

                                </div>



                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default RecommendedTutors
