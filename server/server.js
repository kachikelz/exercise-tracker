const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(cors());

// db connection
const uri = process.env.DB;
const db = mongoose.connection;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
db.on("error", error => console.log(error));
db.once("open", () => console.log("connected to db"));

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.json([{ id: 1, name: "kevin" }]);
});

app.listen(PORT, () => console.log(`listening at ${PORT}`));
