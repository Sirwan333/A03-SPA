export default class Memory{
   
    constructor(id, imgArray, match, counter, count) {
        this.id = id
        this.imgArray= imgArray = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/1.png", 
        "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png"];
        this.match = [];
        this.counter=0;
        this.count=0; 
        
    }

    shuffle() {  
        this.imgArray.sort(() => Math.random() - 0.5);
    }

    startA(){
        // this.imgArray.forEach(function printM(img){
            
        // });
        for(let i = 0; i<this.imgArray.length; i++){
            let imga = document.createElement("img")
            imga.src = "img/0.png";
            imga.id = this.imgArray[i]+this.id
            imga.className = "first"
            document.getElementById(`windowsBody${this.id}`).appendChild(imga)
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    checkMatch(){
        if(this.match[0]===this.match[1]){
            this.sleep(1000).then(() => {  document.querySelectorAll(`#${CSS.escape(this.match[0])}`).forEach(item => {item.style.visibility= "hidden"})
            this.match = [];
            this.counter++
            this.count++
            if(this.count==8){
                console.log(this.counter)
            } });
        }
        else{
            this.sleep(1000).then(() => { console.log("DONe")
            document.querySelectorAll(".second").forEach(item => {item.src = "img/0.png"})
            this.match = [];
            this.counter++
         });
        }  
    }

    createC(){
        let div = document.createElement("div")
        div.id = `container${this.id}`
        div.innerHTML = `<div id="newWindows${this.id}" class="newWindows" draggable="true">
        <div id="upperBar">
          <button type="button" id="close${this.id}" class="close">X</button>
        </div>
        <div id="windowsBody${this.id}" class="windowsBody">
        </div>
        <div id="windowsBottom"></div>
      </div>`
        document.getElementById("drop").appendChild(div)
    }
}

