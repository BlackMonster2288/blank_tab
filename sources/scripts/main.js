let DAY_OF_WEEKS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function numberFormat(i) {
  return i < 10 ? "0" + i : i;
}

function setTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();

  var timeDisplay = "";
  timeDisplay += numberFormat(hour);
  timeDisplay += ":";
  timeDisplay += numberFormat(minute);

  document.getElementById("time").textContent = timeDisplay;

  setTimeout(function () {
    setTime();
  }, 500);
}

function setDate() {
  let today = new Date();
  let day = today.getDay();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();

  var dateDisplay = "";
  dateDisplay += DAY_OF_WEEKS[day];
  dateDisplay += ", ";
  dateDisplay += numberFormat(date);
  dateDisplay += "-";
  dateDisplay += numberFormat(month);
  dateDisplay += "-";
  dateDisplay += numberFormat(year);

  document.getElementById("date").textContent = dateDisplay;
}

function setBackground() {
  let imageDom = document.getElementById("bgimg");

  imageDom.style.backgroundSize = "cover";
  imageDom.style.backgroundRepeat = "no-repeat";
  imageDom.style.backgroundImage = "url(../assets/background.png)";
}

setBackground();
setTime()
setDate();