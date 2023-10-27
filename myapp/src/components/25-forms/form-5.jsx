import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import * as Yup from "yup";

const Form5 = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please enter first name")
      .min(2, "Please enter a valid first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    phone: Yup.string().required("Please enter your phone")
  });


  const onSubmit = (values) => { 
    console.log(values);
  }


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <Container className="mt-5">
      <Form noValidate>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder=""
          {...formik.getFieldProps("firstName")}
    
          
          />
          <Form.Control.Feedback type="invalid">
            Please enter your first name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="" {...formik.getFieldProps("lastName")}/>
          <Form.Control.Feedback type="invalid">
            Please enter your last name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" {...formik.getFieldProps("email")}/>
          <Form.Control.Feedback type="invalid">
            Please enter your email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="" {...formik.getFieldProps("phone")}/>
          <Form.Control.Feedback type="invalid">
            Please enter your phone
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Form5;
