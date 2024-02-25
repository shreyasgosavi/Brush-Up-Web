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

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("loadend", () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
//   });

//   xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
//   );
// request.send();

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

fetchPromise
  .then((response) => {
    console.log(response);
    console.log(`Received response: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Error occured while fetching the data");
  });
console.log("Started request…");
