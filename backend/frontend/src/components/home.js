
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../../static/css/style.css";
import axios from 'axios';
import Regist from "./regist";

const url = 'https://api.github.com/users';

const Home = () => {
  const [num, setNum] = useState(0)
  const buttonAffectclick = () => {
    setNum(num + 1);
  }
  const [users, setUsers] = useState([])
  const [value, setValue] = useState(true)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users)
      } catch (error) {
        console.log('try again');
      }

    };
    fetchData();

  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/api/todo/');
        setTodos(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const change = () => {
    setValue(!value)
  }
  return (
    <>
      <h1>N= {num}</h1>
      {value ? <button type="button" className="btn" style={{ backgroundColor: 'green' }} onClick={change}>stare</button> : <><button type="button" className="btn" onClick={buttonAffectclick}>add 1 to N</button>
        <button type="button" className="btn" style={{
          backgroundColor: 'red',
          margin: '10px'
        }} onClick={change}>stope</button></>}
      {/* <ul>
        {users.map((user) => {
          console.log(user);
          return <li key={user.id}><h4>{user.login}</h4>
            <img style={{ borderRadius: '20px' }} src={user.avatar_url} alt="profile" />
            <a href={user.html_url}>Profile</a>
          </li>;
        })}</ul> */}
      <ul>
        {todos.map((todo) => {
          return <div key={todo.id}>
            <h3>{todo.title}</h3>
            <h3>{todo.id}</h3>
            <p>{todo.description}</p>
            <button className="btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>;
        })}
      </ul>
      <Regist />
    </>);
}

export default Home;


