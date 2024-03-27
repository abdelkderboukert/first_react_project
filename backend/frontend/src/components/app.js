import React from "react";
import ReactDOM from "react-dom/client";
import "../../static/css/index.css";
import { dates } from "./dates"
import Book from "./date"
import Homepage from "./homePage"
import image from "../../static/images/image1.jpg"
//import { BrowserRouter } from 'react-router-dom';




function App(props) {
    return <Homepage />;
}



const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<App />);

