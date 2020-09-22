const express = require("express");
const app = express();
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const port = process.env.PORT || 3000;

app.use("/", express.json());

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => res.status(200).send(task))
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post("/users", (req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then(() => res.status(200).send(user))
    .catch((err) => {
      res.status(400);
      res.send(err);
    });
});
app.listen(port, () => {
  console.log(`Task-manager app listening on port ${port}`);
});