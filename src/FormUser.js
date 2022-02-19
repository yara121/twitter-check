import React, { useState } from 'react'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
import User from './User.js'

export default function FormUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    image: '',
    gender: '',
  })

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }
  function handleSubmit(formData) {
    console.log(formData.firstName)
    localStorage.setItem('firstName', formData.firstName)
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            First Name:
            <Input
              type='text'
              placeholder='First Name'
              onChange={handleChange}
              name='firstName'
              value={formData.firstName}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Last Name:
            <Input
              type='text'
              placeholder='Last Name'
              onChange={handleChange}
              name='lastName'
              value={formData.lastName}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Password:
            <Input
              type='password'
              placeholder='password'
              onChange={handleChange}
              name='password'
              value={formData.password}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Email:
            <Input
              type='text'
              placeholder='email'
              onChange={handleChange}
              name='email'
              value={formData.email}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Phone Number:
            <Input
              type='text'
              placeholder='phone number'
              onChange={handleChange}
              name='phone'
              value={formData.phone}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Profile Image:
            <Input
              type='file'
              placeholder='image'
              onChange={handleChange}
              name='image'
              value={formData.image}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Gender:
            <fieldset>
              Male
              <Input
                type='radio'
                placeholder='male'
                onChange={handleChange}
                name='gender'
                value='male'
              />
              Female
              <Input
                type='radio'
                placeholder='female'
                onChange={handleChange}
                name='gender'
                value='female'
              />
            </fieldset>
          </Label>
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      <User data={formData} />
    </div>
  )
}
