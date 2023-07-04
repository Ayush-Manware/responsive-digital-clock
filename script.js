function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var session = "";

  //IMage and statement-1
  if (hours >= 12 && hours < 16) {
    document.getElementById("state1").innerHTML = "Lunch Time Folks!! Stop Working";
  }

  if (hours >= 16 && hours < 20) {
    document.getElementById("state1").innerHTML = "Stop Yawning!! Get Some Tea";
  }
  if (hours >= 20 && hours < 24) {
    document.getElementById("state1").innerHTML = "Close Your Eyes & Sleep";
  }

  if (hours >= 4 && hours < 12) {
    document.getElementById("state1").innerHTML = "Have Some Healthy Breakfast";
  }

  //am-pm
  if (hours > 12) {
    session = "PM";
    document.getElementsByClassName("statement-1").innerHTML =
      "Let's Have Some Lunch!!";
  } else {
    session = "AM";
  }
  document.getElementsByClassName("am_pm")[0].innerHTML = session;

  //00 format
  if (hours > 12) {
    hours = hours - 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  document.getElementsByClassName("hour")[0].innerHTML = `${hours} <br> Hour`;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  document.getElementsByClassName(
    "minute"
  )[0].innerHTML = `${minutes} <br> Min`;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementsByClassName(
    "second"
  )[0].innerHTML = `${seconds} <br> Sec`;
}
setInterval(updateClock, 1000);

let inputValue = document.querySelectorAll("select");
let statement2 = document.getElementById("statement-2");
// let selectTime = document.getElementsByClassName('dropDown');

function setAlarm() {
  let time = new Date();
  let hours = time.getHours();

  let morning = inputValue[0].options[inputValue[0].value];
  const wakeUpTime = morning.innerHTML;

  let lunch = inputValue[1].options[inputValue[1].value];
  const lunchTime = lunch.innerHTML;

  let nap = inputValue[2].options[inputValue[2].value];
  const napTime = nap.innerHTML;

  let night = inputValue[3].options[inputValue[3].value];
  const nightTime = night.innerHTML;

  // Fetched value
  document.getElementById(
    "$wake-up-time"
  ).innerText = `Wake Up Between ${wakeUpTime}`;
  document.getElementById(
    "$lunch-time"
  ).innerText = `Have Lunch Between ${lunchTime}`;
  document.getElementById(
    "$nap-time"
  ).innerText = `Have A Nap Between ${napTime}`;
  document.getElementById(
    "$night-time"
  ).innerText = `Go To Bed Between ${nightTime}`;

  // setting-time-functions
  let a = morning.value;
  console.log(a);
  let b = lunch.value;
  console.log(b);
  let c = nap.value;
  console.log(c);
  let d = night.value;
  console.log(d);

  if (hours === parseInt(a)) {
    document.getElementById("$statement-2").innerHTML =
      "Good Morning Boss!! Wake Up!!";
    document.getElementById("changeImage").src =
    "./assets/morning.png";
  }

  if (hours === parseInt(b)) {
    document.getElementById("$statement-2").innerHTML =
      "Good Afternoon!! Have Lunch!!";
    document.getElementById("changeImage").src = "./assets/lunch.png";
  }

  if (hours === parseInt(c)) {
    document.getElementById("$statement-2").innerHTML =
      "Good Evening";
    document.getElementById("changeImage").src = "./assets/evening.png";
  }

  if (hours === parseInt(d)) {
    document.getElementById("$statement-2").innerHTML =
      "Good Night";
    document.getElementById("changeImage").src = "./assets/night.jpg";
  }
}
