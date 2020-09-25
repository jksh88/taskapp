const express = require("express");
const app = express();
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const { Model } = require("mongoose");
const port = process.env.PORT || 3000;

app.use("/", express.json());

app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).send(allTasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).send("task doesn't exist");
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send();
  }
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

// app.post("/users", (req, res) => {
//   let user = new User(req.body);
//   user
//     .save()
//     .then(() => res.status(200).send(user))
//     .catch((err) => {
//       res.status(500);
//       res.send(err);
//     });
// });

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`Task-manager app listening on port ${port}`);
});
