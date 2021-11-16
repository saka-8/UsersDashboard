import React from "react";

const Book = (props) => {
  const { img, author, title } = props.book;
  console.log("props", props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author?.toString().toUpperCase()}</h4>
    </article>
  );
};

export default Book;
