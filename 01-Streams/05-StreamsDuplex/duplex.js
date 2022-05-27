const fs = require('fs');

const { Duplex } = require("stream");

const readStream = fs.createReadStream("./files/base.txt");
const writeStream = fs.createWriteStream("./files/destiny.txt");



const report = new Duplex({

  write(chunk, encoding, next) {
    console.log(chunk);
    this.push(chunk);
    next();
  },

  read(size) {

  },

  final(callback) {
    this.push(null);
    callback();
  }

});


readStream.pipe(report).pipe(writeStream);