import React, { Component } from "react";
import login from './login'
import regist from "./regist";
import { BrowserRouter as Router,Switch, Route, Link, Reirect} from "react-router-dom";


export default class homePagr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Router>
            <Switch>
                <Route path="/">
                    <p>this is home page</p>
                </Route>
                <Route path="/login" Component={login} />
                <Route path="/regist" Component={regist} />
            </Switch>
        </Router> );
    }
}