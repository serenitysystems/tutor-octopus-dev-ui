import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row, Tab, Tabs } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io'

import { FaBars } from 'react-icons/fa6'

import { useEffect, useState } from 'react'

import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'
import StudentList from '../StudentList/StudentList'
import Attendancelist from './Attendancelist'
import Attendencelist from '../StudentList/AttendenceList'
const Attendance = ({ userData }) => {
  const initialValues = {
    batchname: "",
    description1: "",
  };
  const [data, setData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.batchname) {
      errors.batchname = "Batch is required!";
    }
    if (!values.description1) {
      errors.description1 = "Description is required!";
    }

    return errors;
  };

  const [key, setKey] = useState('home');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(userData)

  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
      console.log("check")
      navigate('/Login')
      console.log("check")
    }
  },
    [])




  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(data);
  //   }
  // }, [formErrors]);


  return (
    <div>
      <MobilemenuNavbar userData={userData} />

      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar />
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
            <div class="dashboard-header px-md-4">
              {/* <h1 class="h2">Dashboard</h1> */}


              {/* <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}

              > */}
               
                {/* <Tab eventKey="profile" title="Batches"> */}
                  <div >
                    <Card className='addnewcard'>
                      
                     
                      <Card.Body className='addstutn'>
                      <Attendencelist />

                      </Card.Body>
                    </Card>

                  </div>
                {/* </Tab > */}
               
                
                

              {/* </Tabs> */}



              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title><h5>Add Students Batch</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Batch Name</Form.Label>
                      <Form.Control type="text" className='forn89'
                        name='batchname'
                        value={data.batchname}
                        onChange={handleChange}
                      />
                      <p className="pform">{formErrors.batchname}</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Assigned Students</Form.Label>
                      <Form.Control type="text" className='forn89'
                        name='description1'
                        value={data.description1}
                        onChange={handleChange}

                      />
                      <p className="pform">{formErrors.description1}</p>
                    </Form.Group>
                    {/* <Button type="submit" color="success" className="grnext8">Save</Button> */}
                    <div className='floah'>

                      <Button type="submit" className='btnhj' >
                        Save
                      </Button>
                      <Button className='btnh1j'>
                        Cancel
                      </Button>
                    </div>

                  </Form>
                </Modal.Body>

              </Modal>
            </div>



          </main>
        </div>



      </div>
    </div>
  )
}



export default Attendance