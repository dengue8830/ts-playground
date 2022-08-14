import { Transform } from "stream";
import { createReadStream } from "fs";

const r = createReadStream("./src/streams/readme.md");

const t = new Transform({
  transform(this, chunk, encoding, cb) {
    this.push(chunk.toString().toUpperCase());
    cb();
  },
});

r.pipe(t).pipe(process.stdout);
