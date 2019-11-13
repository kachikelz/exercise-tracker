import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/nav";
import ExerciseList from "./components/exerciseList";
import EditExercise from "./components/editExercise";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </div>
  );
};

export default App;
