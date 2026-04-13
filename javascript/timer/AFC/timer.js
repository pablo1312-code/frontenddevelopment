const timeDisplay = document.getElementById("timePanel");
const startTime = Date.now();

// Va contando desde que se carga la página
function updateTime() {
  const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

  const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");

  timeDisplay.innerText = hours + ":" + minutes + ":" + seconds;
}

updateTime();
setInterval(updateTime, 1000);