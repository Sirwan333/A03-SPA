let countere = 0

/**
 * Generates the new window of the parameter.
 *
 * @param {any} id uniqe id for each new window
 */
function main (id) {
  'use strict'
  const nn = document.getElementById(`container${id}`)
  /**
   * Listens to drag event of the parameter.
   *
   * @param {Event} event event when drag happens
   */
  function dragStartHandler (event) {
    event.dataTransfer.setData('Text', event.target.id)
    event.dataTransfer.dropEffect = 'move'
    event.target.style.zIndex = `${countere++}`
  }
  nn.addEventListener('dragstart', dragStartHandler)
  document.getElementById(`close${id}`).addEventListener('click', () => {
    document.removeEventListener('dragstart', dragStartHandler)
    document.getElementById(`container${id}`).remove()
  })
}

/**
 * Listens to drop event of the parameter.
 *
 * @param {Event} event event when drop happens
 */
function dropHandler (event) {
  event.preventDefault()
  const elem = document.getElementById(event.dataTransfer.getData('Text'))
  console.log(elem)
  elem.style.left = (event.clientX) + 'px'
  elem.style.top = (event.clientY) + 'px'
}

export default {
  main,
  dropHandler
}
