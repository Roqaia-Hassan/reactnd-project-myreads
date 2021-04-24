import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class Home extends Component{

  // Using the (componentDidMount) life cycle event to get the books from the API
   componentDidMount(){
     BooksAPI.getAll()
     .then((books) =>{
       console.log(books)
       this.props.addBooks(books)
      }
      )}
     
    render(){
      const { currentlyReading, wantToRead, read, moveBook }= this.props;

// Assigning the books to each corresponding shelves      
// Navigating from the home page to the search page using (Link component)
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content" > 
              <Shelf title='Currrently Reading' books= {currentlyReading} moveBook= {moveBook}/> 
              <Shelf title='Want To Read' books= {wantToRead} moveBook= {moveBook}/>
              <Shelf title='Read' books= {read} moveBook= {moveBook}/>
            </div>
            <div className="open-search">              
              <Link to= '/search' className= 'add-book'><button/></Link>
            
            </div>
          </div>
        
        )
    }
}
//Exporting the Home component to be used out of its scope
export default Home
