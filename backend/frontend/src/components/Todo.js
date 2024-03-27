import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([]);

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

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <h3>{todo.id}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
