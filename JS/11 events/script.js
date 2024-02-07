const btn = document.querySelector("button");

const parentDiv = document.querySelector("#containerElement");
const childButton = document.querySelector("#btn-event");
const textProperty = document.querySelector("#textElement");

parentDiv.addEventListener("click", (e) => {
  alert("Parent Box was clicked");
});

childButton.addEventListener("click", (e) => {
  let backgroundColor = `rgb(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)}
  )`;

  let textColor = `rgb(
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)}
  )`;

  textProperty.style.backgroundColor = backgroundColor;
  textProperty.style.color = textColor;
  e.stopPropagation();
});

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
