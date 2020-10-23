/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });




let outputE = document.getElementById("windowsBody")

let imgArray = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/1.png", 
"img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png"];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(imgArray);


imgArray.forEach(function printM(img){
  let firstTime = true;
  let imga = document.createElement("img")
  if(firstTime){
    imga.src = "img/0.png";
  }
  else{
    imga.src = img;
  }
  
  imga.id = "image1"
  outputE.appendChild(imga)
});
let img2 = document.getElementById("image1");
img2.addEventListener("click", (e) => {
  console.log("doneqqqq")
})