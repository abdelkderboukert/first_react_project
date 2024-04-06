import React from 'react';
import Regist from './regist';
import Login from './Login';
import Home from './home';
import BookL from './BookL';
import TodoList from './Todo';
import Test from './test';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


export default function HomePage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BookL />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<Regist />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<h1>hh</h1>} />
      </Routes>
    </Router>
  )
}
