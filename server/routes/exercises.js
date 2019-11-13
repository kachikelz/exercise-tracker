const Router = require("express").Router();
const Exercise = require("../models/exerciseModel");

Router.get("/", async (req, res) => {
  const exercise = await Exercise.find();
  res.send(exercise);
});

Router.post("/", async (req, res) => {
  try {
    const { username, description } = req.body;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = await Exercise({
      username,
      description,
      duration,
      date
    });
    await newExercise.save();
    await res.status(200).send("Exercise added ");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

Router.get("/:id", async (req, res) => {
  try {
    const exercise = await findId(req);
    await res.status(200).send(exercise);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

Router.put("/:id", async (req, res) => {
  try {
    const { username, description } = req.body;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = await Exercise.updateOne(
      { _id: req.params.id },
      {
        $set: {
          username,
          description,
          duration,
          date
        }
      }
    );
    // await newExercise.save();
    await res.status(200).send("Exercise updated");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

Router.delete("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.deleteOne({ _id: req.params.id });
    await res.status(200).send("Excerise deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function findId(req) {
  return await Exercise.findById(req.params.id);
}

module.exports = Router;
