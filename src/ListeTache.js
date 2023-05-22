import React from 'react';
import { useSelector } from 'react-redux';
import Tache from './Tache';


function ListeTache() {
  const todos = useSelector((state) => state.todos);
  
  // Ajout d'un log 
  console.log(todos);

  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <Tache key={todo.id} todo={todo} />
        ))
      ) : (
        // Affichage d'un message si todos est vide 
        <p>Aucune tâche à afficher</p>
      )}
    </div>
  );
}

export default ListeTache; 
