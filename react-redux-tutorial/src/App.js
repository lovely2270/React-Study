import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ToDos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
