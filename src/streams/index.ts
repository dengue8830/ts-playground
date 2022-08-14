// import { setInterval as every } from "node:timers/promises";

import { performance } from "node:perf_hooks";
import { Readable, Writable } from "stream";

// const SECOND = 1000;
let counter = 0;

async function main() {
  const r = new Readable({
    // Executes on every r.push
    // Use read or every(SECOND) but not both.
    async read(this, size) {
      if (counter == 3) {
        // EOF
        return null;
      }
      counter++;
      this.push(performance.now().toString());
    },
  });

  const w = new Writable({
    write(chunk, encoding, cb) {
      console.log(chunk.toString());
      cb();
    },
  });

  r.pipe(w);
  // Could be done in the Readable constructor.
  // for await (const _ of every(SECOND)) {
  //   r.push(performance.now().toString());
  // }
}

main();
