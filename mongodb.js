const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const assert = require("assert");

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "myTaskManager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  assert.equal(null, err);
  const db = client.db(dbName);
  console.log("connected succsel");

  const collection = db.collection("users");
  //   collection.insertOne(
  //     {
  //       name: "Andrew",
  //       age: 33,
  //       country: "US",
  //     },
  //     (error, result) => {
  //       if (error) {
  //         console.log("failure in inserting document");
  //       }
  //       console.log(result.ops);
  //     }
  //   );
  //   collection.insertMany(
  //     [
  //       {
  //         name: "Jay",
  //         age: 32,
  //         country: "Korea",
  //       },
  //       { name: "Jonas", age: 35, country: "Germany" },
  //       { name: "Andre", age: 34, country: "Sweden" },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         console.log(error);
  //       }
  //       console.log(result.ops);
  //     }
  //   );

  //   const inventory = db.collection("inventory");
  //   inventory.insertMany(
  //     [
  //       { paper: 30, rubber: 20, powder: 100 },
  //       { soap: "dial", shampoo: "head & shoulders" },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         console.log(error.message);
  //       }
  //       console.log(result.insertedCount, result.ops);
  //     }
  //   );
  // const tasks = db.collection("tasks");
  // tasks.insertMany(
  //   [{ postOffice: "done", feedDog: "not yet", homework: "done" }],
  //   (error, result) => {
  //     if (error) {
  //       console.log(error.message);
  //     }
  //     console.log(result.ops);
  //   }
  // );
  // // collection.find({ age: { $gt: 34 } }).toArray((err, docs) => {
  // //   if (err) {
  // //     console.log(err.message);
  // //   }
  // //   console.log(docs);
  // // });
  // // tasks.findOne({ feedDog: "not yet" });

  // const updatePromise = db.collection("tasks").updateOne(
  //   {
  //     _id: new mongodb.ObjectID("5f602279d9c3666c80c80da3"),
  //   },
  //   {
  //     $set: {
  //       postOffice: "Suwanee",
  //     },
  //   }
  // );
  // updatePromise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => console.log(error));

  // const updateIncPromise = db
  //   .collection("users")
  //   .updateOne(
  //     { _id: mongodb.ObjectID("5f5f889cf3f37a6194cf0d70") },
  //     { $inc: { age: -8 } }
  //   );
  // updateIncPromise
  //   .then((something) => console.log(something))
  //   .catch((error) => console.log(error));

  // db.collection("users").updateMany(
  //   { age: { $gt: 32 } },
  //   { $set: { tooOld: true } },
  //   (error, result) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //     console.log(result);
  //   }
  // );
  db.collection("users")
    .deleteMany({ age: { $lt: 18 } })
    .then((result) => result)
    .catch((error) => console.log(error));
});
