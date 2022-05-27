const fs = require('fs');

let content = "1234567890";
let iterations = 15;

const streamReader = fs.createWriteStream("./files/my_file.txt");

for (let i = 0; i < iterations; i++) {
  content += content;

  streamReader.write(content, res => {
    console.log("...");
  });
}

fs.writeFile("./files/my_file2.txt", content, () => {
  console.log("direct writing finished");
});

