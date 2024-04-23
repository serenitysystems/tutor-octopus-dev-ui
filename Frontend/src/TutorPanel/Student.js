

import { FaBars } from 'react-icons/fa6'
import './Subscription.css'
import { useEffect, useRef, useState } from 'react'
import './Student.css'
import MobilemenuNavbar from './SideNavbar/MobilemenuNavbar'
import Sidenavbar from './SideNavbar/Sidenavbar'
import TopBar from './SideNavbar/TopBar'
import StudentList from './StudentList/StudentList'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, Col, Container, Dropdown, Form, Modal, Nav, Navbar, Row, Tab, Table, Tabs } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io'
import Attendencelist from './StudentList/AttendenceList'
import { toast } from 'react-toastify'
import { AddStudentWithoutBatch, getStudentReadBatch, getStudentWithoutBatch } from '../apicalls/Student'
import { updateTeacherBatchRouter } from '../apicalls/User'





const Student = ({ userData }) => {
  const [Without_Batch_Students, set_without_batch_student] = useState([]);






  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.batchName) {
  //     errors.batchname = "Batch is required!";
  //   }
  //   if (!values.description1) {
  //     errors.description1 = "Description is required!";
  //   }

  //   return errors;
  // };
  // const sessionBatch=sessionStorage.getItem('batch');
  // let newarray=JSON.parse(sessionBatch);
  // let newset=new Set(newarray)
  // newset=new Array(newset);
  const newset = Array.from(new Set(JSON.parse(sessionStorage.getItem('batch'))));

  const [key, setKey] = useState('home');
  const [show, setShow] = useState(false);
  const[batchName,setbatchName]=useState(newset);
  console.log(batchName)

  const[selectedBatch,setSelectedBatch]=useState("");
  const[read_batch_student, set_read_batch_student]=useState([]);
  

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    getStudentWithoutBatchData();
  }
  // console.log(userData)

  const navigate = useNavigate();
  const batchvalue = useRef();
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      alert('YOU ARE NOT LOGGED IN! KINDLY LOGIN! CLICK OK BUTTON 2 TIMES');
      console.log("check")
      navigate('/Login')
      console.log("check")
    }
  },
    [])



  const getStudentWithoutBatchData = async () => {

    const response = await getStudentWithoutBatch(sessionStorage.getItem('userId'));
    if (response.success === true) {
      set_without_batch_student(response.data)
    }
    else {
      toast.info(response.message);
    }


    // console.log(response);

  }


  const getStudentReadBatchData = async () => {

    const response = await getStudentReadBatch({
      id:sessionStorage.getItem('userId'),
      batch:selectedBatch
    });
    if (response.success === true) {
      set_read_batch_student(response.data)
    }
    else {
      toast.info(response.message);
    }
    console.log(read_batch_student);

    // console.log(response);

  }

  // useEffect(()=>{
  //   getStudentReadBatchData();

  // },[selectedBatch])






  //This variable stores array of ids of student who are selected
  //for a new batch
  const [selectedStudents, setSelectedStudents] = useState([]);

  const toggleSelect = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };


  const handleSavebatch =  async() => {
    
    const getbatchname=batchvalue.current.value;

    if(getbatchname.length===0){
      toast.info('Give name to this batch')
    }
    else if (getbatchname.length>0) {
      console.log("check")
      setShow(false);
      toast.success("Added Batch");
      setbatchName(prevBatchName => [...prevBatchName, batchvalue.current.value]); // Update batchName array

      // Now that batchName has been updated, stringify it
      let sessionBatch = JSON.stringify([...batchName, batchvalue.current.value]);

      console.log(sessionBatch);
      sessionStorage.setItem('batch', sessionBatch);
      const data={
        batchname:getbatchname,
        id:sessionStorage.getItem('userId')
      }
      const response= await updateTeacherBatchRouter(data);
    }
    // else if (selectedStudents.length === 0) {
    //   toast.error('Select Students for this batch')
    // }
    // else {
    //   const data = {
    //     batch: batchvalue.current.value,
    //     studentIds: selectedStudents,
    //     userId: sessionStorage.getItem('userId')
    //   }
    //   const response = await AddStudentWithoutBatch(data);
    //   if (response.success === false) {
    //     toast.error(response.message);
    //   }
    //   else if (response.success === true) {
        // setShow(false);
        // toast.success(response.message);
        // setbatchName([...batchName,data.batch])
    //   }
    //   toast.error(response.message);
    // }
  }

  const handleSelectBatch = (e) => {
    setSelectedBatch(e.target.value);
    console.log(batchvalue)
    getStudentReadBatchData()
  };










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


              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}

              >
                <Tab eventKey="home" title="Student">
                  <div >
                    <Card className='addnewcard'>
                      <Card.Header className='header56'>
                        <main class="manu">
                          <article>  <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg'>
                              <span className='adggsh'>  Add New <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='menu87'>
                              <Link to='/AddNewStudent' style={{
                                color: "black", marginLeft: "10px", textDecoration: "none"
                                , fontSize: "16px"
                              }}>Add New Student
                              </Link>
                            </Dropdown.Menu>
                          </Dropdown></article>
                          <article>   <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg2'>
                              <span className='adggsh'> Import Student <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='menu87'>
                              <Button variant="" onClick={handleShow} style={{ border: "none" }}>
                                Add Students Batch
                              </Button>

                            </Dropdown.Menu>
                          </Dropdown></article>


                        </main>


                      </Card.Header>

                      <StudentList />
                    </Card>


                  </div>
                </Tab>
                <Tab eventKey="profile" title="Batches">


                  <div>
                    <Card className='addnewcard'>
                      <Card.Header className='header56'>
                        <main class="manu">
                          <article>   <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg2'>
                              <span className='adggsh'> Add Batch <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='menu87'>
                              <Button variant="" onClick={handleShow} style={{ border: "none" }}>
                                Add Students Batch
                              </Button>

                            </Dropdown.Menu>
                          </Dropdown></article>
                          <article>
                            <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg2'>
                                <span className='adggsh'>View Batch <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                              </Dropdown.Toggle>

                              <Dropdown.Menu className='menu87'>
                              
                                <select value={selectedBatch} onChange={handleSelectBatch}>
                                  {batchName.map((name, index) => (
                                    <option key={index} value={name}>{name}</option>
                                  ))}
                                </select>
                              </Dropdown.Menu>
                            </Dropdown>
                          </article>
                        </main>


                      </Card.Header>

                     
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        {/* <th>sl.no</th> */}
                        <th>Name</th>
                        <th>email</th>
                        <th>select</th>
                      </tr>
                    </thead>
                    <tbody>
                      {read_batch_student.map((student, index) => (
                        <tr key={student.id}>
                          {/* <td>{index}</td> */}
                          <td>{student.firstName + " " + student.lastName}</td>

                          <td>{student.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                    </Card>
                  </div>


                </Tab >




              </Tabs>



              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title><h5>Add Students under a new batch</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Batch Name</Form.Label>
                    <Form.Control type="text" className='forn89' ref={batchvalue}
                    />
                    {/* <p className="pform">{formErrors.batchname}</p> */}
                  </Form.Group>
                  {/* <center><h4>Select Students for this batch</h4></center> */}
                  {/* <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>sl.no</th>
                        <th>sl.no</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>select</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Without_Batch_Students.map((student, index) => (
                        <tr key={student.id}>
                          <td>{index}</td>
                          <td>{index}</td>
                          <td>{student.firstName + " " + student.lastName}</td>

                          <td>{student.email}</td>
                          <td>
                            <Button variant={selectedStudents.includes(student.id) ? 'success' : 'primary'} onClick={() => toggleSelect(student.id)}>
                              {selectedStudents.includes(student.id) ? 'Selected' : 'Select'}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table> */}
                 




                  {/* <Button type="submit" color="success" className="grnext8">Save</Button> */}
                  <div className='floah'>

                    <Button onClick={handleSavebatch} type="submit" className='btnhj' >
                      Save
                    </Button>
                    <Button onClick={handleClose} className='btnh1j'>
                      Cancel
                    </Button>
                  </div>


                </Modal.Body>

              </Modal>
            </div>



          </main>
        </div>



      </div>
    </div>
  )
}



export default Student

