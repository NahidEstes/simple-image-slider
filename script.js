let images = ["images/pic-1.jpg", "images/pic-2.jpg", "images/pic-3.jpg"];
const imageSlider = document.getElementById("img-slider");

let imageIndex = 0;
setInterval(() => {
  if (imageIndex === images.length) {
    imageIndex = 0;
  }
  const imgUrl = images[imageIndex];
  imageSlider.setAttribute("src", imgUrl);
  imageIndex++;
}, 3000);
