import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const CreateExercise = () => {
  const [newExercise, setNewExercise] = useState([]);
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: []
  });
  const [demo, setDemo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users").then(res => {
      if (res.data.length > 0) {
        setExercise({
          ...exercise,
          users: res.data.map(({ username }) => username),
          username: res.data[0].username
        });
      }
    });
  }, []);

  const onChangeUsername = e => {
    setExercise({ ...exercise, username: e.target.value });
  };
  const onChangeDescription = e => {
    setExercise({ ...exercise, description: e.target.value });
  };
  const onChangeDuration = e => {
    setExercise({ ...exercise, duration: e.target.value });
  };
  const onChangeDate = date => {
    setExercise({ ...exercise, date });
  };
  const onSubmit = e => {
    e.preventDefault();
    const { username, description, duration, date } = exercise;

    // setNewExercise({ username, description, duration, date });
    const exc = {
      username,
      description,
      duration,
      date
    };
    axios
      .post("http://localhost:5000/exercises", exc)
      .then(res => console.log(res))
      .catch(error => console.log(error));
    window.location = "/";
  };
  const { username, description, duration, date, users } = exercise;
  return (
    <div className="exercise-form">
      <h1>CreateExercise</h1>
      <form onSubmit={onSubmit}>
        <div className="select-user">
          <label>Username:</label>
          <select
            name="userInput"
            required
            value={username}
            onChange={onChangeUsername}
          >
            {users.map(user => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="description">
          <label>Description: </label>
          <input
            type="text"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="duration">
          <label>Duration(minites): </label>
          <input type="text" value={duration} onChange={onChangeDuration} />
        </div>
        <div className="date-picker">
          <label>Date:</label>
          <DatePicker selected={date} onChange={onChangeDate} />
        </div>
        <div>
          <input
            type="submit"
            value="Create exercise log"
            className="create-exercise"
          />
        </div>
      </form>
      {/* {console.log(newExercise)} */}
    </div>
  );
};

export default CreateExercise;
