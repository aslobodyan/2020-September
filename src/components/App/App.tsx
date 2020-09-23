import React from 'react';
import css from './App.module.css';
import TaskFirst from "./TaskFirst/TaskFirst";
import TaskSecond from "./TaskSecond/TaskSecond";
import TaskThird from './TaskThird/TaskThird';
import TaskFourth from "./TaskFourth/TaskFourth";

const App = () => {
  return (
    <div className={css.main}>
      <TaskFirst />
      <TaskSecond />
      <TaskThird />
      <TaskFourth />
    </div>
  );
}

export default App;
