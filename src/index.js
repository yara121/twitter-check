import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import User from './User'
import reportWebVitals from './reportWebVitals'
import { ImageContextProvider } from './imageContext'

ReactDOM.render(
  <ImageContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route exact path='/' element={<App />} />

          <Route path='/user' element={<User />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </ImageContextProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
