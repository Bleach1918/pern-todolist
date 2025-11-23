import React from 'react';
import './App.css';

//components
import InputTodo from "./components/InputTodos";
import ListTodos from './components/ListTodos';

function App() {
  return (
    <>
      <InputTodo/>
      <ListTodos/>
    </>
  );
}

export default App;
