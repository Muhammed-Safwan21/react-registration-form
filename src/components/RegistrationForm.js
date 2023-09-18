import React from 'react';
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './RegistrationForm.css'; 

const RegistrationForm = () => {
  const { values, handleInput, reset, validate, errors } = useForm();

  const submitForm = (event) => {
    event.preventDefault();
    if (validate()) {
      alert("Submitted");
    }
  };

  return (
    <>
      <Form onSubmit={submitForm} className="registration-form">
        <InputField
          label='Full Name'
          type='text'
          name="fullName"
          placeholder='Enter Your Full Name'
          value={values.fullName}
          onChange={handleInput}
          error={errors.fullName}
        />

        <InputField
          label='Email Address'
          type='email'
          name="email"
          placeholder='name@example.com'
          value={values.email}
          onChange={handleInput}
          error={errors.email}
        />

        <InputField
          label='Password'
          type='password'
          name="password"
          placeholder='Strong Password'
          value={values.password}
          onChange={handleInput}
          error={errors.password}
        />

        <InputField
          label='Confirm Password'
          type='password'
          name="confirmPassword"
          placeholder='Confirm Password'
          value={values.confirmPassword}
          onChange={handleInput}
          error={errors.confirmPassword}
        />

        <div className="mt-3">
          <Button type="submit" className="btn-register">Register</Button>
          {" "}
          <Button variant="outline-secondary" onClick={reset}>Reset</Button>
        </div>
      </Form>
    </>
  );
}

export default RegistrationForm;

// InputField and useForm components remain the same


const InputField =({label,error,...props})=>{
    return(
      <Form.Group className="mb-3" >
          <Form.Label>{label}</Form.Label>
          <Form.Control {...props} className={error ? "is-valid" :""} />
          {
            error &&
            <div className="text-danger">{error}</div>
          }
          
        </Form.Group>
  
    )
  }
  
  
  const useForm = () => {
    const [values, setValues] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleInput = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
  
    const reset = () => {
      setValues({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    };
  
    const validate = () => {
      setErrors({});
      const newErrors = {};
  
      if (values.fullName.length < 4) {
        newErrors.fullName = "Too short";
      }
  
      if (
        !values.email.match(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        )
      ) {
        newErrors.email = "Not a valid email";
      }
  
      if (values.password.length < 8) {
        newErrors.password = "Too short";
      }
  
      if (values.password !== values.confirmPassword) {
        newErrors.confirmPassword = "Does not match";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    return { values, handleInput, reset, validate, errors };
  };