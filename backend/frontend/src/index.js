// import App from './components/App'
import React from "react";
import ReactDOM from "react-dom/client";
import '../static/css/index.css';
import { dates } from "./dates"
import Book from "./date"
import Homepage from "./components/homePage"
import image from "../static/images/image1.jpg"
import HomePage from "./components/homePage";
//import { BrowserRouter } from 'react-router-dom';




function BookList(props) {
    console.log(props)
    let i = 0;
    return (
        <section className='hh'>
            {dates.map((date) => {
                i = i + 1;
                return <Book  {...date} key={date.index} i={i} />;
            })}
            <img src={image} alt="" />
            <HomePage />
        </section>
    );
}



const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<BookList />);


