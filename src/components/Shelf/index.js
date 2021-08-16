import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from '../BookList'

export default class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        const {shelfName, books,changeShelf} = this.props;
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
             <BookList books = {books} changeShelf = {changeShelf}/>
            </div>
          </div>
    
        )
    }
}
