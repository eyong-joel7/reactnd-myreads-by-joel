import React from "react";

export const Authors = (props) => {
  const { authors } = props;
  return (
<>
      {authors && authors.map((author,index) => (
        <div key = {index} className="book-authors">{author}</div>
      ))}
</>
  );
};
