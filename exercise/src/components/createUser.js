import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUserName] = useState("");
  const [newUser, setNewUser] = useState({ username: "" });

  const onChangeUser = e => {
    setUserName(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (username.length === 0) return;

    const user = { username };

    axios
      .post("http://localhost:5000/users", user)
      .then(res => console.log(res.data));

    setUserName("");
  };

  return (
    <div style={{ width: "50%" }}>
      <h1>Create New User</h1>
      <div>
        <form onSubmit={onSubmit}>
          <div style={{ display: "grid", gap: "20px" }}>
            <label>Username:</label>
            <input type="text" value={username} onChange={onChangeUser} />
            <input
              type="submit"
              value="Create User"
              style={{
                outline: "none",
                backgroundColor: "rgb(15, 155, 236)",
                color: "#fff",
                border: "none"
              }}
            />
          </div>
        </form>
        {/* <p>{newUser}</p> */}
      </div>
    </div>
  );
};

export default CreateUser;
