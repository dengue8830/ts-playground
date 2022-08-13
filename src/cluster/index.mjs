import cluster from "node:cluster";
import { cpus } from "node:os";

if (cluster.isPrimary) {
  // ❌ Doesn't work. Executes the cb but the worker is not ready to listen yet.
  // cluster.on("fork", (w) => {
  //   w.send({ data: "hola" });
  // });
  for (let i = 0; i < cpus().length; i++) {
    const w = cluster.fork();
    w.on("message", (msg) => {
      console.log("parent: worker says ", msg);
    });
    // ❌ Doesn't work.
    // w.on("online", () => {
    // w.send({ data: "hola" });
    // });
    // 🙅‍♂️ This works but is too hacky, should be a better way.
    setTimeout(() => {
      w.send({ data: "hola" });
    }, 100);
  }
  // ❌ Doesn't work.
  // cluster.on("online", () => {
  //   Object.values(cluster.workers).forEach((w) => {
  //     w.send({ data: "hi there" });
  //   });
  // });
} else {
  process.on("message", (msg) => {
    // Do initial work with msg data.
    console.log("worker: parent says ", msg);
    process.send({ data: "copied" });
  });
}
