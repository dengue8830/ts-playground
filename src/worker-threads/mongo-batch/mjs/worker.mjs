import { parentPort } from "node:worker_threads";
import { users } from "./db.mjs";

async function populate() {
  for (let index = 0; index < 10000; index++) {
    await users.insertOne({ username: "x" });
  }
  // await users.insertMany(items);
  parentPort?.postMessage("ready");
}

populate();
