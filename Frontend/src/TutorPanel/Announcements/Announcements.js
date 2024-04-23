import { Button, Card, Col, Container, Dropdown, Form, Modal, Pagination } from 'react-bootstrap'
import { IoMdArrowDropdown } from 'react-icons/io'

import { FaBars } from 'react-icons/fa6'
import '../Subscription.css'
import { useEffect, useState } from 'react'
import '../Student.css'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'
import { AnnouncementUser, getAnnouncementUser } from '../../apicalls/User'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Announcements = ({ userData }) => {
    const [key, setKey] = useState('home');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(userData)



    const [data, setData] = useState({
        subject: "",
        description: "",
        _id: sessionStorage.getItem('userId'),
        batch:""
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [loading, setloading] = useState(false);
    const navigate = useNavigate();


    const [AnnouncementData, setAnnouncementData] = useState([]);


    const [buttonAnnouncement, setbuttonAnnouncement] = useState(true);
    const [selectedBatch, setSelectedBatch] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Change this value as per your requirement





    const handleBatchChange = (event) => {
        setSelectedBatch(event.target.value);

    };





    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);
        console.log(data)
        setloading(true);
        console.log(loading)
        const response = await AnnouncementUser(data);

        if (response) {
            console.log(response)
            setloading(false)
            if (response.success === false) {
                //  alert(response.message)
                toast.info(response.message);
            }
            else if (response.success === true) {
                toast.success(response.message);
                // setAnnouncementData({
                //     subject:response.data.subject,
                //     description:response.data.description
                // })
                handleGetAnnouncement(event);


                // sessionStorage.setItem('subject',response.data.subject)
                // sessionStorage.setItem('description',response.data.description)
                handleClose()
                // navigate('/TutorHome',{state:response.data})
                // sessionStorage.setItem('token', response.data.token);
                // onLogin(response.data);
                // navigate('/Student_Redirect')

                // alert(response.message)
            }


        }


    }

    const handleGetAnnouncement = async (event) => {

        event.preventDefault();
        setbuttonAnnouncement(false)
        // let data={id:userData.id}
        // const response = await getAnnouncementUser(userData.id);
        // console.log(response)
        // setAnnouncementData({
        //     subject:response.data.subject,
        //     description:response.data.description     
        // })
        const data={
            id:sessionStorage.getItem('userId'),
            // batch:selectedBatch
        }
        const response = await getAnnouncementUser(data);
        if (response.success===true) {
            setAnnouncementData(response.data);
        }

    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = AnnouncementData.slice(indexOfFirstItem, indexOfLastItem);





    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



    // useEffect(() => {
    //     handleGetAnnouncement
    // }, []); 



    const validate = (values) => {
        const errors = {};

        if (!values.subject) {
            errors.subject = "Subjectis is required!";
        }

        if (!values.description) {
            errors.description = "Descriptionis is required!";
        }


        return errors;
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

                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg8 addnewdg11'>
                                    <span className='adggsh'> Add Announcements <IoMdArrowDropdown className="IoMdArrowDropdown" style={{ fontSize: "26px" }} /></span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='menu87'>
                                    <Button variant="" onClick={handleShow} style={{ border: "none" }}>
                                        Add Announcements
                                    </Button>

                                </Dropdown.Menu>
                            </Dropdown>

                            <Card className='addnewcard'>

                                {/* <Card.Body className='addstutnet1'>
                                    <img src='./img/Announcements.png' className='addstutnet3 my-5' />
                                    <h5 className='text-center mb-4' style={{ marginTop: "-20px" }}>You don't have any Announcements</h5>


                                    
                                    <br></br><br></br>
                                </Card.Body> */}


                                {buttonAnnouncement === true ? (
                                    <Button style={{ width: "15rem" }} className='btnhj' onClick={handleGetAnnouncement}>
                                        Show Announcement
                                    </Button>

                                    
                                ) : (
                                    <div>
                                       <table className="table table-striped">
                                            <thead className='head56'>
                                                <tr className='head56'>
                                                
                                                    <th scope="col" className='th78'>Sl.no</th>
                                                    <th scope="col" className='th78'>Subject</th>
                                                    <th scope="col" className='th78'>Description</th>
                                                    <th scope="col" className='th78'>Batch</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {AnnouncementData.map((item, index) => (
                                                    <tr key={item._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.batch}</td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                     <div className='paginationj'>
                                     {/* <Pagination >
                                            {Array.from({ length: Math.ceil(AnnouncementData.subject.length / itemsPerPage) }).map((_, index) => (
                                                <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                                    {index + 1}
                                                </Pagination.Item>
                                            ))}
                                        </Pagination> */}
                                     </div>
                                    </div>
                                )}
                            </Card>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* <Form.Select aria-label="Default select example" style={{ borderRadius: "30px" }}
                                value={selectedBatch}
                               
                                onChange={handleBatchChange}

                              >
                                <option>Select from Batch</option>

                                <option value='Batch-1'  >Batch-1</option>
                                <option value="Batch-2">Batch-2</option>
                              </Form.Select> */}





                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title><h5>Add Announcements</h5></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className='forn89'
                                                maxLength={40}
                                                name='subject'
                                                value={data.subject}
                                                onChange={handleChange}
                                            />

                                            <p className="pform">{formErrors.subject}</p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Descriptions</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                style={{ borderRadius: "30px" }}

                                                maxLength={90}
                                                name='description'
                                                value={data.description}
                                                onChange={handleChange}


                                            />
                                            <p className="pform">{formErrors.description}</p>
                                        </Form.Group>

                                        <Form.Select aria-label="Default select example" style={{ borderRadius: "30px" }}
                                            value={data.batch}
                                            name="batch"
                                            onChange={handleChange}
                                        >
                                            <option>Select from Batch</option>
                                            <option value='Batch-1'  >Batch-1</option>
                                            <option value="Batch-2">Batch-2</option>
                                        </Form.Select>

                                        <div className='floah'>
                                            <Button type='submit' variant="" className='btnhj' >
                                                Save
                                            </Button>
                                            {/* <Button variant="secondary" className='btnh1j'>
                                                Cancel
                                            </Button> */}
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




export default Announcements

