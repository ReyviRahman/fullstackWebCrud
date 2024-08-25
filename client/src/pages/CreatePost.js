import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as BootstrapForm } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  let navigate = useNavigate();

  const initialValues = {
    title: "",
    postText: "",
    username: ""
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required()
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      navigate('/');
    });
  };


  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='w-50 border border-primary mt-5 p-5 rounded-4 mx-auto'>
          <BootstrapForm.Group className='mb-3'>
            <BootstrapForm.Label>Title: </BootstrapForm.Label>
            <ErrorMessage name='title' className='text-danger d-block' component='span'/>
            <Field as={BootstrapForm.Control} id='inputCreatePost' name='title' placeholder='Tulisankan Judul'/>
          </BootstrapForm.Group>
          <BootstrapForm.Group className='mb-3'>
            <BootstrapForm.Label>Post: </BootstrapForm.Label>
            <ErrorMessage name='postText' className='text-danger d-block' component='span'/>
            <Field as={BootstrapForm.Control} id='inputCreatePost' name='postText' placeholder='Tulisankan Postingan'/>
          </BootstrapForm.Group>
          <BootstrapForm.Group className='mb-3'>
            <BootstrapForm.Label>Username: </BootstrapForm.Label>
            <ErrorMessage className='text-danger d-block' name='username' component='span'/>
            <Field as={BootstrapForm.Control} id='inputCreatePost' name='username' placeholder='Tulisankan Username'/>
          </BootstrapForm.Group>
          <div className='d-grid'>
            <Button variant="primary" type='submit fw-bold'>Create Post</Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost