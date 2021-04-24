import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component{
  render(){
    const { books, title, moveBook }= this.props;
    return(
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.map(book=> <Book key= {book.id} {...book} moveBook= {moveBook}/>)}
                    </ol>
                  </div>
                </div>

    )
  }
}
//Exporting the Shelf component to be used out of its scope
export default Shelf