// Countdown fields
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const millisecondElement = document.querySelector(".millisecond");

// Buttons
const startButton = document.querySelector(".action__start");
const stopButton = document.querySelector(".action__stop");
const pouseButton = document.querySelector(".action__pouse");
const loopButton = document.querySelector(".action__loop");

const burgerTogleButton = document.querySelector(".burger");

//Variables
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let interval;

// Listeners
startButton.addEventListener("click", () => {
   clearInterval(interval);
   interval = setInterval(startContdown, 10);
});

pouseButton.addEventListener("click", () => {
   clearInterval(interval);
});

stopButton.addEventListener("click", () => {
   clearInterval(interval);
   resetCountdown();
});

burgerTogleButton.addEventListener("click", () => {
   burgerTogleButton.classList.toggle("active");
   document.querySelector(".menu").classList.toggle("active");
   document.querySelector(".menu-extend-action").classList.toggle("active");
});

// Fuunctions
function startContdown() {
   millisecond++;
   if (millisecond < 9) millisecondElement.innerText = "0" + millisecond;
   if (millisecond > 9) millisecondElement.innerText = millisecond;
   if (millisecond > 99) {
      second++;
      secondElement.innerText = "0" + second;
      millisecond = 0;
      millisecondElement.innerText = "0" + millisecond;
   }
   if (second < 9) secondElement.innerText = "0" + second;
   if (second > 9) secondElement.innerText = second;
   if (second > 59) {
      minute++;
      minuteElement.innerText = "0" + minute;
      second = 0;
      secondElement.innerText = "0" + second;
   }
   if (minute < 9) minuteElement.innerText = "0" + minute;
   if (minute > 9) minuteElement.innerText = minute;
   if (minute > 59) {
      hour++;
      hourElement.innerText = "0" + hour;
      minute = 0;
      minuteElement.innerText = "0" + minute;
   }
   if (hour < 9) hourElement.innerText = "0" + hour;
   if (hour > 9) hourElement.innerText = hour;
   if (hour >= 99) {
   }
}

function resetCountdown() {
   hour = 0;
   minute = 0;
   second = 0;
   millisecond = 0;
   millisecondElement.textContent = "00";
   secondElement.textContent = "00";
   minuteElement.textContent = "00";
   hourElement.textContent = "00";
}
