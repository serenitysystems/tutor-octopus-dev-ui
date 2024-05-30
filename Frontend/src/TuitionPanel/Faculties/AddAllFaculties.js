import React from 'react'

import { Button, Card, Col, Container, Form } from 'react-bootstrap'
import Footer from '../../Footer'
import Header from '../../Header'
import AddFaculties from './AddFaculties'


const AddAllFaculties = () => {
    return (
        <div>
            <Header />
            <div className='cardabout8'>
                <Container>

                    <Card className='cardabout6'>
                        <Form>
                            <div class="row">
                                <h4 className='text-center my-5'>Tell us About your Institute</h4>
                                <div class="col-xs-12 col-sm-4">
                                    <img src='./imgs/AboutIns.png' className='aboutins my-' />
                                </div>
                                <div class="col-xs-12 col-sm-8">
                                    <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={8} placeholder='Type...' className='testghh' />
                                    </Form.Group>
                                </div>
                                <div className=''>
                                    <h4 className='text-center my-5'>Add Faculties</h4>
                                    <AddFaculties />
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

export default AddAllFaculties
