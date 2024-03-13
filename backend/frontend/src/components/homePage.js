/*import React, { Component } from "react";
import Regist from "./regist";
import Login from "./login";
import Home from "./home";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import  { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path='/home/:nmcode' element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
    <h1>home</h1>
    </div>
    );
  };
}*/
import React from 'react';
import Regist from './regist';
import Login from './login';
import Home from './home';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/home/:nmcode" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }
}