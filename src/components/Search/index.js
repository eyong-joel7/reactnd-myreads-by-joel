import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from "../BookList";
import * as booksApi from "../../BooksAPI";
export default class Search extends Component {
  state = {
    books: [],
    queriedBooks: [],
    query: "",
  };

  componentDidMount() {
    booksApi.getAll().then((books) => {
      this.setState(
        () => ({
          books: books,
        }),
        () => console.log(`BOOKS ADDED`)
      );
    });
  }
  changeHandler = (event) => {
    this.setState({
        query: event.target.value,
      }, ()=>booksApi.search(this.state.query).then((books) =>
      this.setState(() => ({
        queriedBooks: books,
      }))
    ) );
 
  };
  render() {
    const { query, queriedBooks } = this.state;
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
            <BookList books={queriedBooks} />
          )}
        </div>
      </div>
    );
  }
}
