const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("age cannot be negative");
//       }
//     },
//   },
//   country: {
//     type: String,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 7,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("Bu xing");
//       }
//     },
//   },

//   email: {
//     type: String,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
// });

// const dog2 = new User({
//   name: "Happy Alma",
//   age: 42,
//   password: "inHeavenPassword",
// });

// dog2.save().catch((error) => console.log(error));

// const bestFriend = new User({
//   name: "JB",
//   age: 49,
//   email: "jb$@dlld.net",
//   password: "#56!ddo6",
// });

// bestFriend
//   .save()
//   .then(() => console.log(bestFriend))
//   .catch((err) => console.log(err));

// const brother = User({
//   name: "Ryan",
//   age: 28,
//   password: "ddi333434  ",
// });

// brother
//   .save()
//   .then(() => console.log(brother))
//   .catch((error) => console.log(error));

// const sister = new User({
//   name: "Sarah",
//   age: 31,
//   password: "mypassword",
// });

// sister
//   .save()
//   .then((sister) => console.log(sister))
//   .catch((error) => console.log(error));

// User.deleteOne({ name: "Ryan" }, (error) => console.log(error));

// // const dog = new User({
// //   name: "Toby",
// //   age: 2,
// //   password: "1234",
// //   email: "tos",
// // });

// // dog
// //   .save()
// //   .then(() => console.log(dog))
// //   .catch((err) => console.log(err));
// // const friend = new User({
// //   name: "Stacey",
// //   age: 38,
// //   password: "   eere4   ",
// // });
// // friend.save();

// // const cousin = new User({
// //   age: 39,
// //   password: "343hiejrw",
// // });
// // cousin.save().catch((err) => console.log(err));
// // const me = new User({
// //   name: "Jay",
// //   age: 32,
// //   country: "Korea",
// // });

// // me.save()
// //   .then((me) => {
// //     console.log(me);
// //   })
// //   .catch((error) => {
// //     console.log("Error", error);
// //   });

// User.findByIdAndDelete("5f64e62671de2c8802a41ee2").then(() =>
//   console.log("deleted??")
// );

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

const mondayTask = new Task({ completed: false, description: "study 8 hours" });
mondayTask
  .save()
  .then(() => console.log("done"))
  .catch((err) => console.log(err));
// const todayTask = new Task({
//   description: "Take T to clinic",
//   completed: false,
// });

// todayTask
//   .save()
//   .then(() => console.log(todayTask))
//   .catch((error) => console.log("Error: ", error));

// const deleteTaskAndCount = async (id) => {
//   const first = await Task.findByIdAndDelete(id);
//   const count = await Task.countDocuments({ completed: { $eq: false } });
//   return first;
// };
// deleteTaskAndCount("5f65173980617c8acad1eb4d")
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => "connected!");

// connection options
// useNewUrlParser :
// Arun Rajeevan
// Arun Rajeevan
// Follow
// Jul 1 · 3 min read

// The underlying MongoDB driver has deprecated their current connection string parser. Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. You should set useNewUrlParser: true unless that prevents you from connecting.
// Note that if you specify useNewUrlParser: true, you must specify a port in your connection string, like mongodb://localhost:27017/dbname.
// The new url parser does not support connection strings that do not have a port, like mongodb://localhost/dbname.
// useCreateIndex :
// False by default. Set to true to make Mongoose's default index build use createIndex() instead of ensureIndex() to avoid deprecation warnings from the MongoDB driver.
// useFindAndModify:
// True by default. Set to false to make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify().
// useUnifiedTopology:
// False by default. Set to true to opt in to using the MongoDB driver's new connection management engine. You should set this option to true, except for the unlikely case that it prevents you from maintaining a stable connection.
// promiseLibrary:
// Sets the underlying driver's promise library.
// poolSize:
// The maximum number of sockets the MongoDB driver will keep open for this connection. By default, poolSize is 5. Keep in mind that, as of MongoDB 3.4, MongoDB only allows one operation per socket at a time, so you may want to increase this if you find you have a few slow queries that are blocking faster queries from proceeding. Search Slow Trains in MongoDB and Node.js.
// socketTimeoutMS
// How long the MongoDB driver will wait before killing a socket due to inactivity after initial connection. A socket may be inactive because of either no activity or a long-running operation. This is set to 30000 by default, you should set this to 2-3x your longest running operation if you expect some of your database operations to run longer than 20 seconds.
// family:
// Whether to connect using IPv4 or IPv6. This option passed to Node.js' dns.lookup() function. If you don't specify this option, the MongoDB driver will try IPv6 first and then IPv4 if IPv6 fails. If your mongoose.connect(uri) call takes a long time, try mongoose.connect(uri, { family: 4 })
// authSource:
// The database to use when authenticating with user and pass. In MongoDB, users are scoped to a database. If you are getting an unexpected login failure, you may need to set this option.
// The following options are important for tuning Mongoose only if you are running without the useUnifiedTopology option:
// autoReconnect - The underlying MongoDB driver will automatically try to reconnect when it loses connection to MongoDB. Unless you are an extremely advanced user that wants to manage their own connection pool, do not set this option to false.
// reconnectTries - If you're connected to a single server or mongos proxy (as opposed to a replica set), the MongoDB driver will try to reconnect every reconnectInterval milliseconds for reconnectTries times, and give up afterward. When the driver gives up, the mongoose connection emits a reconnectFailed event. This option does nothing for replica set connections.
// reconnectInterval - See reconnectTries
// bufferMaxEntries - The MongoDB driver also has its own buffering mechanism that kicks in when the driver is disconnected. Set this option to 0 and set bufferCommands to false on your schemas if you want your database operations to fail immediately when the driver is not connected, as opposed to waiting for reconnection.
// connectTimeoutMS - How long the MongoDB driver will wait before killing a socket due to inactivity during initial connection. Defaults to 30000. This option is passed transparently to Node.js' socket#setTimeout() function.
// The following options are important for tuning Mongoose only if you are running with the useUnifiedTopology option:
// serverSelectionTimeoutMS - With useUnifiedTopology, the MongoDB driver will try to find a server to send any given operation to, and keep retrying for serverSelectionTimeoutMS milliseconds. If not set, the MongoDB driver defaults to using 30000 (30 seconds).
// heartbeatFrequencyMS - With useUnifiedTopology, the MongoDB driver sends a heartbeat every heartbeatFrequencyMS to check on the status of the connection. A heartbeat is subject to serverSelectionTimeoutMS, so the MongoDB driver will retry failed heartbeats for up to 30 seconds by default. Mongoose only emits a 'disconnected' event after a heartbeat has failed, so you may want to decrease this setting to reduce the time between when your server goes down and when Mongoose emits 'disconnected'. We recommend you do not set this setting below 1000, too many heartbeats can lead to performance degradation.
// The serverSelectionTimeoutMS option also handles how long mongoose.connect() will retry initial connection before erroring out. With useUnifiedTopology, mongoose.connect() will retry for 30 seconds by default (default serverSelectionTimeoutMS) before erroring out. To get faster feedback on failed operations, you can reduce serverSelectionTimeoutMS to 5000
