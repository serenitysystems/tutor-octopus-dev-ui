import React from 'react'

import { Button, Card, Col, Container, Form } from 'react-bootstrap'
import Footer from '../../Footer'
import Header from '../../Header'
import AddCourses from './AddCourses'

const Courses = () => {
    return (
        <div>
            <Header />
            <div className='cardabout8'>
                <Container>
                    <Card className='cardabout6'>
                        <Form>
                            <div class="row">
                                <h4 className='text-center my-5'>Tell us About your Courses</h4>
                                <div class="col-xs-12 col-sm-4">
                                    <img src='./imgs/Courses.png' className='aboutins my-1' />
                                </div>
                                <div class="col-xs-12 col-sm-8">
                                    <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={8} placeholder='Type...' className='testghh' />
                                    </Form.Group>
                                </div>
                                <div className=''>
                                    <h4 className='text-center my-5'>Add Courses</h4>
                                    <AddCourses/>
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
export default Courses
