const fs = require('fs');

const streamReader = fs.createReadStream("files/base.txt");
const streamWriter = fs.createWriteStream("files/destiny.txt");

streamReader.pipe(streamWriter);

streamReader.on("end", () => {
  console.log("process finished");
})