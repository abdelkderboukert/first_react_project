import React ,{ Component } from "react";
import { render } from "react-dom";
import HomePage from './homePage';
import Regist from "./regist";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <HomePage></HomePage>
            <p>fhnfhnf</p>
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
createRoot(appDiv).render(<App />, appDiv)