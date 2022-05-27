const fs = require('fs');
const http = require('http');


function readFile() {
  //Inefficient
  //fs.readFileSync('./files/file.txt', 'utf8');

  //Efficient (Problem, Only 8192 files can be opened simultaneously or the program will crash.)
  const readStream = fs.createReadStream("./files/file.txt", {
    encoding: "utf8",
  });

  readStream.on('error', (error) => {
    console.log("ERROR to open file");
    console.log(error);
  });

  readStream.close();
}

http
  .createServer((req, res) => {

    for (let a = 0; a < 5000; a++) {
      readFile();
    }

    res.write("Hello world!");
    res.end();
  })
  .listen(8080)