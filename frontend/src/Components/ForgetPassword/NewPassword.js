import React, { useRef, useState } from 'react';
import { Button, Card, Form, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChangePassword } from '../../apicalls/User';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const NewPassword = () => {
  const emailRef = useRef('');
  const newPasswordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

    if (confirmPassword.length < 6 || confirmPassword.length > 10) {
      toast.info('Password length should be between 6 to 10 characters');
      return;
    }

    const passwordStrengthRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,10}$/;
  if (!passwordStrengthRegex.test(newPassword)) {
    toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be 6 to 10 characters long');
    return;
  }

    try {
      const response = await ChangePassword({
        userId: email,
        password: confirmPassword,
      });
      if (response) {
        if (response.success === true) {
          toast.success(response.message);
          navigate('/login');
        } else {
          toast.info(response.message);
        }
      } else {
        toast.info('authentication error');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error('An error occurred. Please try again later.');
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
                        <div className="password-input">
                          <Form.Control
                            className="FormControl3"
                            type={showPassword ? 'text' : 'password'}
                            name="newPassword"
                            placeholder="Enter Your New password"
                            required
                            ref={newPasswordRef}
                          />
                          <Button className="password-toggle-btn" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </Button>
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-4" controlId="confirmPassword">
                        <FormLabel>Confirm Password</FormLabel>
                        <div className="password-input">
                          <Form.Control
                            className="FormControl3"
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            required
                            ref={confirmPasswordRef}
                          />
                          <Button className="password-toggle-btn" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </Button>
                        </div>
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
