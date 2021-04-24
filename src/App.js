import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Search from './Search'
import Provider from './Provider/'
import {MyContext} from './Provider/MyContext'
import './App.css'


class BooksApp extends Component {

  render() {
    return (
      // Using the context provider to pass down the props
      // Using the (Route component) to switch between the home page and the search page
      <div className="app">
        <Provider>
        <Route exact path='/' render={()=> (
          <MyContext.Consumer>
            {(context) => (<Home {...context}/>)}
          </MyContext.Consumer>
        )}/>
        <Route exact path='/search' render={({history})=> (
          <MyContext.Consumer>
            {(context) => (<Search {...context}/>)}
          </MyContext.Consumer>
        )}/>
        </Provider>
        
        
      </div>
    )
  }
}
//Exporting the BooksApp component to be used out of its scope
export default BooksApp
