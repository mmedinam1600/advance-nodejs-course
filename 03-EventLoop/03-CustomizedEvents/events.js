const fs = require('fs');
const writeStream = fs.createWriteStream("./files/my_file.txt");
const EventEmitter = require("events");

class Emitter extends EventEmitter {};

const myEmitter = new Emitter();
const test = new EventEmitter();



function writeFile() {
  const iterations = 5;
  console.log("Creating file");

  for( let i = 0;i< iterations;i++) {
    writeStream.write(`Iteration #${i}\n`);
  }
  writeStream.write(`===== END =====`);
  writeStream.end();
}


function emailNotify() {

  console.log("Preparing email");

  setTimeout( () => {
    myEmitter.emit("mailOk");
  }, 1000);

}

function readDocument() {
  console.log("Reading document");

  fs.readFile('./files/my_file.txt', (error, document) => {
    console.log(document.toString());
  });
}


writeStream.on("close", () => {
  emailNotify();
});

myEmitter.on("mailOk", () => {
  readDocument();
});

writeFile();