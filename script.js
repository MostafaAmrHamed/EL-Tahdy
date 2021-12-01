//Hiding button  first execution0
window.onload = function () {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
    document.getElementById("buttons").style.display = "none";
  }
};
//--------------------------------------------

/**************[Start Of Timer]**************/
let CountDownDate;
let interval;
const message = "لا يوجد امتحااان";
const exams = {
  one: "https://docs.google.com/forms/d/e/1FAIpQLSd18J4fciSz4LQZdug3uTZ5SM4HXec3RrsoN3KsqqiCJQX1iA/viewform",
  adby: "https://docs.google.com/forms/d/e/1FAIpQLScMR0xL8H2yjnO3UqywgLfAAwX5CWW8vLknZBVrTUPHeLNXIQ/viewform",
  almy: "https://docs.google.com/forms/d/e/1FAIpQLSeA2mWIfyO1QOrJrJ61WpMlb9jbzl0yleNOQNlk5nxD5gFvgw/viewform",
  three:
    "https://docs.google.com/forms/d/e/1FAIpQLSeKejWwkAs83K6Y3Q-WYfHbDLbTr4xq8U9sMX2ceUiOpkSNwA/viewform",
};

document.addEventListener("DOMContentLoaded", () => {
  CountDownDate = new Date("Dec 3, 2021 23:59:59").getTime();
  Timer();
  interval = setInterval(Timer, 1000);
});

function Timer() {
  const now = new Date().getTime();
  const Time = CountDownDate - now;
  if (Time < 0) {
    document.querySelector("#clock").innerHTML = message;
    document.getElementById("clock").style.fontSize = "50px";
    document.getElementById("buttons").style.display = "none";
    clearInterval(interval);
  } else {
    const days = Math.floor(Time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((Time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((Time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((Time % (1000 * 60)) / 1000);

    document.querySelector("#days").innerHTML = `${days}`;
    document.querySelector("#hours").innerHTML = `${hours}`;
    document.querySelector("#minutes").innerHTML = `${minutes}`;
    document.querySelector("#seconds").innerHTML = `${seconds}`;
    document.getElementById("buttons").style.display = "block";
  }
}
/**************[End Of Timer]**************/

/**************[Start Of iframe]**************/
function showIframe(clicked) {
  document.getElementById("Home").style.display = "none";

  //Set body size 100% cuz of iframe to be fullscreen
  document.body.style.width = "100%";
  document.body.style.height = "100%";
  document.body.style.margin = 0;

  //Constrcut iframe
  let src;
  if (clicked === "one") {
    src = exams.one;
  } else if (clicked === "two") {
    src = exams.adby;
  } else if (clicked === "two-almy") {
    src = exams.almy;
  } else if (clicked === "three") {
    src = exams.three;
  }

  var Html = `<iframe src=${src} frameborder="0" allowfullscreen"></iframe>`;
  document.getElementById("frame").innerHTML = Html;
}
/**************[End Of iframe]**************/
