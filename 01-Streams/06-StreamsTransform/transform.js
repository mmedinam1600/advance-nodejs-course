// Read any data, intercept and generate some kind of report.

const fs = require("fs");
const {Transform} = require("stream");

const readStream = fs.createReadStream("./files/input.txt");
const writeStream = fs.createWriteStream("./files/output.txt");


readStream.setEncoding("utf8");


const filter = new Transform( {
  writableObjectMode: true,

  //Incoming data passes through this filter
  transform(chunk, encoding, callback) {
    // Convert data to uppercase
    this.push(chunk.toString().toUpperCase());
    callback();
  },

  //Executed when the reading is finished
  final(callback) {

    //Indicates that the stream has ended
    this.push(null);
    callback();
  }

});


readStream.pipe(filter).pipe(writeStream);

