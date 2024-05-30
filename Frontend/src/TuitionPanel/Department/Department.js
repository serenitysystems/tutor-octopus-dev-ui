import React from 'react'
import './Department.css'
import { Button, Card, Col, Container, Form } from 'react-bootstrap'
import Footer from '../../Footer'
import Header from '../../Header'
import InputGroup from 'react-bootstrap/InputGroup';

const Department = () => {
    return (
        <div>
            <Header />
            <div className='cardabout8'>
                <Container>
                    <Card className='cardabout6'>
                        <Form class="container89">




                            <div class="form89">


                                <div class="field89">
                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Control
                                            placeholder="Name"
                                            className='input89 inputgroup1'
                                        />
                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/user.png' width={30} /></InputGroup.Text>
                                    </InputGroup>

                                </div>
                                <div class="field89">

                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Select aria-label="Default select example" className='input89 inputgroup1 nn' style={{ border: "none", backgroun: "#D3EEFF" }}>
                                            <option>Gender</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>

                                        </Form.Select>

                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/gender.png' width={36} /></InputGroup.Text>
                                    </InputGroup>

                                </div>
                                <div class="field89">

                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Control
                                            placeholder="email"
                                            className='input89 inputgroup1'
                                        />
                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/mail.png' width={30} /></InputGroup.Text>
                                    </InputGroup>

                                </div>
                                <div class="field89">

                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Control
                                            placeholder="Contact"
                                            className='input89 inputgroup1'
                                        />
                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/Contact.png' width={30} /></InputGroup.Text>
                                    </InputGroup>

                                </div>

                                <div class="field89">

                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Control
                                            placeholder="Designation"
                                            className='input89 inputgroup1'
                                        />
                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/Designation.png' width={30} /></InputGroup.Text>
                                    </InputGroup>

                                </div>
                                <div class="field89">

                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Control
                                            placeholder="Department"
                                            className='input89 inputgroup1'
                                        />
                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/Department.png' width={30} /></InputGroup.Text>
                                    </InputGroup>

                                </div>
                                <div class="field89">

                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Control
                                            placeholder="Qualification"
                                            className='input89 inputgroup1'
                                        />
                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/Qualification.png' width={30} /></InputGroup.Text>
                                    </InputGroup>

                                </div>
                                <div class="field89">

                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Control
                                            placeholder="Experience"
                                            className='input89 inputgroup1'
                                        />
                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/Experience.png' width={30} /></InputGroup.Text>
                                    </InputGroup>

                                </div>
                                <div class="field89">

                                    <InputGroup className="mb-3 inputgroup">
                                        <Form.Control
                                            placeholder="Assign Roles"
                                            className='input89 inputgroup1'
                                        />
                                        <InputGroup.Text id="basic-addon2" className="inputgroup1"><img src='./imgs/AssignRoles.png' width={30} /></InputGroup.Text>
                                    </InputGroup>

                                </div>






                            </div>
                            <div class="container">
                                <div class="row">

                                    <div class="col-xs-12 col-sm-4">
                                        
                                    </div>

                                    <div class="col-xs-12 col-sm-4">
                                    <div className='btngjiu78'>
                                <Button className='closebtn btn btn'>Close</Button>
                                <Button className='submithbtn bnt btn' >Submit</Button>
                            </div>
                                    </div>

                                    <div class="col-xs-12 col-sm-4">
                                       
                                    </div>

                                </div>
                            </div>

                          

                        </Form>
                    </Card>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default Department
