import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';

const LoginRole = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleImageClick = (role) => {
    // Navigate to the login page with the selected role
    navigate(`/login?role=${role}`);
  };

  return (
    <Container>
      <Header/>
      <Row>
        <Col xs={12} sm={6}>
          <div  style={{cursor:"pointer"}} className="text-center"  onClick={() => handleImageClick('Teacher')}>
            <img
              src={`/img/Teacher_role.png`}
              alt="Role 1"
              className="img-fluid"
              style={{maxWidth: "80%", height: "auto", cursor:"pointer",marginTop:"20%"}}
             
            />
            <h3>Login as Teacher </h3>
          </div>
        </Col>
        <Col xs={12} sm={6}>
          <div  style={{cursor:"pointer"}} className="text-center"  onClick={() => handleImageClick('Student')}>
            <img
               src={`/img/Student_role.png`}
              alt="Role 2"
              className="img-fluid"
              style={{maxWidth: "80%", height: "auto", cursor:"pointer",marginTop:"20%"}}
             
            />
              <h3>Login as Student </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginRole;
