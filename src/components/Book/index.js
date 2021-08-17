import React from "react";
import { Authors } from "../bookAuthors";
import ShelfControl from "../shelfChanger";

 const Book = (props) => {
  
    const { book, changeShelf} = props;
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
          <ShelfControl book = {book} changeShelf = {changeShelf} />
        </div>
        <div className="book-title">{title}</div>
       {
           authors && <Authors authors={authors} />
       } 
      </div>
    );
  
}

export default  Book;