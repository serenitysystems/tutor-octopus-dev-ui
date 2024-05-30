import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormLabel,
  Row,
} from "react-bootstrap";
import "./Login.css";
import Header from "../Header";
import Footer from "../Footer";
import { toast } from "react-toastify";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import { LoginUser } from "../apicalls/User";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import RoleBased from "../BackendComp/RoleBased";
import { useDispatch } from "react-redux";
import { setStudentDetails } from "../redux/studentSlice";

const Login = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState("Student");
  const location=useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get('role');
  const [data, setData] = useState({
    email: "",
    password: "",
     role:role,
  });
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();
  const dispatch=useDispatch();
  

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    setloading(true);
    console.log(loading);
    const response = await LoginUser(data);

    if (response) {
      console.log(response.message);
      setloading(false);
      if(response.success===false && response.navigate){
        toast.info(response.message);
        navigate(response.navigate)
      }
     else  if (response.success === false) {
        //  alert(response.message)
        toast.info(response.message);
      } 
      
      
      else if (
        response.success === true &&
        response.data.role === "I am a Private Tutor"
      ) {
        toast.success(response.message + " " + response.data.role);
        // navigate('/TutorHome',{state:response.data})
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userId", response.data.id);
        sessionStorage.setItem("firstName", response.data.firstName);
        sessionStorage.setItem("lastName", response.data.lastName);
        sessionStorage.setItem("batch", JSON.stringify(response.data.batch));

        onLogin(response.data);
        navigate("/Home");

        // alert(response.message)
      } else if(response.success === true &&
        response.data.role === "Student") {
        toast.success(response.message + " " + response.data.role);
        // dispatch(setStudentDetails(response.data));
        //temp -solution
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userId", response.data.userId);
        dispatch(setStudentDetails(response.data));
        
        
        // navigate('/TutorHome',{state:response.data})
        onLogin(response.data);
        navigate("/Student/Home");
      }
      else if(response.success===true && response.data.role==="I am a Tuition Center"){
        console.log("done")
        toast.info("Login success")
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userId", response.data.userId);
        navigate('/BusinessTutor')
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    sessionStorage.removeItem("token");
  }, []);

  return (
    <div>
      <Header />
      <div className="new-wrapper">
        {/* <h1 className="Signup1">Sign in as a Tutor</h1> */}
        <h1 className="Signup1">Sign in as a {role}</h1>
        {/* <img  className="lets"style={{"width":"200px",height:"200px"}} src={role==='Teacher'?'/img/Student_role.png':'/img/Student_role.png'}/> */}
        {/* <p className="lets">Lets Start the Journey </p> */}

        <div className="text-center"></div>
        <section
          id="advertisers"
          class="advertisers-service-sec pt-5 pb-5  mb-5"
          style={{
            backgroundImage: "url('./img/signup.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: "90px 0px 90px 0px",
          }}
        >
          <div class="container">
            <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
              <div class="col"></div>
              <div class="col bkoo">
                <div class="service-card2">
                  <Card className="card576">
                    <h1 className="Signup2">Let’s get started!</h1>
                    {/* <h6 >Choose User-type and add credentials</h6> */}
                    {loading ? (
                      <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                      </div>
                    ) : (
                      <>
                        <Form className="form9180" onSubmit={handleSubmit}>
                          <br></br>
                          <br></br>
                          {/* <RoleBased onRoleChange={handleRoleChange} /> */}
                          <Form.Group
                            className="mb-4"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              className=" FormControl3"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                              onChange={handleChange}
                              value={data.email}
                            />
                          </Form.Group>

                          <div className="eyese">
                            <Form.Control
                              className=" FormControl3 meyese "
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="password"
                              value={data.password}
                              onChange={handleChange}
                              required
                            />
                            <button
                              type="button"
                              className="btn btn-link"
                              style={{ color: "black" }}
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                              {/* Eye icons */}
                            </button>
                          </div>
                          <div className="text-right ForgetPassword">

                          <Link to="/ForgetPassword" className="">
                            Forget Password ?
                          </Link>
                          </div>

                        <div className="VOIR_LESPRODUITSbn9">
                        <Button
                            className=""
                            type="submit"
                          >
                            Sign in
                          </Button>
                        </div>
                        </Form>

                        {role === "Teacher" 
                            && 
                            (<h5 className="notres">Not Registered ?</h5>) 
                            &&
                            (                           <Link
                              to={`/signup?role=${role}`}
                              className="notres1"
                            >
                              Sign Up
                            </Link>
                          
                        )}
                      </>
                    )}
                    {/* {
                                            loading===true &&
                                            <p>loading...</p>
                                        } */}
                  </Card>
                  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
                  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                </div>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ backgroundColor: "#1d3748" }} className="bg76">
        <Container>
          <Row>
            <Col sm={6}>
              <h5 style={{ color: "white" }}>
                Keep up to date — Get e-mail updates
              </h5>
              <p style={{ color: "white" }}>
                Stay tuned for the latest company news.
              </p>
            </Col>
            <Col sm={6}>
              <Form>
                <div className="d-flex my-2">
                  <Form.Control
                    type="text"
                    className="form1"
                    placeholder="Enter e-mail Address"
                  />

                  <Button variant="" className="btn809" type="button">
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
};

export default Login;
