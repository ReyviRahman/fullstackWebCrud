import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import Button from 'react-bootstrap/Button';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { username: username, password: password};
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='w-50 border border-primary rounded-4 p-4'>
        <h1 className='text-center'>Login</h1>
        <Form.Label>Username:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </InputGroup>
        <Form.Label>Password:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Password"
            aria-label="Password"
            type='password'
            aria-describedby="basic-addon1"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </InputGroup>
        <div className='d-grid'>
          <Button variant="primary" onClick={login}>Primary</Button>
        </div>
      </div>
    </div>
  )
}

export default Login