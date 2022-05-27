function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  })
}


function userData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
}

login()
  .then(() => {
    console.log("user login success");
    return userData();
  })
  .then(() => {
    console.log("user data OK");
  })
  .catch(() => {
    console.log("Error");
  });

