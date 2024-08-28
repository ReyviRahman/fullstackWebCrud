import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as BootstrapForm } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {
  const initialValues = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(6).required()
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='w-50 border border-primary mt-5 p-5 rounded-4 mx-auto'>
          <h1 className='text-center'>Register</h1>
          <BootstrapForm.Group className='mb-3'>
            <BootstrapForm.Label>Username: </BootstrapForm.Label>
            <ErrorMessage className='text-danger d-block' name='username' component='span'/>
            <Field as={BootstrapForm.Control} id='inputCreatePost' name='username' placeholder='Masukkan Username'/>
          </BootstrapForm.Group>
          
          <BootstrapForm.Group className='mb-3'>
            <BootstrapForm.Label>Password: </BootstrapForm.Label>
            <ErrorMessage name='title' className='text-danger d-block' component='span'/>
            <Field as={BootstrapForm.Control} id='inputCreatePost' name='password' type="password" placeholder='Masukkan Password'/>
          </BootstrapForm.Group>
          
          <div className='d-grid'>
            <Button variant="primary" type='submit fw-bold'>Create Post</Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Register