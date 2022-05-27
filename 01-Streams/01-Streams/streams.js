// File System
const fs = require("fs");

console.time("Response time");

// Less efficient in large files
// for (let i = 0; i <= 5; i++) {
//   fs.readFileSync('file.txt', 'utf8');
// }


// More efficient in large files
for (let i = 0; i <= 5; i++) {
  const streamWriter = fs.createReadStream("file.txt", {
    encoding: "utf8"
  });
}


console.timeEnd("Response time");