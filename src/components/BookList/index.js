import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../Book";

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
      const {books, changeShelf}  = this.props
    return (
      <ol className="books-grid">
          {
              books.map(book => (
               <li key ={book.id}><Book   book = {book} changeShelf = {changeShelf} /></li> 
              ))
          }
      
      </ol>
    );
  }
}
