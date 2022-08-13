import { Worker } from "node:worker_threads";
const { users, db } = require("./db");

async function clean() {
  // await users.drop();
  await db.createCollection("users");
}

export async function populateWithThreads() {
  // await clean();
  let counter = 0;
  const workers = 10;
  // await users.insertMany([{ username: "x" }]);
  return new Promise((resolve, reject) => {
    for (const i of Array(workers)) {
      const worker = new Worker("./src/worker-threads/mongo-batch/worker.ts");
      worker.on("message", (msg) => {
        if (++counter == workers) {
          resolve(null);
        }
      });
    }
  });
}
