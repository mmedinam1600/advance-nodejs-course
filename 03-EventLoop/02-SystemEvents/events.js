const https = require("https");

const req = https.get('https://en.wikipedia.org/w/api.php?action=help&format=json', (res) => {

  res.on("data", (data) => {
    console.log("... receiving data");
  });

  res.on("end", () => {
    console.log("finished receiving data");
  });

});

req.on("socket", (data) => {
  console.log("start https");
});

req.on("error", (error) => {
  console.log("error");
});