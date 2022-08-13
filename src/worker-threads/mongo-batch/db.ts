const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://root:example@localhost:27017");
const db = client.db("example-db");

module.exports = {
  users: db.collection("users"),
  db,
};
