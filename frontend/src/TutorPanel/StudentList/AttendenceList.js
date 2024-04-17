import React, { useState, useEffect } from 'react';
import { getStudentBatchRouter } from '../../apicalls/User';
import { toast } from 'react-toastify';
import './AttendenceList.css';

import './StudentList.css'
import { getAttendenceRecordRouter, getStudentRecordBatchRouter, updateStudentAttendenceRouter } from '../../apicalls/Student';
import { Modal, Form, Button, Stack } from 'react-bootstrap';
import Lazyloading from '../../BackendComp/Lazy';


const Attendencelist = () => {
    const [statuses, setStatuses] = useState({});
    const [data, setData] = useState([]);
    const [Recorddata, setRecorddata] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');
    const [selectedRecordBatch, setSelectedRecordBatch] = useState('');
    const [attendedBatches, setAttendedBatches] = useState([]);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [batch, setBatch] = useState(["Batch-1", "Batch-2"]);
    const [loading, setloading] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [input1Value, setInput1Value] = useState('');
    const [input2Value, setInput2Value] = useState('');
    const [RecordModal, setRecordModal] = useState(false);
    const [Present, setPresent] = useState(0);
    const [Absent, setAbsent] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(5); // Number of students to display per page
    const [AttendenceRecord, setAttendenceRecord] = useState({
        date: [],
        status: [],
        trueCount: 0,
        falseCount: 0
    });

    const [calenderDate, setcalenderDate] = useState('');
    const [calenderRecordDate, setcalenderRecordDate] = useState('');


    let count = 0;

    const handleBatchChange = (event) => {
        setSelectedBatch(event.target.value);
        if (event.target.value === "Add_New_Batch") {
            console.log(event.target.value)

            handleAddNewBatch();
        }
        else {
            setButtonVisible(!attendedBatches.includes(event.target.value));
            setShowModal(false);

        }

    };


    const handleRecordBatchChange = (event) => {
        const batch = event.target.value
        setSelectedRecordBatch(batch);
        console.log(selectedRecordBatch)
    };



    const handleDateChange = (event) => {
        const newdate = event.target.value;
        setcalenderDate(newdate);
        //console.log(calenderDate);
    };

    const handleDateRecordChange = (event) => {
        const newdate = event.target.value;
        // setcalenderRecordDate(newdate);
        setcalenderRecordDate(newdate);
        //console.log(calenderDate);
    };

    const toggleStatus = (studentId) => {
        setStatuses(prevStatuses => ({
            ...prevStatuses,
            [studentId]: !prevStatuses[studentId]
        }));
        if (!attendedBatches.includes(selectedBatch)) {
            setAttendedBatches(prevBatches => [...prevBatches, selectedBatch]);
        }
    };





    // const openDetailsModal =async (studentId) => {
    //     // Set the student details to be displayed in the modal
    //     // and open the modal
    //     setShowDetailsModal(true);
    //     const responseRecord=await getAttendenceRecordRouter(studentId);
    //     if(responseRecord.success===true)
    //     {
    //         setAttendenceRecord(responseRecord.data);
    //     }
    //     else{
    //         toast("No record found")
    //     }
    //     console.log(AttendenceRecord)

    //     // console.log(response.data);
    //     // setSelectedStudent(student);

    // };


    const handleResponse = async (event) => {
        event.preventDefault();
        // handleDateChange();
        if (!selectedBatch || calenderDate === '') {
            toast.info('Select the batch first and date for which you are taking attendence');
        } else {
            let arrayStatus = Object.values(statuses);
            let arrayId = Object.keys(statuses);
            let senddata = {
                status: arrayStatus,
                id: arrayId,
                date: calenderDate
            }
            const response = await updateStudentAttendenceRouter(senddata);
            if (response.status === 405 && response.success === false) {
                toast.info('Attendence for the day is already taken');
                setButtonVisible(false);
            }
            else if (response.success === false) {
                toast.info(response.message)
            }
            else if (response.success === true) {
                toast.success(`Attendence for ${selectedBatch} batch is taken`);
                // count = 1;
                // setButtonVisible(false);

            }

        }
    };

    const getStudentBatch = async () => {
        console.log(selectedBatch);

        if (selectedBatch !== "" && selectedBatch !== "Add_New_Batch") {
            const today = new Date();
            const compareCalenderDate = new Date(calenderDate);
            if (compareCalenderDate > today) {
                toast.info('Cannot take attendence of upcoming days')
                setData([]);
            }
            else {

                console.log("coming")
                setloading(true)
                const response = await getStudentBatchRouter({
                    id: sessionStorage.getItem('userId'), batch: selectedBatch,
                    date: calenderDate
                });
                if (response) {
                    setloading(false)
                    if (response.success === true && response.data.length > 0) {
                        setData(response.data);
                        const initialStatuses = {};
                        response.data.forEach(student => {
                            initialStatuses[student.id] = student.status;
                        });
                        setStatuses(initialStatuses);
                    }
                    else if (response.data.length === 0) {
                        alert("There are currently no student in this batch")
                    }

                }
            }



            //   else{
            //     setloading(true);
            //   }


        }

    };


    const getStudentRecordBatch = async () => {
        // console.log(selectedBatch);

       
        console.log("coming")
        setloading(true)
        const response = await getStudentRecordBatchRouter({
            id: sessionStorage.getItem('userId'), batch: selectedRecordBatch,
            date: calenderRecordDate
        });
        if (response) {
            setloading(false)
            if (response.success === true && response.data.length > 0) {
                setRecorddata(response.data);
                setPresent(response.totalP)
                setAbsent(response.totalA);
                console.log(Recorddata)
            }
            else if (response.status === 501) {
                toast.info(response.message);
                setAbsent(0);
                setPresent(0);
                setRecorddata([])
            }

        }



    };

    useEffect(() => {


        getStudentBatch();
    }, [selectedBatch, calenderDate]);


    useEffect(() => {
        getStudentRecordBatch();
    }, [selectedRecordBatch, calenderRecordDate]);

    const [newbatchdata, setnewbatchdata] = useState({
        name: "",
        number: ""
    })
    const handleAddNewBatchChange = (e) => {
        const { name, value } = e.target;
        setnewbatchdata({ ...newbatchdata, [name]: value });


    }

    const handleSubmitBatch = (event) => {
        event.preventDefault();
        if (newbatchdata.name && newbatchdata.number) {
            if (!batch.includes(newbatchdata.name)) {
                setBatch([...batch, newbatchdata.name])
                setnewbatchdata({
                    name: "",
                    number: ""
                })
                setShowModal(false)
                setSelectedBatch("")


            }
            else {
                toast.info("batch name already exist")
                setShowModal(false)
                setnewbatchdata({
                    name: "",
                    number: ""
                })
                setSelectedBatch("")
            }
        }


        // setShowModal(false)
        // setnewbatchdata({
        //     name: "",
        //     number: ""
        // })

    };

    const handleChange = (event) => {
        // Add code to handle form field changes
    };

    const handleAddNewBatch = () => {
        setShowModal(true);
    };
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = data.slice(indexOfFirstStudent, indexOfLastStudent);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <select className='batch89 ' id="batch" value={selectedBatch} onChange={handleBatchChange}>
                <option value="">Select Batch</option>
                {
                    batch.map((item) => (
                        <option value={item}>{item}</option>
                    ))
                }

                <option value="Add_New_Batch" onClick={handleAddNewBatch}>Add New Batch</option>
            </select>



            <input
                type="date"
                className='batch89'
                id="calendar"
                name="calendar"
                value={calenderDate}
                onChange={handleDateChange}
                pattern="\d{4}-\d{2}-\d{2}"
            />

            <div className='showrecord-1'>
                <button onClick={() => setRecordModal(true)} className='btn btn-primary ms-2 showbutton'>Show Record</button>




                <button onClick={handleResponse} className='btn btn-primary ms-2 showbutton'>Save Attendence</button>
            </div>




            <br></br>
            <br></br>

            {loading === true ? (
                <Lazyloading />
            ) : (
                <table className="table table-striped">
                    <thead className='head56'>
                        <tr className='head56'>
                            <th className='th78'>Sl no.</th>
                            <th className='th78'>FirstName</th>
                            <th className='th78'>LastName</th>
                            <th className='th78'>Email</th>
                            {/* <th className='th78'>Record</th> */}
                            <th className='th78'>Status</th>
                        </tr>
                    </thead>
                    {
                        data.length > 0 ? (
                            <tbody>
                                {currentStudents.map((student, index) => (
                                    <tr key={index + 1}>
                                        <td>{index + 1 + (currentPage - 1) * 5}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        {/* <td>
                            I want to add a button here so that whenever user hits this button a Modal
                            is opened showing details in a table having 2 columns and 2 inputs of numbers 
                            which is not editable.
                            <button className='btn btn-primary' onClick={()=>openDetailsModal(student.id)}>Show record</button>
                        </td> */}
                                        <td>
                                            <button onClick={() => toggleStatus(student.id)} style={{
                                                border: "none",
                                                color: statuses[student.id] ? "#23954A" : "red",
                                                background: statuses[student.id] ? "#23954a2b" : "#E9D7D7"
                                            }} className='av'>
                                                <li>{statuses[student.id] ? 'Present' : 'Absent'}</li>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        ) :
                            (
                                <div style={{ height: "40%" }} className='d-flex justify-content-center'>
                                    <h1> No Records to Show</h1>
                                </div>

                            )
                    }

                </table>

            )}
           

          
           <Stack direction="horizontal" gap={3} className='row56'>
                <div className="p-2"></div>
                <div className="p-2 ms-auto"></div>
                <div className="p-2">
                    {/* Pagination */}
                    {/* Pagination */}
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(data.length / studentsPerPage) }, (_, index) => (
                            <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                <button onClick={() => paginate(index + 1)} className="page-link">
                                    {index+1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Stack>



            <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AttendenceRecord.status.map((status, index) => (
                                <tr key={index}>
                                    <td>{AttendenceRecord.date[index]}</td>
                                    <td>{status ? 'true' : 'false'}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <div>
                        <label>Present</label>
                        <input type="text" value={AttendenceRecord.trueCount} readOnly />
                    </div>
                    <div>
                        <label>Absent</label>
                        <input type="text" value={AttendenceRecord.falseCount} readOnly />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDetailsModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>







            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Batch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitBatch}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Batch Name</Form.Label>
                            <Form.Control type="text" className='forn89'
                                name='name'
                                value={newbatchdata.name}
                                onChange={handleAddNewBatchChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Assigned Students</Form.Label>
                            <Form.Control type="text" className='forn89'
                                name='number'
                                value={newbatchdata.number}
                                onChange={handleAddNewBatchChange}
                            />
                        </Form.Group>
                        <div className='floah'>
                            <Button type="submit" className='btnhj'>
                                Save
                            </Button>
                            <Button className='btnh1j' onClick={() => { setShowModal(false); setSelectedBatch("") }}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={RecordModal} onHide={() => setRecordModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <select className='batch89' id="batch" value={selectedRecordBatch} onChange={handleRecordBatchChange}>
                        <option value="">Select Batch</option>
                        {
                            batch.map((item) => (
                                <option value={item}>{item}</option>
                            ))
                        }

                        {/* <option value="Add_New_Batch" onClick={handleAddNewBatch}>Add New Batch</option> */}
                    </select>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <input
                        type="date"
                        className='batch89'
                        id="calendar"
                        name="calendar"
                        value={calenderRecordDate}
                        onChange={handleDateRecordChange}
                        pattern="\d{4}-\d{2}-\d{2}"
                    />

                    {loading === true ? (
                        <Lazyloading />
                    ) : (
                        <table className="table table-striped ">
                            <thead className='head56'>
                                <tr className='head56'>
                                    <th className='th78'>Sl no.</th>
                                    <th className='th78'>FirstName</th>
                                    <th className='th78'>LastName</th>
                                    {/* <th className='th78'>Record</th> */}
                                    <th className='th78'>Status</th>
                                </tr>
                            </thead>
                            {
                                Recorddata.length > 0 ? (
                                    <tbody>
                                        {Recorddata.map((student, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{student.firstName}</td>
                                                <td>{student.lastName}</td>
                                                <td style={{
                                                    border: "none",
                                                    
                                                    background: student.status === "Present" ? "#23954a2b" : "#E9D7D7"
                                                }}>
                                                    {student.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                ) :
                                    (
                                        <div style={{ height: "40%" }} className='d-flex justify-content-center'>
                                            <h4> No Records to Show</h4>
                                        </div>

                                    )
                            }

                        </table>
                    )}
                    <div>
                        <label>Present</label>
                        <input className='form-control fw-bold' type="text" value={Present} readOnly />
                    </div>
                    <div>
                        <label>Absent</label>
                        <input  className='form-control fw-bold' type="text" value={Absent} readOnly />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setRecordModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>




        </div>
    );
};

export default Attendencelist;
