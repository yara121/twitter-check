import React, { useState } from 'react'

import './FormUser.css'
import { Link } from 'react-router-dom'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
import User from './User.js'
import Header from './Header'
import { Consumer } from './imageContext'

export default function FormUser() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState('')
  const [gender, setGender] = useState('')

  function handleChangeTwo(e) {
    setImage(e.target.value)
    image = `http://localhost:8080/${e.target.value}`
    getBase64(image).then((base64) => {
      localStorage['fileBase64'] = base64
      console.debug('file stored', base64)
    })
  }
  function handleChange(e) {
    e.preventDefault()
    setGender(e.target.value)
  }
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
      reader.readAsDataURL(file)
    })
  }

  function handleSubmit(e) {
    localStorage.setItem('name', name)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('user', user)
    localStorage.setItem('password', password)
    localStorage.setItem('phone', phone)
    localStorage.setItem('email', email)
    localStorage.setItem('image', image)
    localStorage.setItem('gender', gender)
  }
  return (
    <div>
      <div id='form'>
        <Form col={6} className='form'>
          <FormGroup>
            <Label>
              First Name:
              <Input
                type='text'
                placeholder='first name'
                onChange={(e) => setName(e.target.value)}
                name='name'
                value={name}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Last Name:
              <Input
                type='text'
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
                name='lastName'
                value={lastName}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              User Name:
              <Input
                type='text'
                placeholder='User'
                onChange={(e) => setUser(e.target.value)}
                name='user'
                value={user}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Password:
              <Input
                type='password'
                placeholder='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Email:
              <Input
                type='text'
                placeholder='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Phone Number:
              <Input
                type='text'
                placeholder='phone number'
                name='phone'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Profile Image:
              <Input
                type='file'
                placeholder='image'
                name='image'
                onChange={handleChangeTwo}
                value={image}
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Gender:
              <div onChange={handleChange}>
                Male
                <Input
                  type='radio'
                  placeholder='male'
                  name='gender'
                  value='male'
                />
                Female
                <Input
                  type='radio'
                  placeholder='female'
                  name='gender'
                  value='female'
                />
              </div>
            </Label>
          </FormGroup>
          <Link to='/User'>
            <Button type='submit' onClick={handleSubmit}>
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  )
}
