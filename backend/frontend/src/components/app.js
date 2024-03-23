import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './homePage';
import Regist from "./regist";
import ReactDOM from 'react-dom/client';
import Login from "./login";

export default function App() {
    return (
        <div>
            <HomePage />
        </div>
    )
};



// const appDiv = document.getElementById("app");
// /*render(<App />, appDiv);*/
// const root = ReactDOM.createRoot(appDiv);
// root.render(<App />);
