// function makeGreeting(name) {
//   return `Hello, my name is ${name}!`;
// }

// const name = "Miriam";
// const greeting = makeGreeting(name);
// console.log(greeting);
// // "Hello, my name is Miriam!"

// let count = 0;

// function printHello() {
//   if (count == 878) {
//     return;
//   }
//   console.log("Hello");
//   count++;
//   printHello();
// }

// printHello();

// document.querySelector("textarea").addEventListener("click", () => {
//   console.log("Text entered");
// });

// log.textContent = "";

const xhr = new XMLHttpRequest();

xhr.addEventListener("loadend", () => {
  log.textContent = `${log.textContent} Finished with status: ${xhr.status}`;
});

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
);
xhr.send();

// PROMISES ::
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(response);
//   console.log(`Received response: ${response.status}`);
//   console.log(
//     `Received response: ${response.json().then((data) => {
//       console.log(data);
//     })}`
//   );
// });

//The above code results in CallBack hell which becomes diffcult to maintain
//Since then() method also returns a promise we can chain he method after the first then() method.

let thenPromise = fetchPromise.then((response) => {
  console.log(response);
  console.log(`Received response: ${response.status}`);
  return response.json();
});

let then2Promise = thenPromise.then((data) => {
  console.log(`Data is ${data}`);
});

then2Promise
  .then((data) => {
    console.log("Data " + data);
  })
  .then((response) => {
    console.log("Again completed");
  })
  .then((response) => {
    console.log("Again completed 2");
  })
  .then((response) => {
    console.log("Again completed 3");
  })
  .then((response) => {
    console.log("AGAAAINNNN");
  })
  .catch(() => {
    console.log("Error occured while fetching the data");
  });

console.log("Started request…");
console.log("Then Promise ");
console.log(thenPromise);
console.log("Then Promise 2");
console.log(then2Promise);


//Custom promise function
function promiseFunction() {
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 500) {
      console.log(i);
      i++;
    }
    if (i == 100) {
      throw new Error("ERRORRR");
    }
    resolve("HAHAHA");
  });
}

let a = promiseFunction()
  .then((data) => {
    console.log(`Returned data is ${data}`);
  })
  .catch((error) => {
    console.log("Error occured");
  });

console.log("Promise is created and function is executing asynchronously");


// WORKER IN JS
let worker = new Worker("./worker.js");

worker.postMessage({
  type: "Alert"
})

console.log("Message sent to worker");

worker.addEventListener("message", (message)=>{
  console.log(message);
})