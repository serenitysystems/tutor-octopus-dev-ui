import React, { useEffect, useState } from 'react'
import './Tuition.css'


import { Button, Card, Col, Container, Form, FormLabel, Modal, Row } from 'react-bootstrap'
// import '../Login.css'
import Header from '../../Header';
import Footer from '../../Footer';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../apicalls/User';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
const TuitionSignup = () => {
  // const initialValues = { firstName: "", email: "", password: "" };
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    businessName: '',
    businessType: '',

  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };


  // const [isChecked, setIsChecked] = useState(false);
  // const [showModal, setShowModal] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
  };



  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex1 = /^[a-zA-Z ]*$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "*First Name is a require !";
    } else if (!regex1.test(values.firstName)) {
      errors.firstName = "*Please enter alphabet characters only";
    }

    if (!values.lastName) {
      errors.lastName = "*last Name is a require";
    } else if (!regex1.test(values.lastName)) {
      errors.lastName = "*Please enter alphabet characters only";
    }


    if (!values.email) {
      errors.email = "*Email is a require!";
    } else if (!regex.test(values.email)) {
      errors.email = "*This is not a valid email format";
    }


    if (!values.password) {
      errors.password = "*Password is a require";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.businessName) {
      errors.businessName = "*Business Name is require ";
    }

    if (!values.businessType) {
      errors.businessType = "*Business Size is require";
    }

    return errors;
  };

  return (
    <div>
      <Header />
      <div className="new-wrapper bbwar">
        <h1 className='Signup1'>Sign up as a Tuition center</h1>
        <p className='lets'>No credit card required</p>
        <section id="advertisers" className="advertisers-service-sec pt-5 pb-5  mb-5" style={{
          backgroundImage:
            "url('./img/signup.png')", backgroundSize: "cover",
          backgroundRepeat: "no-repeat", padding: "90px 0px 90px 0px"
        }}>
          <div className='Loginformj'>
            <Form className='Loginformj1' onSubmit={handleSubmit}>
            <h1 className='Signup24'>Let’s get started!</h1>
            <p className='lets4' >Sign up now</p>
              <Form.Group className="mb-4" controlId="formBasicname">
                <Form.Control className=" FormControl3" type="text" name="firstName"
                  placeholder='First Name'
                  value={data.firstName}
                  onChange={handleChange}
                />
                <p className="pform">{formErrors.firstName}</p>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicname">
                <Form.Control className=" FormControl3" type="text" name="lastName"
                  placeholder='Last Name'
                  value={data.lastName}
                  onChange={handleChange}

                />
                <p className="pform">{formErrors.lastName}</p>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicname">
                <Form.Control className=" FormControl3" type="text" name="email"
                  placeholder='Email Address'
                  value={data.email}
                  onChange={handleChange}
                />
                <p className="pform">{formErrors.email}</p>
              </Form.Group>
              <Form.Group className="mb-4  " controlId="formBasicname">
                <div className="eyese">
                  <Form.Control className=" FormControl3 meyese "
                    type={showPassword ? 'text' : 'password'} name="password"
                    placeholder='Password'
                    value={data.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="btn btn-link" style={{ color: "black" }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye icons */}
                  </button>
                </div>
                <p className="pform" >{formErrors.password}</p>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicname">
                <Form.Control className=" FormControl3" type="text" name="businessName" placeholder='Business Name'
                  value={data.businessName}
                  onChange={handleChange}
                />
                <p className="pform">{formErrors.businessName}</p>
              </Form.Group>
              <Form.Select
                aria-label="Default select example"
                className="FormControl3"
                onChange={handleChange}
                value={data.businessType}
                name="businessType"
              >
                <option disabled value="">Business Size</option> 
                <option value="I am a Private Tutor">I am a Private Tutor</option>
                <option value="I am a Tuition Center">I am a Tuition Center</option> 
              </Form.Select>
              <p className="pform">{formErrors.businessType}</p>
              <Row className='my-3'>
                <Col sm={1}>
                  <Form.Check
                    type="checkbox"
                  />
                  {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Alert</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please agree to the Terms of Service and Privacy Policy.</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close  
                      </Button>
                    </Modal.Footer>
                  </Modal> */}
                </Col>
                <Col sm={11}>
                  <span className='ForgetPassword2' >  I agree to the <Link to="/TermsofService" target="_blank" style={{ color: "#0a58ca" }}>
                    Terms of Service</Link> <b style={{ color: "black", fontWeight: "400" }}>and</b>
                    <Link to="/PrivacyPolicy" style={{ color: "#0a58ca" }}> Privacy Policy</Link> .</span>
                </Col>
              </Row>
              <Button className='VOIR_LESPRODUITSbn991 ' type="submit">Create My Tuition Account</Button>

            </Form>
          </div>
         
        </section>
      </div>
    
      <Footer />
    </div>
  )
}

export default TuitionSignup
