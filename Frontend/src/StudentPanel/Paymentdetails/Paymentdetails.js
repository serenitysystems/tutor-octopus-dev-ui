import React from 'react'
import { Button, Container, Form, FormLabel, Stack } from 'react-bootstrap'
import './Payments.css'
const Paymentdetails = () => {
    return (
        <div style={{marginBottom:"-90px"}}>
            <div style={{ background: "#fff8f8",padding:"60px 0px 0px 0px " }}>
                <img src='./img/tutor.png' className='tutyygg' />
                <h3 className='text-center'>Get started with an expert tutor today</h3>
                <section id="advertisers" className="advertisers-service-sec pt-5 pb-5  mb-5 aboutinsnn" style={{
                    backgroundImage:
                        "url('./img/signup.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", padding: "190px 0px 900px 0px"
                }} >
                    <Container>

                        <section class="columnsstudent">

                            <div class="columnstudent">
                                <div className='cardstudent1'>
                                    <img src='/img/img-1.png' className='studentimage' />
                                    <p className='palnshh'>Free Plan</p>
                                    <Button className='btn btngethours'>1 hour - Get Started</Button>
                                    <p className='totalpriced'>Total Price <b>00 RS.</b></p>
                                </div>
                            </div>
                            <div class="columnstudent">
                                <div className='cardstudent1'>
                                    <img src='/img/img-2.png' className='studentimage' />
                                    <p className='palnshh'>Silver Plan</p>
                                    <Button className='btn btngethours'>1 hour - Get Started</Button>
                                    <p className='totalpriced'>Total Price <b>5000 RS.</b></p>
                                </div>
                            </div>
                            <div class="columnstudent">
                                <div className='cardstudent1'>
                                    <img src='/img/img-3.png' className='studentimage' />
                                    <p className='palnshh'>Gold Plan</p>
                                    <Button className='btn btngethours'>1 hour - Get Started</Button>
                                    <p className='totalpriced'>Total Price <b>10000 RS.</b></p>
                                </div>
                            </div>
                            <div class="columnstudent">
                                <div className='cardstudent1'>
                                    <img src='/img/img-4.png' className='studentimage' />
                                    <p className='palnshh'>Platinum Plan</p>
                                    <Button className='btn btngethours'>1 hour - Get Started</Button>
                                    <p className='totalpriced'>Total Price <b>15000 RS.</b></p>
                                </div>
                            </div>
                        </section>
                        <section class="columnsstudent my-5 aboutinsnn">


                            <div class="columnstudent">
                                <div className='cardstu'>
                                    <img src='/imgs/credit.png' className='studentima' />
                                </div>
                            </div>
                            <div class="columnstudent">
                                <div className='cardstudent12'>
                                    <Button className='btn btngethours1'>Payment details</Button>


                                    <Form className='formhaf' >


                                        <FormLabel>Name on Card</FormLabel>
                                        <Form.Group className="mb-4" controlId="formBasicname">

                                            <Form.Control className=" FormControl3" type="text" name="email"
                                                style={{ borderRadius: "30px" }}

                                            />

                                        </Form.Group>
                                        <FormLabel>Card No.</FormLabel>
                                        <Form.Group className="mb-4" controlId="formBasicname">

                                            <Form.Control className=" FormControl3" type="number" name="email"
                                                style={{ borderRadius: "30px" }}

                                            />

                                        </Form.Group>




                                      
                                        <Stack direction="horizontal" gap={3}>
                                            <div className="p-2">
                                            <FormLabel> Expire date</FormLabel>
                                                 <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="number" name="email"
                                                    style={{ borderRadius: "30px" }} placeholder='MM'

                                                />

                                            </Form.Group></div>
                                            <div className="p-2 "> 
                                            <FormLabel>.</FormLabel>
                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="number" name="email"
                                                    style={{ borderRadius: "30px" }} placeholder='YY'

                                                />

                                            </Form.Group></div>
                                            <div className="p-2 ms-auto"> 
                                            <FormLabel>CVV</FormLabel>
                                            <Form.Group className="mb-4" controlId="formBasicname">

                                                <Form.Control className=" FormControl3" type="number" name="email"
                                                    style={{ borderRadius: "30px" }} placeholder='123'

                                                />

                                            </Form.Group></div>
                                        </Stack>

                                        <Button className='VOIR_LESPRODUITS  ' type="submit">Proccess</Button>


                                    </Form>
                                </div>
                            </div>
                        </section>
                    </Container>
                </section>

            </div>

        </div>
    )
}

export default Paymentdetails
