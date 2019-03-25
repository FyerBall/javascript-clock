const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let dayTime = "PM";

  //second degree
  let sDegree = (s / 60) * 360;
  let mDegree = (m / 60) * 360;
  let hDegree = (h / 12) * 360;

  //Show AM and PM
  if (h < 12) {
    dayTime = "AM";
  }
  if (m < 10) {
    m = "0" + m;
  }

  let time = h + ":" + m + ":" + s + " " + dayTime; // Time format
  document.getElementById("clockDisplay").innerHTML = time; // Display the time

  setTimeout(showTime, 1000);

  // moving the hands
  secondHand.style.transform = `rotate(${sDegree}deg)`; // moving the second hand

  minHand.style.transform = `rotate(${mDegree}deg)`; // moving the min hand

  hourHand.style.transform = `rotate(${hDegree}deg)`; // moving the hour hand
}

showTime();
