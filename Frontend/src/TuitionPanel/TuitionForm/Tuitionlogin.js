
import React, { useEffect, useState } from 'react'
import './Tuition.css'
import Stack from 'react-bootstrap/Stack';

import { Button, Card, Col, Container, Form} from 'react-bootstrap'
// import '../Login.css'
import Header from '../../Header';
import Footer from '../../Footer';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/User';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
const Tuitionlogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Header />
   
      <div className="new-wrapper bbwar">
        <h1 className='Signup1'>Sign in as a Tuition center</h1>
        <p className='lets'>Lets Start the Journey</p>
        <section id="advertisers" className="advertisers-service-sec pt-5 pb-5  mb-5" style={{
          backgroundImage:
            "url('./img/signup.png')", backgroundSize: "cover",
          backgroundRepeat: "no-repeat", padding: "90px 0px 90px 0px"
        }}>
          <div className='Loginformj'>

            <Form className='Loginformj1' >
              <h1 className='Signup24'>Let’s get started!</h1>
              <p className='lets4' >Sign up now</p>

              <Form.Group className="mb-4" controlId="formBasicname">
                <Form.Control className=" FormControl3" type="text" name="email"
                  placeholder='Email'

                />

              </Form.Group>
              <Form.Group className="mb-4  " controlId="formBasicname">
                <div className="eyese">
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



              <Button className='VOIR_LESPRODUITSbn991 ' type="submit">Sign in</Button>
              <h5 className='notres'>Not Registered ?</h5>
              <Stack gap={2} className="col-md-5 mx-auto">
              <Link to="/TuitionSignup" className='notres1' style={{ alignItems: "center", textAlign: "center" }}>Sign Up</Link>
              </Stack>
             
            </Form>


          </div>

        </section>
      </div>

      <Footer />
    </div>
  )
}
export default Tuitionlogin
