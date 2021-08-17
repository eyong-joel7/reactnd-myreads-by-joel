import React from "react";
import PropTypes from "prop-types";
import Book from "../Book";

const BookList  = (props) => {
    const { books, changeShelf } = props;
    return (
      <ol className="books-grid">
        {books &&
          books.map(
            (book) =>
              book.imageLinks &&
              book.imageLinks.thumbnail &&
              book.authors && (
                <li key={book.id}>
                  {" "}
                  <Book book={book} changeShelf={changeShelf} />
                </li>
              )
          )}
      </ol>
    );

}
BookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};
export default BookList 