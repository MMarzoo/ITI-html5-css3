var circle = document.getElementById("circle");

circle.addEventListener("mouseover", () => {
  circle.setAttribute("fill", "blue");
  circle.setAttribute("stroke", "brown");
});

circle.addEventListener("mouseout", () => {
  circle.setAttribute("fill", "green");
  circle.setAttribute("stroke", "black");
});

circle.addEventListener("mouseup", () => {
  circle.setAttribute("fill", "red");
  circle.setAttribute("stroke", "black");
  alert("SVG Circle");
});
