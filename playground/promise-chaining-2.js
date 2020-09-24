require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findById("5f6a496ed11520af923bca46")
//   .then((result) => console.log(result.completed))
//   .catch((messup) => console.log(messup));

// Task.findOneAndDelete({ _id: "5f6a496ed11520af923bca46" })
//   .then(
//     Task.countDocuments({ completed: false }).then((count) =>
//       console.log(count).catch((err) => console.log(err))
//     )
//   )
//   .then((gone) => console.log("Deleted Task: ", gone))
//   .catch((e) => console.log("error from second op: ", e));

Task.deleteMany({ description: "study 8 hours" }).then(
  Task.countDocuments({}).then((count) => console.log(count))
);
