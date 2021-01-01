// Javascript File

const changeCountdown = () => {
  let date = new Date();
  if (date.getFullYear() === 2021) {
    clear
    return document.getElementById("message").innerHTML = "We made it out alive! Yay!";
  }
  let days = document.getElementById("days").innerHTML = 366 % Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  let hours = document.getElementById("hours").innerHTML = 23 - date.getHours();
  let minutes = document.getElementById("minutes").innerHTML = 59 - date.getMinutes();
  let seconds = document.getElementById("seconds").innerHTML = 59 - date.getSeconds();
} 

changeCountdown();

setInterval(() => {
  console.log("hello");
  changeCountdown();
}, 1000);