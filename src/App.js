import react from 'react'
import { Link } from 'react-router-dom'
import FormUser from './FormUser'

import User from './User'
import Header from './Header'
import './App.css'

function App() {
  return (
    <div className='App' className='grey'>
      <Header />
      <FormUser />
    </div>
  )
}

export default App
