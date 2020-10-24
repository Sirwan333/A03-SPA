/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });


window.addEventListener('load', main)

/**
 * The main function.
 *
 * @returns {undefined} Nothing.
 */
function main () {
  'use strict'

  let itemArea = document.getElementById("newWindows")
  let droppableArea = document.getElementById("drop")

  function dragStartHandler(event) {
    let style = window.getComputedStyle(event.target, null)

    // Remember the original position
    event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY)
    )
    event.dataTransfer.dropEffect = "move"
  }

  function dropHandler(event) {
    let offset = event.dataTransfer.getData("text/plain").split(',')
    itemArea.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    itemArea.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault()
  }

  itemArea.addEventListener("dragstart", dragStartHandler)

  droppableArea.addEventListener("dragenter", (event) => {
      event.preventDefault()
  })
  droppableArea.addEventListener("dragover", (event) => {
      event.preventDefault()
  })
  droppableArea.addEventListener("drop", dropHandler)


}


let outputE = document.getElementById("windowsBody")

let imgArray = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/1.png", 
"img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png"];
let match = [];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(imgArray);
startA();

function startA(){
  imgArray.forEach(function printM(img){
    let imga = document.createElement("img")
    imga.src = "img/0.png";
    imga.id = img
    imga.className = "first"
    outputE.appendChild(imga)
  });
}


let img2 = document.querySelectorAll('#windowsBody img').forEach(item => {
  item.addEventListener('click', event => {
    event.target.className = "second";
    event.target.src =  event.target.id
    match.push(event.target.id)
    console.log(match)
    if(match.length == 2){
      checkMatch()
    }
    
  })
})
let counter=0;
let count=0;
function checkMatch(){
 
  if(match[0]===match[1]){
    setTimeout(fofo, 1000)
    function fofo(){
      document.querySelectorAll(`#${CSS.escape(match[0])}`).forEach(item => {item.style.visibility= "hidden"})
      match = [];
      counter++
      count++
      if(count==8){
        console.log(counter)
      }
    }
    
  }
  else{
    setTimeout(soso, 1000)
    function soso(){
      document.querySelectorAll(".second").forEach(item => {item.src = "img/0.png"})
      match = [];
      counter++
    }
    
  }
  
}