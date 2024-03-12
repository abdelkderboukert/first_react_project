import React, { Component } from "react";
import Regist from "./regist";
import Login from "./login";
import Home from "./home";
import { BrowserRouter as Router, Route, Link, Navigate, Routes } from 'react-router-dom';

export default class HomePagr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/home/:nm" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    );
  };
}