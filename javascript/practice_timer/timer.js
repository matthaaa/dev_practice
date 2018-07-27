// -> set time back to 0:00.00 / Set base time to now

let displayTime = "00:00:00.00"

let time = 0;
let baseTime = Date.now();
// let timeWhilePaused = 0;
let timeRunning = false;
let interval = null;

document.getElementById("time-display").innerHTML = displayTime;

document.addEventListener('click', function(event) {
  switch (event.target.id) {
    case "reset":
      return reset();
    case "start-pause":
      return startOrPause();
  }
});

const reset = () => {
  // timeWhilePaused = 0;
  baseTime = Date.now();
  updateTime(baseTime);
  updateDisplay();
}

const startOrPause = () => {
  if (timeRunning) {
    pauseTime();
    updateDisplay();
  } else {
    // Accounts for time since the last saved value of `time`.
    // timeWhilePaused += Date.now() - time;
    startTime();
  }
}

const updateTime = (baseTime) => {
  console.log("hello");
  updateDisplay();
  time = Date.now() - baseTime;
}

const startTime = () => {
  timeRunning = true;
	interval = setInterval(() => {updateTime(baseTime)}, 1);
}

const pauseTime = () => {
  timeRunning = false;
	clearInterval(interval);
}

const updateDisplay = () => {
  const totalHours = time / (3600 * 60);
  // const totalMinutes = time / (3600);
  // const totalSeconds = time / (60);
  console.log(displayTime);

  const hours = Math.floor(totalHours);
  const minutes = Math.floor((time % (3600 * 60)) / 3600);
  const seconds = Math.floor((time % 3600) / 60);
  const milliseconds = Math.floor((time % 60) / 60);

  displayTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  document.getElementById("time-display").innerHTML = displayTime;
}
