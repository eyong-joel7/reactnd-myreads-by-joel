import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "../BookList";
import * as booksApi from "../../BooksAPI";
export default class Search extends Component {
  state = {
    books: this.props.location.state.books,
    queriedBooks: [],
    query: "",
  };

  updateShelf = () => {
    const { books, queriedBooks } = this.state;
    if (Array.isArray(books) && Array.isArray(queriedBooks)) {
      for (let oldBook = 0; oldBook < books.length; oldBook++) {
        for (let newBook = 0; newBook < queriedBooks.length; newBook++) {
          if (queriedBooks[newBook].id === books[oldBook].id) {
            const shelf = books[oldBook].shelf;
            queriedBooks[newBook].shelf = shelf;
            this.setState(() => ({
              queriedBooks: queriedBooks,
            }));
          }
        }
      }
    }
  };

  changeShelf = (book, shelf) => {
    booksApi.update(book, shelf).then((res) =>
      booksApi.getAll().then((books) =>
        this.setState(
          {
            books,
          }
        )
      )
    );
  };
  changeHandler = (event) => {
    this.setState(
      {
        query: event.target.value,
      },
      () =>
        booksApi.search(this.state.query.trim()).then((books) =>
          this.setState(
            () => ({
              queriedBooks: books,
            }),
            () => this.updateShelf()
          )
        )
    );
  };
  render() {
    const { query, queriedBooks } = this.state;
// console.log(this.props.state.location.books)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.changeHandler}
            />
          </div>
        </div>
        <div className="search-books-results">
          {queriedBooks && Array.isArray(queriedBooks) && (
            <BookList books={queriedBooks} changeShelf={this.changeShelf} />
          )}
        </div>
      </div>
    );
  }
}
