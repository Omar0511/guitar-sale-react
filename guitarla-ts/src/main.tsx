import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ! = Assestion not null, non null assertion operator <-  Se le conoce asi a Typescript que el valor no sera nulo ni undefined
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
