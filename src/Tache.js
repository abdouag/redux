import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';

function Tache({ todo }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleTodo(todo.id)); 
    console.log(todo);

    
  };

  return (
    <div>
      <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
        {todo.description}
      </span>
      <input type="checkbox" checked={todo.isDone} onChange={handleChange} />
    </div>
  );
  
}

export default Tache;
