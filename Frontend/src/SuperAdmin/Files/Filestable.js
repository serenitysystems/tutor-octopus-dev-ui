

import { Button, Card, Form, Stack } from 'react-bootstrap'
import MobilemenuNavbaradmin from '../SideNavbaradmin/MobilemenuNavbaradmin'
import Sidenavbaradmin from '../SideNavbaradmin/Sidenavbaradmin'
import TopBaradmin from '../SideNavbaradmin/TopBaradmin'
import React, { useState } from 'react';


const Filestable = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
  };

  const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
  };

  const filteredData = studentData.filter(student => {
      const searchMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
      const dateMatch = selectedDate ? student.date === selectedDate : true;
      return searchMatch && dateMatch;
  });

  return (
    <div>
    <MobilemenuNavbaradmin />
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-3 d-none d-md-block bg-light sidebar">
                <Sidenavbaradmin />
            </nav>
            <main role="main" class="col-md-8 col-lg-9 sidebar5">
                <TopBaradmin />
                <div class="dashboard-header px-md-4" >
                    <h1 class="h5">Home</h1>
                    <Card className='cardevent'>
                        <Stack direction="horizontal" gap={3}>
                            <div className="p-2"><Form.Control
                                type="text"
                                placeholder="Search here..."
                                className=" mr-sm-2"
                            /></div>
                            <div className="p-2 ms-auto"></div>
                            <div className="p-2"><Button>+ New Student</Button> </div>
                        </Stack>



                    </Card>
                    <br></br><div className='cardevent' style={{ padding: "30px" }}>
                    <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    style={{ padding: '5px' }} placeholder='d'
                />
                    <br></br>
                    <div style={{ marginBottom: '20px' }}>
             
               
            </div>
            <table className="table thy mjj" style={{ padding: "30px" }}>
                <thead className="psff">
                    <tr>
                        <th>Student Name</th>
                        <th>Fee Status</th>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody className="thy p-5">
                    {filteredData.map((student, index) => (
                        <tr key={index}>
                            <td className="thy">{student.name}</td>
                            <td className="thy">{student.feeStatus}</td>
                            <td className="thy">{student.date}</td>
                            <td className="thy">{student.id}</td>
                            <td className="thy">{student.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

                </div>
            </main>
        </div>



    </div>
</div>
  )
}
const studentData = [
  { name: "Vansh", feeStatus: "Done", date: "11-04-2024", id: "K112356", amount: "9500.00" },
  { name: "Vansh", feeStatus: "Done", date: "11-04-2024", id: "K112356", amount: "9500.00" },
  { name: "Vansh", feeStatus: "Done", date: "11-04-2024", id: "K112356", amount: "9500.00" },
  { name: "Vansh", feeStatus: "Done", date: "11-04-2024", id: "K112356", amount: "9500.00" },
  { name: "Vansh", feeStatus: "Done", date: "11-04-2024", id: "K112356", amount: "9500.00" },
  { name: "Vansh", feeStatus: "Done", date: "11-04-2024", id: "K112356", amount: "9500.00" }
];

export default Filestable
