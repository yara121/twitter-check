import React, { useEffect, useState } from 'react'

import Header from './Header'

export default function User() {
  const [twitter, setTwitter] = useState(false)
  const [tweet, setTweet] = useState('')
  const [proilePic, setProfilePic] = useState('')

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
    <div>
      <Header />
      <div className='flex-container'>
        <div>
          <h4>
            Name:{firstName} {lastName}
          </h4>
          <h4>email:{email}</h4>
          <img src={image} />
        </div>
        {twitter && (
          <div>
            <h4>User: {{ user }} </h4>

            <h4>Last Tweet:{{ tweet }}</h4>
            <img src={{ proilePic }}></img>
          </div>
        )}
      </div>
    </div>
  )
}
