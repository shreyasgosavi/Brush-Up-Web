const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const abortSignal = new AbortController();
let count = 0;

btn.addEventListener(
  "click",
  (event) => {
    if (count === 5) {
      abortSignal.abort();
    } else {
      const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      document.body.style.backgroundColor = rndCol;
      console.log("Button is " + event.target);
      count++;
    }
  },
  { signal: abortSignal.signal }
);
