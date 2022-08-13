// import { parentPort, workerData } from "node:worker_threads";
const { parentPort, workerData } = require("node:worker_threads");
// console.log("worker: ", workerData);

parentPort?.postMessage(
  workerData.reduce((prev, current) => prev + current, 0)
);
