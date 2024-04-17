
import { Link, useLocation } from 'react-router-dom'
import { Button, Container, Form, Navbar, Stack } from 'react-bootstrap'
import { CiShare2 } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import './Student_Redirect.css'
import { GoPencil } from "react-icons/go";
import MobilemenuNavbar from '../SideNavbar/MobilemenuNavbar'
import Sidenavbar from '../SideNavbar/Sidenavbar'
import TopBar from '../SideNavbar/TopBar'
const Student_Redirect = ({userData}) => {
    
    let profilename=sessionStorage.getItem('firstName')+" "+sessionStorage.getItem('lastName');
    let profileimg=sessionStorage.getItem('firstName').charAt(0)+sessionStorage.getItem('lastName').charAt(0);


    return (
        <div>
            <MobilemenuNavbar userData={userData}/>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-3 d-none d-md-block bg-light sidebar">
            <Sidenavbar/>
          </nav>
          <main role="main" class="col-md-8 col-lg-9 sidebar5">
            <TopBar userData={userData} />
                        <div className="dashboard-header px-md-4">
                            {/* <h1 className="h2">Dashboard</h1> */}


                            <div className="dashboard-header px-md-4">
                                {/* <h1 className="h2">Dashboard</h1> */}

                                <div className="wrapperb wrap89">
                                    <div className="card4cardf">
                                        <h3 className="card-title4 text-center">{profileimg}</h3>
                                        <h4 className='text-center'>{profilename}</h4>
                                        <p className="card-content4 text-center">{userData.user}</p>

                                       <Link to='/Login'> <Button  className='logoutbutton'>Log out of all devices</Button></Link>
                                        <Button className='logoutbutton1'>Change Password</Button>
                                    </div>
                                    <div className="card4cardf">
                                        <h5 className="card-title5">Attendance Preferences
                                            <Link to=''><GoPencil style={{ border: "1px solid black", padding: "2px", borderRadius: "5px", color: "black", margin: "0px 0px 0px 15px" }} /></Link>
                                        </h5>
                                        <p style={{ fontSize: "18px" }}>Overdue Attendance</p>
                                        <Form>
                                            <Form.Group className="p-2 " style={{ margin: "-20px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="Show overdue attendance on homepage" className='chechk' />
                                            </Form.Group>

                                            <p style={{ fontSize: "18px" }} className='mt-4'>Default Notes View</p>
                                            <Stack direction="horizontal" gap={3} className='hrojgx'>



                                                <div className="p-2"> <Form.Group className="p-2 p09" style={{ margin: "-20px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Student" className='chechk' />
                                                </Form.Group></div>
                                                <div className="p-2"> <Form.Group className="p-2 p09 " style={{ margin: "-20px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Parent" className='chechk' />
                                                </Form.Group></div>
                                                <div className="p-2"> <Form.Group className="p-2 p09" style={{ margin: "-20px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Private" className='chechk' />
                                                </Form.Group></div>
                                            </Stack>
                                        </Form>




                                    </div>

                                </div>

                                {/* <h1 className="h2">Dashboard</h1> */}

                                <div className="wrapperb">
                                    <div className="card4cardf">
                                        <h5 className="card-title5 mb-4">Default Settings
                                            <Link to=''><GoPencil style={{ border: "1px solid black", padding: "2px", borderRadius: "5px", color: "black", margin: "0px 0px 0px 15px" }} /></Link>
                                        </h5>
                                        <p style={{ fontSize: "18px", fontWeight: "600", color: "#515151", padding: "0px", margin: "0px" }} className=''>Default Lesson Category</p>

                                        <p style={{ padding: "0px", margin: "0px" }}>Lesson</p>
                                        <p style={{ fontSize: "18px", fontWeight: "600", color: "#515151", padding: "0px", margin: "0px" }} className=''>Default Lesson Duration</p>

                                        <p style={{ padding: "0px", margin: "0px" }}>30 Minutes</p>

                                        <p style={{ fontSize: "18px", fontWeight: "600", color: "#515151", padding: "0px", margin: "0px" }}>Default Billing</p>

                                        <p style={{ padding: "0px", margin: "0px" }}>Student pays based on the number of lessons taken</p>

                                        <p style={{ fontSize: "18px", fontWeight: "600", color: "#515151", padding: "0px", margin: "0px" }}>Default Lesson Price</p>
                                        <p style={{ padding: "0px", margin: "0px" }}>₹ 30.00</p>
                                    </div>
                                    <div className="card4cardf">
                                        <h5 className="card-title5">Email Notification Preferences
                                            <Link to=''><GoPencil style={{ border: "1px solid black", padding: "2px", borderRadius: "5px", color: "black", margin: "0px 0px 0px 15px" }} /></Link>
                                        </h5>
                                        <Form>
                                            <Form.Group className="p-2 " style={{ margin: "0px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="Select what you'd like to be notified about via email and how often" className='chechk' />
                                            </Form.Group>

                                            <Form.Group className="p-2 " style={{ margin: "-10px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="When any student registers for a lesson/event through the Student Portal" className='chechk' />
                                            </Form.Group>

                                            <Form.Group className="p-2 " style={{ margin: "-10px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="When any parent or student completes the sign-up form" className='chechk' />
                                            </Form.Group>

                                            <Form.Group className="p-2 " style={{ margin: "-10px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="When any parent or student disables email reminders" className='chechk' />
                                            </Form.Group>
                                            <Form.Group className="p-2 " style={{ margin: "-10px 0px 0px 0px" }} controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="Allow students to email me from the Study Log" className='chechk' />
                                            </Form.Group>
                                        </Form>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </main>
                </div>



            </div>
        </div>
    )
}


export default Student_Redirect
