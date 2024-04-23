import React from 'react'
import { Button, Card, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useNavigate} from 'react-router-dom';
import { OtpUser } from '../../apicalls/User'
import { toast } from 'react-toastify'
import Lazyloading from '../../BackendComp/Lazy'


const ForgetPassword = () => {

  const [inputValue, setInputValue] = useState('');
  const navigate=useNavigate();
  const [loading,setloading]=useState(false);

  const showSwal = () => {
    withReactContent(Swal).fire({
      title:'Success',
      
      inputValue,
      preConfirm: () => {
        setInputValue(Swal.getInput()?.value || '')
      },
    })
  }

  const handleChange=(event)=>{
    setInputValue(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(data)
    setloading(true);
    // console.log(loading)
   
    const response = await OtpUser({email:inputValue,subject:"Your otp for password verification"});

    if (response) {
      //changes
        console.log(response.message)
        setloading(false)
        if (response.success === false) {
            //  alert(response.message)
            toast.info(response.message);
        }
        else if(response.success===true ) {
            toast.success(response.message);
            // navigate('/TutorHome',{state:response.data})
            // sessionStorage.setItem('token', response.data.token);
            // sessionStorage.setItem('userId',response.data.id);
            // sessionStorage.setItem('firstName',response.data.firstName);
            // sessionStorage.setItem('lastName',response.data.lastName);
            // onLogin(response.data);
             navigate('/OTP')
            sessionStorage.setItem('otp',response.data)

            // alert(response.message)
        }
        // else{
        //     // toast.success(response.message+" "+response.data.role);
        //     // navigate('/TutorHome',{state:response.data})
        //     sessionStorage.setItem('token', response.data.token);
        //     // onLogin(response.data);
        //     navigate('/BusinessTutor')

        // }
    }

     
}
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
              <div className="col">

              </div>
              <div className="col bkoo">
                <div class="service-card2">
                  <Card className='card576'>
                    <h1 className='Signup2'>Forget Password</h1>

                    {
                      loading===true?(
                        <Lazyloading/>
                      ):(
                        <Form onSubmit={handleSubmit} className='form9180'  >

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <FormLabel>Email </FormLabel>
                        <Form.Control 
                        onChange={handleChange}
                        value={inputValue}
                        className=" FormControl3" 
                          type="email"
                          name="email" 
                          placeholder='Enter Your Gmail to recieve otp' 
                          required


                        />

                      </Form.Group>



                      <Button   className='VOIR_LESPRODUITSbn9 ' type="submit" >Submit</Button>

                    </Form>
                      )
                    }
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

export default ForgetPassword
