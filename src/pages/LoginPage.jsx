import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';


const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showHint, setshowHint] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin') {
      navigate('/admin');
    } else if (credentials.username === 'user') {
      navigate('/user');

    } else {
      alert ('for admin USERNAME:admin  PASS:admin                                             for user USERNAME:user  PASS:user');
    }
  };

  return (
    <Container data-aos="fade-up" className="">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
      <div>
      <button className='evbt' onClick={()=> setshowHint(!showHint)}>Hint</button>

      {showHint &&(
        <Alert>
          <strong>ADMIN : </strong>username:"admin" / password: "admin"<br></br>
          <strong>USER : </strong>username:"user" / password: "user"

        </Alert>
      )}
      </div>
      
    </Container>
  );
};

export default LoginPage;