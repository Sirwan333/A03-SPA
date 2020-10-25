/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';
// import newMemory from './modules/MemoryWindow.js'
import Memory from './modules/Memory.js';
confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });




/**
 * The main function.
 *
 * @returns {undefined} Nothing.
 */
function main (id) {
  'use strict'

  let itemArea = document.getElementById(`newWindows${id}`)
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




let counttt = 0;

document.getElementById("memoryIcon").addEventListener("click",  () => {



  // newMemory.newWindo();
  
  let memory = new Memory(counttt++);
  memory.createC();
  memory.shuffle();
  memory.startA();
  main (memory.id)
  let img2 = document.querySelectorAll('.windowsBody img').forEach(item => {
    item.addEventListener('click', event => {
        event.target.className = "second";
        event.target.src =  event.target.id.substring(0, 9)
        memory.match.push(event.target.id)
        console.log(memory.match)
        if(memory.match.length == 2){
            memory.checkMatch()
        }
    
    })
})
  document.getElementById(`close${memory.id}`).addEventListener("click",  () => {
    document.getElementById(`container${memory.id}`).remove();
  })
})