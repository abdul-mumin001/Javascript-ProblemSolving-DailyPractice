const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");

const DEMO_QUOTE =
  "some the rules of etiquette may seem outdated stuffy and unnecessary";

quoteInputElement.addEventListener("input", () => {
  const quoteArr = quoteDisplayElement.querySelectorAll("span");
  const inputArr = quoteInputElement.value.split("");

  let isCorrect = false;

  quoteArr.forEach((charSpan, index) => {
    const inputChar = inputArr[index];

    // if current Input charachter is same as current
    // quote characher make it green if it is different
    // then make it red.

    if (inputChar == null) {
      charSpan.classList.remove("correct");
      charSpan.classList.remove("incorrect");
      isCorrect = false;
    } else if (inputChar === charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
      isCorrect = true;
    } else {
      isCorrect = false;
      charSpan.classList.remove("correct");
      charSpan.classList.add("incorrect");
    }
  });
  if (isCorrect) {
    renderQuote();
    quoteInputElement.value = null;
    console.log(calculateSpeed());
    startTimer();
  }
});

function calculateSpeed() {
  const length = DEMO_QUOTE.split(" ").length;
  return length / (getTime() / 60);
}

let startTime;
function startTimer() {
  // Start the timer with 0
  timerElement.innerText = 0;
  startTime = new Date();

  // setTimeout - Runs once
  // setInterval - Runs every given seconds

  setInterval(() => {
    // currentTime - startTime
    const timeElapsed = Math.floor((new Date() - startTime) / 1000);
    timerElement.innerText = timeElapsed;
  }, 1000);

  // calculate every second the time has elapsed.
}

function getTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

startTimer();

function renderQuote() {
  const quoteArr = DEMO_QUOTE.split("");
  quoteDisplayElement.innerHTML = "";

  quoteArr.forEach((char) => {
    const newSpan = document.createElement("span");
    newSpan.innerText = char;
    quoteDisplayElement.append(newSpan);
  });
}

renderQuote();
