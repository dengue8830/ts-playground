import { EventEmitter } from "node:events";

type EventType = "playing" | "stopped" | "destroyed";

class Player {
  private emitter = new EventEmitter();

  play() {
    this.emitter.emit("playing", { data: { algo: "x" } });
  }

  stop() {
    this.emitter.emit("stopped");
  }

  destroy() {
    this.emitter.removeAllListeners();
    this.emitter.emit("destroyed");
  }

  addListener(event: EventType, cb: (props: any) => void) {
    this.emitter.addListener(event, cb);
  }

  removeListener(event: EventType, cb: (props: any) => void) {
    this.emitter.removeListener(event, cb);
  }
}

const player = new Player();
function handlePlaying(data) {
  console.log("is playing", data);
}
player.addListener("playing", handlePlaying);
function handleStop() {
  console.log("is stopped");
}
player.addListener("stopped", handleStop);

player.play();
player.stop();

player.removeListener("playing", handlePlaying);
player.play();
player.stop();
