import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    
    <Container  className="evin text-center ">
      <Row>
        <Col>
          <h1>Welcome to Admin Dashboard</h1>
          <p>Manage users, roles, and permissions efficiently.</p>
          <Button  className="m-2" onClick={() => navigate('/login')}>Get Started</Button>
        </Col>
      </Row>
    </Container>
    
  );
};

export default LandingPage;