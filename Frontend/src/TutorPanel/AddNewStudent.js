import { useState, useEffect } from "react";
import './Testings.css'

import { Button, Container, Form, } from 'react-bootstrap'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { GrNext } from "react-icons/gr";

import "./Testings.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AddNewStudentRouter } from "../apicalls/Student";
import BatchList from "../BackendComp/BatchList";

const AddNewStudent = () => {
  const initialValues = {
    firstName: "", lastName: "", email: "",
    mobileNumber: "", firstNameParent: "", lastNameParent: "",
    emailParent: "", mobileNumberParent: "", lessonCategory: "", lessonLength: "", price: "",
    notes: "",emailReminder:false,smsReminder:false, managedBy: sessionStorage.getItem('userId'),
    smsCapableParent:false,smsCapable:false
    
  };
  const sessionBatch=sessionStorage.getItem('batch');
  const [formData, setformData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const newset = Array.from(new Set(JSON.parse(sessionStorage.getItem('batch'))));
  const[batchName,setbatchName]=useState(newset);
  // console.log(batchName)



  useEffect(()=>{
    if(!sessionStorage.getItem('token')){
      navigate('/Login')
    }

  },[])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    
    //console.log(formData)
  };


  const handleChangeCheck = (e) => {
    const { name, checked } = e.target;
    setformData({ ...formData, [name]: checked });
  };


  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let errors = validate(formData);
    setFormErrors(errors);
    console.log(formData)
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
      setloading(true);
    }
    if (Object.keys(formErrors).length > 0) {
      toast.info('Some of the details entered are incorrect. Scroll and Check');
    }



    //setloading(true);
    // console.log(loading)
    if (isSubmit === true) {
      
        //console.log("reached")
        const response = await AddNewStudentRouter(formData);
        //console.log(response)
        if (response) {
          setIsSubmit(false)
          //console.log(response.message)
          setloading(false)
          if (response.success === false) {
            //  alert(response.message)
            toast.info(response.message);
            setIsSubmit(false)
          }
          else if (response.success === true) {
            console.log("coming here")
            toast.success(response.message);
            setIsSubmit(false)
            // navigate('/TutorHome',{state:response.data})
            // sessionStorage.setItem('token', response.data.token);
            // onLogin(response.data);
            navigate('/Student')

            // alert(response.message)
          }
          else if(response.status===502){
            toast.info('User is not authorized')
            navigate('/login')
          }


        }
      
      else {
        navigate('/Login')
      }
      console.log(response)
    }


  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {
      // console.log(data);
    }
  }, [formErrors]);


  const validate = (values) => {
    const errors = {};
    const regex1 = /^[a-zA-Z ]*$/;
    const regex2 = /^[a-zA-Z ]*$/;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const regexParent = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


    if (!values.firstName) {
      errors.firstName = "*First Name is  required !";
    } else if (!regex1.test(values.firstName)) {
      errors.firstName = "Please enter alphabet characters only";
    }

    if (!values.lastName) {
      errors.lastName = "*Last Name is  required !";
    } else if (!regex2.test(values.lastName)) {
      errors.lastName = "Please enter alphabet characters only";
    }


    if (!values.email) {
      errors.email = "*Email is required !";
    }
    else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.mobileNumber) {
      errors.mobileNumber = "*Mobile No. is  required ! ";
    }
    // if (!values.mobileNumber) {
    //   errors.mobileNumber = "mobileNumber is ";
        else if (values.mobileNumber.length < 12) {
      errors.mobileNumber = "mobile Numbermust be more than 10 digit";
    } else if (values.mobileNumber.length > 13) {
      errors.mobileNumber = "mobile Number cannot exceed more than 10 digit";
    }




    // if (!values.batch) {
    //   errors.batch = "batch is !";
    // } 


    if (!values.firstNameParent) {
      errors.firstNameParent = "*Parent Name is a required !";
    } else if (!regex1.test(values.firstNameParent)) {
      errors.firstNameParent = "Please enter alphabet characters only";
    }

    if (!values.lastNameParent) {
      errors.lastNameParent = "Parent Name is a required !";
    } else if (!regex2.test(values.lastNameParent)) {
      errors.lastNameParent = "Please enter alphabet characters only";
    }


    if (!values.emailParent) {
      errors.emailParent = "Email is a required !";
    }
    else if (!regex.test(values.emailParent)) {
      console.log("check-152")
      errors.emailParent = "This is not a valid email format!";
    }

    if (!values.mobileNumberParent) {
      errors.mobileNumberParent = "lesson Length is a required !";
    }
    else if (values.mobileNumberParent.length < 12) {
        errors.mobileNumberParent = "mobile Numbermust be more than 10 digit";
      } else if (values.mobileNumberParent.length > 13) {
        errors.mobileNumberParent = "mobile Number cannot exceed more than 10 digit";
      }
    // if (!values.mobileNumberParent) {
    //   errors.mobileNumberParent = "mobileNumber is ";
    //    } else if (values.mobileNumberParent.length < 12) {
    //   errors.mobileNumberParent = "mobile Numbermust be more than 10 digit";
    // } else if (values.mobileNumberParent.length > 10) {
    //   errors.mobileNumberParent = "mobile Number cannot exceed more than 10 digit";
    // }

    if (!values.lessonCategory) {
      errors.lessonCategory = "lesson Category is a required !";
    }

    if (!values.lessonLength) {
      errors.lessonLength = "lesson Length is a required !";
    }
    if (!values.price) {
      errors.price = "price is a required !";
    }
    console.log(errors)

    return errors;
  };





  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []]
    setVal(abc)
  }

  const handleDelete = (i) => {
    const deletVal = [...val]
    deletVal.splice(i, 1)
    setVal(deletVal)
  }
  return (

    <div>
      <div className='backgroundy'>
        <Container>
          <div className='content7'>
            <Link to='/Home' style={{ fontSize: "24px", fontWeight: "600" }}><IoIosArrowBack />  Back to Students</Link>
            <h3 style={{ fontWeight: "700" }} className="my-4">Add New Student</h3>
          </div>

          {/* {loading ?

                        (
                            <Lazyloading />
                        ) :
                        ( */}
          {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : (
            <pre className="preg">
              {JSON.stringify(formData, undefined, 2)}
            </pre>
          )} */}





          <Form className="formjhu" onSubmit={handleSubmit}>


            <h3 className='mb-5' style={{ fontWeight: "700" }}>Student Details</h3>
            <div className="mbsc-row row">
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>First Name</b></Form.Label>
                  <Form.Control type="text" name="firstName" value={formData.firstName}
                    onChange={handleChange}
                  />
                  <p className="pform">{formErrors.firstName}</p>
                </Form.Group>
              </div>
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Last Name</b></Form.Label>
                  <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                  <p className="pform">{formErrors.lastName}</p>
                </Form.Group>
              </div>

            </div>

            <div className="mbsc-row row">
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Email Address</b></Form.Label>
                  <Form.Control type="text" name="email" value={formData.email} onChange={handleChange}

                  />
                  <p className="pform">{formErrors.email}</p>
                </Form.Group>
              </div>
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Mobile Number</b></Form.Label>
                  <PhoneInput
                    defaultCountry="in"
                    value={formData.mobileNumber}
                    onChange={(value) => handleChange({ target: { name: 'mobileNumber', value } })}
                    name='mobileNumber'
                    type='text'

                  />
                  <p className="pform">{formErrors.mobileNumber}</p>

                </Form.Group>
                <Form.Group className="" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="SMS Capable" name="smsCapable" checked={formData.smsCapable} onChange={handleChangeCheck}

                  />
                </Form.Group>

              </div>

            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3 mb-3">

                <div className="col-md- form-group ">


                  <Button onClick={() => handleAdd()} className="addbtn">+ Show additional details</Button>





                  {val.map((data, i) => {
                    return (
                      <div>
                        <div className="mbsc-row row my-3">
                          <div className=" mbsc-col-4 col-sm-4 mbsc-col-md-3 mbsc-col-lg-3 ">
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                              <Form.Label>Batch</Form.Label>
                              <Form.Select aria-label="Default select example" style={{ borderRadius: "30px" }}
                                value={formData.batch}
                                name="batch"
                                onChange={handleChange}
                              >
                                <option value=" 30">Select from Batch</option>
                                {/* {
                                  batchName.map((item)=>(
                                    <option value={item}>{item}</option>
                                  ))

                                } */}
                                  <BatchList/>
                                

                                {/* <option value='Batch-1'  >Batch-1</option>
                                <option value="Batch-2">Batch-2</option> */}
                              </Form.Select>
                              {/* <p className="pform">{formErrors.batch}</p> */}
                            </Form.Group>

                          </div>

                          <div className=" mbsc-col-4 col-sm-4 mbsc-col-md-3 mbsc-col-lg-3 " style={{ marginTop: "29px" }}>
                            <Button onClick={() => handleDelete(i)} className="rembtn ">Remove</Button>
                          </div>

                        </div>





                      </div>
                    )
                  })}


                </div>


              </div>
              <h5>Student Status</h5>
              <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3 chectradisbbtn">

                {['Active', 'Trial', 'Waiting', 'Lead', 'Inactive'].map((status) => (
                  <div key={status} className="mb-3 ">
                    <Form.Check
                      inline
                      label={status}
                      name="studentStatus"
                      type="radio"
                      checked={formData.studentStatus === status}
                      onChange={handleChange}
                      id={`inline-${status}`}
                      className={`grou${status}`}
                      value={status}
                    />
                  </div>
                ))}
                <hr />
              </div>

            </div>
            <div className="mbsc-row">

              <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-12 bnvdss">
                {/* <h5>Student Type</h5> */}

                {/* <Form.Group className="mb-3 p-2" controlId="formBasicCheckbox">
        <Form.Check type="radio" label="Adult" />
    </Form.Group> */}

                {/* <h5>This student’s family is a/an</h5>
                <div className="d-flex flex-row">
                    {['New Family', 'Existing Family'].map((type) => (
                        <div key={type} className="mb-3 p-2 d-flex">
                            <Row>
                                <Col sm={12} className="nbhgdyfsf">
                                    <Form.Check
                                        inline
                                        label={type}
                                        name="familyType"
                                        type="radio"
                                        checked={formData.familyType === type}
                                        onChange={handleChange}
                                        id={inline-${type}-2}
                                        className={grou${type === 'New Family' ? '6' : '7'}}
                                        value={type}
                                    />

                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
                <p style={{ fontSize: "15px" }}>Creates a new account in Families & invoices</p> */}


              </div>

            </div>
            <div className="mbsc-row row">
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Parent First Name</b></Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.firstNameParent}
                    name="firstNameParent"
                    onChange={handleChange}
                  />
                  <p className="pform">{formErrors.firstNameParent}</p>
                </Form.Group>
              </div>
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Parent Last Name</b></Form.Label>
                  <Form.Control type="text"
                    value={formData.lastNameParent}
                    onChange={handleChange}

                    name="lastNameParent"
                  />
                  <p className="pform">{formErrors.lastNameParent}</p>
                </Form.Group>
              </div>

            </div>
            <div className="mbsc-row row">
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Email Address</b></Form.Label>
                  <Form.Control
                    type="te"
                    value={formData.emailParent}
                    onChange={handleChange}
                    name="emailParent"


                  />
                  <p className="pform">{formErrors.emailParent}</p>
                </Form.Group>
              </div>
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Mobile Number</b></Form.Label>


                  {/* <Form.Control
                        type="number"
                        value={formData.mobileNumberParent}
                        onChange={handleChange}
                        name="mobileNumberParent"
                        
                    /> */}

                  <PhoneInput
                    defaultCountry="in"
                    value={formData.mobileNumberParent}
                    onChange={(value) => handleChange({ target: { name: 'mobileNumberParent', value } })}
                    name='mobileNumberParent'
                    type='text'

                  />
                  <p className="pform">{formErrors.mobileNumberParent}</p>
                </Form.Group>
                <Form.Group className="" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="SMS Capable"
                    name="smsCapableParent"
                    checked={formData.smsCapableParent}
                    onChange={handleChangeCheck}
                  />
                </Form.Group>

              </div>

            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">

                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Address  Optional</Form.Label>
        <h5>Address <span style={{ color: "gray" }}>Optional</span></h5>
        <Form.Control
        // onChange={handleChange}
        // value={formData.}
        
        
        as="textarea" rows={3} style={{ borderRadius: "30px" }} />
    </Form.Group> */}

                <h5>Preferences</h5>

                
                    <Form.Group className="" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Send SMS lessons reminders"
                        name="smsReminder"
                        checked={formData.smsReminder}
                        onChange={handleChangeCheck}

                      />
                    </Form.Group>

                <Form.Group className="" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Send email lessons reminders"
                    name="emailReminder"
                    checked={formData.emailReminder}
                    onChange={handleChangeCheck}

                  />
                </Form.Group>

                 

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
            type="checkbox"
            label="Send SMS lessons reminders"
            checked={formData.preference}
            onChange={handleChange}
            name="preference"
        />
        <p style={{ fontSize: "14px", marginLeft: "25px" }}>Will only be sent if SMS messaging is allowed</p>
    </Form.Group> */}

              </div>
              <hr></hr>
            </div>
            <div className="mbsc-row row">
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Default Lesson Category</b></Form.Label>
                  <Form.Select aria-label="Default select example"
                    style={{ borderRadius: "30px" }}
                    value={formData.lessonCategory}
                    name="lessonCategory"
                    onChange={(e) => handleChange(e)}

                  >
                    <option>Select Lesson</option>
                    <option value="Lesson-1">Lesson-1</option>
                    <option value="Lesson-2">Lesson-2</option>
                    <option value="Lesson-3">Lesson-3</option>
                  </Form.Select>
                  <p className="pform">{formErrors.lessonCategory}</p>
                </Form.Group>
              </div>
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><b>Default Lesson Length</b></Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="enter minutes"
                    name="lessonLength"
                    value={formData.lessonLength}
                    onChange={handleChange}


                  />
                  <span style={{ float: "right", margin: "-30px 40px 0px 0px" }}> minutes</span>



                  <p className="pform">{formErrors.lessonLength}</p>
                </Form.Group>


              </div>

            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">


                <h5>Default Billing</h5>
                <div className='p-2'>
                  {
                    ["Dont automatically create any calender generated changes",
                      "Student Pays based on number of lessons",
                      "Student pays the same amount each month",
                      "Student pays an hourly rate"
                    ].map((item) => (
                      <Form.Group className=" "
                        controlId="formBasicCheckbox">
                        <Form.Check
                          inline
                          name="billing"
                          checked={formData.billing === item}
                          onChange={handleChange}
                          id={`inline-${item}`}
                          value={item}

                          type="radio"
                          label={item} />
                      </Form.Group>

                    ))
                  }
                </div>
              </div>

            </div>
            <div className="mbsc-row row">
              <div className=" mbsc-col-6 col-sm-6 mbsc-col-md-3 mbsc-col-lg-3">
                <h5>Price</h5>
                <Form.Select
                  aria-label="Default select example"
                  style={{ borderRadius: "30px" }}
                  value={formData.price}
                  name="price"
                  onChange={handleChange}

                  placeholder="Select from below"

                >
                  <option value=" 30">Select from below</option>
                  <option value="100">₹ 100.00 Per Lesson</option>
                  <option value="200">₹ 200.00 Per Lesson</option>

                </Form.Select>
                <p className="pform">{formErrors.price}</p>

              </div>

            </div>
            <hr></hr>
            <div className="mbsc-row">
              <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 p">


                <h5>Note  <span style={{ fontWeight: "400", fontSize: "16px" }}>Optional </span></h5>
                <p>Use this area for any private notes you wish to keep.</p>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                  <Form.Control as="textarea" rows={3} style={{ borderRadius: "30px" }}
                    onChange={handleChange}
                    name="notes"
                    value={formData.notes}



                  />

                </Form.Group>
              </div>

            </div>
            <div className="mbsc-row">
              <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3 ">
                <div className="mbsc-button-group-block">
                  <Button type="button" onClick={() => navigate('/Student')} color="success" className="grnext1">Cancel</Button>
                  <Button type="submit" color="success" className="grnext" >Save <GrNext
                    style={{ color: "white" }} /></Button>
                </div>
              </div>
            </div>
          </Form>
          {/* )



                    } */}

        </Container>
      </div>
    </div>
  );
}
export default AddNewStudent;

