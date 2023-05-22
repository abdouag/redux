import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice'; 

function AjouterUneTache() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() !== "") {
      dispatch(addTodo({ description: input, isDone: false })); 
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AjouterUneTache;
