function currentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let tag = "AM";

  if (hours === 12) {
    hours = 0;
    tag = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
    tag = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + " " + tag;
  document.querySelector(".digital-clock").textContent = time;
  setInterval(currentTime, 1000);
}
currentTime();
