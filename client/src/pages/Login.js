import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setAuthState} = useContext(AuthContext);
  
  const login = () => {
    const data = { username: username, password: password};
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if(response.data.error){
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);
        navigate('/');
      } 
    });
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='w-50 border border-primary rounded-4 p-5'>
        <h1 className='text-center'>Login</h1>
        <Form.Label>Username:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Masukkan Username"
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
            placeholder="Masukkan Password"
            aria-label="Password"
            type='password'
            aria-describedby="basic-addon1"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </InputGroup>
        <div className='d-grid'>
          <Button variant="primary" onClick={login}>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login