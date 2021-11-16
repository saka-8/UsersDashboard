import React from "react";
import ReactDom from "react-dom";
import "./index.css";

import Book from "./components/Book";

const data = [
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/51Bh-cYbz8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "hello hi bye bye",
    author: "Amelina Sakari",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41qioknVlxL._SX348_BO1,204,203,200_.jpg",
    title: "Storytelling: Learning Handbook",
    author: "Artemis Provou",
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/619WUw7ee1L._SX428_BO1,204,203,200_.jpg",
    title:"The Day You Begin",
    author:"Jacqueline Woodson",
  }
];
const Booklist = () => {
  return (
    <div>
      <section className="booklist">
        {data.map((list) => {
          const { img, title, author } = list;
          return (
            <div>
             <Book book={list}></Book>
            </div>
          );
        })}

        {/* <Book img={data.img} title={data.title} author={data.author} />
        <Book img={data1.img} title={data1.title} author={data1.author} /> */}
      </section>
    </div>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
