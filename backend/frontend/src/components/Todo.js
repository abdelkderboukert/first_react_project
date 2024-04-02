import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { RemoveScroll } from 'react-remove-scroll';
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

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/delete/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RemoveScroll enabled={true}>
      <div className='hide-scrollbar'>
        <h1>Todo List</h1>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <h3>{todo.id}</h3>
            <p>{todo.description}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </RemoveScroll>
  );
}

export default TodoList;
