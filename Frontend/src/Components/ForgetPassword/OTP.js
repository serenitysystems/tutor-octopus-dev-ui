import React, { useRef } from 'react';
import { Button, Card, Form, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OTP = () => {
  const inputValueRef = useRef('');
  const navigate = useNavigate();

  const checkOtp = () => {
    const inputValue = inputValueRef.current.value;
    // Use the inputValue as needed
    console.log('OTP entered:', inputValue);
    if(inputValue===sessionStorage.getItem('otp')){
      navigate('/NewPassword');
      sessionStorage.setItem('otp',"verified");
    }
    else{
      toast.error('Invalid otp');
      
    }
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
                    <h1 className="Signup2">OTP</h1>
                    <Form className="form9180">
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <FormLabel>OTP</FormLabel>
                        <Form.Control
                          className="FormControl3"
                          type="text"
                          name="OTP"
                          placeholder="Enter Your OTP"
                          required
                          ref={inputValueRef}
                        />
                      </Form.Group>
                      <Button className="VOIR_LESPRODUITSbn9" type="button" onClick={checkOtp}>
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

export default OTP;
