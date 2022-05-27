function numeroAleatorio() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100));
    }, 2000);

  });
}

async function result() {

  console.log("Invoked result");

  const random = await numeroAleatorio();

  console.log(`Result: ${random}`);

}


result();