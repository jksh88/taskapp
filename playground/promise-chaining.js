require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

// const pickedId = "5f6a74beeabeaab9e198c621";
// const newAgeUser = User.findByIdAndUpdate(
//   pickedId,
//   { $inc: { age: 2 } },
//   { new: true }
// )
//   .then(() => {
//     return newAgeUser;
//   })
//   .catch((e) => console.log(e));
// User.countDocuments({ age: { $lte: 40 } })
//   .then((count) => console.log(count))
//   .catch((err) => console.log(err));

const udpateAgeAndCount = async (id, age) => {
  const op1 = await User.findOneAndUpdate({ _id: id }, { age });
  const count = await User.countDocuments({ age: { $gte: 55 } });
  return count;
};

udpateAgeAndCount("5f6a48b174f3d1af747dbda8", 59).then((count) =>
  console.log(count)
);

const removeIt = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};
removeIt("5f6a64e3dd6ad6b80e51f739").then((count) => console.log(count));
