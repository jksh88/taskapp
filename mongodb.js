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
  collection.insertOne({
    name: "Andrew",
    age: 33,
    country: "US",
  });
});
