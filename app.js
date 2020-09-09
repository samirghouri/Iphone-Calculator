//DOM Elmenets

const hourEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");

const addtionEl = document.querySelector(".addition");
const subtractionEl = document.querySelector(".subtraction");
const multiplicationEl = document.querySelector(".multipication");
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
const handleNumberClick = (numString) => {
  const currentDisplayString = displayEl.textContent;
  if (displayEl.textContent === "0") {
    displayEl.textContent = numString;
  } else {
    displayEl.textContent = currentDisplayString + numString;
  }
  console.log(displayEl.textContent);
};

//Adding event listeners to numbers and buttons
for (let i = 0; i < numberElArray.length; i++) {
  const numberEL = numberElArray[i];
  numberEL.addEventListener("click", () => {
    handleNumberClick(i.toString());
  });
}

//Set up the time
const getTime = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  console.log(typeof currentMinute);
  hourEl.textContent = currentHour;
  minuteEl.textContent = currentMinute;
};
setInterval(() => {
  getTime();
}, 1000);

getTime();
