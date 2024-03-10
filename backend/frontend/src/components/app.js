import React ,{ Component } from "react";
import { render } from "react-dom";
import homePage from './homePage'
import login from './login'
import regist from "./regist";

export default class app extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
        <homePage></homePage>
        </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<app />, appDiv)