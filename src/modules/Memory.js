export default class Memory {
  constructor (id, imgArray, match, counter, count) {
    this.id = id
    this.imgArray = imgArray = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png', 'img/1.png',
      'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png']
    this.match = []
    this.counter = 0
    this.count = 0
  }

  shuffle () {
    this.imgArray.sort(() => Math.random() - 0.5)
  }

  startA () {
    let c = 0
    for (let i = 0; i < this.imgArray.length; i++) {
      const imga = document.createElement('img')
      imga.src = 'img/0.png'
      imga.id = this.imgArray[i] + this.id + c++
      imga.className = 'first'
      document.getElementById(`windowsBody${this.id}`).appendChild(imga)
    }
  }

  sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  checkMatch () {
    if (this.match[0].substring(0, 8) === this.match[1].substring(0, 8)) {
      this.sleep(1000).then(() => {
        document.getElementById(`${this.match[0]}`).style.visibility = 'hidden'
        document.getElementById(`${this.match[1]}`).style.visibility = 'hidden'
        this.match = []
        this.counter++
        this.count++
        if (this.count === 8) {
          document.getElementById(`windowsBody${this.id}`).innerText = `Congratulation You Won After ${this.counter} tries`
        }
      })
    } else {
      this.sleep(1000).then(() => {
        console.log('DONe')
        document.getElementById(`${this.match[0]}`).src = 'img/0.png'
        document.getElementById(`${this.match[1]}`).src = 'img/0.png'
        this.match = []
        this.counter++
        this.match = []
        this.counter++
      })
    }
  }

  createC () {
    const div = document.createElement('div')
    div.id = `container${this.id}`
    div.style.top = 0
    div.style.left = 0
    div.className = 'divCon'
    div.draggable = 'true'
    div.style.position = 'absolute'
    div.innerHTML = `<div id="newWindows${this.id}" class="newWindows">
        <div id="upperBar">
            <img id="smallIcon${this.id}" src="" class="smallIcon" alt="smallIcon">
            <button type="button" id="close${this.id}" class="close">X</button>
        </div>
        <div id="windowsBody${this.id}" class="windowsBody">
        </div>
        <div id="windowsBottom${this.id}" class="windowsBottom"></div>
      </div>`
    document.body.appendChild(div)
  }
}
