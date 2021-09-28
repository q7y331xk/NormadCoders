const backgroundImageArray = ["0.jpg","1.jpg","2.jpg"];
const selectedBackgroundImage = backgroundImageArray[Math.floor(Math.random() * backgroundImageArray.length)];

const backgroundImageHTML = document.createElement("img");
backgroundImageHTML.src = `background-img/${selectedBackgroundImage}`;
document.body.appendChild(backgroundImageHTML);