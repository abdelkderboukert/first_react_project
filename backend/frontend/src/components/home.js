
import React, { Component } from "react";
import { useState } from "react";
import "../../static/css/style.css";
import { dates } from "./dates";

const Home = () => {
  let [count, setCount] = useState(0)
  let countbtn = () => {
    setCount(count + 1);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">ALGERIA ON</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="">update profile</a></li>
              <li className="nav-item"><a className="nav-link" id="logo" href="">logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">ALG ON</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">The site will offer a user-friendly interface where
                candidates will be able to download
                their cv.</h2>
            </div>

          </div>
        </div>
      </header>
      <h1>{count}</h1>
      <button onClick={countbtn} type="button" className='btn'>add +1</button>
    </>
  );
}

export default Home;
