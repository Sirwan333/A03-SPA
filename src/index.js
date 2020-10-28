/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


import Memory from './modules/Memory.js';
import Chat from './modules/Chat.js';
import BMI from './modules/BMI.js';





let myStorage = window.localStorage;





/**
 * The main function.
 *
 * @returns {undefined} Nothing.
 */
let countere = 0;
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
    

    console.log("ffff")
    event.target.style.zIndex = `${countere++}`;
  

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
  // let img3 = document.querySelectorAll('.windowsBody img').forEach(item => {
  //   item.addEventListener("keydown", event=>{
  //     console.log(event.key)
  //   })
  // })

  
  let memory = new Memory(counttt++);
  memory.createC();
  memory.shuffle();
  memory.startA();
  document.ge
  document.getElementById(`smallIcon${memory.id}`).src="img/memory_icon.png"
  main (memory.id)
  let i =0;
  document.body.addEventListener("keydown", (event)=>{
    console.log(i)
    console.log(event.key)
    if(event.key=="ArrowRight"){
      
      if(i==0){
        document.getElementById(`${memory.imgArray[i]+memory.id+i}`).style.border = "2px solid black"
        i++;
       
      }else if(i>0&i<16){
        document.getElementById(`${memory.imgArray[i]+memory.id+i}`).style.border = "2px solid black"
        document.getElementById(`${memory.imgArray[i-1]+memory.id+(i-1)}`).style.border = ""
        i++;
      }
      else{
       
      }
      
    }else if(event.key=="ArrowLeft"){
      if(i==0){

      }else if(i==1){

      }
      else if(i>1&i<17){
        i--;
        document.getElementById(`${memory.imgArray[i]+memory.id+i}`).style.border = ""
        document.getElementById(`${memory.imgArray[i-1]+memory.id+(i-1)}`).style.border = "2px solid black"
        
      }else{
        
      }
      
    }else if(event.key=="Enter"){
        let ddd = document.getElementById(`${memory.imgArray[i-1]+memory.id+(i-1)}`)
        ddd.className = "second";
        ddd.src =  ddd.id.substring(0, 9)
        memory.match.push(ddd.id)
        console.log(memory.match)
        if(memory.match.length == 2){
            memory.checkMatch()
        }

    }
  })
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





document.getElementById("chatIcon").addEventListener("click",  () => {

  let message1 = {
    "type": "message",
    "data": "",
    "username": "S",
    "key": "eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd"
  }
  let chat = new Chat(counttt++)
  let socket =chat.connect()
  chat.createC();
  document.getElementById(`smallIcon${chat.id}`).src="img/chat-icon.jpg"
  let username = document.getElementById(`usernameInput${chat.id}`)
  let usernameInterface = document.getElementById(`username${chat.id}`)
  let messageWindow1 = document.getElementById(`messageWindow${chat.id}`)
  let inputArea = document.getElementById(`inputArea${chat.id}`)
  let buttonSend = document.getElementById(`buttonSend${chat.id}`)
  
  if(!myStorage.getItem(`username`)==""){
      usernameInterface.style.display = "none";
      messageWindow1.style.display = "block";
      inputArea.style.display = "block";
      buttonSend.style.display = "block";
  }else{
    
    document.getElementById(`usernameButton${chat.id}`).addEventListener("click", ()=>{
      myStorage.setItem(`username`, username.value);
      message1.username = username.value
      usernameInterface.style.display = "none";
      messageWindow1.style.display = "block";
      inputArea.style.display = "block";
      buttonSend.style.display = "block";

  })

  }
  
  
  main (chat.id)
  
  let messageWindow = document.getElementById(`messageWindow${chat.id}`)
  let data = document.getElementById(`inputArea${chat.id}`)
  let sendButton = document.getElementById(`buttonSend${chat.id}`)
  socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    
    let recData = JSON.parse(event.data)
    if(recData.type == "heartbeat"){

    }
    else{
      let today = new Date();
      if(today.getMinutes() < 10){
        let time = today.getHours() + ':0' + today.getMinutes() + ":" + today.getSeconds();
        messageWindow.innerHTML += `<div style="background-color:#E8E8E8;"><b> ${recData.username}:</b> (${time}) </div> ${recData.data} <br>`
      }
      else{
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        messageWindow.innerHTML += `<div style="background-color:#E8E8E8;"><b> ${recData.username}:</b> (${time}) </div> ${recData.data} <br>`
      }
      
      
    }
    
  });  
  socket.addEventListener('open', function (event) {
    sendButton.addEventListener('click', (event) =>{
      console.log(event.target)
      message1.username = myStorage.getItem(`username`)
      message1.data = data.value 
      data.value = "";
      chat.sendMessage(JSON.stringify(message1));
    })
  });  
})



document.getElementById("hangmanIcon").addEventListener("click",  () => {


  let bmi = new BMI(counttt++)
  bmi.createC();
  main (bmi.id)
  let wightt;
  document.getElementById(`smallIcon${bmi.id}`).src="img/hangman_icon.png"
  let wightValue = document.getElementById(`wightValue${bmi.id}`)
  

  let hightt;
  let hight = document.getElementById(`hightButton${bmi.id}`)
  let hightValue = document.getElementById(`hightValue${bmi.id}`)
  hight.addEventListener("click", ()=>{
    wightt=wightValue.value
    hightt=hightValue.value
     bmi.getBmi(wightt, hightt)
  })

  
})

