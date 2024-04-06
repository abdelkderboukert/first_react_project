// import React, { useState, useEffect } from 'react';
// import { RemoveScroll } from 'react-remove-scroll';
// import { useQuery } from "@tanstack/react-query";
// import axios from 'axios';

// function TodoList() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get('/api/todo/');
//         setTodos(result.data);
//       } catch (error) {
//         console.log(error);

//       }
//     };
//     fetchData();
//   }, []);

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`/api/delete/${id}`);
//       setTodos(todos.filter((todo) => todo.id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   }


//   return (
//     <RemoveScroll enabled={true}>
//       <div className='hide-scrollbar'>
//         <h1>Todo List</h1>
//         {todos.map((todo) => (
//           <div key={todo.id}>
//             <h3>{todo.title}</h3>
//             <h3>{todo.id}</h3>
//             <p>{todo.description}</p>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </div>
//         ))}
//         <h1>tu</h1>
//       </div>
//     </RemoveScroll>
//   );
// }

// export default TodoList;
import React from 'react';
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from 'axios';

function TodoList() {
  const { data: todos, isLoading, isError, error } = useQuery('todos', () =>
    axios.get('/api/todo/').then((response) => response.data)
  );

  const deleteTodo = useMutation(
    (id) =>
      axios.delete(`/api/delete/${id}`).then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='hide-scrollbar'>
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <h3>{todo.id}</h3>
          <p>{todo.description}</p>
          <button onClick={() => deleteTodo.mutate(todo.id)}>Delete</button>
        </div>
      ))}
      <h1>tu</h1>
    </div>
  );
}

export default TodoList;