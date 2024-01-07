const myAge = 22;

if (myAge < 25) {
  console.log("Hustle and enjoy chasing for your dreams");
  console.log("hohohoh");
} else if (myAge < 55) {
  console.log("Stabalise your life and make sensible decisions");
} else {
  console.log("Plan for retirement and enjoy the life");
}

const answerElement = document.querySelector("#myAnswer");
const selectAnswer = document.querySelector("#canPost");

selectAnswer.addEventListener("change", answerIt);

function answerIt() {
  let myAnswer = selectAnswer.value;
  if (myAnswer == "Yes") {
    answerElement.textContent =
      "Yes you can share that with people on the internet";
  } else if (myAnswer == "No") {
    answerElement.textContent = "No not necessary that doesn't make any sense";
  }
  if (myAnswer == "May be") {
    answerElement.textContent =
      "It's up to you .. if you feel good then you can or else not.";
  }
}
