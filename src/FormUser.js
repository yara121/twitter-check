import React, { useState } from 'react'

import './FormUser.css'
import { Link } from 'react-router-dom'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap'
import axios from 'axios'
import cors from 'cors'

export default function FormUser() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState('')
  const [gender, setGender] = useState('')

  const searchUser = async (user) => {
    const token = ''
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
    const response = await axios.get(
      `https://api.twitter.com/2/users/by/username/${user}`
    )

    console.log(response)
  }

  function handleChangeTwo(e) {
    setImage(e.target.value)
    let file = e.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      let base64String = reader.result
      localStorage.setItem('image', base64String)
      console.log(base64String)
    }
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
    // localStorage.setItem('image', image)
    localStorage.setItem('gender', gender)
    searchUser(user)
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
