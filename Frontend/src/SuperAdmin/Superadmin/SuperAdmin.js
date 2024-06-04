
import './SuperAdd.css'

import React, { useEffect, useState } from 'react'

import Stack from 'react-bootstrap/Stack';

import { Button, Card, Col, Container, Form } from 'react-bootstrap'
// import '../Login.css'
import Header from '../../Header';
import Footer from '../../Footer';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/User';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
const SuperAdmin = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div style={{ background: "#fff8f8" }} className='body76'>
            <Container>
                <img src='./imgs/logo89.png' style={{width:"80px"}} className='body764'/>
                <div class="row">
                    <div class="column" >
                        <h2 className='text-center my-5'>SUPER ADMIN</h2>
                        <div className="">
                           
                            <section id="advertisers" className="" >
                                <div className='formu89'>

                                    <Form className='' >
                                      

                                        <Form.Group className="mb-4" controlId="formBasicname">
                                            <label>USERNAME</label>
                                            <Form.Control className=" FormControl3 my-3" type="text" name="email"
                                                placeholder='Username'

                                            />

                                        </Form.Group>
                                        <Form.Group className="mb-4  " controlId="formBasicname">
                                            <label>PASSWORD</label>
                                            <div className="eyese my-3">
                                                <Form.Control className=" FormControl3 meyese "
                                                    type={showPassword ? 'text' : 'password'} name="password"
                                                    placeholder='Password'

                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-link" style={{ color: "black" }}
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye icons */}
                                                </button>
                                            </div>

                                        </Form.Group>



                                        <Button className='VOIR_LESPRODUITSbn9914 ' type="submit">Sign in</Button>
                                        

                                    </Form>


                                </div>

                            </section>
                        </div>
                    </div>
                    <div class="column" >
                        <img src='./imgs/superaddmin.png' style={{width:"80%"}}/>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SuperAdmin
