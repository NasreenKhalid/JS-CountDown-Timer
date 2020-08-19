const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

console.log(items);

// we specify the date we want in the brackets
// months are zero index based
let futureDate = new Date(2020, 7, 24, 23, 59, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
console.log(months[month]);
month = months[month];

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}pm`;

// future time in millisec
const futureTime = futureDate.getTime();
// console.log(futureTime);

//we will calculate millisec of futuredate and currentdate and take the difference of the two
// to find the remaining time to be displayed in countdown timer

function getRemainingTime() {
  const today = new Date().getTime();
  //   console.log(today);

  const difference = futureTime - today;
//   console.log(difference);
  //   1s= 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr

  // values in ms of 1day:
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(difference / oneDay);
//   console.log(days);
  let hours = Math.floor((difference % oneDay) / oneHour);
//   console.log(hours);
  let minutes = Math.floor((difference % oneHour) / oneMinute);
//   console.log(minutes);
  let seconds = Math.floor((difference % oneMinute) / 1000);

  // SET VALUES ARRAY
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });


}

// countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();
