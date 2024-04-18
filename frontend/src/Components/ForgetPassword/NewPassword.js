import React, { useRef } from 'react';
import { Button, Card, Form, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChangePassword } from '../../apicalls/User';

const NewPassword = () => {
  const emailRef = useRef('');
  const newPasswordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const email = emailRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!email || !newPassword || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Perform password validation or other operations here
    // console.log('Email:', email);
    // console.log('New Password:', newPassword);
    // console.log('Confirm Password:', confirmPassword);
    else{
     
        const response=await ChangePassword({
          userId:email,
          password:confirmPassword
        });
        if(response)
        {
          if(response.success===true){
            toast.success(response.message);
            navigate('/login')
          }
          else{
            toast.info(response.message);
          }

      }
     
      
      else{
        toast.info('authentication error')
      }

    }

    // Redirect to Login page
    //navigate('/Login');
  };

  return (
    <div>
      <div className="new-wrapper">
        <section
          id="advertisers"
          className="advertisers-service-sec pt-5 pb-5  mb-5"
          style={{
            backgroundImage: "url('./img/signup.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '90px 0px 90px 0px',
          }}
        >
          <div className="container">
            <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
              <div className="col"></div>
              <div className="col bkoo">
                <div className="service-card2">
                  <Card className="card576">
                    <h1 className="Signup2">New Password</h1>
                    <Form className="form9180">
                      <Form.Group className="mb-4" controlId="email">
                        <FormLabel>Email</FormLabel>
                        <Form.Control
                          className="FormControl3"
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                          required
                          ref={emailRef}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="newPassword">
                        <FormLabel>Password</FormLabel>
                        <Form.Control
                          className="FormControl3"
                          type="password"
                          name="newPassword"
                          placeholder="Enter Your New password"
                          required
                          ref={newPasswordRef}
                        />
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="confirmPassword">
                        <FormLabel>Confirm Password</FormLabel>
                        <Form.Control
                          className="FormControl3"
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          required
                          ref={confirmPasswordRef}
                        />
                      </Form.Group>
                      <Button className="VOIR_LESPRODUITSbn9" type="button" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Form>
                  </Card>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewPassword;
