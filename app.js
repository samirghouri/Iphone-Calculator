//DOM Elmenets

const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");

const addtionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplicationEl = document.querySelector(".multiplication");
const divisionEl = document.querySelector(".division");
const equalEL = document.querySelector(".equal");

const decimalEl = document.querySelector(".decimal");
const number0El = document.querySelector(".number-0");
const number1El = document.querySelector(".number-1");
const number2El = document.querySelector(".number-2");
const number3El = document.querySelector(".number-3");
const number4El = document.querySelector(".number-4");
const number5El = document.querySelector(".number-5");
const number6El = document.querySelector(".number-6");
const number7El = document.querySelector(".number-7");
const number8El = document.querySelector(".number-8");
const number9El = document.querySelector(".number-9");

const acEl = document.querySelector(".ac");
const pmEl = document.querySelector(".pm");
const percentEl = document.querySelector(".percentage");
const displayEl = document.querySelector(".display");
let totalArray = [];
let finalResult = 0;
const numberElArray = [
  number0El,
  number1El,
  number2El,
  number3El,
  number4El,
  number5El,
  number6El,
  number7El,
  number8El,
  number9El,
];

//Functions
const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};
const handleNumberClick = (numString) => {
  const currentDisplayString = displayEl.textContent;
  if (displayEl.textContent === "0") {
    displayEl.textContent = numString;
  } else {
    displayEl.textContent = currentDisplayString + numString;
  }
  console.log(displayEl.textContent);
};

const handleDecimalClick = (decimalString) => {
  const currentDisplayString = displayEl.textContent;
  if (!displayEl.textContent.includes(".")) {
    if (displayEl.textContent === "0" || displayEl.textContent === "") {
      displayEl.textContent = "0" + decimalString;
    } else {
      displayEl.textContent = currentDisplayString + decimalString;
    }
  }
};

const handleOperatorClick = (operatorString) => {
  if (!(totalArray.length == 0 && displayEl.textContent == 0)) {
    totalArray.push(displayEl.textContent);
    if (operatorString === "=") {
      handleEqualClick();
      if (finalResult % 1 != 0) {
        finalResult = Number(Math.round(finalResult + "e2") + "e-2");
      }

      displayEl.textContent = finalResult;
    } else {
      totalArray.push(operatorString);
      displayEl.textContent = "0";
    }
  }
};

const handleEqualClick = () => {
  console.log(totalArray);

  console.log("Inside equal");
  if (totalArray[0]) {
    finalResult = parseFloat(totalArray[0]);
    for (let i = 0; i < totalArray.length; i = i + 1) {
      console.log(i);
      const index = i * 1 + (i + 1);
      if (totalArray[index] && totalArray[index + 1]) {
        if (!(totalArray[index] === "=" && totalArray[index + 1] === "=")) {
          if (totalArray[index] === "+") {
            console.log("in addtion");
            finalResult += parseFloat(totalArray[index + 1]);
          } else if (totalArray[index] === "-") {
            finalResult -= parseFloat(totalArray[index + 1]);
          } else if (totalArray[index] === "x") {
            finalResult *= parseFloat(totalArray[index + 1]);
          } else if (totalArray[index] === "÷") {
            finalResult /= parseFloat(totalArray[index + 1]);
          }
        }
      }
    }
    console.log(finalResult);
  }
};

//Event Listener

//Number Buttons
for (let i = 0; i < numberElArray.length; i++) {
  const numberEL = numberElArray[i];
  numberEL.addEventListener("click", () => {
    handleNumberClick(i.toString());
  });
}

//Decimal Buttons
decimalEl.addEventListener("click", (event) => {
  handleDecimalClick(event.target.textContent);
});

//Operator Buttons
[addtionEl, subtractionEl, multiplicationEl, divisionEl, equalEL].forEach(
  (element) => {
    element.addEventListener("click", (event) => {
      handleOperatorClick(event.target.textContent);
    });
  }
);

//AC Button
acEl.addEventListener("click", () => {
  displayEl.textContent = "0";
  totalArray = [];
});
//Set up the time
const getTime = () => {
  const currentTime = new Date();
  const currentHour = addZero(currentTime.getHours());
  const currentMinute = addZero(currentTime.getMinutes());
  hourEl.textContent = currentHour;
  minuteEl.textContent = currentMinute;
};
setInterval(() => {
  getTime();
}, 1000);

getTime();
