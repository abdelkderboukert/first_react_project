
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../../static/css/style.css";

const Home = () => {
  const [num, setNum] = useState(0)
  const buttonAffectclick = () => {
    setNum(num + 1);
  }
  return (
    <>
      <h1>N = {num}</h1>
      <button type="button" onClick={buttonAffectclick}>add 1 to N</button>
    </>);
}

export default Home;


