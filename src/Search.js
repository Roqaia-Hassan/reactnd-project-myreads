import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      query: "",
      books: []
    }
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) =>{
      console.log(books)
      this.props.addBooks(books)
     }
     )}
// Declaring the handleChange function that updates the search page with the returned books from the searched BooksAPI according to the input text
  handleChange= async (event) =>{
    event.persist();
    try{
      const query= event.target.value;
      this.setState({query});
      // using (if statment) to clear the search results when all of the text is deleted out of the search input box
      if(query.trim()){
        const searchResults= await search(query)
           if(searchResults.error){
             this.setState({books: []})
          }
          else{
             this.setState({books: searchResults})
          }
        console.log(searchResults)
    }
    else{
      this.setState({books: []})
    }
    } catch(error){
      console.log(error)
    }
  }
    render(){
      const{ query, books }= this.state;
      const{ moveBook }= this.props;
        return(
          // Navigating from the search page to the home page using (Link component)
            <div className="search-books">
            <div className="search-books-bar">
              
            <Link className="close-search"  to= '/'>close</Link>
             
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange= {this.handleChange} value= {query}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books.length > 0 && books.map((book) =>{ /*Using the map array property to map over all the books*/
                  const findShelf= this.props.books.find( /*Using the find array property to find new shelf of the searched book is the shelf that we moved it to*/
                    searchedBook=> searchedBook.id === book.id
                  );
                  // using (if statment) to assign the value "none " to all other books that don't have assigned shelf
                  if(findShelf){
                    book.shelf= findShelf.shelf
                  }
                  else{
                    book.shelf= 'none'
                  }
                  console.log(findShelf);
                  return(
                    // Displaying the search results (books) returned from the API at the search page 
                    <Book key={book.id} {...book} moveBook={moveBook}/>
                  );
                })}
                {books.length === 0 && <h1 style={{textAlign: 'center'}}>There is No Books Found</h1>/* Handling the invalid queries*/} 
              </ol>
            </div>
          </div>
        )
    }
}
//Exporting the Search component to be used out of its scope
export default Search