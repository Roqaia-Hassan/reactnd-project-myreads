import React, { Component } from 'react'
import { update } from './BooksAPI'

class Book extends Component{
  
// Declaring the handleChange function that updates the books place at the new shelf choosen from the dropdown menue
  handleChange= async (event) =>{
    event.persist();
    try{
      const book= this.props
      const shelf= event.target.value
      const updateResults= await update(book, shelf)
      this.props.moveBook(book, shelf, updateResults)
      console.log(updateResults)
    } catch(error){
      console.log(error)
    }
  }
  render(){
    const { title, authors, shelf, imageLinks } = this.props;

// Displaying the books returned from the API at the home page    
    return(
        <div>
            <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks? imageLinks.thumbnail : ""})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange= {this.handleChange} value= {shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors? authors : 'No Authors Found'}</div>
                        </div>
                      </li>
        </div>
            

    )
  }
}
//Exporting the Book component to be used out of its scope
export default Book