import React, { Component } from "react";

class ShelfControl extends Component {
 state = {
     selected:this.props.book.shelf,
 }

 updateHandler = (e)=>{
this.setState( {
    selected: e.target.value
}, ()=> this.shelfChanger(this.props.book, this.state.selected));
}

shelfChanger = (book, selected) =>{
    console.log(selected)
        this.props.changeShelf(book, selected)
    }
    

  render() {
      console.log(this.state.selected)
    return (
      <div className="book-shelf-changer">
        <select value = {this.state.selected} onChange = {this.updateHandler}>
          <option value="move" disabled>
            Move to...
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
