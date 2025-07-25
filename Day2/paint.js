var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;

var paint = false;
var erase = false;

canvas.addEventListener("mousedown", startAction);
canvas.addEventListener("mouseup", stopAction);
canvas.addEventListener("mousemove", action);
canvas.addEventListener("contextmenu", (e) => e.preventDefault());

function getPosition(e) {
  const rect = canvas.getBoundingClientRect();
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
}

function startAction(e) {
  if (e.button == 0) paint = true;
  if (e.button == 2) erase = true;
}

function stopAction(e) {
  if (e.button == 0) paint = false;
  if (e.button == 2) erase = false;
}

function action(event) {
  if (!paint && !erase) return;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  if (paint) ctx.strokeStyle = "black";
  if (erase) ctx.strokeStyle = "white";
  //   ctx.moveTo(x, y);
  getPosition(event);
  ctx.lineTo(x, y);
  ctx.stroke();
}
