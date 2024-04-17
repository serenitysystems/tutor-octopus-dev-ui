import React from 'react'
import { Button, Card, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useNavigate} from 'react-router-dom';

const NewPassword = () => {

  const [inputValue, setInputValue] = useState('')

 const navigate=useNavigate();
  return (

    <div>


      <div className="new-wrapper">

        <section id="advertisers" class="advertisers-service-sec pt-5 pb-5  mb-5" style={{
          backgroundImage:
            "url('./img/signup.png')", backgroundSize: "cover",
          backgroundRepeat: "no-repeat", padding: "90px 0px 90px 0px"
        }}>
          <div class="container">

            <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
              <div class="col">

              </div>
              <div class="col bkoo">
                <div class="service-card2">
                  <Card className='card576'>
                    <h1 className='Signup2'>New Password</h1>

                    <Form  className='form9180'  >

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <FormLabel>Password</FormLabel>
                        <Form.Control className=" FormControl3" type="password"
                          name="OTP" placeholder='Enter Your New pasword' required


                        />

                      </Form.Group>


                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <FormLabel>Confirm Password</FormLabel>
                        <Form.Control className=" FormControl3" type="password"
                          name="OTP" placeholder='Enter YourConfirm Password' required


                        />

                      </Form.Group>



                      <Button className='VOIR_LESPRODUITSbn9 ' type="submit" onClick={()=>navigate('/Login')}>Submit</Button>

                    </Form>
                    {/* {
                                            loading===true &&
                                            <p>loading...</p>
                                        } */}


                  </Card>
                  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                </div>
              </div>
              <div class="col">

              </div>

            </div>
          </div>
        </section>




      </div>


    </div>

  )
}



export default NewPassword
