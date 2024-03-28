import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Regist from './regist';

function TodoList() {
  const [todos, setTodos] = useState([]);
  let [five, setFIVE] = useState([]);


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

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/delete/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  const handleRegisterButtonClick = () => {
    history.push("/regist");
  }

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <h3>{todo.id}</h3>
          <p>{todo.description}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
      <button type="button" onClick={Regist}></button>
    </div>
  );
}

export default TodoList;
