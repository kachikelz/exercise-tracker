import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then(res => setExercises(res.data))
      .catch(err => console.log(err));
  }, []);
  const onDeleteExercise = id => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then(res => console.log("deleted"))
      .catch(err => console.log(err));

    setExercises(exercises.filter(e => e._id !== id));
  };

  function exerciseItem(exercises, onDeleteExercise) {
    return exercises.map(exercise => {
      return (
        <ExerciseItem key={exercise._id} {...exercise} del={onDeleteExercise} />
      );
    });
  }

  return (
    <div className="list">
      <div className="logo">
        <h1>Logged Exercise</h1>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{exerciseItem(exercises, onDeleteExercise)}</tbody>
        </table>
      </div>
    </div>
  );
};

const ExerciseItem = ({ _id, description, username, date, duration, del }) => {
  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <button
          style={{ border: "none", background: "none", cursor: "pointer" }}
          onClick={() => del(_id)}
        >
          Delete
        </button>
        {" | "}
        <button
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <Link to={`/edit/${_id}`} style={{ textDecoration: "none" }}>
            Edit
          </Link>
        </button>
      </td>
    </tr>
  );
};

export default ExerciseList;
