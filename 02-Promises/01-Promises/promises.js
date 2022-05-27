
const nodePromises = require("fs").promises;

nodePromises.copyFile("./files/original.txt", "./files/copy.txt")
  .then( () => console.log("finished copy"))
  .catch( () => console.log("file cannot be copied."))
  .finally( () => console.log("..."));



