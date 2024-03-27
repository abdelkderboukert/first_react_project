import React from "react";
import ReactDOM from "react-dom/client";
import "../../static/css/index.css";
import { dates } from "./dates"
import Book from "./date"
import image from "../../static/images/image1.jpg"

function BookL(props) {
    console.log(props)
    let i = 0;
    return (
        <section className='hh'>
            {dates.map((date) => {
                i = i + 1;
                return <Book  {...date} key={date.index} i={i} />;
            })}
            <img src={image} alt="" />
        </section>
    );
}
export default BookL;