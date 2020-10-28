let countere = 0;

function main (id) {
    'use strict'  
    let nn = document.getElementById(`container${id}`)
    console.log('memory > ' + id)
    function dragStartHandler(event) {
      let style = window.getComputedStyle(event.target, null)
      console.log("draged"+ event.target.id)
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
  
export default {
    main,
    dropHandler
};
