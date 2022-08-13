import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";

function chunk(input, size): number[][] {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
}

export function splitWorkWithThreads(data: number[]): Promise<number> {
  const chunks = chunk(data, 2);
  let counter = 0;
  let sum = 0;
  return new Promise((resolve, reject) => {
    for (const chunk of chunks) {
      const worker = new Worker(
        "./src/worker-threads/simple-split-work/worker.ts",
        {
          workerData: chunk,
        }
      );
      worker.on("message", (msg) => {
        console.log("parent: worker dice ", msg);
        sum += msg;
        if (++counter == chunks.length) {
          resolve(sum);
        }
      });
    }
  });
}
