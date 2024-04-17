import { useState, useEffect } from "react";
// import "../Testings.css";


import { Button, Card, Col, Container, Form, FormLabel, Modal, Row } from 'react-bootstrap'
// import '../Login.css'
import Header from '../Header';
import Footer from '../Footer';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../apicalls/User';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Lazyloading from '../BackendComp/Lazy';

const Signup = () => {

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



    const navigate = useNavigate();
    const [loading, setloading] = useState(false);

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setData({ ...data, [name]: value });
    // };
    const [isChecked, setIsChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    // Function to handle form submission



    //  const handleSubmit = (e) => {
    //   // e.preventDefault();
    //   setFormErrors(validate(data));
    //   setIsSubmit(true);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setloading(true);
        setFormErrors(validate(data));
       if(Object.keys(formErrors).length === 0)
       {
        setIsSubmit(true);
       }
        

        //console.log(data)
        if (!isChecked) {
            setShowModal(true); // Display modal if checkbox is not checked
            return; // Stop further execution
        }
        
        if(isSubmit)
       {
        const response = await RegisterUser(data);
        if (response) {
            setloading(false);
            if (response.success === false) {
                setIsSubmit(false);
                toast.error(response.message);
                //alert(response.message)
                // console.log("check_issue_57_signup")
                // navigate('/signup')
            }
            else if (response.success === true) {
                //console.log(response);
                toast.success(response.message);
                // alert(response.message)
                navigate('/Login');
                setIsSubmit(false)
            }
        }
       }
       
        //console.log(response)
    }
    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0){
            return;
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex1 = /^[a-zA-Z ]*$/;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
            errors.firstName = "**firstName is required**";
        } else if (!regex1.test(values.firstName)) {
            errors.firstName = "**This only take character**";
        }

        if (!values.lastName) {
            errors.lastName = "**lastName is required**";
        } else if (!regex1.test(values.lastName)) {
            errors.lastName = "**This only take character**";
        }


        if (!values.email) {
            errors.email = "Email is required**";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }


        if (!values.password) {
            errors.password = "Password is required**";
        } else if (values.password.length < 6) {
            errors.password = "**Password must be more than 4 characters**";
        } else if (values.password.length > 10) {
            errors.password = "**Password cannot exceed more than 10 characters**";
        }

        if (!values.businessName) {
            errors.businessName = "**businessName is missing**";
        }

        if (!values.businessType) {
            errors.businessType = "**businessType is missing**";
        }

        return errors;
    };

    return (

        <div>
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre className="preg">{JSON.stringify(data, undefined, 2)}</pre>
      )
      } */}

            {/* <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>firstName</label>
            <input
              type="text"
              name="firstName"
              placeholder="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>
          <p className="pform">{formErrors.firstName}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <p className="pform">{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <p className="pform">{formErrors.password}</p>
          <button className="fluid ui button blue btnform">Submit</button>
        </div>
      </form> */}




            <Header />
            <div className="new-wrapper">
                <h1 className='Signup1' id="SignIn">Sign in as a Tutor</h1>
                <p className='lets'>Lets Start the Journey </p>
                <section id="advertisers" class="advertisers-service-sec pt-5 pb-5 mb-5" style={{
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
                                        <h1 className='Signup2'>Let’s get started!</h1>
                                        {/* {loading ? (
                                            <Lazyloading />
                                        ) : ( */}


                                            <Form className='form9180' onSubmit={handleSubmit}>

                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="text" name="firstName"
                                                        placeholder='Enter your first name'
                                                        value={data.firstName}
                                                        onChange={handleChange}


                                                    />
                                                    <p className="pform">{formErrors.firstName}</p>

                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="text" name="lastName"
                                                        placeholder='Enter your last name'
                                                        value={data.lastName}
                                                        onChange={handleChange}

                                                    />
                                                    <p className="pform">{formErrors.lastName}</p>
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="text" name="email"
                                                        placeholder='Enter your Email Address'
                                                        value={data.email}
                                                        onChange={handleChange}
                                                    />
                                                    <p className="pform">{formErrors.email}</p>
                                                </Form.Group>
                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                <div className="eyese">
                                                <Form.Control className=" FormControl3 meyese "
                                                    type={showPassword ? 'text' : 'password'} name="password"
                                                    placeholder='Pick a password'
                                                    value={data.password}
                                                    onChange={handleChange}
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-link" style={{color:"black"}}
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye icons */}
                                                </button>
                                                </div>
                                                    <p className="pform">{formErrors.password}</p>
                                                </Form.Group>
                                                <Form.Group className="mb-4" controlId="formBasicname">

                                                    <Form.Control className=" FormControl3" type="text" name="businessName" placeholder='Enter your business name '
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
                                                    name="businessType" // Add name attribute to ensure handleChange updates the correct field
                                                >
                                                    <option disabled value="">Enter your business type</option> {/* Add disabled and empty value for placeholder */}
                                                    <option value="I am a Private Tutor">I am a Private Tutor</option>
                                                    <option value="I am a Tuition Center">I am a Tuition Center</option> {/* Removed extra space after "Center" */}
                                                </Form.Select>

                                                <p className="pform">{formErrors.businessType}</p>
                                                <Row className='my-3'>
                                                    <Col sm={1}>
                                                        <Form.Check
                                                            type="checkbox"

                                                            checked={isChecked}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Alert</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>Please agree to the Terms of Service and Privacy Policy.</Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="secondary" onClick={() => setShowModal(false)}>
                                                                    Close
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    </Col>
                                                    <Col sm={11}>
                                                    <span className='ForgetPassword2' >  I agree to the <Link to="/TermsofService"  style={{color:"#0a58ca"}}>
                                                        Terms of Service</Link> <b style={{ color: "black", fontWeight: "400" }}>and</b>
                                                    <Link to="/PrivacyPolicy" style={{color:"#0a58ca"}}> Privacy Policy</Link> .</span>


                                                    </Col>
                                                </Row>



                                                <Button className='VOIR_LESPRODUITSbn99 ' type="submit">Create account</Button>

                                            </Form>






{/* 
                                        )

                                        } */}


                                    </Card>
                                    <br></br> <br></br> <br></br>
                                </div>
                            </div>
                            <div class="col">

                            </div>

                        </div>
                    </div>
                </section>




            </div>
            <div style={{ backgroundColor: "#1d3748" }} className='bg76'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h5 style={{ color: "white" }}>Keep up to date — Get e-mail updates</h5>
                            <p style={{ color: "white" }}>Stay tuned for the latest company news.</p>
                        </Col>
                        <Col sm={6}>
                            <Form >

                                <div className="d-flex my-2">
                                    <Form.Control type="text" className='form1' placeholder='Enter e-mail Address' />

                                    <Button variant="" className='btn809' type="button">
                                        Subscribe Now
                                    </Button>

                                </div>



                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Footer />



        </div>
    );
}
export default Signup