var imgs = document.querySelectorAll("img");
var divDrop = document.querySelector("#drop");

// عند بدء السحب من أي صورة
imgs.forEach((img) => {
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", img.getAttribute("src"));
  });
});

// السماح بالإفلات داخل الديف
divDrop.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// عند الإفلات داخل الديف
divDrop.addEventListener("drop", (e) => {
  e.preventDefault();

  var imageSrc = e.dataTransfer.getData("text");

  var newImg = document.createElement("img");
  newImg.src = imageSrc;
  newImg.width = 100;
  newImg.height = 100;

  divDrop.appendChild(newImg);
});
