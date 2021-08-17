import React, { Component } from "react";

class ShelfControl extends Component {
  state = {
    selected: "none",
  };

  updateHandler = (e) => {
      const alertText = this.props.book.shelf ? 'will be moved to ' : 'wiil be added to'
     
    this.setState(
      {
        selected: e.target.value,
      },
      () => {
        this.shelfChanger(this.props.book, this.state.selected);
        
        alert(`${this.props.book.title} ${alertText} ${this.state.selected}`);
      }
    );
  };

  shelfChanger = (book, selected) => {
    this.props.changeShelf(book, selected);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf || this.state.selected}
          onChange={this.updateHandler}
        >
          <option value= {this.props.book.shelf || this.state.selected!=='none' ? 'Move' : 'Add' } disabled>
            {this.props.book.shelf || this.state.selected!=='none' ? 'Move to...' : 'Add to...' }
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfControl;
