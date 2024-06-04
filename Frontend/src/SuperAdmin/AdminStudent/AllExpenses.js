import React, { useState } from 'react'

import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import MobilemenuNavbaradmin from '../SideNavbaradmin/MobilemenuNavbaradmin'
import Sidenavbaradmin from '../SideNavbaradmin/Sidenavbaradmin'
import TopBaradmin from '../SideNavbaradmin/TopBaradmin'
import Chart from 'react-apexcharts';
const AllExpenses = () => {

    const [revenue, setRevenue] = useState(
        [
            {
                name: "Income",
                data: [0, 400, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890]
            },
            {
                name: "Total",
                data: [0, 405, 267, 97, 45, 156, 87, 200]
            },
            {
                name: "Batch Revenue",
                data: [0, 1000, 117, 69, 1321, 1845, 469, 306, 500]
            },
            {
                name: " Vehicle",
                data: [0, 345, 117, 697, 13, 1805, 465, 906, 300]
            }
        ]
    );

    const [option, setOption] = useState(
        {
            title: { text: "Revenue graph" },
            xaxis: {
                title: { text: "" },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yaxis: {
                title: { text: "Revenue" }
            }

        }
    );
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
                            <br></br><div className=''>

                                <Card className="cardevent mjj" >

                                    <Row style={{ padding: "20px 30px" }}>
                                        <Col sm={4}>
                                            <Card className='cardevent67 ' style={{ background: '#FFD5CF' }}>
                                                <p className='text-center'>Batch Revenue</p>

                                                <h4 className='text-center'>280k</h4>
                                            </Card>
                                            <Card className='cardevent67 ' style={{ background: '#CFFFD1' }}>
                                                <p className='text-center'>Batch Revenue</p>

                                                <h4 className='text-center'>280k</h4>
                                            </Card>
                                        </Col>
                                        <Col sm={4}>
                                            <Card className='cardevent67 ' style={{ background: '#A2B4FC' }}>
                                                <p className='text-center'>Batch Revenue</p>

                                                <h4 className='text-center'>280k</h4>
                                            </Card>
                                            <Card className='cardevent67 ' style={{ background: '#FFDF7D' }}>
                                                <p className='text-center'>Batch Revenue</p>

                                                <h4 className='text-center'>280k</h4>
                                            </Card>
                                        </Col>
                                        <Col sm={4}>
                                            <Card className='cardevent67 ' >
                                                <p className='text-center my-3'>Transactions </p>

                                                <h4 className='text-center'>280k</h4><br></br>
                                                <p className='text-center my-3'>Reviews </p>

                                                <h4 className='text-center'>280k</h4>
                                            </Card>
                                        </Col>
                                    </Row>

                                    <Container>
                                    <Chart type='line'
                                        width={1100}
                                        height={550}
                                        series={revenue}
                                        options={option}
                                    >
                                    </Chart>
                                    </Container>
                                </Card>


                            </div>

                        </div>
                    </main>
                </div>



            </div>
        </div>
    )
}

export default AllExpenses
