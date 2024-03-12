import React, { Component } from "react";
import Regist from "./regist";
import Login from "./Login";
import Home from "./home";
import { BrowserRouter as Router, Route, Link, Navigate } from 'react-router-dom';

export default class HomePagr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Router>
    );
  };
}