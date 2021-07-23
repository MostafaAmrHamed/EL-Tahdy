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
const message = "لا يوجد امتحان";
const exams = {
  one:
    "https://docs.google.com/forms/d/1YZGAjKLSZNuPDO2EplYYft8n_ZVCjaXazXUpt6x9kgU/viewform?edit_requested=true",
  adby:
    "https://docs.google.com/forms/d/1INYJ1yosveVoc3G0jl0XGRwc5Km0uCkGbY3FUgaukLE/viewform?edit_requested=true",
  almy:
    "https://docs.google.com/forms/d/1INYJ1yosveVoc3G0jl0XGRwc5Km0uCkGbY3FUgaukLE/viewform?edit_requested=true",
};

document.addEventListener("DOMContentLoaded", () => {
  CountDownDate = new Date("July 23, 2021 13:36:59").getTime();
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
  } else {
    src = exams.almy;
  }
  var Html = `<iframe src=${src} frameborder="0" allowfullscreen"></iframe>`;
  document.getElementById("frame").innerHTML = Html;
}
/**************[End Of iframe]**************/
