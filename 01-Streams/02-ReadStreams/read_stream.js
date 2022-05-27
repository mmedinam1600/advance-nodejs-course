const fs = require('fs');

const streamReader = fs.createReadStream("my_file.txt", {
  encoding: "utf8"
});

// Events of life cycle of ReadStream
streamReader.on("open", () => {
  console.log("Opening file");
}).on("data", () => {
  console.log("----");
}).on("close", () => {
  console.log("Closing file");
}).on("error", () => {
  console.log("Error in file");
});
