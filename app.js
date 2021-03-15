// Javascript File

const getDaysInMonth = (month, year) => {
  month = month + 1;
  return new Date(year, month, 0).getDate();
};

const changeCountdown = () => {
  let date = new Date();
  if (date.getFullYear() === 2022) {
    return (document.getElementById("message").innerHTML =
      "We made it out alive! Yay!");
  }
  let days = (document.getElementById("days").innerHTML =
    getDaysInMonth(date.getMonth(), date.getFullYear()) - date.getDate());
  let months = (document.getElementById("months").innerHTML =
    11 - date.getMonth());
  let hours = (document.getElementById("hours").innerHTML =
    23 - date.getHours());
  let minutes = (document.getElementById("minutes").innerHTML =
    59 - date.getMinutes());
  let seconds = (document.getElementById("seconds").innerHTML =
    59 - date.getSeconds());
};

changeCountdown();

setInterval(() => {
  changeCountdown();
}, 1000);
