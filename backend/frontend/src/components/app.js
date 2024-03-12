import React ,{ Component } from "react";
import { render } from "react-dom";
import HomePage from './homePage';
import Regist from "./regist";
import ReactDOM from 'react-dom';
import Login from "./login";



export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <HomePage></HomePage>
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
