// File System
const fs = require("fs");

// Create a file in this directory called 'file.txt'
const file = fs.createWriteStream('file.txt');


for (let i = 0; i <= 1000; i++) {
  file.write('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
}

//Close stream
file.end();