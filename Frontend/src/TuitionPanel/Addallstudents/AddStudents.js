import React from 'react'

import { Button, Card, Col, Container, Form } from 'react-bootstrap'
import Footer from '../../Footer'
import Header from '../../Header'
import Addallstudents from './Addallstudents'


const AddStudents = () => {
    return (
        <div>
            <Header />
            <div className='cardabout8'>
                <Container>
                    <Card className='cardabout6'>
                    <Addallstudents/>
                      
                    </Card>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
export default AddStudents
