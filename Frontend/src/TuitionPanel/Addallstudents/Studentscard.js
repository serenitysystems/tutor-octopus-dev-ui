


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap'
import { IoMdAdd } from "react-icons/io";
import './Addallstudents.css'

const Studentscard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>


            <div className='carousels1743'>

                <div className=''>
                    <Button className="iomdaddh7" ><IoMdAdd onClick={handleShow} /></Button>
                    <div className="cardfsh my-4">
                        <img src={props.url} className='carousels217444' />
                    </div>
                </div>

                <div className='carousels474'>
                    <h5 className="text67467">{props.Title}</h5>

                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Add Image</Form.Label>
                            <Form.Control type="file" placeholder="Browser...." style={{ borderRadius: "30px" }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Subject Name</Form.Label>
                            <Form.Control type="text" style={{ borderRadius: "30px" }} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Studentscard


