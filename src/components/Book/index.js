import React, { Component } from "react";
import { Authors } from "../bookAuthors";
import ShelfControl from "../shelfChanger";

export default class Book extends Component {
  render() {
    const { book, changeShelf } = this.props;
    const {
      authors,
      imageLinks: { thumbnail },
      title,
 
    } = book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnail})`,
            }}
          />
          <ShelfControl book = {book} changeShelf = {changeShelf}/>
        </div>
        <div className="book-title">{title}</div>
        <Authors authors={authors} />
      </div>
    );
  }
}
