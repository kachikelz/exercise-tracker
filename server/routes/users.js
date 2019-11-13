const Router = require("express").Router();
const User = require("../models/userModel");

Router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

Router.post("/", async (req, res) => {
  try {
    const username = req.body.username;
    const newUser = await User({ username });

    await newUser.save();
    await res.json("User add");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

Router.delete("/:id", async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
module.exports = Router;
