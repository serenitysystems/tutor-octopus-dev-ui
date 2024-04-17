import React, { useEffect, useState } from 'react';
import TopBar from '../SideNavbar/TopBar'
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'



import { CiSearch } from "react-icons/ci";





import { FaRegEdit } from "react-icons/fa";



import './StudentList.css'


import Dropdown from 'react-bootstrap/Dropdown';



import { RiDeleteBin5Line } from 'react-icons/ri';


import { Col, Container, Nav, Row, Stack, Pagination, Form, Modal, Button, Card } from 'react-bootstrap'
import { DeleteStudentRouter } from '../../apicalls/Student';
import Lazyloading from '../../BackendComp/Lazy';
import { PhoneInput } from 'react-international-phone';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { getStudentRouter, updateStudentRouter } from '../../apicalls/User';
const StudentList = ({ userData }) => {


    // const itemsPerPage = 8; // Change this to the desired number of items per page
    // const [currentPage, setCurrentPage] = useState(1);
    const [searchTitle, setSearchTitle] = useState('');

    const [data, setData] = useState([]);
    console.log('data1', data);
    const [search, SetSearch] = useState('');
    const [filter, setFilter] = useState([]);





    //------------------------------------

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Number of cards per page
    const [searchTerm, setSearchTerm] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [emaildata, setEmailData] = useState({
        email: ""
    });

    // Filter and search logic
    const filteredData = data.filter((value) =>
        // value.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterValue === '' || value._id === filterValue)
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [show, setShow] = useState(false);

    // Unique categories for filter dropdown
    const uniqueCategories = [...new Set(data.map(item => item._id))];

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        sessionStorage.setItem('editId',id);
        let email = sessionStorage.getItem('editId');
        
        setFormData({ ...formData, email: email });
        setShow(true);
    }
    const [loading, setloading] = useState(false);

    const handleItemsPerPageChange = (selectedValue) => {
        setItemsPerPage(selectedValue);
        setCurrentPage(1); // Reset current page when changing items per page
    };

    const handleDeleteStudent = async (recieve) => {
        // setloading(true);
        // console.log(loading)
        //const data=

        let emaildata = { email: recieve }
        const response = await DeleteStudentRouter(emaildata);
        if (response.success === true) {
            //alert(response.deletedStudent.email + "  is deleted successfully")
            getStudent()
            setShowModalLogout(false)
        }
        //console.log()

    }


    const [showModalLogout, setShowModalLogout] = useState(false);
    const handleShowdeleteStudent = (id) => {
        sessionStorage.setItem('id',id)
        setShowModalLogout(true);
    };

    const handleClosedeleteStudent = () => {
        setShowModalLogout(false);
    };

    // useEffect(() => {
    //     setloading(true);


    // }, [])



    const initialValues = {
        price: '',
        mobileNumber: '',
        batch: '',
        lessonCategory: '',
        managedBy:sessionStorage.getItem('userId'),
        
    };

    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await updateStudentRouter(formData);
        
        // Log the updated form data when it's guaranteed to be updated
        console.log('Form submitted with data:', formData);
        
        if (response.success === true) {
            // Assuming getStudent() fetches updated student data
            getStudent();
            //console.log(response);
            setShow(false);
        }
    };
    




  








    // const getStudent = async () => {
    //     try {
    //         const req = await fetch("https://tutor-octopus-1.onrender.com/student/read");
    //         const res = await req.json();
            // setData(res);
            // setFilter(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }




    const getStudent = async () => {
        // let emaildata = { email: recieve }
        const response = await getStudentRouter(sessionStorage.getItem('userId'));
        console.log(response);
        if (response.success === true) {
            //alert(response.deletedStudent.email + "  is deleted successfully")
            // getStudentRouter()
            // setShowModalLogout(false)
            setData(response.data);
            setFilter(response.data);
            console.log(data);

        }
        
    }






    useEffect(() => {
        getStudent();
    }, []);

   


    

    ///////morning  code
    // const filteredData = data.filter(value => value._id.toLowerCase().includes(searchTitle.toLowerCase()));

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    // Slice the data based on the calculated index range
    // const paginatedData = filteredData.slice(startIndex, endIndex);





    const handleTitleChange = (value) => {
        setSearchTitle(value);
        setCurrentPage(1); // Reset to the first page when the title filter changes
    };

    // useEffect(() => {
    //     const result = data.filter((item) => {
    //         return item.title.toLowerCase().match(search.toLocaleLowerCase());
    //     });
    //     setFilter(result);
    // }, [search]);




    const onButtonClick = () => {
        const pdfUrl = "example.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "example.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };




























    return (
        <div>


            <Container >
                <Row>


                    <Col sm={12}>




                        <Stack direction="horizontal" gap={3} className='row56'>

                            <div className="p-2 ms-auto">
                                <div >


                                </div>
                            </div>
                        </Stack>


                        {/* <Stack direction="horizontal" gap={3} className='row56 bbrow'  >
                            <div> <Dropdown className="">
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45 text-white'>
                                    Montrer :  {itemsPerPage}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(5)}>5</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(10)}>10</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(15)}>15</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(20)}>20</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemsPerPageChange(25)}>25</Dropdown.Item>
                                    Add more options as needed
                                </Dropdown.Menu>
                            </Dropdown></div>

                            <div className="p-2"><Row>
                                            <Col> <Form.Control
                                                type="text"
                                                placeholder="Rechercher"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)} className='reacherch56'
                                            /></Col>
                                            <Col>
                                                <CiSearch className='reacherch561' style={{ color: "black" }} />
                                            </Col>
                                        </Row></div>


                        </Stack> */}





                        {/* Filter dropdown */}


                        <div style={{ overflowX: "auto" }}>
    {
        data.length === 0 ? (
            // Rendered when data is empty
            <Card.Body className='addstutnet1'>
                <img src='./img/addstutent.png' className='addstutnet' />
                <h5 className='text-center ' style={{ marginTop: "-20px" }}>You don't have any students yet</h5>
                <p className='text-center'>Add your students so you can take their attendance, and more.</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='addnewdg8 addnewdg11'>
                        <span className='adggshnn'>Add New <IoMdArrowDropdown className="IoMdArrowDropdown1" style={{ fontSize: "26px" }} /></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='menu87'>
                        <Link to="/AddNewStudent" style={{
                            color: "black", marginLeft: "10px", textDecoration: "none"
                            , fontSize: "16px"
                        }}>Add New Student</Link>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
        ) : (
            // Rendered when data is not empty
            <table className="table table-striped">
                <thead className='head56'>
                    <tr className='head56'>
                        <th className='th78'>Sl no.</th>
                        <th className='th78'>FirstName</th>
                        <th className='th78'>LastName</th>
                        <th className='th78'>Email</th>
                        <th className='th78'>Batch</th>
                        <th className='th78'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginatedData.map((value, index) => (
                            <tr key={index}>
                                <td>{index + 1 + (currentPage - 1) * 10}</td>
                                <td>{value.firstName}</td>
                                <td>{value.lastName}</td>
                                <td>{value.email}</td>
                                <td>{value.batch}</td>
                                <td>
                                    <button onClick={()=>handleShow(value.email)} className="btn btn- bnnbtn" >
                                        <FaRegEdit style={{color:"green"}} />
                                    </button>
                                    <button onClick={() => handleShowdeleteStudent(value.email)} className="bnnbtn">
                                        <RiDeleteBin5Line style={{color:"red"}}  />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
</div>


                        <Modal show={showModalLogout} onHide={handleClosedeleteStudent}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete this student</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure you want to delete this student?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClosedeleteStudent}>
                                    No
                                </Button>
                                <Button variant="primary" onClick={()=>handleDeleteStudent(sessionStorage.getItem('id'))}>
                                    Yes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title><h5>Edit Student Details</h5></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                {/* <Form onSubmit={handleEditStudent}> */}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example"
                                            style={{ borderRadius: "30px" }}
                                            name="price"
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select from below</option>
                                            <option value="100">₹ 100.00 Per Lesson</option>
                                            <option value="200">₹ 200.00 Per Lesson</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <PhoneInput
                                            defaultCountry="in"
                                            onChange={(value) => handleChange({ target: { name: 'mobileNumber', value } })}
                                            name='mobileNumber'
                                            type='text'
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formBasicEmail">
                                        <Form.Label>Batch</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example"
                                            style={{ borderRadius: "30px" }}
                                            name="batch"
                                            onChange={handleChange}
                                        >
                                            <option value="">Select from Batch</option>
                                            <option value="Batch-1">Batch-1</option>
                                            <option value="Batch-2">Batch-2</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Lesson</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example"
                                            style={{ borderRadius: "30px" }}
                                            name="lessonCategory"
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Lesson</option>
                                            <option value="Lesson-1">Lesson-1</option>
                                            <option value="Lesson-2">Lesson-2</option>
                                            <option value="Lesson-3">Lesson-3</option>
                                        </Form.Select>
                                    </Form.Group>
                                        <Button type="submit" color="success" className="grnext8">Save</Button>
                                </Form>
                            </Modal.Body>

                        </Modal>


                        <Stack direction="horizontal" gap={3} className='row56'>
                            <div className="p-2"></div>
                            <div className="p-2 ms-auto"></div>
                            <div className="p-2">
                                {/* Pagination */}
                                <Pagination>
                                    {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
                                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}
                                </Pagination>
                            </div>
                        </Stack>















                    </Col>

                </Row>
            </Container>






        </div>

    )
}

export default StudentList