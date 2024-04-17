import React, { useState } from 'react'
import './AddNewStudent.css'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'

import { useCollapse } from 'react-collapsed'
const UploadFiles = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()


    return (
        <div>
            <div className='backgroundy'>
                <Container>
                    <div className='content7'>
                        {/* <Link to='/TutorHome' style={{ fontSize: "24px", fontWeight: "600" }}><IoIosArrowBack />  Back to Students</Link> */}
                        <h3 style={{ fontWeight: "700" }} className="my-4">Upload Files</h3>
                    </div>

                    <Form className="formjhu">


                        <h3 className='mb-5' style={{ fontWeight: "700" }}>Attachments</h3>
                        <div className="mbsc-row row">
                            <div className=" mbsc-col-3 col-sm-2 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Select aria-label="Default select example" style={{ borderRadius: "30px", color: "black", padding: "1px 10px 1px 30px" }}>
                                    <option>Batch 1</option>
                                    <option value="1">Batch 2</option>
                                    <option value="2">Batch 3</option>

                                </Form.Select>
                            </div>
                            <div className=" mbsc-col-9 col-sm-10 mbsc-col-md-3 mbsc-col-lg-3">

                            </div>

                        </div>
                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">



                                <div className='p-2'>
                                    <Form.Label>Student Access</Form.Label>
                                    <Row className='p-2'>
                                        <Col sm={4}>
                                            <Form.Group className=" " controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="Your Students" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Group className=" " controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="Specific Students" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Group className=" " controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="No student access" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                </div>
                            </div>

                        </div>
                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">



                                <div className='p-2'>
                                    <Form.Label>Notify Students</Form.Label>

                                    <Form.Group className=" " controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Email" />
                                    </Form.Group>


                                </div>
                            </div>

                        </div>
                        <div className="mbsc-row row">
                            <div className=" mbsc-col-6 col-sm-12 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} style={{ height: "10px" }} />
                                </Form.Group>
                            </div>


                        </div>

                        <div className="mbsc-row row">
                            <div className=" mbsc-col-6 col-sm-2 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="my-2" controlId="formBasicEmail">
                                    <Form.Label>Submission Date- </Form.Label>


                                </Form.Group>
                            </div>
                            <div className=" mbsc-col-6 col-sm-4 mbsc-col-md-3 mbsc-col-lg-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="date" required style={{ background: "#95C1FC" }} />

                                </Form.Group>
                            </div>
                            <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">

                            </div>
                        </div>

                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">



                                <div className='p-2'>
                                    <Form.Label>Download Permission </Form.Label>
                                    <Row className='p-2'>
                                        <Col sm={4}>
                                            <Form.Group className=" " controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="View and download" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Group className=" " controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="View only" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={4}>

                                        </Col>
                                    </Row>
                                    <hr></hr>
                                </div>
                            </div>

                        </div>



                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">
                                <div className="mbsc-button-group-block ">
                                    <Row>
                                    <Col sm={3}>
                                        
                                        </Col>
                                        <Col sm={3}>
                                        <Button color="success" className="grnext4" >Save</Button>
                                        </Col>
                                        <Col sm={3}>
                                        <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="grnext47">
                                        Save as
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='nhhhjnxch' >
                                           <ul className='ulio'>
                                            <li>PDF</li>
                                            <li>DOC</li>
                                            <li>JPEG</li>
                                           </ul>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                        </Col>
                                        <Col sm={3}>
                                         
                                    <Button color="success" className="grnext11">Cancel</Button>
                                        </Col>
                                      
                                    </Row>
                                  

                                    {/* <Button color="success" className="grnext4">Save as </Button> */}
                                  
                                </div>
                            </div>
                        </div>


                        <div className="mbsc-row">
                            <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">



                                <div className=''>
                                    <Form.Label>Students queries</Form.Label><br></br>
                                    <Button color="success" className="grnext4" >1. Why are my marks...</Button>  <br></br>
                                    <Button color="success" className="grnext4" >2. Why are my marks...</Button>
                                    <p></p>

                                    {isExpanded ? '' : (
                                        <button {...getToggleProps()} className='morelect'>
                                            Show More..
                                        </button>
                                    )}
                                    <section {...getCollapseProps()}>

                                        <Button color="success" className="grnext4" >1. Why are my marks...</Button>  <br></br>
                                        <Button color="success" className="grnext4" >2. Why are my marks...</Button><br></br>
                                        <Button color="success" className="grnext4" >1. Why are my marks...</Button>  <br></br>
                                        <Button color="success" className="grnext4" >2. Why are my marks...</Button><br></br>
                                    </section>
                                    {!isExpanded ? '' : (
                                        <button {...getToggleProps()} className='morelect'>
                                            Show less...
                                        </button>
                                    )}

                                </div>
                            </div>

                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default UploadFiles
