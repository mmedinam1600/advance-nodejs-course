const fs = require('fs');
const util = require('util');

// fs.writeFile("./files/file.txt", "12345678", (err) => {
//   console.log("OK");
// });

//Convert to promise
const writeFilePromise = util.promisify(fs.writeFile);

writeFilePromise("./filesjlk/file.txt", "12345678")
  .then( () => console.log("OK"))
  .catch( (e) => console.log(e));
