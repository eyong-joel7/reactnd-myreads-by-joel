import React from "react";
import "./App.css";
import * as booksApi from "./BooksAPI";
import PropTypes from "prop-types";

import { OpenSearch } from "./components/openSearch";
import Shelf from "./components/Shelf";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  static propsTypes = {
    changeShelf: PropTypes.func.isRequired,
  };
  componentDidMount() {
    booksApi.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

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

  render() {
    const { books } = this.state;
    const currentlyReadingBooks =
      books && books.filter((book) => book.shelf === "currentlyReading");
    const wantToReadBooks =
      books && books.filter((book) => book.shelf === "wantToRead");
    const readBooks = books && books.filter((book) => book.shelf === "read");

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf
                books={currentlyReadingBooks}
                shelfName={"Currently Reading"}
                changeShelf={this.changeShelf}
              />
              <Shelf
                books={wantToReadBooks}
                shelfName={"Want To Read"}
                changeShelf={this.changeShelf}
              />
              <Shelf
                books={readBooks}
                shelfName={"Read"}
                changeShelf={this.changeShelf}
              />
            </div>
          </div>
          <OpenSearch books = {books}/>
        </div>
      </div>
    );
  }
}

export default BooksApp;
