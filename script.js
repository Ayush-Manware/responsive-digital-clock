function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var session = "";

  //IMage and statement-1
  if (hours >= 12 && hours < 16) {
    document.getElementById("state1").innerHTML =
      "Lunch Time Folks!! Stop Working";
    document.getElementById("changeImage").src = "./assets/after12.png";
  }
  if (hours >= 16 && hours < 20) {
    document.getElementById("state1").innerHTML = "Stop Yawning!! Get Some Tea";
    document.getElementById("changeImage").src = "./assets/lunch_image.png";
  }
  if (hours >= 20 && hours < 24) {
    document.getElementById("state1").innerHTML = "Close Your Eyes & Sleep";
    document.getElementById("changeImage").src = "./assets/goodnight_image.jpg";
  }

  if (hours >= 4 && hours < 12) {
    document.getElementById("state1").innerHTML = "Have Some Healthy Breakfast";
    document.getElementById("changeImage").src =
      "./assets/Component 30 – 1.png";
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

  //image
  //   let image = document.getElementsByClassName('changeImage');

  //   if (hours >= 12) {
  //     image.src = 'after12.png';
  //   }
}
setInterval(updateClock, 1000);




function displaySelectedValue() {
    var selectElement = document.getElementById('wake-up');
    var selectedValue = selectElement.value;
    // var text = selectedValue.text;
    console.log(selectedValue)
    // document.getElementById('$wake-up-time').textContent = 'Wake Up Time ' + text;
  }



// function currentSetTime(){
    // var wakeUpTime = document.getElementById('wake-up');
    // console.log(wakeUpTime.value);
// }

// var wakeUpTime = document.querySelectorAll('option');
// console.log(wakeUpTime);