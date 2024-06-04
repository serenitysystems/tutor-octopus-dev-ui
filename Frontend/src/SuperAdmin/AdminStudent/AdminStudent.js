

import { Button, Card, Form, Stack } from 'react-bootstrap'
import MobilemenuNavbaradmin from '../SideNavbaradmin/MobilemenuNavbaradmin'
import Sidenavbaradmin from '../SideNavbaradmin/Sidenavbaradmin'
import TopBaradmin from '../SideNavbaradmin/TopBaradmin'





const AdminStudent = () => {

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
                            <br></br><div className='' style={{ padding: "30px" }}>


                                <table className="table thy cardevent mjj" style={{ padding: "30px" }}>
                                    <thead style={{ background: "#A4C3ED" }} className='psff'>
                                        <th>Name</th>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Parent Name</th>
                                        <th>City</th>
                                        <th>Grade</th>
                                    </thead>
                                    <tbody className='thy p-5'>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>
                                        <tr >
                                            <td className='thy'> Samantha William</td>
                                            <td className='thy'>ID 123456789</td>
                                            <td className='thy'>March 25, 2021</td>
                                            <td className='thy'>Mana William</td>
                                            <td className='thy'>Jakarta</td>
                                            <td className='thy'>VII A</td>
                                        </tr>


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

export default AdminStudent
