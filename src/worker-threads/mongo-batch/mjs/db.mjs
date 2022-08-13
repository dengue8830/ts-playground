import { MongoClient } from "mongodb";

export const client = new MongoClient("mongodb://root:example@localhost:27017");
export const db = client.db("example-db");
export const users = db.collection("users");
