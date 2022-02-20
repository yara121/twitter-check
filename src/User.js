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

  const url = `https://api.twitter.com/2/users/by/username/${user}`

  return (
    <div>
      <Header />
      <div className='flex-container'>
        <div>
          
            <h2>
              Name:{firstName} {lastName}
            </h2>
            <h2>email:{email}</h2>
            <img src= {image} />
          
        </div>
        <div>
          
            <h2>User has a twitter account </h2>

            <h2>Last Tweet:</h2>
          
        </div>
      </div>
    </div>
  )
}
