import React, { useState, useEffect } from 'react';
import { getStudentBatchRouter } from '../../apicalls/User';
import { toast } from 'react-toastify';
import './Attendance.css';
import { updateStudentAttendenceRouter } from '../../apicalls/Student';

const Attendancelist = () => {
    const [statuses, setStatuses] = useState({});
    const [data, setData] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');
    const [attendedBatches, setAttendedBatches] = useState([]);
    const [buttonVisible, setButtonVisible] = useState(true);
    const[add_new_batch_modal,set_Add_New_Batch_Modal]=useState(false);
    const [sendDataId,setsendDataId]=useState([]);
    let count = 0;

    const handleBatchChange = (event) => {
        setSelectedBatch(event.target.value);
        setButtonVisible(!attendedBatches.includes(event.target.value));
    };

    const toggleStatus = (studentId) => {
        setStatuses(prevStatuses => ({
            ...prevStatuses,
            [studentId]: !prevStatuses[studentId]
        }));
        // Store the batch for which attendance is taken
        if (!attendedBatches.includes(selectedBatch)) {
            setAttendedBatches(prevBatches => [...prevBatches, selectedBatch]);
        }
    };

    const handleResponse = async(event) => {
        event.preventDefault();
        if (!selectedBatch) {
            toast.info('Select the batch first');
        } else {
            let arrayStatus=[],arrayId=[];
            arrayStatus=arrayStatus.map(statuses => Object.values(statuses));
            arrayId=arrayId.map(statuses=>Object.keys(statuses));
            let senddata={
                status:arrayStatus,
                id:arrayId
            }
            const response=await updateStudentAttendenceRouter(senddata)
            toast.success(`Attendance for ${selectedBatch} batch is taken`);
            count = 1;
            setButtonVisible(false);
        }
    };

    const getStudentBatch = async () => {


       
       
        const response = await getStudentBatchRouter({
            id: sessionStorage.getItem('userId'), batch: selectedBatch
        });
        if (response.success === true) {
            setData(response.data);
            // Resetting statuses based on fetched data
            const initialStatuses = {};
            // const sendid={};
            response.data.forEach(student => {
                initialStatuses[student.id] = true;
                
            });
            setStatuses(initialStatuses);
        }
       
    };

    useEffect(() => {
        getStudentBatch();
    }, [selectedBatch]);

    return (
        <div>
            <select className='batch89' id="batch" value={selectedBatch} onChange={handleBatchChange}>
                <option value="">Select Batch</option>
                <option value="Batch-1">Batch-1</option>
                
                <option value="Add_New_Batch">Add New Batch</option>
                <option value="abcd">new</option>
            </select>
            <div className='d-flex justify-content-end mt-2 '>
                {buttonVisible && (
                    <button onClick={handleResponse} style={count === 0 ? { marginBottom: "20px" } : { display: "none" }} className='btn btn-primary'>Save Attendance</button>
                )}
                {!buttonVisible && <p>Attendance for {selectedBatch} batch is taken</p>}
            </div>

            <table className="table table-striped">
                <thead className='head56'>
                    <tr className='head56'>
                        <th className='th78'>Sl no.</th>
                        <th className='th78'>FirstName</th>
                        <th className='th78'>LastName</th>
                        <th className='th78'>Email</th>
                        <th className='th78'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => toggleStatus(student.id)} disabled={!buttonVisible} style={{
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
            </table>
        </div>
    );
};

export default Attendancelist;
