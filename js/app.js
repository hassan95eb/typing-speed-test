const Cornometer = document.querySelector(".timer");
const textProject = document.querySelector(".text-project p").innerHTML;
const textArea = document.querySelector("#text-area");
const resetBtn = document.querySelector(".reset-btn");
var Timer = [0, 0, 0, 0];
var runner = false;
var myinterval;
function Standardtimer(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}
function runtimer() {
  let currentTime =
    Standardtimer(Timer[0]) +
    ":" +
    Standardtimer(Timer[1]) +
    ":" +
    Standardtimer(Timer[2]);
  Timer[3]++;
  Timer[0] = Math.floor(Timer[3] / 100 / 60);
  Timer[1] = Math.floor(Timer[3] / 100 - Timer[0] * 60);
  Timer[2] = Math.floor(Timer[3] - Timer[1] * 100 - Timer[0] * 6000);
  Cornometer.innerHTML = currentTime;
}

function textTimer() {
  let textAreaLength = document.querySelector("#text-area").value.length;
  if (textAreaLength == 0 && !runner) {
    runner = true;
    myinterval = setInterval(runtimer, 10);
  }
}
function Mainfunc() {
  let textEntered = textArea.value;
  let textProjectSpell = textProject.substring(0, textEntered.length);
  if (textProject == textEntered) {
    textArea.style.borderColor = "green";
    clearInterval(myinterval);
  } else if (textEntered == textProjectSpell) {
    textArea.style.borderColor = "yellow";
  } else {
    textArea.style.borderColor = "red";
  }
}
function reset() {
  runner = false;
  textArea.value = "";
  Timer = [0, 0, 0, 0];
  Cornometer.innerHTML = "00:00:00";
  myinterval = null;
  textArea.style.borderColor = "rgba(0, 0, 0, 0.5)";
}

/*this  Event  linstener is  for  Desktop*/
textArea.addEventListener("keypress", textTimer);
/*this  Event  linstener is  for  Mobile*/
textArea.addEventListener("touchstart", textTimer);
textArea.addEventListener("keyup", Mainfunc);
resetBtn.addEventListener("click", reset);
