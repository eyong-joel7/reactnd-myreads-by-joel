import React from 'react'
import PropTypes from 'prop-types'
import BookList from '../BookList'

const Shelf  = (props) => {
   
        const {shelfName, books,changeShelf} = props;
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
             <BookList books = {books} changeShelf = {changeShelf}/>
            </div>
          </div>
    
        )
    
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired
}

export default Shelf;