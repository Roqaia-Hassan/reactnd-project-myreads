import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Rendering the App to the (root) DOM element using (ReactDom.render)
ReactDOM.render(
    //Wrapping the browser router component around the App
<BrowserRouter>
<App />
</BrowserRouter>,
 document.getElementById('root'))
