import React, { Component } from 'react'
//Importing the MYContext constant to be used in thee index component
import { MyContext } from './MyContext'

class ReactIndex extends Component{

// Adding a class constructor that assigns the initial (this.state) to make the provider handle our books
    constructor(){
        super();
        this.state= {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: [],
            addBooks: books=> {
                //Using the filter array property to filter the books to assign each book to its corresponding shelf
                const currentlyReading= books.filter(book=> book.shelf=== 'currentlyReading');
                const wantToRead= books.filter(book=> book.shelf=== 'wantToRead');
                const read= books.filter(book=> book.shelf=== 'read');
                console.log(currentlyReading, wantToRead, read);
                this.setState({books, currentlyReading, wantToRead, read})
            },
            moveBook: (book, newShelf, allShelfs) =>{
                console.log(newShelf);
                //Using the map array property to map over all the books 
                const newBooks= this.state.books.map((books)=>{
                    if (newShelf === 'none') {
                        this.setState(prevState => ({
                          books: prevState.books.filter(bookID => bookID !== books.id)
                      }));
                      
                    } else{
                    //Using the find array property to find new shelf is the shelf that we moved it to
                    const foundID= allShelfs[newShelf].find(
                        bookID=> bookID=== books.id
                    );
                    console.log(allShelfs);
                    console.log(allShelfs[newShelf]);
                    if(foundID){
                        books.shelf= newShelf
                    }}
                    return books;
                });
                this.state.addBooks(newBooks);
            }

        };
    }

    render(){
        return(
            
            //Passing the state with the spread operator to pass it to all childrens
            <MyContext.Provider value={{...this.state }}>
                 {this.props.children}
            </MyContext.Provider>
        );
    }

}
//Exporting the ReactIndex component to be used out of its scope
export default ReactIndex

