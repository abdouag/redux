import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AjouterUneTache from './AjouterUneTache'; 
import ListeTache from './ListeTache';

function App() {
  return (
    <Provider store={store}>
      <h1>Bienvenue sur ma Todo List</h1>
      <AjouterUneTache /> 
      <ListeTache />
    </Provider>
  );
}

export default App;
