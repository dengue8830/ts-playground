const { parentPort, workerData } = require("node:worker_threads");
const { users } = require("./db.ts");

async function populate() {
  let items = [];
  for (let index = 0; index < 100; index++) {
    items.push({ username: "x" });
  }
  await users.insertMany(items);
  parentPort?.postMessage("ready");
}

populate();
