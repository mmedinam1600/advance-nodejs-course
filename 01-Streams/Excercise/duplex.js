const { PassThrough, Duplex } = require("stream");
const { createReadStream, createWriteStream } = require("fs");


const readStream = createReadStream("./movie.txt");
const writeStream = createWriteStream("./copy.txt");

class Throttle extends Duplex {
  /*
   * Class constructor will receive the injections as parameters.
   */
  constructor(time) {
    super();
    this.delay = time;
  }
  _read() {}

  // Writes the data, push and set the delay/timeout
  _write(chunk, encoding, callback) {
    console.log("Throttle");
    this.push("chunk");
    setTimeout(callback, this.delay);
  }

  // When all the data is done passing, it stops.
  _final() {
    this.push(null);
  }
}

const tunnel = new PassThrough();
const throttle = new Throttle(100);

let amount = 0;
tunnel.on("data", (chunk) => {
  console.log(chunk);
  amount += chunk.length;
  console.log("bytes:", amount);
});

readStream.pipe(throttle).pipe(tunnel).pipe(writeStream);