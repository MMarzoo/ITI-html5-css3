var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var sadImg = new Image();
var smileyImg = new Image();

sadImg.src = "/images/sad.png";
smileyImg.src = "/images/smiley.png";

sadImg.onload = () => {
  ctx.drawImage(sadImg, 1, 1, 100, 100);
};

canvas.addEventListener("mousedown", () => {
  ctx.drawImage(smileyImg, 1, 1, 1200, 200);
});

canvas.addEventListener("mouseup", () => {
  ctx.drawImage(sadImg, 1, 1, 100, 100);
});
