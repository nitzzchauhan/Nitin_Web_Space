import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SplashCursor />
  </React.StrictMode>
)