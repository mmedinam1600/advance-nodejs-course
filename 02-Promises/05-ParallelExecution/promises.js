

function privateMessage() {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve("messages");
    }, 1500);
  });
}

function photoGallery() {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve("photos");
    }, 1500);
  });
}

function latestTransactions() {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve("transactions");
    }, 1500);
  });
}


Promise.all([privateMessage(), photoGallery(), latestTransactions()])
  .then( (values) => {
    console.log( values );
  });