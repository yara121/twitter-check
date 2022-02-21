import React, { useEffect, useState } from 'react'
import {
  Alert,
  CardGroup,
  CardTitle,
  Container,
  Label,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardImg,
} from 'reactstrap'
import Header from './Header'

export default function User() {
  const [twitter, setTwitter] = useState(false)

  const firstName = localStorage.getItem('name')
  const lastName = localStorage.getItem('lastName')
  const user = localStorage.getItem('user')
  const email = localStorage.getItem('email')
  const image = localStorage.getItem('image')
  useEffect(() => {
    alert(`Hello, ${firstName} ${lastName}`)
  })
  console.log(image)

  const url = `https://api.twitter.com/2/users/by/username/${user}`

  return (
    <div className='grey'>
      <Header />
      <div className='flex-container'>
        <div>
          <h4>
            Name:{firstName} {lastName}
          </h4>
          <h4>email:{email}</h4>
          <img src={image} />
        </div>
        <div>
          <h4>User has a twitter account </h4>

          <h4>Last Tweet:</h4>
        </div>
      </div>
    </div>
  )
}
