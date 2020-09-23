const express = require("express");
const app = express();
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const { Model } = require("mongoose");
const port = process.env.PORT || 3000;

app.use("/", express.json());

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => res.status(200).send(tasks))
    .catch((err) => res.status(500).send(err));
});

app.get("/tasks/:id", (req, res) => {
  Task.findOne({ _id: { $eq: req.params.id } })
    .then((task) => {
      if (!task) {
        return res
          .status(404)
          .send("we couldn't find what you were looking for");
      }
      res.send(task);
    })
    .catch((error) => res.send(error));
});

app.get("/users", (req, res) => {
  const allUsers = User.find({});
  allUsers.then((result) => res.send(result)).catch((err) => res.send(err));
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => res.status(200).send(task))
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post("/users", (req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then(() => res.status(200).send(user))
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});
app.listen(port, () => {
  console.log(`Task-manager app listening on port ${port}`);
});
