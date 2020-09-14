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
  collection.insertMany(
    [
      {
        name: "Jay",
        age: 32,
        country: "Korea",
      },
      { name: "Jonas", age: 35, country: "Germany" },
      { name: "Andre", age: 34, country: "Sweden" },
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result.ops);
    }
  );

  const inventory = db.collection("inventory");
  inventory.insertMany(
    [
      { paper: 30, rubber: 20, powder: 100 },
      { soap: "dial", shampoo: "head & shoulders" },
    ],
    (error, result) => {
      if (error) {
        console.log(error.message);
      }
      console.log(result.insertedCount, result.ops);
    }
  );
});
