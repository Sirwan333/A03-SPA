/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


import Memory from './modules/Memory.js';
import Chat from './modules/Chat.js';











/**
 * The main function.
 *
 * @returns {undefined} Nothing.
 */
function main (id) {
  'use strict'  
  // let itemArea = document.getElementById(`newWindows${id}`)
  let nn = document.getElementById(`container${id}`)
  console.log('memory > ' + id)
  
  function dragStartHandler(event) {
    let style = window.getComputedStyle(event.target, null)
    console.log("draged"+ event.target.id)
    // Remember the original position
    //event.dataTransfer.setData("text/plain",
    //    (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY)
    //)
    event.dataTransfer.setData("Text", event.target.id);
    event.dataTransfer.dropEffect = "move"
  }
  nn.addEventListener("dragstart", dragStartHandler)
  document.getElementById(`close${id}`).addEventListener("click",  () => {
    document.removeEventListener('dragstart', dragStartHandler);
    document.getElementById(`container${id}`).remove();
  })
}

function dropHandler(event) {
  event.preventDefault()
  const elem = document.getElementById(event.dataTransfer.getData("Text"))
  console.log(elem)
  elem.style.left = (event.clientX ) + 'px';
  elem.style.top = (event.clientY) + 'px'; 
}






let droppableArea = document.body
droppableArea.addEventListener("dragenter", (event) => {
  event.preventDefault()
})
droppableArea.addEventListener("dragover", (event) => {
  event.preventDefault()
})
droppableArea.addEventListener("drop", dropHandler)
let counttt = 0;
document.getElementById("memoryIcon").addEventListener("click",  () => {
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
})



// let counterq = 0;
// document.querySelectorAll("div").forEach(item=>function(){
//   item.addEventListener('click', event=>{
//     console.log("ffff")
//     event.target.style.zIndex = `${counterq++}`;
//   })
// })


let counttt1 = 0;
document.getElementById("chatIcon").addEventListener("click",  () => {


  let chat = new Chat(counttt++)
  let socket =chat.connect()
  chat.createC();
  main (chat.id)
  let messageWindow = document.getElementById(`messageWindow${chat.id}`)
  let data = document.getElementById(`inputArea${chat.id}`)
  let sendButton = document.getElementById(`buttonSend${chat.id}`)
  socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    
    let rec = JSON.parse(event.data)
    if(rec.type == "heartbeat"){

    }
    else{
      messageWindow.innerHTML += ` ${rec.data} <br>`
    }
    
  });  
  socket.addEventListener('open', function (event) {
    sendButton.addEventListener('click', (event) =>{
      console.log(event.target)
      let message1 = {
        "type": "message",
        "data": "",
        "username": "Name1",
        "key": "eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd"
      }
      message1.data = data.value 
      data.value = "";
      chat.sendMessage(JSON.stringify(message1));
    })
  });  
})
