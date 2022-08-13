import { Worker } from "node:worker_threads";
import { users, db } from "./db.mjs";

async function clean() {
  // await users.drop();
  await db.createCollection("users");
}

export async function populateWithThreads() {
  // await clean();
  const start = new Date().getTime();
  let counter = 0;
  const workers = 10;
  // await users.insertMany([{ username: "x" }]);
  return new Promise((resolve, reject) => {
    for (const i of Array(workers)) {
      const worker = new Worker(
        "./src/worker-threads/mongo-batch/aver/worker.mjs"
      );
      worker.on("message", () => {
        if (++counter == workers) {
          console.log("finished in " + (new Date().getTime() - start) + "ms");
          resolve(null);
        }
      });
      worker.on("error", (error) => {
        console.error(error);
        reject(error);
      });
    }
  });
}

populateWithThreads();
